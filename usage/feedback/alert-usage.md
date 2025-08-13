# Alert Component Usage

## Overview
The alert component displays important messages to users with optional icons, titles, and descriptions. It supports both success and destructive/error states.

## HTML Structure
The alert component supports two primary classes:
- `alert` - Success/informational alerts
- `alert-destructive` - Error/warning alerts

## Component Elements
1. `<svg>` - Icon (optional)
2. `<h2>` - Title (required)
3. `<section>` - Description (optional)

## Basic Implementation

### Success Alert
```html
<div class="alert">
  <svg><!-- success icon --></svg>
  <h2>Success!</h2>
  <section>Operation completed successfully.</section>
</div>
```

### Error Alert
```html
<div class="alert-destructive">
  <svg><!-- error icon --></svg>
  <h2>Error!</h2>
  <section>Something went wrong.</section>
</div>
```

### Alert without Icon
```html
<div class="alert">
  <h2>Success! Your changes have been saved</h2>
</div>
```

### Alert without Description
```html
<div class="alert">
  <svg><!-- icon --></svg>
  <h2>Operation completed</h2>
</div>
```

## Variations
- **Basic Alert**: Use `alert` class for success/info messages
- **Destructive Alert**: Use `alert-destructive` class for errors/warnings
- **With Icon**: Include `<svg>` element for visual context
- **Without Icon**: Omit `<svg>` element for text-only alerts
- **With Description**: Use `<section>` for additional details

## Best Practices
- Always include a clear, concise title in `<h2>`
- Use icons to provide visual context and improve scanning
- Keep descriptions brief and informative
- Choose appropriate alert type based on message severity
- Position alerts prominently but not intrusively

## Accessibility Considerations
- Use semantic HTML structure with proper headings
- Ensure icons and text provide clear communication
- Consider screen reader compatibility
- Use appropriate color contrast for text readability
- Consider using ARIA attributes for dynamic alerts

## JavaScript Integration
For dynamic alerts, consider adding show/hide functionality:

```javascript
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = type === 'error' ? 'alert-destructive' : 'alert';
  alertDiv.innerHTML = `<h2>${message}</h2>`;
  document.body.appendChild(alertDiv);
}
```