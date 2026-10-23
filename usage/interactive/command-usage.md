# Command Component Usage

## Overview
The command component is a searchable menu of actions (like a ⌘K palette). It filters items as you type, supports grouped items, keyboard shortcuts hints, and full keyboard navigation. It can be rendered inline (standalone) or inside a native `<dialog>` as a command palette.

## Required JavaScript
Command needs JavaScript for filtering and keyboard navigation. Use either the full bundle:

```html
<script src="/assets/js/all.min.js" defer></script>
```

or the Basecoat runtime plus the Command script:

```html
<script src="/assets/js/basecoat.min.js" defer></script>
<script src="/assets/js/command.min.js" defer></script>
```

`command.js` is included in `all.min.js`. Components are initialized automatically (also when added to the DOM later) through the selector `.command:not([data-command-initialized])`.

## Basic Usage

### Standalone Command
```html
<div id="my-command" class="command border" aria-label="Command menu">
  <header>
    <svg><!-- search icon --></svg>
    <input type="text" id="my-command-input" placeholder="Type a command or search..." autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-controls="my-command-menu" />
  </header>
  <div role="menu" id="my-command-menu" aria-orientation="vertical" data-empty="No results found.">
    <div role="group" aria-labelledby="my-command-suggestions">
      <span role="heading" id="my-command-suggestions">Suggestions</span>
      <div role="menuitem" data-filter="Calendar" data-keywords="date event schedule">
        <svg><!-- icon --></svg>
        <span>Calendar</span>
      </div>
      <div role="menuitem" data-filter="Search Emoji" data-keywords="emoji smile reaction">
        <span>Search Emoji</span>
      </div>
      <div role="menuitem" aria-disabled="true">
        <span>Calculator</span>
      </div>
    </div>
    <hr role="separator" />
    <div role="group" aria-labelledby="my-command-settings">
      <span role="heading" id="my-command-settings">Settings</span>
      <div role="menuitem" data-filter="Profile" data-keywords="user account">
        <span>Profile</span>
        <span data-shortcut>⌘P</span>
      </div>
    </div>
  </div>
</div>
```

### Command Dialog (Palette)
Wrap a single `.command` in `<dialog class="command-dialog">` and open it with the native `showModal()`.

```html
<button type="button" class="btn" data-variant="outline" onclick="document.getElementById('command-palette').showModal()">Open Menu</button>
<dialog id="command-palette" class="command-dialog" aria-label="Command menu" onclick="if (event.target === this) this.close()">
  <div class="command">
    <header>
      <svg><!-- search icon --></svg>
      <input type="text" id="command-palette-input" placeholder="Type a command or search..." autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-controls="command-palette-menu" />
    </header>
    <div role="menu" id="command-palette-menu" aria-orientation="vertical" data-empty="No results found.">
      <div role="menuitem" data-filter="Calendar">Calendar</div>
      <div role="menuitem" data-filter="Search Emoji">Search Emoji</div>
    </div>
  </div>
</dialog>
```

Clicking a visible item inside a `dialog.command-dialog` closes the dialog automatically (unless the item has `data-keep-command-open`). The `onclick` on the dialog closes it on backdrop click; Escape is handled natively by `<dialog>`.

## Examples

### Shortcuts
```html
<div role="menuitem" data-filter="Billing" data-keywords="invoice payment">
  <svg><!-- icon --></svg>
  <span>Billing</span>
  <span data-shortcut>⌘B</span>
</div>
```

### Navigation Items
Use `<a role="menuitem">` for navigation and `<div role="menuitem">` for actions.
```html
<a role="menuitem" href="/settings" data-filter="Settings">Settings</a>
```

### Checked Item with Indicator
```html
<div role="menuitem" data-checked="true">
  <span>Dark mode</span>
  <span data-indicator><svg><!-- check icon --></svg></span>
</div>
```

### Always-visible Item
`data-force` keeps an item visible regardless of the search term (e.g. "Create new...").
```html
<div role="menuitem" data-force>Create new project</div>
```

### Scrollable List
Long menus scroll inside `role="menu"`; the active item is scrolled into view during keyboard navigation. Separate groups with `<hr role="separator" />`.

### Manual Filtering (remote search)
Add `data-filter="manual"` to the `.command` root when your app owns filtering. Basecoat then skips its own text matching and only treats items with `aria-hidden="true"` as hidden.

```html
<div class="command" data-filter="manual">...</div>
```

### RTL
Add `dir="rtl"` to the command root or an ancestor.

## HTML Structure Reference

| Element | Required | Description |
| --- | --- | --- |
| `<dialog class="command-dialog">` | Optional | Dialog variant. Wraps one direct child `<div class="command">`. Give it `aria-label` or `aria-labelledby`. |
| `<div class="command">` | Yes | Root. Add `border` when standalone. `data-filter="manual"` disables built-in filtering. |
| `<header>` | Yes | Wraps the search icon and input. |
| `<input type="text" role="combobox">` | Yes | Filter input. Use `aria-expanded="true"` and `aria-controls="{MENU_ID}"`. |
| `<div role="menu" id="{MENU_ID}">` | Yes | Command list. `data-empty` sets the empty-state text. |
| `<div role="group" aria-labelledby="{HEADING_ID}">` | Optional | Groups items; hidden automatically when all its items are filtered out. |
| `<span role="heading" id="{HEADING_ID}">` | Optional | Group heading. |
| `<div role="menuitem">` / `<a role="menuitem">` | Yes | Selectable item. |
| `<span data-shortcut>` | Optional | Shortcut hint aligned to the inline end. |
| `<span data-indicator>` | Optional | Indicator, visible with `data-checked="true"` or `aria-selected="true"`. |
| `<hr role="separator">` | Optional | Separator; hidden while filtering. |

### Menu Item Attributes

| Attribute | Description |
| --- | --- |
| `data-filter` | Text used for matching (defaults to the item's text content). |
| `data-keywords` | Extra space/comma separated search terms. |
| `data-force` | Item always stays visible. |
| `data-keep-command-open` | Clicking the item does not close the surrounding command dialog. |
| `aria-disabled="true"` / `data-disabled="true"` / `disabled` | Item is skipped by keyboard navigation and not selectable. |

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `element.refresh()` | Method | Rescans command items after children change inside the existing `role="menu"` list, then re-applies the current filter. |
| `window.basecoat.refresh(element)` | Method | Same as above via the runtime. |
| `window.basecoat.init('command')` | Method | Initializes any uninitialized `.command` elements. |
| `basecoat:initialized` | Event | Dispatched on the `.command` element after initialization. |

```js
const command = document.getElementById('my-command');
const menu = command.querySelector('[role="menu"]');
menu.insertAdjacentHTML('beforeend', '<div role="menuitem" data-filter="New item">New item</div>');
command.refresh();
```

Items selected by keyboard (Enter) trigger a native `click`, so attach normal click handlers to menu items to run actions.

## Keyboard Interaction

| Key | Action |
| --- | --- |
| Typing | Filters items by `data-filter`/text and `data-keywords`. |
| ArrowDown / ArrowUp | Move the active item. |
| Home / End | Jump to first / last visible item. |
| Enter | Clicks the active item. |
| Escape | Closes the command dialog (native `<dialog>`). |

## Accessibility
- The input uses `role="combobox"` with `aria-controls` pointing to the menu; `aria-activedescendant` is set when the active item has an `id`, so give items ids for best screen reader support.
- Label the root or dialog with `aria-label` / `aria-labelledby`.
- Link groups to their headings with `aria-labelledby`.
- Filtered-out items get `aria-hidden="true"`.
- Disabled items should use `aria-disabled="true"`.

## Best Practices
- Use unique ids for each input, menu and heading on a page.
- Add `data-keywords` for synonyms so users find commands by intent.
- Keep group headings short and items action-oriented.
- Call `refresh()` after adding or removing items dynamically instead of re-creating the component.
- Use `data-filter="manual"` for server-side or index-based search.
