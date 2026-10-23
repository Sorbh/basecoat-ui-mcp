# Alert Component Usage

## Overview
The alert component displays important messages to users with optional icons, titles, descriptions, and an inline action. It supports a default (informational/success) style and a destructive (error) variant.

## HTML Structure
Use the `alert` root class. Variants are set with a data attribute:
- `class="alert"` - Default informational/success alert
- `class="alert" data-variant="destructive"` - Error alert

## Component Elements
1. `<svg>` - Icon (optional)
2. `<h2>` - Title (required)
3. `<section>` - Description (optional)
4. `<footer>` - Action region aligned to the inline end (optional)

## Basic Implementation

### Success Alert
```html
<div class="alert"><svg class="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
  <h2>Success!</h2>
  <section>Operation completed successfully.</section>
</div>
```

### Error Alert
```html
<div class="alert" data-variant="destructive"><svg class="lucide lucide-circle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
  <h2>Error!</h2>
  <section>Something went wrong.</section>
</div>
```

### Alert with Action
```html
<div class="alert">
  <h2>Dark mode is now available</h2>
  <section>Enable it under your profile settings to get started.</section>
  <footer>
    <button type="button" class="btn" data-size="xs">Enable</button>
  </footer>
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

### Custom Colors
Add Tailwind utilities to the root for one-off colors:
```html
<div class="alert border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
  <h2>Your subscription will expire in 3 days.</h2>
  <section>Renew now to avoid service interruption.</section>
</div>
```

## Variations
| Variation | Markup |
| --- | --- |
| Default | `class="alert"` |
| Destructive | `class="alert" data-variant="destructive"` |
| With icon | Add an `<svg>` as the first child |
| With description | Add a `<section>` after the `<h2>` |
| With action | Add a `<footer>` containing a button or link |
| RTL | Add `dir="rtl"` to the alert or an ancestor |

## Best Practices
- Always include a clear, concise title in `<h2>`
- Use icons to provide visual context and improve scanning
- Keep descriptions brief and informative
- Choose the variant based on message severity
- Position alerts prominently but not intrusively

## Accessibility Considerations
- Use semantic HTML structure with proper headings
- Ensure icons and text provide clear communication
- Add `role="alert"` (urgent) or `role="status"` (polite) when inserting alerts dynamically
- Use appropriate color contrast for text readability

## JavaScript Integration
Alerts are CSS-only. For dynamic alerts, create the markup yourself:

```javascript
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  if (type === 'error') alertDiv.dataset.variant = 'destructive';
  alertDiv.setAttribute('role', type === 'error' ? 'alert' : 'status');
  alertDiv.innerHTML = `<h2>${message}</h2>`;
  document.body.appendChild(alertDiv);
}
```

## Migrating from 0.x
- `alert-destructive` is now `class="alert" data-variant="destructive"`.
- To keep old class names working temporarily, load the compatibility stylesheet after Basecoat: `@import "basecoat-css/compat";` (or `dist/basecoat-compat.cdn.min.css` from the CDN).
