# Tabs Component Usage

## Overview
The tabs component provides an accessible way to organize content into multiple panels that users can switch between. It includes keyboard navigation, ARIA support, and follows WAI-ARIA guidelines. Basecoat styles the tablist and tab buttons, so no utility classes are needed on the tabs themselves.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/tabs.min.js" defer></script>

<!-- Or load every component script at once -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

## HTML Structure

### Basic Tabs Structure
```html
<div class="tabs w-full" id="demo-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="w-full">
    <button type="button" role="tab" id="demo-tabs-tab-1" aria-controls="demo-tabs-panel-1" aria-selected="true" tabindex="0">Tab 1</button>
    <button type="button" role="tab" id="demo-tabs-tab-2" aria-controls="demo-tabs-panel-2" aria-selected="false" tabindex="-1">Tab 2</button>
    <button type="button" role="tab" id="demo-tabs-tab-3" aria-controls="demo-tabs-panel-3" aria-selected="false" tabindex="-1">Tab 3</button>
  </nav>

  <div role="tabpanel" id="demo-tabs-panel-1" aria-labelledby="demo-tabs-tab-1" tabindex="-1" aria-selected="true">
    <p>Content for the first tab panel.</p>
  </div>

  <div role="tabpanel" id="demo-tabs-panel-2" aria-labelledby="demo-tabs-tab-2" tabindex="-1" aria-selected="false" hidden>
    <p>Content for the second tab panel.</p>
  </div>

  <div role="tabpanel" id="demo-tabs-panel-3" aria-labelledby="demo-tabs-tab-3" tabindex="-1" aria-selected="false" hidden>
    <p>Content for the third tab panel.</p>
  </div>
</div>
```

## Component Elements

| Element | Description |
| --- | --- |
| `<div class="tabs" id="...">` | Root container. Becomes horizontal or vertical based on the tablist's `aria-orientation`. |
| `<nav role="tablist" aria-orientation="horizontal">` | Tablist. Use `aria-orientation="vertical"` for vertical tabs and `data-variant="line"` for the line style. |
| `<button role="tab" id aria-controls aria-selected tabindex>` | Tab trigger. Active: `aria-selected="true"` + `tabindex="0"`. Inactive: `tabindex="-1"`. Disable with `disabled` or `aria-disabled="true"`. |
| `<div role="tabpanel" id aria-labelledby tabindex="-1">` | Panel controlled by a tab. Inactive panels have `hidden`. |

### Variants
| Variant | Markup |
| --- | --- |
| Default (pill) | `<nav role="tablist" aria-orientation="horizontal">` |
| Line | `<nav role="tablist" aria-orientation="horizontal" data-variant="line">` |
| Vertical | `<nav role="tablist" aria-orientation="vertical">` |

## Implementation Examples

### Account Settings Tabs
```html
<div class="tabs w-full" id="account-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="w-full">
    <button type="button" role="tab" id="profile-tab" aria-controls="profile-panel" aria-selected="true" tabindex="0">Profile</button>
    <button type="button" role="tab" id="security-tab" aria-controls="security-panel" aria-selected="false" tabindex="-1">Security</button>
    <button type="button" role="tab" id="billing-tab" aria-controls="billing-panel" aria-selected="false" tabindex="-1">Billing</button>
  </nav>

  <div role="tabpanel" id="profile-panel" aria-labelledby="profile-tab" tabindex="-1" aria-selected="true">
    <div class="card">
      <header>
        <h2>Profile Information</h2>
        <p>Update your name and email address.</p>
      </header>
      <section>
        <form class="grid gap-4">
          <div role="group" class="field">
            <label for="profile-name">Name</label>
            <input type="text" id="profile-name" value="John Doe" />
          </div>
          <div role="group" class="field">
            <label for="profile-email">Email</label>
            <input type="email" id="profile-email" value="john@example.com" />
          </div>
        </form>
      </section>
      <footer>
        <button type="button" class="btn">Save Changes</button>
      </footer>
    </div>
  </div>

  <div role="tabpanel" id="security-panel" aria-labelledby="security-tab" tabindex="-1" aria-selected="false" hidden>
    <div class="card">
      <header>
        <h2>Security Settings</h2>
        <p>Manage two-factor authentication and your password.</p>
      </header>
      <section class="grid gap-4">
        <div role="group" class="field" data-orientation="horizontal">
          <input type="checkbox" id="security-2fa" role="switch" class="input" />
          <label for="security-2fa">Two-factor authentication</label>
        </div>
        <div role="group" class="field">
          <label for="current-password">Current Password</label>
          <input type="password" id="current-password" />
        </div>
        <div role="group" class="field">
          <label for="new-password">New Password</label>
          <input type="password" id="new-password" />
        </div>
      </section>
      <footer>
        <button type="button" class="btn">Update Password</button>
      </footer>
    </div>
  </div>

  <div role="tabpanel" id="billing-panel" aria-labelledby="billing-tab" tabindex="-1" aria-selected="false" hidden>
    <div class="card">
      <header>
        <h2>Current Plan</h2>
        <p>$29/month</p>
        <div class="card-action">
          <span class="badge" data-variant="secondary">Pro</span>
        </div>
      </header>
      <footer>
        <button type="button" class="btn" data-variant="outline">Change Plan</button>
      </footer>
    </div>
  </div>
</div>
```

### Product Information Tabs (Line Variant)
```html
<div class="tabs w-full" id="product-tabs">
  <nav role="tablist" aria-orientation="horizontal" data-variant="line">
    <button type="button" role="tab" id="description-tab" aria-controls="description-panel" aria-selected="true" tabindex="0">Description</button>
    <button type="button" role="tab" id="specifications-tab" aria-controls="specifications-panel" aria-selected="false" tabindex="-1">Specifications</button>
    <button type="button" role="tab" id="reviews-tab" aria-controls="reviews-panel" aria-selected="false" tabindex="-1">Reviews (24)</button>
  </nav>

  <div role="tabpanel" id="description-panel" aria-labelledby="description-tab" tabindex="-1">
    <p class="mb-4">This is a high-quality product designed for everyday use...</p>
    <ul class="list-disc list-inside space-y-1">
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </div>

  <div role="tabpanel" id="specifications-panel" aria-labelledby="specifications-tab" tabindex="-1" hidden>
    <div class="table-container">
      <table class="table">
        <tbody>
          <tr>
            <td class="font-medium">Dimensions</td>
            <td>10" x 8" x 2"</td>
          </tr>
          <tr>
            <td class="font-medium">Weight</td>
            <td>2.5 lbs</td>
          </tr>
          <tr>
            <td class="font-medium">Material</td>
            <td>Premium aluminum</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div role="tabpanel" id="reviews-panel" aria-labelledby="reviews-tab" tabindex="-1" hidden>
    <div class="space-y-4">
      <div class="border-b pb-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-medium">John D.</span>
          <div class="text-yellow-500">★★★★★</div>
        </div>
        <p>Great product! Highly recommended.</p>
      </div>
    </div>
  </div>
</div>
```

### Vertical Tabs
Panels stay direct children of `.tabs`; the root lays them out next to the tablist.
```html
<div class="tabs" id="vertical-tabs">
  <nav role="tablist" aria-orientation="vertical">
    <button type="button" role="tab" id="dashboard-tab" aria-controls="dashboard-panel" aria-selected="true" tabindex="0">Dashboard</button>
    <button type="button" role="tab" id="analytics-tab" aria-controls="analytics-panel" aria-selected="false" tabindex="-1">Analytics</button>
    <button type="button" role="tab" id="settings-tab" aria-controls="settings-panel" aria-selected="false" tabindex="-1">Settings</button>
  </nav>
  <div role="tabpanel" id="dashboard-panel" aria-labelledby="dashboard-tab" tabindex="-1">Dashboard content goes here...</div>
  <div role="tabpanel" id="analytics-panel" aria-labelledby="analytics-tab" tabindex="-1" hidden>Analytics content goes here...</div>
  <div role="tabpanel" id="settings-panel" aria-labelledby="settings-tab" tabindex="-1" hidden>Settings content goes here...</div>
</div>
```

### Disabled Tab
```html
<button type="button" role="tab" id="tabs-disabled-tab-settings" aria-controls="tabs-disabled-panel-settings" aria-selected="false" tabindex="-1" disabled>Disabled</button>
```

### Tabs with Icons
```html
<button type="button" role="tab" id="tabs-icons-tab-code" aria-controls="tabs-icons-panel-code" aria-selected="false" tabindex="-1"><svg class="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg> Code</button>
```

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `tabs.select(tab)` | Method | Selects a tab button in the tablist. |
| `tabs.refresh()` | Method | Rescans tabs and panels after children change inside the existing tablist/panel structure. |

`tabs` is the `.tabs` root element, available after the tabs script initializes it.

### Programmatic Tab Selection
```javascript
function selectTab(tabsId, tabId) {
  const tabs = document.getElementById(tabsId);
  const tab = document.getElementById(tabId);
  if (tabs && tab) {
    tabs.select(tab);
  }
}

// Example usage
selectTab('account-tabs', 'security-tab');
```

### Adding Tabs Dynamically
```javascript
const tabs = document.getElementById('account-tabs');
tabs.querySelector('[role="tablist"]').insertAdjacentHTML('beforeend',
  '<button type="button" role="tab" id="api-tab" aria-controls="api-panel" aria-selected="false" tabindex="-1">API</button>');
tabs.insertAdjacentHTML('beforeend',
  '<div role="tabpanel" id="api-panel" aria-labelledby="api-tab" tabindex="-1" hidden>API keys</div>');
tabs.refresh();
```

### Reacting to Tab Changes
Basecoat does not dispatch custom tab events. Observe `aria-selected` or listen for clicks on the tablist:
```javascript
document.querySelector('#account-tabs [role="tablist"]').addEventListener('click', function(e) {
  const tab = e.target.closest('[role="tab"]');
  if (tab) {
    console.log('Tab changed:', tab.textContent.trim());
  }
});
```

## Keyboard Navigation

### Supported Keys
- **Left/Right Arrow**: Navigate between tabs (horizontal orientation)
- **Up/Down Arrow**: Navigate between tabs (vertical orientation)
- **Home**: Move to first tab
- **End**: Move to last tab

Keyboard handling and roving `tabindex` are provided by the tabs script; no custom key handlers are required.

## Accessibility Guidelines

### ARIA Requirements
- Use proper roles (`tablist`, `tab`, `tabpanel`)
- Implement `aria-selected` for current state
- Link tabs and panels with `aria-controls` and `aria-labelledby`
- Manage `tabindex` (`0` for the active tab, `-1` for others)

### Screen Reader Support
```html
<!-- Provide additional context -->
<div class="tabs" id="settings-tabs">
  <nav role="tablist" aria-orientation="horizontal" aria-label="Settings sections">
    <!-- tabs -->
  </nav>
  <!-- panels -->
</div>
```

## Best Practices

### Content Organization
- Keep tab labels short and descriptive
- Limit the number of tabs (5-7 maximum)
- Group related content logically
- Consider vertical tabs for many options

### Visual Design
- Use the built-in default or `data-variant="line"` style instead of custom border utilities
- Wrap panel content in a `.card` for grouped forms
- Provide adequate touch targets for mobile

### Performance
- Lazy load tab content when possible
- Call `tabs.refresh()` after inserting new tabs or panels

### RTL
Set `dir="rtl"` on the tabs root or a parent element.

## Migrating from 0.x
- Remove manual utility classes from tabs (`px-4 py-2 border-b-2 border-primary ...`); Basecoat styles active and inactive tabs from `aria-selected`.
- Use `data-variant="line"` on the tablist for an underline style.
- The `basecoat:initialized` document event was removed; use `tabs.select(tab)` and `tabs.refresh()` instead.
- The `.form` wrapper is gone: wrap each control in `<div role="group" class="field">`.
- To keep old class names (for example `btn-outline`) working temporarily, load `@import "basecoat-css/compat";` after Basecoat.
