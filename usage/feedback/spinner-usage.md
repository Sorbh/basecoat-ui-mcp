# Spinner Usage

## Overview
Basecoat has no dedicated Spinner component. A spinner is the Lucide `loader-circle` icon with Tailwind's `animate-spin` utility. It composes with Button, Badge, Input Group, Item and Empty, which handle spacing automatically.

**JavaScript required:** None.

**CSS:** No dedicated component CSS. Tailwind alone is enough; use a full Basecoat bundle (e.g. `basecoat-css/vega.css`) when composing with other Basecoat components.

## Basic Usage

### Simple Spinner
```html
<svg aria-label="Loading" role="status" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
```

## Variants and Examples
In the examples below, `<!-- spinner -->` stands for the SVG above.

### Sizes
Use `size-*` utilities.
```html
<svg class="size-3 animate-spin lucide lucide-loader-circle" ...></svg>
<svg class="size-4 animate-spin lucide lucide-loader-circle" ...></svg>
<svg class="size-6 animate-spin lucide lucide-loader-circle" ...></svg>
<svg class="size-8 animate-spin lucide lucide-loader-circle" ...></svg>
```

### In a Button
Place the spinner before or after the label and disable the button while loading. (A ready-made snippet exists as `forms/button-loading`.)
```html
<button type="button" class="btn" data-size="sm" disabled>
  <!-- spinner -->
  Loading...
</button>
<button type="button" class="btn" data-variant="outline" data-size="sm" disabled>
  <!-- spinner -->
  Please wait
</button>
```

### In a Badge
```html
<span class="badge" data-variant="secondary">
  <!-- spinner -->
  Updating
</span>
```

### In an Input Group
```html
<div class="input-group">
  <input placeholder="Send a message..." aria-label="Message" disabled />
  <span data-align="end"><!-- spinner --></span>
</div>
```

### In an Item
```html
<article class="item bg-muted/50 border-transparent">
  <figure><!-- spinner --></figure>
  <section><h3>Processing payment...</h3></section>
  <aside class="tabular-nums text-sm">$100.00</aside>
</article>
```

### In an Empty State
```html
<div class="empty w-full">
  <header>
    <figure><!-- spinner --></figure>
    <h3>Processing your request</h3>
    <p>Please wait while we process your request. Do not refresh the page.</p>
  </header>
  <section><button type="button" class="btn" data-variant="outline" data-size="sm">Cancel</button></section>
</div>
```

## Class and Attribute Reference

| Class / Attribute | Purpose |
|---|---|
| `animate-spin` | Tailwind rotation animation |
| `lucide lucide-loader-circle` | Icon identity (any icon works; `lucide-loader` is a common alternative) |
| `size-3` ... `size-8` | Spinner size |
| `role="status"` | Announces a live loading status |
| `aria-label="Loading"` | Accessible name for the status |

## Accessibility
- Add `role="status"` and `aria-label="Loading"` (or a more specific label) to standalone spinners.
- If visible text already says "Loading...", you may hide the spinner with `aria-hidden="true"` instead, to avoid duplicate announcements.
- Disable buttons while their action is in progress and set `aria-busy="true"` on regions being updated.
- Tailwind's `motion-reduce:animate-none` can be added for users who prefer reduced motion.

## Best Practices
- Use a spinner for short, indeterminate waits; use Progress when you know the percentage.
- Pair the spinner with text describing what is loading.
- Keep the spinner next to the content or action it relates to, not in a distant corner.
