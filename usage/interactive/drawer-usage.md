# Drawer Component Usage (BETA)

> **BETA:** The Drawer is a new component in Basecoat 1.0 and its markup or behavior may still change.

## Overview
The drawer is a panel that slides in from an edge of the viewport. Basecoat maps shadcn/ui's Vaul Drawer to a native `<dialog>` element, so modality, focus handling and inert page content come from the browser. The Drawer script adds safe backdrop-click close and lets the exit animation finish before calling the native `close()`.

Drag gestures, snap points and the drag handle are intentionally **not** included. Drawers close with outside click, Escape, or explicit close controls.

## Required JavaScript
Use either the full bundle:

```html
<script src="/assets/js/all.min.js" defer></script>
```

or the Basecoat runtime plus the Drawer script:

```html
<script src="/assets/js/basecoat.min.js" defer></script>
<script src="/assets/js/drawer.min.js" defer></script>
```

`drawer.js` is included in `all.min.js`. Drawers are initialized automatically via the selector `.drawer:not([data-drawer-initialized])`. Without the script the drawer still opens and closes, but without the exit animation or backdrop-click close.

## Basic Usage

### Bottom Drawer (default)
```html
<button type="button" class="btn" data-variant="outline" onclick="document.getElementById('my-drawer').showModal()">Open Drawer</button>
<dialog id="my-drawer" class="drawer" aria-labelledby="my-drawer-title" aria-describedby="my-drawer-description">
  <article>
    <header class="mx-auto w-full max-w-sm">
      <h2 id="my-drawer-title">Move Goal</h2>
      <p id="my-drawer-description">Set your daily activity goal.</p>
    </header>
    <section class="px-4">
      <div class="mx-auto w-full max-w-sm">
        <!-- content -->
      </div>
    </section>
    <footer class="mx-auto w-full max-w-sm">
      <button type="button" class="btn" onclick="this.closest('dialog').close()">Submit</button>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
    </footer>
  </article>
</dialog>
```

## Variants

### Sides
Use `data-side` to choose the viewport edge: `top`, `right`, `bottom` (default), or `left`.

```html
<dialog id="drawer-right" class="drawer" data-side="right" aria-labelledby="drawer-right-title">
  <article>
    <header>
      <h2 id="drawer-right-title">Settings</h2>
      <p>Adjust your preferences.</p>
    </header>
    <section class="px-4"><!-- content --></section>
    <footer>
      <button type="button" class="btn" onclick="this.closest('dialog').close()">Save</button>
    </footer>
  </article>
</dialog>
```

- `bottom` / `top`: full width, up to `80vh` tall. Add e.g. `class="max-h-[50vh]"` to the `<article>` to limit height.
- `left` / `right`: `w-3/4` up to `max-w-sm`, full height.

### Scrollable Content
Put long content in `<section>`; header and footer stay visible while the body scrolls.

### RTL
Drawer sides are physical viewport sides (`left` stays left). Content spacing and text alignment follow `dir="rtl"`.

## HTML Structure Reference

| Element | Required | Description |
| --- | --- | --- |
| `<button onclick="drawer.showModal()">` | Optional | Trigger. Use the native `HTMLDialogElement.showModal()`. |
| `<dialog class="drawer">` | Yes | Native modal drawer. Add `aria-labelledby` / `aria-describedby`. |
| `<article>` | Yes | Drawer content surface (the first child, which is animated). |
| `<header>` | Optional | Title (`h2`) and description (`p`). |
| `<section>` | Optional | Scrollable body. |
| `<footer>` | Optional | Action area pinned after the body. |

### Attributes

| Attribute | Element | Description |
| --- | --- | --- |
| `data-side="top\|right\|bottom\|left"` | `dialog.drawer` | Edge the drawer slides from. Omit for bottom. |
| `data-drawer-initialized` | `dialog.drawer` | Set by JS after initialization. |
| `data-closing` | `dialog.drawer` | Set by JS while the exit animation runs. |

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `drawer.showModal()` | Method | Native dialog open. |
| `drawer.close(returnValue?)` | Method | Patched by Basecoat to play the exit animation, then call the native close. Respects `prefers-reduced-motion`. |
| `close` | Event | Native dialog event, fired after the animation finishes. |
| `basecoat:initialized` | Event | Dispatched on the drawer after initialization. |

```js
const drawer = document.getElementById('my-drawer');
drawer.addEventListener('close', () => console.log('closed:', drawer.returnValue));
drawer.showModal();
```

Escape (the `cancel` event) and a click that both starts and ends on the backdrop call the animated `close()`.

## Accessibility
- Native `<dialog>` with `showModal()` traps focus and makes the rest of the page inert.
- Always provide a title referenced by `aria-labelledby`; add `aria-describedby` for the description.
- Provide a visible close/cancel button; there is no drag-to-dismiss.
- Icon-only buttons need `aria-label`.
- Animations are skipped when the user prefers reduced motion.

## Best Practices
- Use bottom drawers for mobile-friendly quick actions and side drawers for navigation or settings panels.
- Close from inside with `this.closest('dialog').close()` so the exit animation runs.
- Keep footers short (one primary and one secondary action).
- Use the Dialog component instead when you need a centered modal.
