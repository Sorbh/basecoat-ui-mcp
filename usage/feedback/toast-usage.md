# Toast Component Usage

## Overview
The toast component displays temporary notification messages to users. It supports categories (success, info, warning, error), optional actions, and automatically dismisses after a set duration. Toasts are appended to a single toaster container and created either from server-rendered markup or from JavaScript with `toaster.toast(config)`.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/toast.min.js" defer></script>

<!-- Or load every component script at once -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

## HTML Structure

### Toaster Container
Add one toaster near the end of your page `<body>`. Basecoat positions it; no positioning utilities are needed.
```html
<div id="toaster" class="toaster"></div>
```

### Toaster Alignment
Use `data-align` to change placement:
```html
<!-- End (default) -->
<div id="toaster" class="toaster" data-align="end"></div>

<!-- Start -->
<div id="toaster" class="toaster" data-align="start"></div>

<!-- Center -->
<div id="toaster" class="toaster" data-align="center"></div>
```

### Server-rendered Toast Markup
Append this markup to the toaster (for example with HTMX `hx-target="#toaster" hx-swap="beforeend"`):
```html
<div id="toaster" class="toaster">
  <div class="toast" role="status" aria-atomic="true" aria-hidden="false" data-category="success">
    <div class="toast-content"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
      <section>
        <h2>Success</h2>
        <p>Your changes have been saved.</p>
      </section>
      <footer>
        <button type="button" class="btn" data-toast-action>Dismiss</button>
      </footer>
    </div>
  </div>
</div>
```

| Element | Description |
| --- | --- |
| `<div id="toaster" class="toaster">` | Toast container. Optional `data-align="start|center|end"`. |
| `<div class="toast">` | Toast item. `data-category="success|info|warning|error"` for styling; `data-duration` (ms) to override the timeout; `data-duration="-1"` keeps it open. |
| `<div class="toast-content">` | Content wrapper. |
| `<svg aria-hidden="true">` | Optional icon. |
| `<section>` | Message region with `<h2>` title and optional `<p>` description. |
| `<footer>` | Optional action buttons or links. Clicking one closes the toast. |

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `toaster.toast(config)` | Method | Creates a toast from a config object and returns the inserted `.toast` element. |
| `toaster.closeAll()` | Method | Closes every toast inside the toaster. |
| `toast.close()` | Method | Closes one initialized toast element. |

### Config Object

| Field | Required | Description |
| --- | --- | --- |
| `title` | Yes | The title of the toast. |
| `description` | Optional | The description of the toast. |
| `category` | Optional | `success`, `info`, `warning`, or `error`. |
| `duration` | Optional | Timeout in ms. Defaults to `3000` (`5000` for errors). Use `-1` to keep it open. |
| `action` | Optional | Primary action: `{ label, href }` or `{ label, onclick }`. |
| `cancel` | Optional | Secondary action: `{ label, onclick? }`. |

### Basic Toast Function
```javascript
function showToast(category, title, description, duration) {
  return document.getElementById('toaster').toast({
    category, // success, info, warning, error
    title,
    description,
    duration  // milliseconds (optional)
  });
}
```

### Toast Types

#### Success Toast
```javascript
showToast('success', 'Success!', 'Your changes have been saved successfully.');
```

#### Error Toast
```javascript
showToast('error', 'Error!', 'Something went wrong. Please try again.');
```

#### Warning Toast
```javascript
showToast('warning', 'Warning!', 'Please review your input before proceeding.');
```

#### Info Toast
```javascript
showToast('info', 'Info', 'New features are now available in settings.');
```

## Implementation Examples

### Basic Usage
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
  <script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/toast.min.js" defer></script>
</head>
<body>
  <!-- Trigger buttons -->
  <button type="button" class="btn" onclick="showSuccessToast()">Show Success</button>
  <button type="button" class="btn" data-variant="destructive" onclick="showErrorToast()">Show Error</button>

  <!-- Toaster container -->
  <div id="toaster" class="toaster"></div>

  <script>
    function showSuccessToast() {
      document.getElementById('toaster').toast({
        category: 'success',
        title: 'Success!',
        description: 'Your changes have been saved.',
        cancel: { label: 'Dismiss' }
      });
    }

    function showErrorToast() {
      document.getElementById('toaster').toast({
        category: 'error',
        title: 'Error!',
        description: 'Failed to save changes.',
        action: { label: 'Retry', onclick: () => saveChanges() }
      });
    }
  </script>
</body>
</html>
```

### Inline Trigger
```html
<button
  type="button"
  class="btn" data-variant="outline"
  onclick="document.getElementById('toaster').toast({
    category: 'success',
    title: 'Success',
    description: 'A success toast called from the front-end.',
    cancel: { label: 'Dismiss' }
  })">Toast from front-end</button>
```

### Form Submission with Toast
```html
<form id="contact-form" class="grid gap-4">
  <div role="group" class="field">
    <label for="contact-name">Name</label>
    <input type="text" id="contact-name" name="name" required />
  </div>
  <div role="group" class="field">
    <label for="contact-email">Email</label>
    <input type="email" id="contact-email" name="email" required />
  </div>
  <button type="submit" class="btn">Submit</button>
</form>

<div id="toaster" class="toaster"></div>

<script>
const toaster = document.getElementById('toaster');

document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Show a persistent "processing" toast and keep a reference to it
  const pending = toaster.toast({
    category: 'info',
    title: 'Processing...',
    description: 'Submitting your form.',
    duration: -1
  });

  try {
    const formData = new FormData(this);
    await new Promise(resolve => setTimeout(resolve, 2000)); // simulate API call

    pending.close();
    toaster.toast({ category: 'success', title: 'Form Submitted!', description: 'Thank you for your message.' });
    this.reset();
  } catch (error) {
    pending.close();
    toaster.toast({ category: 'error', title: 'Submission Failed', description: 'Please try again later.' });
  }
});
</script>
```

### Advanced Toast Configuration
```javascript
const toaster = document.getElementById('toaster');

// Toast with custom duration
function showCustomToast() {
  toaster.toast({
    category: 'warning',
    title: 'Session Expiring',
    description: 'Your session will expire in 2 minutes.',
    duration: 10000, // 10 seconds
    action: { label: 'Stay signed in', onclick: () => refreshSession() }
  });
}

// Persistent toast (stays until dismissed)
function showPersistentToast() {
  toaster.toast({
    category: 'info',
    title: 'System Maintenance',
    description: 'Scheduled maintenance tonight at 2 AM.',
    duration: -1,
    action: { label: 'Details', href: '/status' },
    cancel: { label: 'Dismiss' }
  });
}

// Quick toast (short duration)
function showQuickToast() {
  toaster.toast({
    category: 'success',
    title: 'Copied!',
    description: 'Text copied to clipboard.',
    duration: 2000 // 2 seconds
  });
}

// Close everything
function clearToasts() {
  toaster.closeAll();
}
```

### Toast Utility Class
```javascript
class ToastManager {
  static get toaster() {
    return document.getElementById('toaster');
  }

  static show(category, title, description, duration) {
    return this.toaster.toast({ category, title, description, duration });
  }

  static success(title, description) {
    return this.show('success', title, description);
  }

  static error(title, description) {
    return this.show('error', title, description);
  }

  static warning(title, description) {
    return this.show('warning', title, description);
  }

  static info(title, description) {
    return this.show('info', title, description);
  }

  static clear() {
    this.toaster.closeAll();
  }
}

// Usage examples
ToastManager.success('Success!', 'Operation completed successfully.');
ToastManager.error('Error!', 'Something went wrong.');
ToastManager.warning('Warning!', 'Please check your input.');
ToastManager.info('Info', 'New update available.');
```

## Toast Categories

### Success Toast
- **Use for**: Successful operations, confirmations, completions
- **Markup**: `category: 'success'` / `data-category="success"`
- **Examples**: "Saved successfully", "Account created", "Email sent"

### Error Toast
- **Use for**: Failed operations, validation errors, system errors
- **Markup**: `category: 'error'` / `data-category="error"` (default duration 5000 ms)
- **Examples**: "Save failed", "Network error", "Invalid input"

### Warning Toast
- **Use for**: Cautionary messages, potential issues
- **Markup**: `category: 'warning'` / `data-category="warning"`
- **Examples**: "Session expiring", "Unsaved changes"

### Info Toast
- **Use for**: General information, updates, neutral notifications
- **Markup**: `category: 'info'` / `data-category="info"`
- **Examples**: "New feature available", "System maintenance", "Tip"

## Best Practices

### Content Guidelines
- **Keep titles short**: 1-3 words maximum
- **Make descriptions clear**: Explain what happened and next steps
- **Use action-oriented language**: "Saved successfully" vs "Save complete"
- **Avoid technical jargon**: Use user-friendly language

### UX Considerations
- **Don't overuse toasts**: Limit to important notifications
- **Use appropriate durations**: the defaults (3 s, 5 s for errors) suit most messages
- **Use `duration: -1` with an action** for anything the user must act on
- **Provide alternatives**: Don't rely solely on toasts for critical information

### Timing Guidelines
```javascript
const TOAST_DURATIONS = {
  quick: 2000,     // Simple confirmations (copied, saved)
  normal: 3000,    // Library default
  error: 5000,     // Library default for error toasts
  long: 8000,      // Warnings, complex information
  persistent: -1   // Stays open until dismissed
};
```

### Accessibility Considerations
- Toasts use `role="status"` and `aria-atomic="true"` so screen readers announce them politely
- Toasts should not interfere with keyboard navigation
- Important information should also be available elsewhere
- Give long-lived or actionable toasts enough time (or `duration: -1`)

## Error Handling

### Graceful Fallbacks
The `toast()` method exists only after the toast script has initialized the toaster.
```javascript
function safeShowToast(category, title, description) {
  const toaster = document.getElementById('toaster');
  if (toaster && typeof toaster.toast === 'function') {
    return toaster.toast({ category, title, description });
  }
  console.warn('Toast system not available');
  console.log(`${category.toUpperCase()}: ${title} - ${description}`);
}
```

### Validation
```javascript
function validateToast(category, title) {
  const validCategories = ['success', 'error', 'warning', 'info'];

  if (!validCategories.includes(category)) {
    console.warn(`Invalid toast category: ${category}`);
    category = 'info';
  }

  if (!title || title.trim() === '') {
    console.warn('Toast title is required');
    return false;
  }

  return true;
}
```

## Integration Examples

### React Integration
```javascript
// Custom hook for toasts (render <div id="toaster" className="toaster" /> once in your layout)
function useToast() {
  const showToast = useCallback((category, title, description) => {
    document.getElementById('toaster')?.toast({ category, title, description });
  }, []);

  return {
    success: (title, description) => showToast('success', title, description),
    error: (title, description) => showToast('error', title, description),
    warning: (title, description) => showToast('warning', title, description),
    info: (title, description) => showToast('info', title, description),
  };
}
```

### Vue Integration
```javascript
// Vue plugin
const toastPlugin = {
  install(app) {
    app.config.globalProperties.$toast = {
      show(category, title, description) {
        return document.getElementById('toaster')?.toast({ category, title, description });
      },
      success(title, description) {
        return this.show('success', title, description);
      },
      error(title, description) {
        return this.show('error', title, description);
      }
    };
  }
};
```

## Migrating from 0.x
- Document-level events were removed. Replace
  `document.dispatchEvent(new CustomEvent('basecoat:toast', { detail: { config } }))`
  with `document.getElementById('toaster').toast(config)`. The config fields are unchanged.
- The toaster no longer needs `fixed bottom-4 right-4 z-50` utilities; use `data-align` for placement.
- Use `toaster.closeAll()` and `toastElement.close()` to dismiss toasts programmatically.
- Old button classes (`btn-destructive`, etc.) work only with the compat stylesheet: `@import "basecoat-css/compat";`.
