# Button Component Usage

## Overview
The button component uses one root class, `btn`, plus optional `data-variant` and `data-size` attributes for variants, sizes, and icon buttons. Use it on a native `<button>` for actions or on an `<a>` for navigation.

## Class and Attribute Reference

| Markup | Description |
| --- | --- |
| `class="btn"` | Button root (required). Primary variant and default size when used alone. |
| `data-variant="secondary\|outline\|ghost\|link\|destructive"` | Visual variant. Omit for primary. |
| `data-size="xs\|sm\|lg"` | Text button size. Omit for default. |
| `data-size="icon-xs\|icon-sm\|icon\|icon-lg"` | Square icon-only button sizes. Requires an accessible name (`aria-label`). |
| `data-icon="inline-start\|inline-end"` | On an inline `<svg>` inside a text button, applies icon-aware spacing. |

## Button Variants

### Primary Button
```html
<button type="button" class="btn">Primary Action</button>
```

### Secondary Button
```html
<button type="button" class="btn" data-variant="secondary">Secondary Action</button>
```

### Destructive Button
```html
<button type="button" class="btn" data-variant="destructive">Delete Item</button>
```

### Outline Button
```html
<button type="button" class="btn" data-variant="outline">Outline Button</button>
```

### Ghost Button
```html
<button type="button" class="btn" data-variant="ghost">Ghost Button</button>
```

### Link Button
```html
<button type="button" class="btn" data-variant="link">Link Style</button>
```

## Button Sizes

### Extra Small Button
```html
<button type="button" class="btn" data-size="xs">Extra Small</button>
```

### Small Button
```html
<button type="button" class="btn" data-size="sm">Small Button</button>
```

### Large Button
```html
<button type="button" class="btn" data-size="lg">Large Button</button>
```

### Combined Size and Variant
Variant and size are independent attributes, so any combination works.
```html
<button type="button" class="btn" data-variant="destructive" data-size="sm">Small Delete</button>
<button type="button" class="btn" data-variant="outline" data-size="lg">Large Outline</button>
```

## Icon Buttons

Icon-only buttons need an accessible name, usually with `aria-label`.

### Basic Icon Button
```html
<button type="button" class="btn" data-size="icon" aria-label="Settings">
  <svg><!-- icon --></svg>
</button>
```

### Icon Button with Variant
```html
<button type="button" class="btn" data-variant="outline" data-size="icon" aria-label="Submit">
  <svg><!-- icon --></svg>
</button>
```

### Icon Button Sizes
```html
<button type="button" class="btn" data-variant="outline" data-size="icon-xs" aria-label="Submit"><svg><!-- icon --></svg></button>
<button type="button" class="btn" data-variant="outline" data-size="icon-sm" aria-label="Submit"><svg><!-- icon --></svg></button>
<button type="button" class="btn" data-variant="outline" data-size="icon" aria-label="Submit"><svg><!-- icon --></svg></button>
<button type="button" class="btn" data-variant="outline" data-size="icon-lg" aria-label="Submit"><svg><!-- icon --></svg></button>
```

### Rounded Icon Button
```html
<button type="button" class="btn rounded-full" data-variant="outline" data-size="icon" aria-label="Scroll up">
  <svg><!-- icon --></svg>
</button>
```

## Button with Text and Icon

Add `data-icon="inline-start"` or `data-icon="inline-end"` to the icon for icon-aware spacing. Use icon sizes only for icon-only buttons.

### Leading Icon
```html
<button type="button" class="btn" data-variant="outline" data-size="sm">
  <svg data-icon="inline-start"><!-- icon --></svg>
  New Branch
</button>
```

### Trailing Icon
```html
<button type="button" class="btn">
  Continue
  <svg data-icon="inline-end"><!-- arrow icon --></svg>
</button>
```

## Button States

### Disabled State
```html
<button type="button" class="btn" disabled>Disabled Button</button>
```

### Loading State
Basecoat has no dedicated spinner component: use the Lucide `loader-circle` icon with the `animate-spin` utility.
```html
<button type="button" class="btn" disabled>
  <svg data-icon="inline-start" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
  Generating
</button>

<button type="button" class="btn" data-variant="secondary" disabled>
  Downloading
  <svg data-icon="inline-end" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
</button>
```

### Toggle State
```html
<button type="button" class="btn" data-variant="outline" aria-pressed="true">Active Toggle</button>
```

## Link as Button
```html
<a href="/dashboard" class="btn" data-variant="outline">Go to dashboard</a>
```

## Accessibility Guidelines

### ARIA Attributes
```html
<!-- Button with expanded state -->
<button type="button" class="btn" aria-expanded="false" aria-controls="menu">
  Menu
</button>

<!-- Toggle button -->
<button type="button" class="btn" data-variant="outline" aria-pressed="false">
  Toggle Feature
</button>

<!-- Button with description -->
<button type="button" class="btn" aria-describedby="help-text">
  Submit
</button>
<p id="help-text" class="text-sm text-muted-foreground">This will save your changes</p>
```

### Focus Management
- Ensure buttons are keyboard accessible
- Provide clear focus indicators
- Use logical tab order

## Best Practices

### Visual Hierarchy
- Use primary buttons for main actions
- Use secondary/outline buttons for alternative actions
- Use destructive buttons only for delete/remove actions
- Limit primary buttons to one per section

### Button Text
- Use clear, action-oriented labels
- Keep text concise (2-4 words)
- Use sentence case
- Avoid generic labels like "Click Here"

### Icon Usage
- Use icons to enhance recognition
- Ensure icons have meaning
- Give icon-only buttons an `aria-label`
- Test icon clarity at different sizes

### Interactive States
- Always provide feedback for user interactions
- Use loading states for async operations
- Disable buttons during processing
- Provide clear error states

## Form Integration

### Submit Button
```html
<form>
  <!-- form fields -->
  <div role="group" class="field" data-orientation="horizontal">
    <button type="submit" class="btn">Save Changes</button>
    <button type="button" class="btn" data-variant="outline">Cancel</button>
  </div>
</form>
```

### Button Group
For visually joined buttons, use the Button Group component. For simple spacing, a flex row is enough.
```html
<div role="group" aria-label="Message actions" class="button-group">
  <button type="button" class="btn" data-variant="outline">Archive</button>
  <button type="button" class="btn" data-variant="outline">Report</button>
</div>

<div class="flex gap-2">
  <button type="button" class="btn" data-variant="outline">Cancel</button>
  <button type="button" class="btn">Confirm</button>
</div>
```

## JavaScript Integration

Buttons are CSS-only; no Basecoat script is required.

### Event Handling
```javascript
document.querySelector('.btn').addEventListener('click', function(e) {
  // Handle button click
});
```

### Dynamic State Changes
```javascript
const spinner = '<svg data-icon="inline-start" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>';

function setLoading(button, loading) {
  if (loading) {
    button.disabled = true;
    button.innerHTML = spinner + ' Loading...';
  } else {
    button.disabled = false;
    button.innerHTML = 'Submit';
  }
}

// Variants and sizes are attributes, so change them with dataset
button.dataset.variant = 'destructive';
button.dataset.size = 'sm';
```

## Migrating from 0.x
Pre-1.0 combined classes such as `btn-outline`, `btn-sm`, `btn-icon-outline`, `btn-lg-icon-outline`, and `btn-sm-destructive` were replaced by `class="btn"` plus `data-variant` / `data-size`. The optional `basecoat-css/compat` stylesheet (CDN: `dist/basecoat-compat.cdn.min.css`, loaded after Basecoat) keeps the old class names working during migration only; write new markup with the attributes above.
