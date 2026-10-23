# Kbd Component Usage

## Overview
The kbd component displays keyboard keys and shortcuts using the native `<kbd>` element with `class="kbd"`. It is CSS-only and non-interactive (`pointer-events: none`, not selectable).

## Required JavaScript
None. Kbd is pure CSS.

## Basic Usage

### Single Key
```html
<kbd class="kbd">⌘K</kbd>
```

### Modifier Keys
```html
<span class="inline-flex items-center gap-1">
  <kbd class="kbd">⌘</kbd>
  <kbd class="kbd">⇧</kbd>
  <kbd class="kbd">⌥</kbd>
  <kbd class="kbd">⌃</kbd>
</span>
```

### Key Combination
Group keys with an inline wrapper and utilities.
```html
<span class="inline-flex items-center gap-1">
  <kbd class="kbd">Ctrl</kbd>
  <span>+</span>
  <kbd class="kbd">B</kbd>
</span>
```

## Examples

### In Text
```html
<p class="text-muted-foreground text-sm">
  Use <span class="inline-flex items-center gap-1"><kbd class="kbd">Ctrl</kbd><span>+</span><kbd class="kbd">K</kbd></span> to open the command palette
</p>
```

### In a Button
```html
<button class="btn" data-variant="outline">
  Accept
  <kbd class="kbd translate-x-0.5" data-icon="inline-end">⏎</kbd>
</button>
```

### In an Input Group
```html
<div class="input-group">
  <input type="search" placeholder="Search..." />
  <span data-align="start" aria-hidden="true"><svg><!-- search icon --></svg></span>
  <span class="inline-flex items-center gap-1" data-align="end">
    <kbd class="kbd">⌘</kbd>
    <kbd class="kbd">K</kbd>
  </span>
</div>
```

### In a Command Menu
Inside command items, use `<span data-shortcut>⌘P</span>` (see the command component) rather than `.kbd`.

## Class Reference

| Class / Attribute | Description |
| --- | --- |
| `kbd` | Styles a key label. Use on `<kbd>`. |
| `data-icon="inline-end"` | When placed inside a `.btn`, positions the key like a trailing icon. |

## Accessibility
- Use the semantic `<kbd>` element so assistive tech announces keyboard input.
- Symbols like ⌘ ⇧ ⌥ may be read inconsistently; add text alternatives where it matters (e.g. `<kbd class="kbd" aria-label="Command">⌘</kbd>`), or write out the key name.
- Keyboard labels are direction-neutral; use logical utilities (`ms-*`, `me-*`) for surrounding spacing in RTL layouts.

## Best Practices
- Show platform-appropriate shortcuts (⌘ on macOS, Ctrl elsewhere).
- Use one `<kbd>` per key in combinations so each key reads clearly.
- Keep shortcuts in sync with the actual key handlers in your app.
