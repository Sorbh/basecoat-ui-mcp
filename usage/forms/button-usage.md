# Button Component Usage

## Overview
The button component provides a comprehensive set of button variants, sizes, and states for different UI needs. It supports flexible class combinations and icon integration.

## Button Variants

### Primary Button
```html
<button class="btn">Primary Action</button>
<!-- Alternative syntax -->
<button class="btn-primary">Primary Action</button>
```

### Secondary Button
```html
<button class="btn-secondary">Secondary Action</button>
```

### Destructive Button
```html
<button class="btn-destructive">Delete Item</button>
```

### Outline Button
```html
<button class="btn-outline">Outline Button</button>
```

### Ghost Button
```html
<button class="btn-ghost">Ghost Button</button>
```

### Link Button
```html
<button class="btn-link">Link Style</button>
```

## Button Sizes

### Small Button
```html
<button class="btn-sm">Small Button</button>
```

### Large Button
```html
<button class="btn-lg">Large Button</button>
```

### Combined Size and Variant
```html
<button class="btn-sm-destructive">Small Delete</button>
<button class="btn-lg-outline">Large Outline</button>
```

## Icon Buttons

### Basic Icon Button
```html
<button class="btn-icon">
  <svg><!-- icon --></svg>
</button>
```

### Icon Button with Variant
```html
<button class="btn-icon-outline">
  <svg><!-- icon --></svg>
</button>
```

### Large Icon Button
```html
<button class="btn-lg-icon-outline">
  <svg><!-- icon --></svg>
</button>
```

## Button with Text and Icon

### Leading Icon
```html
<button class="btn">
  <svg><!-- icon --></svg>
  Send Email
</button>
```

### Trailing Icon
```html
<button class="btn">
  Continue
  <svg><!-- arrow icon --></svg>
</button>
```

## Button States

### Disabled State
```html
<button class="btn" disabled>Disabled Button</button>
```

### Loading State
```html
<button class="btn-outline" disabled>
  <svg class="animate-spin w-4 h-4 mr-2"><!-- spinner icon --></svg>
  Loading...
</button>
```

### Active State
```html
<button class="btn" aria-pressed="true">Active Toggle</button>
```

## Accessibility Guidelines

### ARIA Attributes
```html
<!-- Button with expanded state -->
<button class="btn" aria-expanded="false" aria-controls="menu">
  Menu
</button>

<!-- Toggle button -->
<button class="btn" aria-pressed="false" role="switch">
  Toggle Feature
</button>

<!-- Button with description -->
<button class="btn" aria-describedby="help-text">
  Submit
</button>
<div id="help-text">This will save your changes</div>
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
- Provide alt text for screen readers
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
  <button type="submit" class="btn">Save Changes</button>
  <button type="button" class="btn-outline">Cancel</button>
</form>
```

### Button Group
```html
<div class="flex gap-2">
  <button class="btn-outline">Cancel</button>
  <button class="btn">Confirm</button>
</div>
```

## JavaScript Integration

### Event Handling
```javascript
document.querySelector('.btn').addEventListener('click', function(e) {
  // Handle button click
});
```

### Dynamic State Changes
```javascript
function setLoading(button, loading) {
  if (loading) {
    button.disabled = true;
    button.innerHTML = '<svg class="animate-spin">...</svg> Loading...';
  } else {
    button.disabled = false;
    button.innerHTML = 'Submit';
  }
}
```