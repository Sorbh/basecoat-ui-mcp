# Dropdown Menu Component Usage

## Overview
A dropdown menu shows a list of actions or options when its trigger button is clicked. It supports groups with headings, keyboard shortcuts (`<kbd>`), icons, checkbox items, radio items, disabled items and a destructive item style. Menus are positioned inline relative to the `.dropdown-menu` wrapper and driven by `dropdown-menu.js`.

## HTML Structure
- `<div class="dropdown-menu">` - Relative wrapper (give it an `id`)
  - `<button aria-haspopup="menu" aria-controls="{MENU_ID}" aria-expanded="false">` - Trigger. The script toggles `aria-expanded` and handles keyboard navigation
  - `<div data-popover aria-hidden="true">` - Menu popover
    - `data-side="top|right|bottom|left|inline-start|inline-end"` and `data-align="start|center|end"` (optional)
    - `<div role="menu" aria-labelledby="{TRIGGER_ID}">` - Container for items, groups and separators
      - `<div role="group" aria-labelledby="{HEADING_ID}">` + `<div role="heading" id="{HEADING_ID}">` - Group with label (optional)
      - `<div role="menuitem">` - Action item. `aria-disabled="true"` disables it; `data-variant="destructive"` styles it as dangerous
      - `<div role="menuitemcheckbox" aria-checked="true|false">` - Checkbox item with a `<span data-indicator>` child for the check icon
      - `<div role="menuitemradio" aria-checked="true|false">` - Radio item (one per group) with a `<span data-indicator>` child
      - `<kbd>` - Shortcut hint, aligned to the inline end (optional)
      - `<hr role="separator">` - Divider (optional)

## Basic Implementation

```html
<div id="dropdown-basic" class="dropdown-menu">
  <button type="button" id="dropdown-basic-trigger" aria-haspopup="menu" aria-controls="dropdown-basic-menu" aria-expanded="false" class="btn" data-variant="outline">Open</button>
  <div id="dropdown-basic-popover" data-popover aria-hidden="true" class="min-w-32">
    <div role="menu" id="dropdown-basic-menu" aria-labelledby="dropdown-basic-trigger">
      <div role="group" aria-labelledby="dropdown-basic-account">
        <div role="heading" id="dropdown-basic-account">My Account</div>
        <div role="menuitem">Profile</div>
        <div role="menuitem">
          <span>Settings</span>
          <kbd>⌘S</kbd>
        </div>
      </div>
      <hr role="separator" />
      <div role="menuitem">Support</div>
      <div role="menuitem" aria-disabled="true">API</div>
    </div>
  </div>
</div>
```

## With Checkboxes
The script flips `aria-checked` on click; the `data-indicator` icon shows only when checked.

```html
<div id="dropdown-checkboxes" class="dropdown-menu">
  <button type="button" id="dropdown-checkboxes-trigger" aria-haspopup="menu" aria-controls="dropdown-checkboxes-menu" aria-expanded="false" class="btn" data-variant="outline">View</button>
  <div id="dropdown-checkboxes-popover" data-popover aria-hidden="true" class="w-40">
    <div role="menu" id="dropdown-checkboxes-menu" aria-labelledby="dropdown-checkboxes-trigger">
      <div role="group" aria-labelledby="dropdown-checkboxes-label">
        <div role="heading" id="dropdown-checkboxes-label">Appearance</div>
        <div role="menuitemcheckbox" aria-checked="true">
          <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
          Status Bar
        </div>
        <div role="menuitemcheckbox" aria-checked="false">
          <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
          Panel
        </div>
      </div>
    </div>
  </div>
</div>
```

## With Radio Group
Selecting a radio item unchecks the other radio items in the same `role="group"` (or menu).

```html
<div id="dropdown-radio" class="dropdown-menu">
  <button type="button" id="dropdown-radio-trigger" aria-haspopup="menu" aria-controls="dropdown-radio-menu" aria-expanded="false" class="btn" data-variant="outline">Position</button>
  <div id="dropdown-radio-popover" data-popover aria-hidden="true" class="min-w-32">
    <div role="menu" id="dropdown-radio-menu" aria-labelledby="dropdown-radio-trigger">
      <div role="group" aria-labelledby="dropdown-radio-label">
        <div role="heading" id="dropdown-radio-label">Panel Position</div>
        <div role="menuitemradio" aria-checked="true">
          <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
          Top
        </div>
        <div role="menuitemradio" aria-checked="false">
          <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
          Bottom
        </div>
      </div>
    </div>
  </div>
</div>
```

## Icons and Destructive Item

```html
<div id="dropdown-actions" class="dropdown-menu">
  <button type="button" id="dropdown-actions-trigger" aria-haspopup="menu" aria-controls="dropdown-actions-menu" aria-expanded="false" class="btn" data-variant="outline">Actions</button>
  <div id="dropdown-actions-popover" data-popover aria-hidden="true" data-align="end" class="min-w-32">
    <div role="menu" id="dropdown-actions-menu" aria-labelledby="dropdown-actions-trigger">
      <div role="menuitem"><svg class="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
        Edit
      </div>
      <hr role="separator" />
      <div role="menuitem" data-variant="destructive"><svg class="lucide lucide-trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></svg>
        Delete
      </div>
    </div>
  </div>
</div>
```

## JavaScript Requirements

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/dropdown-menu.min.js" defer></script>
```

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `dropdown.open()` | Method | Opens the menu |
| `dropdown.close()` | Method | Closes the menu |
| `dropdown.toggle()` | Method | Toggles the menu |
| `dropdown.refresh()` | Method | Rescans items after you change children of the existing `role="menu"` |

```javascript
const dropdown = document.getElementById('dropdown-actions');

// React to item clicks (the menu closes itself afterwards)
dropdown.querySelector('[role="menu"]').addEventListener('click', (event) => {
  const item = event.target.closest('[role^="menuitem"]');
  if (item && item.getAttribute('aria-disabled') !== 'true') {
    console.log('Clicked:', item.textContent.trim());
  }
});

// After adding items dynamically
dropdown.refresh();
```

## Migrating from 0.3.x
- Replace the native `popover` attribute with `data-popover aria-hidden="true"`.
- Use `<hr role="separator">` instead of plain `<hr>`; no utility classes on items are needed.
- Checkbox/radio items no longer contain `<input>` elements: use `aria-checked` + `<span data-indicator>`. The script toggles state for you.
- Use `data-variant="destructive"` on an item instead of `text-destructive`.
- The trigger is `class="btn" data-variant="outline"` (not `btn-outline`).

## Accessibility Notes
- Pair `aria-controls` on the trigger with the menu `id`, and `aria-labelledby` on the menu with the trigger `id`
- Use `aria-disabled="true"` (not `disabled`) on disabled items
- Label groups with `role="heading"` + `aria-labelledby`
- Arrow keys, Home/End, Enter/Space and Escape are handled by the script
