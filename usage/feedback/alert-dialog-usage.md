# Alert Dialog Component Usage

## Overview
The alert dialog is a modal dialog that interrupts the user with important content and expects a response. It uses a native `<dialog class="alert-dialog">` element opened with `showModal()`. Unlike the regular dialog, it omits the close button and backdrop-click handler so the user must choose an explicit action.

## Key Characteristics
- Native `<dialog>` modality, focus trapping, and Escape handling
- No Basecoat JavaScript required
- Uses the Dialog component CSS (`basecoat-css/components/dialog.css`)
- Optional media `<figure>` for an icon or image
- Compact size via `data-size="sm"`

## HTML Structure

### Basic Alert Dialog
```html
<button type="button" onclick="document.getElementById('demo-alert-dialog').showModal()" class="btn" data-variant="outline">Show Dialog</button>
<dialog id="demo-alert-dialog" class="alert-dialog" aria-labelledby="demo-alert-dialog-title" aria-describedby="demo-alert-dialog-description">
  <div>
    <header>
      <h2 id="demo-alert-dialog-title">Are you absolutely sure?</h2>
      <p id="demo-alert-dialog-description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
    </header>
    <footer>
      <button class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button class="btn" onclick="this.closest('dialog').close()">Continue</button>
    </footer>
  </div>
</dialog>
```

## Component Elements

| Element | Required | Description |
| --- | --- | --- |
| `<button onclick="dialog.showModal()">` | Optional | Trigger button using the native `HTMLDialogElement.showModal()` method. |
| `<dialog class="alert-dialog" id="...">` | Yes | Native modal dialog. Add `aria-labelledby` and `aria-describedby`. Add `data-size="sm"` for the compact size. |
| `<div>` | Yes | Dialog content surface. |
| `<header>` | Yes | Contains the optional `<figure>`, the `<h2>` title, and the optional `<p>` description. |
| `<figure>` | Optional | Media area for an icon or image. |
| `<h2 id="...">` | Yes | Title, referenced from `aria-labelledby`. |
| `<p id="...">` | Optional | Description, referenced from `aria-describedby`. |
| `<footer>` | Yes | Action area with a cancel action and the primary action. |

## Implementation Examples

### With Media
```html
<button type="button" onclick="document.getElementById('alert-dialog-media').showModal()" class="btn" data-variant="outline">Share Project</button>
<dialog id="alert-dialog-media" class="alert-dialog" aria-labelledby="alert-dialog-media-title" aria-describedby="alert-dialog-media-description">
  <div>
    <header>
      <figure><svg class="lucide lucide-circle-fading-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 7.38 16.75" /><path d="M12 8v8" /><path d="M16 12H8" /><path d="M2.5 8.88a10 10 0 0 0 0 6.24" /><path d="M4.64 4.64a10 10 0 0 0 0 14.72" /></svg></figure>
      <h2 id="alert-dialog-media-title">Share this project?</h2>
      <p id="alert-dialog-media-description">Anyone with the link will be able to view and edit this project.</p>
    </header>
    <footer>
      <button class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button class="btn" onclick="this.closest('dialog').close()">Share</button>
    </footer>
  </div>
</dialog>
```

### Destructive
```html
<button type="button" onclick="document.getElementById('alert-dialog-destructive').showModal()" class="btn" data-variant="destructive">Delete Chat</button>
<dialog id="alert-dialog-destructive" class="alert-dialog" aria-labelledby="alert-dialog-destructive-title" aria-describedby="alert-dialog-destructive-description">
  <div>
    <header>
      <figure><svg class="lucide lucide-trash-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></figure>
      <h2 id="alert-dialog-destructive-title">Delete this chat?</h2>
      <p id="alert-dialog-destructive-description">This action cannot be undone. This will permanently delete the chat and remove it from your history.</p>
    </header>
    <footer>
      <button class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button class="btn" data-variant="destructive" onclick="this.closest('dialog').close()">Delete</button>
    </footer>
  </div>
</dialog>
```

### Small
`data-size="sm"` keeps media, title, and description stacked and centers the actions in a two-column footer.
```html
<dialog id="alert-dialog-small" class="alert-dialog" data-size="sm" aria-labelledby="alert-dialog-small-title" aria-describedby="alert-dialog-small-description">
  <div>
    <header>
      <h2 id="alert-dialog-small-title">Invite team members?</h2>
      <p id="alert-dialog-small-description">Send an invitation link to your selected teammates.</p>
    </header>
    <footer>
      <button class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button class="btn" onclick="this.closest('dialog').close()">Invite</button>
    </footer>
  </div>
</dialog>
```

### RTL
Set `dir="rtl"` on the dialog or a parent element.

## JavaScript Control

### Reading the User's Choice
Pass a return value to `close()` and read it from the native `close` event:
```html
<footer>
  <button class="btn" data-variant="outline" onclick="this.closest('dialog').close('cancel')">Cancel</button>
  <button class="btn" data-variant="destructive" onclick="this.closest('dialog').close('confirm')">Delete</button>
</footer>
```

```javascript
const dialog = document.getElementById('alert-dialog-destructive');

dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirm') {
    deleteChat();
  }
});

// Optional: block Escape so the user must click an action
dialog.addEventListener('cancel', (e) => e.preventDefault());
```

### Promise-based Confirm Helper
```javascript
function confirmDialog(id) {
  const dialog = document.getElementById(id);
  dialog.returnValue = '';
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'confirm'), { once: true });
  });
}

// Usage
if (await confirmDialog('alert-dialog-destructive')) {
  deleteChat();
}
```

## Accessibility Guidelines
- Always reference the title and description with `aria-labelledby` and `aria-describedby`
- Put the safe action (Cancel) first and the primary/destructive action last
- Use the destructive button variant for irreversible operations
- Do not add a backdrop-click handler; alert dialogs require an explicit choice

## Best Practices
- Use alert dialogs only for decisions that need immediate attention
- Make the title a direct question ("Delete this chat?")
- Label buttons with the action, not "Yes"/"No"
- Use the regular `dialog` component for forms and general content

## Migrating from 0.x
- 0.x alert dialogs used `<dialog class="dialog">` with an inner `<article>`. In 1.0 use `<dialog class="alert-dialog">` with an inner `<div>`.
- `btn-outline` / `btn-destructive` are now `class="btn" data-variant="outline|destructive"`.
- To keep old class names working temporarily, load `@import "basecoat-css/compat";` after Basecoat.
