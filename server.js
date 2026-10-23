#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(await fs.readFile(path.join(__dirname, 'package.json'), 'utf-8'));
const BASECOAT_VERSION = pkg.basecoatVersion;
const USAGE_ALIASES = {
  dropdown: 'dropdown-menu',
  'dialog-alert': 'alert-dialog',
  form: 'field',
  checkbox: 'field',
  radio: 'field',
  switch: 'field',
};
const STYLE_PACKS = ['vega', 'nova', 'maia', 'lyra', 'mira', 'luma', 'sera', 'rhea'];

async function listCategories(baseDir) {
  try {
    const entries = await fs.readdir(path.join(__dirname, baseDir), { withFileTypes: true });
    return entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
  } catch (error) {
    return [];
  }
}

class BasecoatMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'basecoat-ui',
        version: pkg.version,
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  async getComponentsList() {
    const categories = await listCategories('components');
    const components = {};

    for (const category of categories) {
      const categoryPath = path.join(__dirname, 'components', category);
      try {
        const files = await fs.readdir(categoryPath);
        const htmlFiles = files
          .filter(file => file.endsWith('.html'))
          .sort()
          .map(file => ({
            name: file.replace('.html', ''),
            category: category,
            file: file
          }));

        if (htmlFiles.length > 0) {
          components[category] = htmlFiles;
        }
      } catch (error) {
        console.error(`Error reading category ${category}:`, error.message);
      }
    }

    return components;
  }

  async getComponent(componentName) {
    const components = await this.getComponentsList();

    // Accept "category/name" to disambiguate components that share a name
    const [categoryFilter, name] = componentName.includes('/')
      ? componentName.split('/', 2)
      : [null, componentName];

    // Search across all categories
    for (const [category, categoryComponents] of Object.entries(components)) {
      if (categoryFilter && category !== categoryFilter) continue;
      const component = categoryComponents.find(comp => comp.name === name);
      if (component) {
        const filePath = path.join(__dirname, 'components', category, component.file);
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          return {
            name: name,
            category: category,
            html: content.trim(),
            file: component.file
          };
        } catch (error) {
          throw new Error(`Failed to read component file: ${error.message}`);
        }
      }
    }

    throw new Error(`Component '${componentName}' not found`);
  }

  async getUsageDocumentation(componentName) {
    const usageCategories = await listCategories('usage');

    // Try the exact name first, then an alias, then drop trailing variant
    // segments so "button-primary" falls back to "button"
    const candidates = [];
    const parts = componentName.split('-');
    for (let i = parts.length; i > 0; i--) {
      const candidate = parts.slice(0, i).join('-');
      candidates.push(candidate);
      if (USAGE_ALIASES[candidate]) candidates.push(USAGE_ALIASES[candidate]);
    }

    for (const candidate of candidates) {
      for (const category of usageCategories) {
        const usagePath = path.join(__dirname, 'usage', category, `${candidate}-usage.md`);

        try {
          const content = await fs.readFile(usagePath, 'utf-8');
          return {
            component: candidate,
            category: category,
            documentation: content.trim()
          };
        } catch (error) {
          // Continue to next category
          continue;
        }
      }
    }

    throw new Error(`Usage documentation for '${componentName}' not found`);
  }

  async getSetupCode(style = 'vega') {
    if (!STYLE_PACKS.includes(style)) {
      throw new Error(`Unknown style '${style}'. Available styles: ${STYLE_PACKS.join(', ')}`);
    }

    const setupPath = path.join(__dirname, 'scripts', 'setup.html');
    try {
      const content = await fs.readFile(setupPath, 'utf-8');
      // Style packs are standalone bundles, so swap the default bundle instead of adding a second one
      const stylesheet = style === 'vega' ? 'basecoat.cdn.min.css' : `basecoat-${style}.cdn.min.css`;
      return content.trim().replace('basecoat.cdn.min.css', stylesheet);
    } catch (error) {
      throw new Error(`Failed to read setup code: ${error.message}`);
    }
  }

  async getThemeScript() {
    const themePath = path.join(__dirname, 'scripts', 'theme-script.html');
    try {
      const content = await fs.readFile(themePath, 'utf-8');
      return content.trim();
    } catch (error) {
      throw new Error(`Failed to read theme script: ${error.message}`);
    }
  }

  async searchComponents(query) {
    const components = await this.getComponentsList();
    const results = [];

    const queryLower = query.toLowerCase();

    for (const [category, categoryComponents] of Object.entries(components)) {
      for (const component of categoryComponents) {
        // Search in component name and category
        if (component.name.toLowerCase().includes(queryLower) ||
          category.toLowerCase().includes(queryLower)) {
          results.push({
            name: component.name,
            category: category,
            file: component.file,
            match: component.name.toLowerCase().includes(queryLower) ? 'name' : 'category'
          });
        }
      }
    }

    return results;
  }

  async getComponentsByCategory(category) {
    const components = await this.getComponentsList();

    if (!components[category]) {
      throw new Error(`Category '${category}' not found. Available categories: ${Object.keys(components).join(', ')}`);
    }

    return {
      category: category,
      components: components[category]
    };
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_component',
            description: 'Get HTML code for a specific Basecoat component',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Component name (e.g., "button-primary", "card-basic", "field"), optionally prefixed with its category (e.g., "layout/pagination")',
                },
              },
              required: ['name'],
            },
          },
          {
            name: 'list_components',
            description: 'List all available Basecoat components organized by category',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'get_usage',
            description: 'Get usage documentation for a component',
            inputSchema: {
              type: 'object',
              properties: {
                component: {
                  type: 'string',
                  description: 'Component name (e.g., "button", "card", "input")',
                },
              },
              required: ['component'],
            },
          },
          {
            name: 'get_setup',
            description: 'Get Basecoat CSS setup code with CDN links',
            inputSchema: {
              type: 'object',
              properties: {
                style: {
                  type: 'string',
                  enum: STYLE_PACKS,
                  description: 'Style pack to load (default: "vega"). Each style is a standalone bundle.',
                },
              },
            },
          },
          {
            name: 'get_theme_script',
            description: 'Get theme switcher script for dark/light mode',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'search_components',
            description: 'Search for components by name or category',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search term (e.g., "button", "form", "navigation")',
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_category',
            description: 'Get all components in a specific category',
            inputSchema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  description: 'Category name (combine, feedback, forms, interactive, layout, navigation)',
                },
              },
              required: ['category'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_component': {
            const component = await this.getComponent(args.name);
            return {
              content: [
                {
                  type: 'text',
                  text: `# ${component.name}\n\n**Category:** ${component.category}\n**File:** ${component.file}\n\n## HTML Code\n\`\`\`html\n${component.html}\n\`\`\``,
                },
              ],
            };
          }

          case 'list_components': {
            const components = await this.getComponentsList();
            let output = `# Basecoat UI Components (v${BASECOAT_VERSION})\n\n`;

            for (const [category, categoryComponents] of Object.entries(components)) {
              output += `## ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n`;
              for (const component of categoryComponents) {
                output += `- **${component.name}** (${component.file})\n`;
              }
              output += '\n';
            }

            return {
              content: [
                {
                  type: 'text',
                  text: output,
                },
              ],
            };
          }

          case 'get_usage': {
            const usage = await this.getUsageDocumentation(args.component);
            return {
              content: [
                {
                  type: 'text',
                  text: usage.documentation,
                },
              ],
            };
          }

          case 'get_setup': {
            const setupCode = await this.getSetupCode(args?.style);
            return {
              content: [
                {
                  type: 'text',
                  text: `# Basecoat CSS Setup (v${BASECOAT_VERSION})\n\nAdd this to your HTML \`<head>\` section:\n\n\`\`\`html\n${setupCode}\n\`\`\`\n\nUse Tailwind CSS classes for customization.`,
                },
              ],
            };
          }

          case 'get_theme_script': {
            const themeScript = await this.getThemeScript();
            return {
              content: [
                {
                  type: 'text',
                  text: `# Theme Switcher\n\nAdd this to enable dark/light mode switching:\n\n\`\`\`html\n${themeScript}\n\`\`\``,
                },
              ],
            };
          }

          case 'search_components': {
            const results = await this.searchComponents(args.query);
            let output = `# Search Results for "${args.query}"\n\n`;

            if (results.length === 0) {
              output += 'No components found matching your search.\n';
            } else {
              output += `Found ${results.length} matching component(s):\n\n`;
              for (const result of results) {
                output += `- **${result.name}** (${result.category}) - matched by ${result.match}\n`;
              }
            }

            return {
              content: [
                {
                  type: 'text',
                  text: output,
                },
              ],
            };
          }

          case 'get_category': {
            const categoryData = await this.getComponentsByCategory(args.category);
            let output = `# ${categoryData.category.charAt(0).toUpperCase() + categoryData.category.slice(1)} Components\n\n`;

            for (const component of categoryData.components) {
              output += `- **${component.name}** (${component.file})\n`;
            }

            return {
              content: [
                {
                  type: 'text',
                  text: output,
                },
              ],
            };
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Basecoat MCP server running on stdio');
  }
}

const server = new BasecoatMCPServer();
server.run().catch(console.error);