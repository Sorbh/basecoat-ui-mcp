# Basecoat MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org/en/download/releases/)

## Story

While building my hobby project — turning old devices into a [Digital Photo Frame](https://github.com/Sorbh/digital-photo-frame) — I struggled with UI components. I wanted to use [Basecoat CSS](https://basecoatui.com/), the HTML port of [ShadCN UI](https://ui.shadcn.com/), but there was no MCP server to easily pull components and docs into AI-assisted coding.

So I built one.  
This is my first MCP server, and it’s here to make working with Basecoat (and ShadCN-style components) effortless for everyone. Feedback and contributions are welcome!

---

A Model Context Protocol (MCP) server that provides programmatic access to [Basecoat CSS](https://basecoatui.com/) components and their usage documentation. This server allows AI assistants to help developers build HTML interfaces using the Basecoat CSS framework.

## Features

- **30+ Component Variants**: Access to buttons, inputs, cards, dialogs, tabs, and more.
- **Usage Documentation**: Complete implementation guides with examples for each component.
- **Setup Scripts**: Get CDN links and theme switching code instantly.
- **Search & Discovery**: Find components by name or category.
- **Accessibility Ready**: All components include ARIA attributes and semantic HTML.

## Tech Stack

-   [Node.js](https://nodejs.org/) - JavaScript runtime environment
-   [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) - For creating the MCP server

## Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/Sorbh/basecoat-ui-mcp.git
    cd basecoat-mcp-server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## MCP Configuration

You can run this server either by using `npx` (if the package is published on npm) or by cloning the repository for local development.

### Using NPX (Recommended)

This method is the easiest way to get started and doesn't require cloning the repository.

#### Claude Desktop

Update your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "basecoat-ui": {
      "command": "npx",
      "args": ["-y","@basecoat-ui/mcp"]
    }
  }
}
```

### Other MCP Clients
Configure the server to run:
```bash
npx @basecoat-ui/mcp
```

## Available Tools

### `get_component`
Get HTML code for a specific component variant.
```
Parameters:
- name: Component name (e.g., "button-primary", "card-basic", "input-with-label")
```

### `list_components`
List all available components organized by category.

### `get_usage`
Get comprehensive usage documentation for a component.
```
Parameters:
- component: Base component name (e.g., "button", "card", "input")
```

### `get_setup`
Get Basecoat CSS setup code with CDN links.

### `get_theme_script`
Get theme switcher script for dark/light mode functionality.

### `search_components`
Search for components by name or category.
```
Parameters:
- query: Search term (e.g., "button", "form", "navigation")
```

### `get_category`
Get all components in a specific category.
```
Parameters:
- category: Category name (forms, navigation, feedback, interactive, layout)
```

## Component Categories

### Forms
- **Buttons**: primary, secondary, outline, destructive, ghost, link, icon variants
- **Inputs**: basic, with-label, invalid states
- **Select**: native, custom dropdowns
- **Checkbox**: basic, with-label, with-description
- **Radio**: single, group variations
- **Switch**: basic, with-description
- **Textarea, Label, Form container**

### Navigation
- **Tabs**: horizontal, vertical with ARIA support
- **Accordion**: collapsible content sections
- **Breadcrumb**: navigation trails
- **Sidebar**: off-canvas navigation

### Feedback
- **Alert**: success, error variants
- **Badge**: primary, secondary, destructive, outline
- **Dialog**: modal, alert dialog variations
- **Toast**: notification system

### Interactive
- **Dropdown**: context menus with various item types
- **Popover**: rich content tooltips
- **Tooltip**: simple hover tooltips with positioning
- **Combobox**: searchable select dropdowns
- **Theme Switcher**: dark/light mode toggle

### Layout
- **Card**: basic, with-icon variants
- **Avatar**: small, medium, large, fallback
- **Skeleton**: loading states for profile, card
- **Table**: responsive data display
- **Pagination**: navigation for large datasets

## Usage Examples

### Get a Primary Button
```
Use tool: get_component
Parameters: {"name": "button-primary"}
```

Returns:
```html
<button class="btn">Primary Action</button>
```

### Get Button Documentation
```
Use tool: get_usage  
Parameters: {"component": "button"}
```

Returns comprehensive documentation with implementation examples, accessibility guidelines, and best practices.

### Search for Form Components
```
Use tool: search_components
Parameters: {"query": "form"}
```

Returns all components related to forms.

### Get Setup Code
```
Use tool: get_setup
```

Returns:
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/all.min.js" defer></script>
```

## Directory Structure

```
basecoat-mcp/
├── components/           # HTML component files
│   ├── forms/           # Form elements
│   ├── navigation/      # Navigation components  
│   ├── feedback/        # Alerts, badges, dialogs
│   ├── interactive/     # Dropdowns, tooltips
│   └── layout/          # Cards, tables, avatars
├── usage/               # Usage documentation
│   ├── forms/
│   ├── navigation/
│   ├── feedback/
│   ├── interactive/
│   └── layout/
├── scripts/             # Setup and utility scripts
├── server.js            # MCP server implementation
├── package.json
└── README.md
```

## About Basecoat CSS

Basecoat CSS is a comprehensive CSS framework that provides:
- Accessible, semantic components
- Dark/light theme support  
- Tailwind CSS integration
- JavaScript-enhanced interactions
- Mobile-responsive design

Learn more at [basecoatui.com](https://basecoatui.com)

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Test your changes thoroughly
5. Commit with clear messages: `git commit -m 'Add amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Support

- **Issues**: [GitHub Issues](https://github.com/sorbh/basecoat-ui-mcp/issues)


---

<p align="center">
Built with ❤️ by Claude Code - Monitored & Prompted by Saurabh K. Sharma
</p>