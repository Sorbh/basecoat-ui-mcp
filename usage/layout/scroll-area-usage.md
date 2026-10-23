# Scroll Area Component Usage

## Overview
Scroll area gives native scrolling regions consistent, themed scrollbars across browsers. Add `scrollbar` (default width) or `scrollbar-sm` (thin) to an element that already scrolls with `overflow-auto`, `overflow-y-auto`, or `overflow-x-auto`.

It does not wrap content, replace browser scroll behavior, or require JavaScript.

> In Basecoat 1.0 the thin variant is `scrollbar-sm`. The old `scrollbar-thin` class is legacy (compat CSS only); don't use it.

## Required JavaScript
None. Scroll area is pure CSS (included in the base CSS).

## Basic Usage

### Vertical Scroll
```html
<div class="scrollbar h-72 overflow-y-auto rounded-md border p-4">
  Your scrollable content here.
</div>
```

### Framed with a Card
```html
<div class="card h-72 p-0">
  <div class="scrollbar h-full overflow-y-auto p-4">
    <div class="space-y-4">
      <h4 class="text-sm leading-none font-medium">Tags</h4>
      <div class="text-sm">
        <div class="border-b py-2">v1.2.0-beta.50</div>
        <div class="border-b py-2">v1.2.0-beta.49</div>
        <div class="py-2">v1.2.0-beta.48</div>
      </div>
    </div>
  </div>
</div>
```

## Examples

### Horizontal
```html
<div class="card w-full max-w-sm p-0">
  <div class="scrollbar overflow-x-auto">
    <div class="flex w-max gap-4 p-4">
      <figure class="shrink-0">
        <div class="aspect-[3/4] w-40 rounded-md bg-muted"></div>
        <figcaption class="text-muted-foreground pt-2 text-xs">Photo by Ornella Binni</figcaption>
      </figure>
      <figure class="shrink-0">
        <div class="aspect-[3/4] w-40 rounded-md bg-muted"></div>
        <figcaption class="text-muted-foreground pt-2 text-xs">Photo by Tom Byrom</figcaption>
      </figure>
    </div>
  </div>
</div>
```

### Thin
Use `scrollbar-sm` for compact regions like menus, listboxes, sidebars and command results.
```html
<div class="card w-full max-w-sm p-1">
  <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Recent files</div>
  <div class="scrollbar-sm max-h-48 overflow-y-auto">
    <button type="button" class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
      <span>project-roadmap.md</span>
      <span class="text-xs text-muted-foreground">2m</span>
    </button>
    <!-- more rows -->
  </div>
</div>
```

### RTL
Set `dir="rtl"` on the scrollable element or an ancestor; the vertical scrollbar moves to the left.
```html
<div dir="rtl" class="scrollbar h-72 overflow-y-auto p-4">...</div>
```

## Class and Token Reference

| Class | Description |
| --- | --- |
| `scrollbar` | Standard-width themed scrollbar. |
| `scrollbar-sm` | Thin themed scrollbar. |

| CSS variable | Default | Description |
| --- | --- | --- |
| `--scrollbar-track` | `transparent` | Track color. |
| `--scrollbar-thumb` | `var(--border)` | Thumb color. |
| `--scrollbar-width` | `0.625rem` | Width for `scrollbar`. |
| `--scrollbar-sm-width` | `0.375rem` | Width for `scrollbar-sm`. |
| `--scrollbar-radius` | `9999px` | Thumb radius. |

## Accessibility
- Native scrolling keeps keyboard, touch and screen reader behavior intact.
- Make scrollable regions keyboard-focusable when they contain no focusable children: add `tabindex="0"` plus `role="region"` and an `aria-label`.
- Don't hide important content behind horizontal scrolling without a visual hint.

## Best Practices
- Always set a height or max-height (`h-72`, `max-h-48`) and an overflow utility; the class alone does not create scrolling.
- Use `scrollbar-sm` for dense UI, `scrollbar` for main content areas.
- Customize colors via the CSS variables instead of overriding pseudo-elements.
