# Toast Component Usage

## Overview
The toast component displays temporary notification messages to users. It supports different types (success, info, warning, error) and automatically dismisses after a set duration.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/toast.min.js" defer></script>
```

## HTML Structure

### Toast Container
```html
<!-- Toast container - place once in your document -->
<div id="toaster" class="toaster fixed bottom-4 right-4 z-50" data-align="end"></div>
```

### Toast Container Positions
```html
<!-- Bottom right (default) -->
<div id="toaster" class="toaster fixed bottom-4 right-4 z-50" data-align="end"></div>

<!-- Bottom left -->
<div id="toaster" class="toaster fixed bottom-4 left-4 z-50" data-align="start"></div>

<!-- Top right -->
<div id="toaster" class="toaster fixed top-4 right-4 z-50" data-align="end"></div>

<!-- Top left -->
<div id="toaster" class="toaster fixed top-4 left-4 z-50" data-align="start"></div>

<!-- Top center -->
<div id="toaster" class="toaster fixed top-4 left-1/2 transform -translate-x-1/2 z-50" data-align="center"></div>
```

## JavaScript API

### Basic Toast Function
```javascript
function showToast(category, title, description, duration = 5000) {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: category, // success, info, warning, error
        title: title,
        description: description,
        duration: duration // milliseconds
      }
    }
  }));
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
</head>
<body>
  <!-- Toast container -->
  <div id="toaster" class="toaster fixed bottom-4 right-4 z-50" data-align="end"></div>
  
  <!-- Trigger buttons -->
  <button class="btn" onclick="showSuccessToast()">Show Success</button>
  <button class="btn-destructive" onclick="showErrorToast()">Show Error</button>

  <script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/toast.min.js" defer></script>
  <script>
    function showSuccessToast() {
      document.dispatchEvent(new CustomEvent('basecoat:toast', {
        detail: {
          config: {
            category: 'success',
            title: 'Success!',
            description: 'Your changes have been saved.',
            duration: 5000
          }
        }
      }));
    }

    function showErrorToast() {
      document.dispatchEvent(new CustomEvent('basecoat:toast', {
        detail: {
          config: {
            category: 'error',
            title: 'Error!',
            description: 'Failed to save changes.',
            duration: 5000
          }
        }
      }));
    }
  </script>
</body>
</html>
```

### Form Submission with Toast
```html
<form id="contact-form" class="form grid gap-4">
  <div class="grid gap-2">
    <label for="name" class="label">Name</label>
    <input type="text" id="name" class="input" required>
  </div>
  <div class="grid gap-2">
    <label for="email" class="label">Email</label>
    <input type="email" id="email" class="input" required>
  </div>
  <button type="submit" class="btn">Submit</button>
</form>

<div id="toaster" class="toaster fixed bottom-4 right-4 z-50" data-align="end"></div>

<script>
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  try {
    // Simulate form submission
    const formData = new FormData(this);
    
    // Show loading toast (optional)
    showToast('info', 'Processing...', 'Submitting your form.');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success toast
    showToast('success', 'Form Submitted!', 'Thank you for your message.');
    
    // Reset form
    this.reset();
    
  } catch (error) {
    // Show error toast
    showToast('error', 'Submission Failed', 'Please try again later.');
  }
});

function showToast(category, title, description) {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: category,
        title: title,
        description: description,
        duration: 5000
      }
    }
  }));
}
</script>
```

### Advanced Toast Configuration
```javascript
// Toast with custom duration
function showCustomToast() {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: 'warning',
        title: 'Session Expiring',
        description: 'Your session will expire in 2 minutes.',
        duration: 10000 // 10 seconds
      }
    }
  }));
}

// Persistent toast (long duration)
function showPersistentToast() {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: 'info',
        title: 'System Maintenance',
        description: 'Scheduled maintenance tonight at 2 AM.',
        duration: 30000 // 30 seconds
      }
    }
  }));
}

// Quick toast (short duration)
function showQuickToast() {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: 'success',
        title: 'Copied!',
        description: 'Text copied to clipboard.',
        duration: 2000 // 2 seconds
      }
    }
  }));
}
```

### Toast Utility Class
```javascript
class ToastManager {
  static show(category, title, description, duration = 5000) {
    document.dispatchEvent(new CustomEvent('basecoat:toast', {
      detail: {
        config: {
          category,
          title,
          description,
          duration
        }
      }
    }));
  }

  static success(title, description) {
    this.show('success', title, description);
  }

  static error(title, description) {
    this.show('error', title, description);
  }

  static warning(title, description) {
    this.show('warning', title, description);
  }

  static info(title, description) {
    this.show('info', title, description);
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
- **Color**: Green theme
- **Icon**: Checkmark or success icon
- **Examples**: "Saved successfully", "Account created", "Email sent"

### Error Toast
- **Use for**: Failed operations, validation errors, system errors
- **Color**: Red theme
- **Icon**: Error or warning icon
- **Examples**: "Save failed", "Network error", "Invalid input"

### Warning Toast
- **Use for**: Cautionary messages, potential issues, confirmations needed
- **Color**: Orange/yellow theme
- **Icon**: Warning or alert icon
- **Examples**: "Session expiring", "Unsaved changes", "Confirm deletion"

### Info Toast
- **Use for**: General information, updates, neutral notifications
- **Color**: Blue theme
- **Icon**: Info or lightbulb icon
- **Examples**: "New feature available", "System maintenance", "Tip"

## Best Practices

### Content Guidelines
- **Keep titles short**: 1-3 words maximum
- **Make descriptions clear**: Explain what happened and next steps
- **Use action-oriented language**: "Saved successfully" vs "Save complete"
- **Avoid technical jargon**: Use user-friendly language

### UX Considerations
- **Don't overuse toasts**: Limit to important notifications
- **Use appropriate durations**: 3-5 seconds for most, longer for complex messages
- **Consider user context**: Success messages can be shorter than errors
- **Provide alternatives**: Don't rely solely on toasts for critical information

### Timing Guidelines
```javascript
const TOAST_DURATIONS = {
  quick: 2000,    // Simple confirmations (copied, saved)
  normal: 5000,   // Standard messages (success, info)
  long: 8000,     // Warnings, complex information
  persistent: 15000 // Critical errors, important announcements
};
```

### Accessibility Considerations
- Toasts should not interfere with keyboard navigation
- Important information should also be available elsewhere
- Consider screen reader announcements for critical toasts
- Provide alternative ways to access the same information

## Error Handling

### Graceful Fallbacks
```javascript
function safeShowToast(category, title, description) {
  try {
    if (typeof document !== 'undefined') {
      document.dispatchEvent(new CustomEvent('basecoat:toast', {
        detail: {
          config: { category, title, description, duration: 5000 }
        }
      }));
    }
  } catch (error) {
    console.warn('Toast system not available:', error);
    // Fallback: show alert or log to console
    console.log(`${category.toUpperCase()}: ${title} - ${description}`);
  }
}
```

### Validation
```javascript
function validateToast(category, title, description) {
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
// Custom hook for toasts
function useToast() {
  const showToast = useCallback((category, title, description) => {
    document.dispatchEvent(new CustomEvent('basecoat:toast', {
      detail: {
        config: { category, title, description, duration: 5000 }
      }
    }));
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
        document.dispatchEvent(new CustomEvent('basecoat:toast', {
          detail: {
            config: { category, title, description, duration: 5000 }
          }
        }));
      },
      success(title, description) {
        this.show('success', title, description);
      },
      error(title, description) {
        this.show('error', title, description);
      }
    };
  }
};
```