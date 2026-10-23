# Dialog Component Usage

## Overview
The dialog component creates a window overlaid on the primary window or another dialog, rendering content underneath as "inert". It uses the native HTML `<dialog>` element and `showModal()`, which provides native modality, focus handling, and Escape-to-close without component JavaScript.

For confirmations that require an explicit choice (no close button, no backdrop dismiss), use the **alert-dialog** component (`class="alert-dialog"`).

## Key Characteristics
- Modal overlay that blocks interaction with the background
- Uses native `<dialog>` element for better accessibility
- Native keyboard and focus management (Escape closes, focus is trapped)
- Can contain forms, content, and interactive elements
- No Basecoat JavaScript required

## HTML Structure

### Basic Dialog Structure
```html
<dialog id="dialog-id" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description" onclick="if (event.target === this) this.close()">
  <div>
    <header>
      <h2 id="dialog-title">Dialog Title</h2>
      <p id="dialog-description">Dialog description</p>
    </header>
    <section>
      <!-- Dialog content -->
    </section>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="button" class="btn">Confirm</button>
    </footer>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Close dialog" onclick="this.closest('dialog').close()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
  </div>
</dialog>
```

## Component Elements

| Element | Required | Description |
| --- | --- | --- |
| `<button onclick="dialog.showModal()">` | Optional | Trigger. Uses the native `HTMLDialogElement.showModal()` method. |
| `<dialog class="dialog" id="...">` | Yes | Native modal dialog. Add `aria-labelledby` / `aria-describedby` when title and description exist. `onclick="if (event.target === this) this.close()"` enables backdrop-click close. |
| `<div>` | Yes | Content surface (direct child of `<dialog>`). Add width utilities such as `sm:max-w-sm` for custom sizes. |
| `<header>` | Optional | Holds the `<h2>` title and `<p>` description. |
| `<section>` | Optional | Body/content area. Add overflow utilities to make it scroll. |
| `<footer>` | Optional | Action area. Stacks on small screens, aligns to the end on larger screens. |
| `<button aria-label="Close dialog">` | Optional | Close button, placed as the last child of the inner `<div>`; positioned in the corner automatically. You can also wrap a button in `<form method="dialog">`. |

## Implementation Examples

### Basic Modal Dialog
```html
<!-- Trigger Button -->
<button type="button" onclick="document.getElementById('example-dialog').showModal()" class="btn" data-variant="outline">
  Open Dialog
</button>

<!-- Dialog -->
<dialog id="example-dialog" class="dialog" aria-labelledby="example-dialog-title" aria-describedby="example-dialog-description" onclick="if (event.target === this) this.close()">
  <div class="sm:max-w-sm">
    <header>
      <h2 id="example-dialog-title">Edit Profile</h2>
      <p id="example-dialog-description">Update your profile information</p>
    </header>
    <section>
      <form class="grid gap-4">
        <div role="group" class="field">
          <label for="example-dialog-name">Name</label>
          <input type="text" id="example-dialog-name" placeholder="Enter name" autofocus />
        </div>
        <div role="group" class="field">
          <label for="example-dialog-email">Email</label>
          <input type="email" id="example-dialog-email" placeholder="Enter email" />
        </div>
      </form>
    </section>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="button" class="btn" onclick="this.closest('dialog').close()">Save Changes</button>
    </footer>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Close dialog" onclick="this.closest('dialog').close()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
  </div>
</dialog>
```

### Confirmation (use Alert Dialog)
```html
<button type="button" onclick="document.getElementById('delete-dialog').showModal()" class="btn" data-variant="destructive">
  Delete Item
</button>

<dialog id="delete-dialog" class="alert-dialog" aria-labelledby="delete-dialog-title" aria-describedby="delete-dialog-description">
  <div>
    <header>
      <h2 id="delete-dialog-title">Confirm Deletion</h2>
      <p id="delete-dialog-description">Are you sure you want to delete this item? This action cannot be undone.</p>
    </header>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="button" class="btn" data-variant="destructive" onclick="confirmDelete()">Delete</button>
    </footer>
  </div>
</dialog>
```
See `alert-dialog` usage for full details.

### Simple Content Dialog
```html
<dialog id="info-dialog" class="dialog" aria-labelledby="info-dialog-title" onclick="if (event.target === this) this.close()">
  <div>
    <header>
      <h2 id="info-dialog-title">About This Feature</h2>
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
      <button type="button" class="btn" onclick="this.closest('dialog').close()">Got it</button>
    </footer>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Close dialog" onclick="this.closest('dialog').close()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
  </div>
</dialog>
```

### Form Dialog with Validation
```html
<dialog id="signup-dialog" class="dialog" aria-labelledby="signup-title" onclick="if (event.target === this) this.close()">
  <div class="sm:max-w-md">
    <header>
      <h2 id="signup-title">Create Account</h2>
    </header>
    <section>
      <form id="signup-form" class="grid gap-4">
        <div role="group" class="field">
          <label for="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div role="group" class="field">
          <label for="signup-email">Email</label>
          <input type="email" id="signup-email" required />
        </div>
        <div role="group" class="field">
          <label for="signup-password">Password</label>
          <input type="password" id="signup-password" required />
        </div>
      </form>
    </section>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="submit" form="signup-form" class="btn">Create Account</button>
    </footer>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Close dialog" onclick="this.closest('dialog').close()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
  </div>
</dialog>
```

### Scrollable Content / Sticky Footer
```html
<dialog id="terms-dialog" class="dialog" aria-labelledby="terms-dialog-title" onclick="if (event.target === this) this.close()">
  <div>
    <header>
      <h2 id="terms-dialog-title">Terms of Service</h2>
    </header>
    <section class="-mx-4 max-h-[50vh] overflow-y-auto px-4 scrollbar">
      <p class="mb-4 leading-normal">Long content...</p>
    </section>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Close</button>
    </footer>
  </div>
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
function closeDialog(el) {
  el.closest('dialog').close();
}
```

### Dialog Event Handling
These are native `<dialog>` events (Basecoat adds no custom dialog events).
```javascript
const dialog = document.getElementById('my-dialog');

// Listen for dialog close
dialog.addEventListener('close', function() {
  console.log('Dialog closed with return value:', dialog.returnValue);
});

// Close on backdrop click (same as the inline onclick attribute)
dialog.addEventListener('click', function(e) {
  if (e.target === dialog) {
    dialog.close();
  }
});

// Prevent Escape from closing
dialog.addEventListener('cancel', function(e) {
  e.preventDefault();
});
```

### Form Handling in Dialogs
```javascript
function handleFormSubmit(form) {
  const formData = new FormData(form);
  console.log('Form data:', Object.fromEntries(formData));

  // Close dialog after successful submission
  form.closest('dialog').close('submitted');
}

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  if (this.checkValidity()) {
    handleFormSubmit(this);
  }
});
```

## Accessibility Guidelines

### ARIA Attributes
`showModal()` already exposes the dialog as modal, so `aria-modal` is not needed.
```html
<dialog class="dialog"
        id="accessible-dialog"
        aria-labelledby="accessible-dialog-title"
        aria-describedby="accessible-dialog-description">
  <div>
    <header>
      <h2 id="accessible-dialog-title">Accessible Dialog</h2>
      <p id="accessible-dialog-description">This dialog follows accessibility best practices</p>
    </header>
    <!-- content -->
  </div>
</dialog>
```

### Focus Management
`showModal()` moves focus into the dialog and traps it. Use the `autofocus` attribute to choose the initially focused control:
```html
<input type="text" id="example-dialog-name" autofocus />
```
Focus returns to the previously focused element when the dialog closes.

### Keyboard Navigation
- **Escape**: Closes the dialog (fires the native `cancel` event)
- **Tab / Shift+Tab**: Cycles focus within the dialog

## Best Practices

### User Experience
- Provide a close button or a Cancel action
- Use clear, descriptive titles and descriptions
- Keep dialog content focused and concise
- Provide clear action buttons with appropriate labels

### Accessibility
- Reference the title and description with `aria-labelledby` / `aria-describedby`
- Give icon-only close buttons an `aria-label`
- Ensure adequate color contrast for all text

### Performance
- Load dialog content lazily when possible
- Avoid nesting dialogs unless absolutely necessary

### Content Guidelines
- Use sentence case for titles and buttons
- Keep button labels action-oriented and specific
- Group related form fields logically

## Dialog Variations

### No Close Button
```html
<dialog class="dialog" id="notice-dialog" aria-labelledby="notice-dialog-title" onclick="if (event.target === this) this.close()">
  <div>
    <header>
      <h2 id="notice-dialog-title">Confirm Action</h2>
      <p>Are you sure you want to proceed with this action?</p>
    </header>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close('no')">No</button>
      <button type="button" class="btn" onclick="this.closest('dialog').close('yes')">Yes</button>
    </footer>
  </div>
</dialog>
```

### Loading Dialog
```html
<dialog class="dialog" id="loading-dialog" aria-label="Processing">
  <div>
    <section class="flex flex-col items-center gap-4 py-8">
      <svg aria-label="Loading" role="status" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
      <p>Processing your request...</p>
    </section>
  </div>
</dialog>
```

## Migrating from 0.x
- The inner `<article>` wrapper is now a plain `<div>`.
- Button classes changed: `btn-outline` becomes `class="btn" data-variant="outline"`, `btn-destructive` becomes `class="btn" data-variant="destructive"`, `btn-icon` becomes `class="btn" data-size="icon"` (the close button uses `data-variant="ghost" data-size="icon-sm"`).
- The close button is no longer positioned with `absolute top-4 right-4`; place it last inside the inner `<div>`.
- The `.form` wrapper is gone: wrap each control in `<div role="group" class="field">`.
- Confirmation dialogs should use `class="alert-dialog"`.
- To keep old button classes working during migration, load `@import "basecoat-css/compat";` after Basecoat.
