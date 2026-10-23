# Empty Component Usage

## Overview
Empty displays an empty state: when a list has no items, a search returns nothing, a page is not found, or content is loading. Add `class="empty"` to a semantic container; the component styles its `header`, `figure`, heading, description and `footer` children.

**JavaScript required:** None. Empty is CSS only.

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/empty.css`.

## Basic Usage

### Empty State with Actions
```html
<section class="empty">
  <header>
    <figure><!-- lucide folder-code icon --></figure>
    <h3>No Projects Yet</h3>
    <p>You haven't created any projects yet. Get started by creating your first project.</p>
  </header>
  <footer>
    <div class="flex gap-2">
      <button type="button" class="btn">Create Project</button>
      <button type="button" class="btn" data-variant="outline">Import Project</button>
    </div>
    <a href="#" class="btn text-muted-foreground" data-variant="link" data-size="sm">Learn More</a>
  </footer>
</section>
```

## Variants and Examples

### Outline
```html
<section class="empty border border-dashed">
  <header>
    <figure><!-- cloud icon --></figure>
    <h3>Cloud Storage Empty</h3>
    <p>Upload files to your cloud storage to access them anywhere.</p>
  </header>
  <footer>
    <button type="button" class="btn" data-variant="outline" data-size="sm">Upload Files</button>
  </footer>
</section>
```

### Background
```html
<section class="empty h-full bg-muted/30">
  <header>
    <figure><!-- bell icon --></figure>
    <h3>No Notifications</h3>
    <p class="max-w-xs text-pretty">You're all caught up. New notifications will appear here.</p>
  </header>
</section>
```

### Avatar
```html
<section class="empty">
  <header>
    <figure class="size-12 rounded-full">
      <img class="grayscale" alt="@shadcn" src="https://github.com/shadcn.png" />
    </figure>
    <h3>User Offline</h3>
    <p>This user is currently offline.</p>
  </header>
  <footer>
    <button type="button" class="btn" data-size="sm">Leave Message</button>
  </footer>
</section>
```

### With Input Group (404 page)
```html
<section class="empty">
  <header>
    <h3>404 - Not Found</h3>
    <p>The page you're looking for doesn't exist. Try searching below.</p>
  </header>
  <footer>
    <div class="input-group sm:w-3/4">
      <input type="search" placeholder="Try searching for pages..." aria-label="Search pages" />
      <span data-align="start" aria-hidden="true"><!-- search icon --></span>
      <span data-align="end"><kbd class="kbd">/</kbd></span>
    </div>
    <p>Need help? <a href="#">Contact support</a></p>
  </footer>
</section>
```

### Loading State
Use a spinner in the figure (see spinner usage).
```html
<div class="empty w-full">
  <header>
    <figure><svg aria-label="Loading" role="status" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg></figure>
    <h3>Processing your request</h3>
    <p>Please wait while we process your request.</p>
  </header>
</div>
```

## Structure Reference

| Element | Required | Purpose |
|---|---|---|
| `<section class="empty">` | yes | Empty-state container (any semantic element works) |
| `<header>` | yes | Groups media, title and description |
| `<figure>` | optional | Icon, avatar, image or avatar group. An icon-only figure (`svg:only-child`) gets the icon badge style automatically |
| `<h2>` / `<h3>` / `<h4>` | yes | Title |
| `<p>` | optional | Description |
| `<footer>` or `<section>` | optional | Actions and supporting content |

Style with Tailwind utilities on the root: `border border-dashed`, `bg-muted/30`, `h-full`. Add `dir="rtl"` for right-to-left.

## Accessibility
- Use a real heading level that fits the page outline.
- Mark purely decorative icons with `aria-hidden="true"`; give meaningful images `alt` text.
- Make the primary action a `<button>` or `<a>` with clear text.
- For loading states, use `role="status"` and `aria-label="Loading"` on the spinner.

## Best Practices
- Explain why the area is empty and what the user can do next.
- Offer one primary action; keep secondary actions visually lighter (`outline`, `link`).
- Keep copy short: a title plus one sentence.
- Use different empty states for "no data yet", "no results" and "error".
