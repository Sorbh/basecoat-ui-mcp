# Popover Component Usage

## Overview
A popover displays rich content (text, forms, actions) in a floating panel anchored to a trigger button. Basecoat popovers are positioned inline relative to the `.popover` wrapper and are driven by `popover.js`. For a list of actions use a [Dropdown Menu](dropdown-menu-usage.md); for short text hints use a [Tooltip](tooltip-usage.md).

## HTML Structure
- `<div class="popover">` - Relative wrapper for the trigger and content (give it an `id`)
- `<button type="button" aria-expanded="false" aria-controls="{POPOVER_ID}">` - Trigger. The script toggles `aria-expanded` and opens/closes the content
- `<div data-popover id="{POPOVER_ID}" aria-hidden="true">` - Popover content
  - `data-side="top|right|bottom|left|inline-start|inline-end"` (optional)
  - `data-align="start|center|end"` (optional)
  - Optional `<header>` with `<h4>` title and `<p>` description

The trigger is a regular Basecoat button: `class="btn" data-variant="outline"`.

## Basic Implementation

```html
<div id="popover-basic" class="popover">
  <button id="popover-basic-trigger" type="button" aria-expanded="false" aria-controls="popover-basic-popover" class="btn" data-variant="outline">Open</button>
  <div id="popover-basic-popover" data-popover aria-hidden="true" class="w-72">
    <header>
      <h4>Title</h4>
      <p>Description text here.</p>
    </header>
  </div>
</div>
```

## With Form

```html
<div id="popover-form" class="popover">
  <button id="popover-form-trigger" type="button" aria-expanded="false" aria-controls="popover-form-popover" class="btn" data-variant="outline">Open popover</button>
  <div id="popover-form-popover" data-popover aria-hidden="true" class="w-72">
    <header>
      <h4>Dimensions</h4>
      <p>Set the dimensions for the layer.</p>
    </header>
    <form class="grid gap-2" onsubmit="event.preventDefault()">
      <div class="grid grid-cols-3 items-center gap-4">
        <label for="popover-form-width">Width</label>
        <input type="text" id="popover-form-width" value="100%" class="input col-span-2 h-8" autofocus />
      </div>
      <div class="grid grid-cols-3 items-center gap-4">
        <label for="popover-form-height">Height</label>
        <input type="text" id="popover-form-height" value="25px" class="input col-span-2 h-8" />
      </div>
    </form>
  </div>
</div>
```

## Side and Alignment

```html
<div id="popover-top" class="popover">
  <button id="popover-top-trigger" type="button" aria-expanded="false" aria-controls="popover-top-popover" class="btn" data-variant="outline">Top</button>
  <div id="popover-top-popover" data-popover aria-hidden="true" data-side="top" data-align="center" class="w-40">
    <p>Top side.</p>
  </div>
</div>

<div id="popover-end" class="popover">
  <button id="popover-end-trigger" type="button" aria-expanded="false" aria-controls="popover-end-popover" class="btn" data-variant="outline">End</button>
  <div id="popover-end-popover" data-popover aria-hidden="true" data-align="end" class="w-56">
    <p>Aligned to end.</p>
  </div>
</div>
```

`start`/`end` and `inline-start`/`inline-end` are logical: they flip automatically under `dir="rtl"`.

## JavaScript Requirements

Load the full bundle:

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

Or the runtime plus the popover script:

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/popover.min.js" defer></script>
```

Popovers close on outside click and on `Escape`. To close one from inside its content, click the trigger again, e.g. `document.getElementById('popover-basic-trigger').click()`.

Popovers inserted after page load are initialized automatically. If a framework restores cached DOM (e.g. HTMX history restore), call `window.basecoat.init('popover', { force: true })` or `window.basecoat.initAll({ force: true })`.

## Migrating from 0.3.x
- Do not use the native `popover` attribute or `popovertarget`; use `data-popover` + `aria-controls`.
- Remove manual border/shadow/padding utilities from the content; the style pack provides them.
- Replace `btn-outline` / `btn-sm` with `class="btn" data-variant="outline"` / `class="btn" data-size="sm"`.

## Accessibility Notes
- Always pair `aria-controls` on the trigger with the content `id`
- Keep `aria-expanded="false"` and `aria-hidden="true"` in the initial markup; the script updates them
- Use `type="button"` on the trigger so it never submits a surrounding form
