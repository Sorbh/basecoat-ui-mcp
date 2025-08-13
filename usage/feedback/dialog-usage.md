# Dialog Component Usage

## Overview
The dialog component creates a window overlaid on the primary window or another dialog, rendering content underneath as "inert". It uses the native HTML `<dialog>` element with enhanced styling and accessibility.

## Key Characteristics
- Modal overlay that blocks interaction with the background
- Uses native `<dialog>` element for better accessibility
- Supports keyboard navigation and focus management
- Can contain forms, content, and interactive elements

## HTML Structure

### Basic Dialog Structure
```html
<dialog id="dialog-id" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
  <article>
    <header>
      <h2 id="dialog-title">Dialog Title</h2>
      <p id="dialog-description">Dialog description</p>
      <button onclick="this.closest('dialog').close()" class="btn-icon absolute top-4 right-4">
        <span>✕</span>
      </button>
    </header>
    <section>
      <!-- Dialog content -->
    </section>
    <footer>
      <button onclick="this.closest('dialog').close()" class="btn-outline">Cancel</button>
      <button class="btn">Confirm</button>
    </footer>
  </article>
</dialog>
```

## Component Elements

### Dialog Container
- `<dialog class="dialog">` - Main dialog element with modal functionality
- `id` attribute for JavaScript control
- `aria-labelledby` and `aria-describedby` for accessibility

### Article Container
- `<article>` - Contains all dialog content and provides proper structure

### Header Section (Optional)
- `<header>` - Contains title, description, and close button
- `<h2>` - Dialog title (referenced by `aria-labelledby`)
- `<p>` - Dialog description (referenced by `aria-describedby`)
- Close button for easy dismissal

### Content Section
- `<section>` - Main content area for forms, text, or other elements

### Footer Section (Optional)
- `<footer>` - Contains action buttons (Cancel, Save, etc.)

## Implementation Examples

### Basic Modal Dialog
```html
<!-- Trigger Button -->
<button onclick="document.getElementById('example-dialog').showModal()" class="btn">
  Open Dialog
</button>

<!-- Dialog -->
<dialog id="example-dialog" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
  <article>
    <header>
      <h2 id="dialog-title">Edit Profile</h2>
      <p id="dialog-description">Update your profile information</p>
      <button onclick="this.closest('dialog').close()" class="btn-icon absolute top-4 right-4">
        <span>✕</span>
      </button>
    </header>
    <section>
      <form class="form grid gap-4">
        <div class="grid gap-2">
          <label for="name" class="label">Name</label>
          <input type="text" id="name" class="input" placeholder="Enter name">
        </div>
        <div class="grid gap-2">
          <label for="email" class="label">Email</label>
          <input type="email" id="email" class="input" placeholder="Enter email">
        </div>
      </form>
    </section>
    <footer>
      <button onclick="this.closest('dialog').close()" class="btn-outline">Cancel</button>
      <button class="btn">Save Changes</button>
    </footer>
  </article>
</dialog>
```

### Alert Dialog
```html
<!-- Trigger Button -->
<button onclick="document.getElementById('delete-dialog').showModal()" class="btn-destructive">
  Delete Item
</button>

<!-- Alert Dialog -->
<dialog class="dialog" id="delete-dialog" aria-labelledby="alert-title" aria-describedby="alert-description">
  <article>
    <header>
      <h2 id="alert-title">Confirm Deletion</h2>
      <p id="alert-description">Are you sure you want to delete this item? This action cannot be undone.</p>
    </header>
    <footer>
      <button class="btn-outline" onclick="document.getElementById('delete-dialog').close()">Cancel</button>
      <button class="btn-destructive" onclick="confirmDelete()">Delete</button>
    </footer>
  </article>
</dialog>
```

### Simple Content Dialog
```html
<dialog id="info-dialog" class="dialog" aria-labelledby="info-title">
  <article>
    <header>
      <h2 id="info-title">About This Feature</h2>
      <button onclick="this.closest('dialog').close()" class="btn-icon absolute top-4 right-4">
        <span>✕</span>
      </button>
    </header>
    <section>
      <p>This feature allows you to manage your account settings and preferences.</p>
      <ul class="list-disc list-inside mt-4">
        <li>Update personal information</li>
        <li>Change privacy settings</li>
        <li>Manage notifications</li>
      </ul>
    </section>
    <footer>
      <button onclick="this.closest('dialog').close()" class="btn">Got it</button>
    </footer>
  </article>
</dialog>
```

### Form Dialog with Validation
```html
<dialog id="signup-dialog" class="dialog" aria-labelledby="signup-title">
  <article>
    <header>
      <h2 id="signup-title">Create Account</h2>
      <button onclick="this.closest('dialog').close()" class="btn-icon absolute top-4 right-4">
        <span>✕</span>
      </button>
    </header>
    <section>
      <form id="signup-form" class="form grid gap-4">
        <div class="grid gap-2">
          <label for="username" class="label">Username</label>
          <input type="text" id="username" class="input" required>
        </div>
        <div class="grid gap-2">
          <label for="signup-email" class="label">Email</label>
          <input type="email" id="signup-email" class="input" required>
        </div>
        <div class="grid gap-2">
          <label for="signup-password" class="label">Password</label>
          <input type="password" id="signup-password" class="input" required>
        </div>
      </form>
    </section>
    <footer>
      <button onclick="this.closest('dialog').close()" class="btn-outline">Cancel</button>
      <button type="submit" form="signup-form" class="btn">Create Account</button>
    </footer>
  </article>
</dialog>
```

## JavaScript Control

### Opening Dialogs
```javascript
// Basic method
document.getElementById('dialog-id').showModal();

// With function
function openDialog(dialogId) {
  document.getElementById(dialogId).showModal();
}

// With event handling
document.querySelector('.open-dialog-btn').addEventListener('click', function() {
  document.getElementById('my-dialog').showModal();
});
```

### Closing Dialogs
```javascript
// Basic method
document.getElementById('dialog-id').close();

// Close with return value
document.getElementById('dialog-id').close('cancelled');

// Close from within dialog
function closeDialog(dialog) {
  dialog.closest('dialog').close();
}
```

### Dialog Event Handling
```javascript
const dialog = document.getElementById('my-dialog');

// Listen for dialog close
dialog.addEventListener('close', function() {
  console.log('Dialog closed with return value:', dialog.returnValue);
});

// Listen for backdrop click
dialog.addEventListener('click', function(e) {
  if (e.target === dialog) {
    dialog.close(); // Close on backdrop click
  }
});

// Prevent backdrop close
dialog.addEventListener('click', function(e) {
  e.stopPropagation();
});
```

### Form Handling in Dialogs
```javascript
function handleFormSubmit(form) {
  const formData = new FormData(form);
  
  // Process form data
  console.log('Form data:', Object.fromEntries(formData));
  
  // Close dialog after successful submission
  form.closest('dialog').close('submitted');
}

// Example with validation
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (this.checkValidity()) {
    handleFormSubmit(this);
  } else {
    // Show validation errors
    console.log('Form validation failed');
  }
});
```

## Accessibility Guidelines

### ARIA Attributes
```html
<dialog class="dialog" 
        id="accessible-dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        aria-modal="true">
  <article>
    <header>
      <h2 id="dialog-title">Accessible Dialog</h2>
      <p id="dialog-description">This dialog follows accessibility best practices</p>
    </header>
    <!-- content -->
  </article>
</dialog>
```

### Focus Management
```javascript
function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.showModal();
  
  // Focus the first focusable element
  const firstFocusable = dialog.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) {
    firstFocusable.focus();
  }
}
```

### Keyboard Navigation
```javascript
dialog.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    dialog.close();
  }
  
  // Tab trapping
  if (e.key === 'Tab') {
    const focusable = dialog.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
```

## Best Practices

### User Experience
- Always provide a close button for better usability
- Use clear, descriptive titles and descriptions
- Keep dialog content focused and concise
- Provide clear action buttons with appropriate labels

### Accessibility
- Use proper ARIA attributes for screen readers
- Implement focus management and keyboard navigation
- Ensure adequate color contrast for all text
- Provide alternative ways to close the dialog

### Performance
- Load dialog content lazily when possible
- Clean up event listeners when dialogs are destroyed
- Use CSS animations for smooth transitions
- Avoid nesting dialogs unless absolutely necessary

### Content Guidelines
- Use sentence case for titles and buttons
- Keep button labels action-oriented and specific
- Provide helpful descriptions for complex dialogs
- Group related form fields logically

## Dialog Variations

### Confirmation Dialog
```html
<dialog class="dialog" id="confirm-dialog">
  <article>
    <header>
      <h2>Confirm Action</h2>
    </header>
    <section>
      <p>Are you sure you want to proceed with this action?</p>
    </section>
    <footer>
      <button class="btn-outline" onclick="this.closest('dialog').close('no')">No</button>
      <button class="btn" onclick="this.closest('dialog').close('yes')">Yes</button>
    </footer>
  </article>
</dialog>
```

### Loading Dialog
```html
<dialog class="dialog" id="loading-dialog">
  <article>
    <section class="text-center py-8">
      <div class="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
      <p>Processing your request...</p>
    </section>
  </article>
</dialog>
```