# Item Component Usage

## Overview
The item component is a flexible row for displaying content: optional media (icon, avatar, image), a title and description, and trailing actions or metadata. Use it for lists, notifications, settings rows, and navigation links. It is CSS-only.

Use `field` for form controls and validation; use `item` for display content, actions and navigation rows.

## Required JavaScript
None. Item is pure CSS. (If you put an item inside an interactive component such as a dropdown menu, that component's script is required.)

## Basic Usage

### Basic Item
```html
<article class="item" data-variant="outline">
  <section>
    <h3>Basic Item</h3>
    <p>A simple item with title and description.</p>
  </section>
  <aside>
    <button class="btn" data-variant="outline" data-size="sm">Action</button>
  </aside>
</article>
```

### Link Item
`<a class="item">` gets a hover background.
```html
<a href="#" class="item" data-variant="outline" data-size="sm">
  <figure><svg class="size-5"><!-- badge-check icon --></svg></figure>
  <section><h3>Your profile has been verified.</h3></section>
  <aside><svg class="size-4"><!-- chevron-right icon --></svg></aside>
</a>
```

## Variants

### Style Variants
```html
<article class="item">...</article>                         <!-- default: transparent, no border -->
<article class="item" data-variant="outline">...</article>  <!-- visible border -->
<article class="item" data-variant="muted">...</article>    <!-- muted background -->
```

### Sizes
```html
<article class="item" data-variant="outline">...</article>               <!-- default -->
<article class="item" data-variant="outline" data-size="sm">...</article> <!-- compact -->
<article class="item" data-variant="outline" data-size="xs">...</article> <!-- most compact -->
```

## Examples

### Icon
```html
<article class="item" data-variant="outline">
  <figure><svg><!-- shield-alert icon --></svg></figure>
  <section>
    <h3>Security Alert</h3>
    <p>New login detected from unknown device.</p>
  </section>
  <aside><button class="btn" data-variant="outline" data-size="sm">Review</button></aside>
</article>
```

### Avatar
```html
<article class="item" data-variant="outline">
  <figure>
    <span class="avatar" data-size="lg"><img src="https://github.com/evilrabbit.png" alt="Evil Rabbit" /></span>
  </figure>
  <section>
    <h3>Evil Rabbit</h3>
    <p>Last seen 5 months ago</p>
  </section>
  <aside>
    <button class="btn rounded-full" data-variant="outline" data-size="icon-sm" aria-label="Invite Evil Rabbit"><svg><!-- plus icon --></svg></button>
  </aside>
</article>
```

### Image with Trailing Metadata
A second `<section>` shrinks to its content, useful for durations or counts.
```html
<a href="#" class="item" data-variant="outline">
  <figure><img src="cover.jpg" alt="Midnight City Lights" /></figure>
  <section><h3>Midnight City Lights</h3><p>Neon Dreams</p></section>
  <section><p>3:45</p></section>
</a>
```

### Group
```html
<div class="item-group" role="list">
  <article class="item" role="listitem">
    <figure><span class="avatar"><img src="https://github.com/shadcn.png" alt="@shadcn" /></span></figure>
    <section><h3>shadcn</h3><p>shadcn@vercel.com</p></section>
    <aside>
      <button class="btn rounded-full" data-variant="ghost" data-size="icon" aria-label="Add shadcn"><svg><!-- plus --></svg></button>
    </aside>
  </article>
  <!-- more items; an <hr> between items renders a divider -->
</div>
```

### Header (card grid)
```html
<div class="item-group grid grid-cols-1 gap-4 sm:grid-cols-3" role="list">
  <article class="item" data-variant="outline" role="listitem">
    <header><img class="aspect-square w-full rounded-sm object-cover" src="model.jpg" alt="v0-1.5-sm" /></header>
    <section><h3>v0-1.5-sm</h3><p>Everyday tasks and UI generation.</p></section>
  </article>
</div>
```

### External Link
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="item" data-variant="outline">
  <section>
    <h3>External resource</h3>
    <p>Opens in a new tab with security attributes.</p>
  </section>
  <aside><svg class="size-4"><!-- external-link icon --></svg></aside>
</a>
```

### Inside a Dropdown Menu
```html
<button type="button" role="menuitem">
  <span class="item border-0 p-0 shadow-none" data-size="xs">
    <figure><span class="avatar" data-size="sm"><img src="https://github.com/shadcn.png" alt="@shadcn" /></span></figure>
    <section class="gap-0">
      <h3>shadcn</h3>
      <p class="leading-none">shadcn@vercel.com</p>
    </section>
  </span>
</button>
```

## Structure and Attribute Reference

| Element | Required | Description |
| --- | --- | --- |
| `<article class="item">` / `<a class="item">` | Yes | Item root. Any semantic element works. |
| `<figure>` | Optional | Media: icon, avatar or image (`img` is cropped to cover). |
| `<section>` | Yes | Primary content. `h2`/`h3`/`h4` title (clamped to 1 line) and `p` description (clamped to 2 lines, muted). |
| `<aside>` | Optional | Actions or trailing metadata. |
| `<header>` / `<footer>` | Optional | Full-width regions above/below the row. |
| `<div class="item-group" role="list">` | Optional | Groups items vertically; use `role="listitem"` on child items. |

| Attribute | Values | Description |
| --- | --- | --- |
| `data-variant` | (none), `outline`, `muted` | Visual style. |
| `data-size` | (none), `sm`, `xs` | Padding/density. |

## Accessibility
- Use `<a>` for navigation and `<button>` inside `<aside>` for actions; don't make the whole `<article>` clickable with JS.
- Use `role="list"` / `role="listitem"` for groups of non-list elements.
- Icon-only action buttons need `aria-label`.
- Pick heading levels (`h2`–`h4`) that fit the page outline.
- External links should use `rel="noopener noreferrer"`.

## Best Practices
- Keep titles short; long titles are truncated to one line.
- Use `data-variant="outline"` for standalone items and the default variant inside groups.
- Use `data-size="sm"` or `xs` for dense lists and menus.
- Prefer one primary action per item.
