# Tabs Component Usage

## Overview
The tabs component provides an accessible way to organize content into multiple panels that users can switch between. It includes keyboard navigation, ARIA support, and follows WAI-ARIA guidelines.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/tabs.min.js" defer></script>
```

## HTML Structure

### Basic Tabs Structure
```html
<div class="tabs w-full" id="demo-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="border-b">
    <button type="button" role="tab" id="tab-1" aria-controls="panel-1" aria-selected="true" tabindex="0" 
            class="px-4 py-2 border-b-2 border-primary text-primary">
      Tab 1
    </button>
    <button type="button" role="tab" id="tab-2" aria-controls="panel-2" aria-selected="false" tabindex="-1" 
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Tab 2
    </button>
    <button type="button" role="tab" id="tab-3" aria-controls="panel-3" aria-selected="false" tabindex="-1" 
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Tab 3
    </button>
  </nav>
  
  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" aria-selected="true" tabindex="-1" class="p-4">
    <h3 class="text-lg font-medium">Panel 1 Content</h3>
    <p>Content for the first tab panel.</p>
  </div>
  
  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" aria-selected="false" tabindex="-1" class="p-4" hidden>
    <h3 class="text-lg font-medium">Panel 2 Content</h3>
    <p>Content for the second tab panel.</p>
  </div>
  
  <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" aria-selected="false" tabindex="-1" class="p-4" hidden>
    <h3 class="text-lg font-medium">Panel 3 Content</h3>
    <p>Content for the third tab panel.</p>
  </div>
</div>
```

## Component Elements

### Tabs Container
- `<div class="tabs">` - Main container for the entire tabs component
- Unique `id` for JavaScript initialization

### Tab List (Navigation)
- `<nav role="tablist">` - Container for tab buttons
- `aria-orientation="horizontal"` for horizontal tabs
- `class="border-b"` for visual separator

### Tab Buttons
Required attributes:
- `role="tab"` - ARIA role
- `id` - Unique identifier
- `aria-controls` - References the panel ID
- `aria-selected` - Current selection state ("true" or "false")
- `tabindex` - Focus management ("0" for active, "-1" for inactive)

### Tab Panels
Required attributes:
- `role="tabpanel"` - ARIA role
- `id` - Unique identifier (referenced by tab's aria-controls)
- `aria-labelledby` - References the tab ID
- `aria-selected` - Current state ("true" or "false")
- `tabindex="-1"` - Focus management
- `hidden` - Hide inactive panels

## Implementation Examples

### Account Settings Tabs
```html
<div class="tabs w-full" id="account-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="border-b">
    <button type="button" role="tab" id="profile-tab" aria-controls="profile-panel" aria-selected="true" tabindex="0"
            class="px-4 py-2 border-b-2 border-primary text-primary">
      Profile
    </button>
    <button type="button" role="tab" id="security-tab" aria-controls="security-panel" aria-selected="false" tabindex="-1"
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Security
    </button>
    <button type="button" role="tab" id="billing-tab" aria-controls="billing-panel" aria-selected="false" tabindex="-1"
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Billing
    </button>
  </nav>
  
  <div role="tabpanel" id="profile-panel" aria-labelledby="profile-tab" aria-selected="true" tabindex="-1" class="p-6">
    <h3 class="text-lg font-medium mb-4">Profile Information</h3>
    <form class="form grid gap-4">
      <div class="grid gap-2">
        <label for="name" class="label">Name</label>
        <input type="text" id="name" class="input" value="John Doe">
      </div>
      <div class="grid gap-2">
        <label for="email" class="label">Email</label>
        <input type="email" id="email" class="input" value="john@example.com">
      </div>
      <button type="submit" class="btn">Save Changes</button>
    </form>
  </div>
  
  <div role="tabpanel" id="security-panel" aria-labelledby="security-tab" aria-selected="false" tabindex="-1" class="p-6" hidden>
    <h3 class="text-lg font-medium mb-4">Security Settings</h3>
    <div class="grid gap-4">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-medium">Two-factor authentication</h4>
          <p class="text-sm text-muted-foreground">Add an extra layer of security</p>
        </div>
        <input type="checkbox" role="switch" class="input">
      </div>
      <div class="grid gap-2">
        <label for="current-password" class="label">Current Password</label>
        <input type="password" id="current-password" class="input">
      </div>
      <div class="grid gap-2">
        <label for="new-password" class="label">New Password</label>
        <input type="password" id="new-password" class="input">
      </div>
      <button class="btn">Update Password</button>
    </div>
  </div>
  
  <div role="tabpanel" id="billing-panel" aria-labelledby="billing-tab" aria-selected="false" tabindex="-1" class="p-6" hidden>
    <h3 class="text-lg font-medium mb-4">Billing Information</h3>
    <div class="grid gap-4">
      <div class="card">
        <header>
          <h4>Current Plan</h4>
        </header>
        <section>
          <p class="text-xl font-semibold">Pro Plan</p>
          <p class="text-muted-foreground">$29/month</p>
        </section>
        <footer>
          <button class="btn-outline">Change Plan</button>
        </footer>
      </div>
    </div>
  </div>
</div>
```

### Product Information Tabs
```html
<div class="tabs w-full" id="product-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="border-b">
    <button type="button" role="tab" id="description-tab" aria-controls="description-panel" aria-selected="true" tabindex="0"
            class="px-4 py-2 border-b-2 border-primary text-primary">
      Description
    </button>
    <button type="button" role="tab" id="specifications-tab" aria-controls="specifications-panel" aria-selected="false" tabindex="-1"
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Specifications
    </button>
    <button type="button" role="tab" id="reviews-tab" aria-controls="reviews-panel" aria-selected="false" tabindex="-1"
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Reviews (24)
    </button>
  </nav>
  
  <div role="tabpanel" id="description-panel" aria-labelledby="description-tab" aria-selected="true" tabindex="-1" class="p-6">
    <h3 class="text-lg font-medium mb-4">Product Description</h3>
    <p class="mb-4">This is a high-quality product designed for everyday use...</p>
    <ul class="list-disc list-inside space-y-1">
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </div>
  
  <div role="tabpanel" id="specifications-panel" aria-labelledby="specifications-tab" aria-selected="false" tabindex="-1" class="p-6" hidden>
    <h3 class="text-lg font-medium mb-4">Technical Specifications</h3>
    <div class="overflow-x-auto">
      <table class="table w-full">
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
  
  <div role="tabpanel" id="reviews-panel" aria-labelledby="reviews-tab" aria-selected="false" tabindex="-1" class="p-6" hidden>
    <h3 class="text-lg font-medium mb-4">Customer Reviews</h3>
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
```html
<div class="tabs flex" id="vertical-tabs">
  <nav role="tablist" aria-orientation="vertical" class="border-r mr-6 pr-6">
    <button type="button" role="tab" id="dashboard-tab" aria-controls="dashboard-panel" aria-selected="true" tabindex="0"
            class="block w-full text-left px-4 py-2 border-l-2 border-primary bg-primary/10">
      Dashboard
    </button>
    <button type="button" role="tab" id="analytics-tab" aria-controls="analytics-panel" aria-selected="false" tabindex="-1"
            class="block w-full text-left px-4 py-2 border-l-2 border-transparent hover:bg-muted">
      Analytics
    </button>
    <button type="button" role="tab" id="settings-tab" aria-controls="settings-panel" aria-selected="false" tabindex="-1"
            class="block w-full text-left px-4 py-2 border-l-2 border-transparent hover:bg-muted">
      Settings
    </button>
  </nav>
  
  <div class="flex-1">
    <div role="tabpanel" id="dashboard-panel" aria-labelledby="dashboard-tab" aria-selected="true" tabindex="-1">
      <h3 class="text-lg font-medium mb-4">Dashboard</h3>
      <p>Dashboard content goes here...</p>
    </div>
    
    <div role="tabpanel" id="analytics-panel" aria-labelledby="analytics-tab" aria-selected="false" tabindex="-1" hidden>
      <h3 class="text-lg font-medium mb-4">Analytics</h3>
      <p>Analytics content goes here...</p>
    </div>
    
    <div role="tabpanel" id="settings-panel" aria-labelledby="settings-tab" aria-selected="false" tabindex="-1" hidden>
      <h3 class="text-lg font-medium mb-4">Settings</h3>
      <p>Settings content goes here...</p>
    </div>
  </div>
</div>
```

## JavaScript Events and API

### Initialization Event
```javascript
document.addEventListener('basecoat:initialized', function(e) {
  if (e.target.matches('.tabs')) {
    console.log('Tabs component initialized:', e.target.id);
  }
});
```

### Tab Change Event
```javascript
// Listen for tab changes
document.addEventListener('click', function(e) {
  if (e.target.matches('[role="tab"]')) {
    console.log('Tab changed:', e.target.textContent);
  }
});
```

### Programmatic Tab Selection
```javascript
function selectTab(tabId) {
  const tab = document.getElementById(tabId);
  if (tab) {
    tab.click(); // Trigger tab selection
  }
}

// Example usage
selectTab('security-tab');
```

## Keyboard Navigation

### Supported Keys
- **Left/Right Arrow**: Navigate between tabs (horizontal orientation)
- **Up/Down Arrow**: Navigate between tabs (vertical orientation)
- **Home**: Move to first tab
- **End**: Move to last tab
- **Space/Enter**: Activate focused tab

### Focus Management
```javascript
// Custom focus handling example
document.addEventListener('keydown', function(e) {
  const activeTab = document.querySelector('[role="tab"][aria-selected="true"]');
  
  if (e.key === 'ArrowRight') {
    const nextTab = activeTab.nextElementSibling;
    if (nextTab && nextTab.matches('[role="tab"]')) {
      nextTab.focus();
      nextTab.click();
    }
  }
});
```

## Accessibility Guidelines

### ARIA Requirements
- Use proper roles (`tablist`, `tab`, `tabpanel`)
- Implement `aria-selected` for current state
- Link tabs and panels with `aria-controls` and `aria-labelledby`
- Manage `tabindex` for keyboard navigation

### Screen Reader Support
```html
<!-- Provide additional context -->
<div class="tabs" aria-label="Account settings">
  <nav role="tablist" aria-label="Settings sections">
    <!-- tabs -->
  </nav>
  <!-- panels -->
</div>
```

### Focus Indicators
```css
/* Ensure visible focus indicators */
[role="tab"]:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

## Best Practices

### Content Organization
- Keep tab labels short and descriptive
- Limit the number of tabs (5-7 maximum)
- Group related content logically
- Consider using vertical tabs for many options

### Visual Design
- Maintain consistent spacing and alignment
- Use clear visual states for active/inactive tabs
- Provide adequate touch targets for mobile
- Consider responsive behavior for small screens

### Performance
- Lazy load tab content when possible
- Avoid heavy content in initially hidden panels
- Consider using dynamic loading for data-heavy tabs

### Mobile Considerations
```html
<!-- Responsive tabs with scrollable navigation -->
<div class="tabs w-full">
  <nav role="tablist" class="flex overflow-x-auto border-b">
    <button role="tab" class="flex-shrink-0 px-4 py-2">Tab 1</button>
    <button role="tab" class="flex-shrink-0 px-4 py-2">Tab 2</button>
    <button role="tab" class="flex-shrink-0 px-4 py-2">Tab 3</button>
  </nav>
  <!-- panels -->
</div>
```