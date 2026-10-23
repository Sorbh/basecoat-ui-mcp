# Button Group Component Usage

## Overview
The button group joins related buttons (and inputs, selects or menus) into a single visual control with shared borders and rounded outer corners. It is a pure CSS component: add `class="button-group"` to a wrapper and use regular `.btn` children.

**JavaScript required:** None for the group itself. Only if you put interactive Basecoat components inside it (Dropdown Menu, Popover, Select) do you need their scripts (`dropdown-menu.js`, `popover.js`, `select.js`, or `all.js`).

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/button-group.css` plus `basecoat-css/components/button.css`.

## Basic Usage

### Simple Button Group
```html
<div role="group" aria-label="Message actions" class="button-group">
  <button type="button" class="btn" data-variant="outline">Archive</button>
  <button type="button" class="btn" data-variant="outline">Report</button>
</div>
```

## Variants

### Vertical Orientation
```html
<div role="group" aria-label="Zoom controls" class="button-group h-fit" data-orientation="vertical">
  <button type="button" class="btn" data-variant="outline" data-size="icon" aria-label="Zoom in"><!-- plus icon --></button>
  <button type="button" class="btn" data-variant="outline" data-size="icon" aria-label="Zoom out"><!-- minus icon --></button>
</div>
```

### Sizes
Size the child buttons; the group follows them.
```html
<div role="group" class="button-group">
  <button type="button" class="btn" data-variant="outline" data-size="sm">Small</button>
  <button type="button" class="btn" data-variant="outline" data-size="sm">Button</button>
  <button type="button" class="btn" data-variant="outline" data-size="icon-sm" aria-label="Add"><!-- plus icon --></button>
</div>

<div role="group" class="button-group">
  <button type="button" class="btn" data-variant="outline" data-size="lg">Large</button>
  <button type="button" class="btn" data-variant="outline" data-size="lg">Button</button>
  <button type="button" class="btn" data-variant="outline" data-size="icon-lg" aria-label="Add"><!-- plus icon --></button>
</div>
```

### Nested Groups
Nest groups to keep controls joined inside each group while adding space between groups.
```html
<div role="group" aria-label="Pagination controls" class="button-group">
  <div role="group" class="button-group">
    <button type="button" class="btn" data-variant="outline" data-size="sm">1</button>
    <button type="button" class="btn" data-variant="outline" data-size="sm">2</button>
    <button type="button" class="btn" data-variant="outline" data-size="sm">3</button>
  </div>
  <div role="group" class="button-group">
    <button type="button" class="btn" data-variant="outline" data-size="icon-sm" aria-label="Previous page"><!-- arrow-left icon --></button>
    <button type="button" class="btn" data-variant="outline" data-size="icon-sm" aria-label="Next page"><!-- arrow-right icon --></button>
  </div>
</div>
```

### Separator / Split Button
Use `<hr role="separator" />` between items for a visible divider (useful with non-outline variants).
```html
<div role="group" class="button-group">
  <button type="button" class="btn" data-variant="secondary">Button</button>
  <hr role="separator" />
  <button type="button" class="btn" data-variant="secondary" data-size="icon" aria-label="Add"><!-- plus icon --></button>
</div>
```

### With Input
```html
<div role="group" aria-label="Search" class="button-group">
  <input type="text" class="input" placeholder="Search..." aria-label="Search query" />
  <button type="button" class="btn" data-variant="outline" aria-label="Search"><!-- search icon --></button>
</div>
```

### With Dropdown Menu (requires `dropdown-menu.js`)
```html
<div role="group" class="button-group">
  <button type="button" class="btn" data-variant="outline">Follow</button>
  <div id="follow-menu" class="dropdown-menu">
    <button type="button" id="follow-menu-trigger" aria-label="More follow options" aria-haspopup="menu" aria-controls="follow-menu-menu" aria-expanded="false" class="btn" data-variant="outline" data-size="icon"><!-- chevron-down icon --></button>
    <div id="follow-menu-popover" data-popover aria-hidden="true" data-align="end">
      <div role="menu" id="follow-menu-menu" aria-labelledby="follow-menu-trigger">
        <div role="menuitem">Mute Conversation</div>
        <div role="menuitem">Mark as Read</div>
        <hr role="separator" />
        <div role="menuitem">Delete Conversation</div>
      </div>
    </div>
  </div>
</div>
```

### RTL
Add `dir="rtl"` to the group or an ancestor. Flip directional icons explicitly (e.g. `class="rtl:rotate-180"` on arrow icons).

## Attribute and Class Reference

| Selector / Attribute | Where | Purpose |
|---|---|---|
| `class="button-group"` | wrapper | Joins direct children into one control |
| `role="group"` + `aria-label` | wrapper | Exposes the group to assistive tech |
| `data-orientation="vertical"` | wrapper | Stacks children vertically |
| `<hr role="separator" />` | child | Visible divider between items |
| `<span>`, `<label>`, `<output>` | direct child | Non-interactive text segments, styled to match |
| `<div>` | direct child | Left unstyled for custom layouts |
| `.btn` with `data-variant` / `data-size` | child | Standard 1.0 button API (`outline`, `secondary`, `ghost`; `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`) |

## Accessibility
- Always use `role="group"` and provide `aria-label` (or `aria-labelledby`) describing the set of actions.
- Icon-only buttons need `aria-label`.
- Use `type="button"` for buttons that should not submit a form.
- Use `aria-pressed` on toggle-style buttons to expose their state.

## Best Practices
- Group only closely related actions; keep 2 to 5 items per group.
- Use the same variant and size for all buttons in a group.
- Use nested groups instead of extra margin utilities when you need spacing between sets.
- Prefer `outline` for joined groups; add a separator when using `secondary` or filled variants.
