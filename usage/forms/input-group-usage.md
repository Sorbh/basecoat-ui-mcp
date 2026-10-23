# Input Group Component Usage

## Overview
Input group wraps a native `input`, `textarea` or `select` in a shared shell so you can add icons, text, keyboard hints, buttons or spinners inline (start/end) or as header/footer rows. The native control inside becomes borderless; the `.input-group` root draws the border, focus ring and invalid state.

**JavaScript required:** None. Only interactive components placed inside the group (e.g. a Dropdown Menu) need their own script (`dropdown-menu.js` or `all.js`).

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/input-group.css`.

## Basic Usage

### Icon and Text Addons
```html
<div class="input-group">
  <input type="text" placeholder="Search..." aria-label="Search" />
  <span data-align="start" aria-hidden="true"><!-- search icon --></span>
  <span data-align="end">12 results</span>
</div>
```
Addons can appear before or after the control in the markup; `data-align` controls placement.

### With a Field Label
```html
<div role="group" class="field">
  <label for="email">Email</label>
  <div class="input-group">
    <input id="email" type="email" placeholder="Enter your email" />
    <span data-align="start" aria-hidden="true"><!-- mail icon --></span>
  </div>
  <p>We'll never share your email.</p>
</div>
```

## Variants and Examples

### Text Prefix / Suffix
```html
<div class="input-group">
  <input type="text" placeholder="0.00" aria-label="Amount" />
  <span data-align="start">$</span>
  <span data-align="end">USD</span>
</div>

<div class="input-group">
  <input type="text" placeholder="example" aria-label="Domain" />
  <span data-align="start">https://</span>
  <span data-align="end">.com</span>
</div>
```

### Buttons
```html
<div class="input-group">
  <input type="text" readonly value="https://x.com/shadcn" aria-label="Profile URL" />
  <button type="button" class="btn" data-variant="ghost" data-size="icon-xs" data-align="end" aria-label="Copy"><!-- copy icon --></button>
</div>

<div class="input-group">
  <input type="text" placeholder="Type to search..." aria-label="Search" />
  <button type="button" class="btn" data-size="xs" data-variant="secondary" data-align="end">Search</button>
</div>
```

### Keyboard Hint
```html
<div class="input-group">
  <input type="text" placeholder="Search..." aria-label="Search" />
  <span data-align="start" aria-hidden="true"><!-- search icon --></span>
  <span data-align="end"><kbd class="kbd">⌘K</kbd></span>
</div>
```

### Loading Spinner
```html
<div class="input-group">
  <input type="text" placeholder="Searching..." aria-label="Search" />
  <span data-align="end">
    <svg aria-label="Loading" role="status" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
  </span>
</div>
```

### Header / Footer (Vertical Orientation)
Set `data-orientation="vertical"` on the root and use `<header>` / `<footer>` addon rows.
```html
<div class="input-group" data-orientation="vertical">
  <textarea placeholder="Write a comment..." aria-label="Comment"></textarea>
  <footer data-align="end">
    <span>0/280</span>
    <button type="button" class="btn ml-auto" data-size="sm">Post</button>
  </footer>
</div>

<div class="input-group" data-orientation="vertical">
  <textarea class="font-mono text-sm" placeholder="console.log('Hello, world!');" aria-label="Code"></textarea>
  <header data-align="start">
    <span class="font-mono">script.js</span>
  </header>
</div>
```

### Custom Control
Mark non-standard controls with `data-control` so they get the inner-control styles.
```html
<div class="input-group" data-orientation="vertical">
  <textarea data-control class="field-sizing-content min-h-16 resize-none" placeholder="Autoresize textarea..." aria-label="Message"></textarea>
  <footer data-align="end">
    <button type="button" class="btn ml-auto" data-size="sm">Submit</button>
  </footer>
</div>
```

### Invalid and Disabled
```html
<div class="input-group">
  <input type="email" value="wrong-email" aria-invalid="true" aria-label="Email" />
  <span data-align="start" aria-hidden="true"><!-- mail icon --></span>
</div>

<div class="input-group">
  <input type="text" placeholder="Disabled" disabled aria-label="Disabled input" />
</div>
```

### Rounded Shell
Override the radius with a CSS variable utility: `class="input-group [--radius:9999px]"`.

## Attribute and Class Reference

| Selector / Attribute | Purpose |
|---|---|
| `<div class="input-group">` | Root shell (border, focus ring, invalid state). Add `role="group"` + label only if the group itself needs a name |
| `<input>`, `<textarea>`, `<select>` | Native control, rendered borderless |
| `[data-control]` | Escape hatch for custom controls |
| `<span>`, `<svg>`, `<kbd>` | Text / icon addons |
| `<button class="btn">`, `<div role="group">` | Interactive addons (use `data-size="xs"`, `icon-xs`, `sm`) |
| `data-align="start"` / `"end"` | Inline placement (logical, flips in RTL). Aliases: `inline-start`, `inline-end` |
| `data-orientation="vertical"` | Enables `<header>` / `<footer>` block rows |
| `<header data-align="start">`, `<footer data-align="end">` | Block addon rows. Aliases: `block-start`, `block-end` |

## Accessibility
- The native control still needs a label: a `<label for>` in a surrounding `.field`, or `aria-label`.
- Mark decorative icons `aria-hidden="true"`.
- Icon-only buttons need `aria-label`.
- Spinners should use `role="status"` and `aria-label="Loading"`.
- Use `aria-invalid="true"` on the control for errors and link error text with `aria-describedby`.
- Group multiple related buttons on one side with `<div role="group" aria-label="...">`.

## Best Practices
- Keep addons short; long text squeezes the input.
- Use `start` for context (icons, prefixes) and `end` for actions or results.
- Use Button Group instead when you need an input joined to standalone full-size buttons.
- Use `data-align` logical values so layouts work in RTL without changes.
