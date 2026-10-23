# Tooltip Component Usage

## Overview
Tooltips show a short text hint on hover and keyboard focus. Basecoat tooltips are **CSS-only and text-only**: add a `data-tooltip` attribute to any element. No JavaScript is required. For rich content (headings, forms, buttons) use a [Popover](popover-usage.md).

## HTML Structure
Attributes on the trigger element:
- `data-tooltip="..."` - Tooltip text (required)
- `data-side="top|bottom|left|right|inline-start|inline-end"` - Position (optional, defaults to `top`)
- `data-align="start|center|end"` - Alignment (optional, defaults to `center`)

## Basic Implementation

```html
<button class="btn" data-variant="outline" data-tooltip="Add to library">Hover</button>
```

## Sides and Alignment

```html
<button class="btn" data-variant="outline" data-tooltip="Tooltip" data-side="top">Top</button>
<button class="btn" data-variant="outline" data-tooltip="Tooltip" data-side="bottom">Bottom</button>
<button class="btn" data-variant="outline" data-tooltip="Right side tooltip" data-side="right">Right</button>
<button class="btn" data-variant="outline" data-tooltip="Bottom aligned tooltip" data-side="bottom" data-align="start">Bottom + Start</button>
<button class="btn" data-variant="outline" data-tooltip="Tooltip" data-side="inline-end">Inline End</button>
```

`inline-start` / `inline-end` follow the document direction and flip under `dir="rtl"`.

## Icon Button
Icon-only buttons should also carry an `aria-label`.

```html
<button class="btn" data-variant="ghost" data-size="icon" data-tooltip="Additional information" aria-label="Info"><svg class="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></button>
```

## Disabled Button
Disabled buttons do not receive hover events, so put the tooltip on a wrapper.

```html
<span class="inline-block" data-tooltip="This feature is currently unavailable">
  <button class="btn" data-variant="outline" disabled>Disabled</button>
</span>
```

## Link

```html
<a href="#" class="text-primary text-sm underline-offset-4 hover:underline" data-tooltip="Click to read the documentation">Learn more</a>
```

## CSS Requirements
Included in every Basecoat bundle (`basecoat.cdn.min.css` or a style pack). With granular imports:

```css
@import "tailwindcss";
@import "basecoat-css/base.css";
@import "basecoat-css/components/tooltip.css";
@import "basecoat-css/styles/vega.css";
```

## Migrating from 0.3.x
- The `data-tooltip` / `data-side` / `data-align` attributes are unchanged.
- Update the trigger classes: `btn-outline` becomes `class="btn" data-variant="outline"`, `btn-icon-ghost` becomes `class="btn" data-variant="ghost" data-size="icon"`.

## Accessibility Notes
- Tooltip text is a visual hint; keep essential information in the visible label or `aria-label`
- Tooltips appear on keyboard focus as well as hover, so use them on focusable elements
- Keep text short; tooltips cannot contain markup
