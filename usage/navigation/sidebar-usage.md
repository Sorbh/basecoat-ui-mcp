# Sidebar Component Usage

## Overview
The sidebar component is an `<aside>` placed next to your page content. Basecoat handles the fixed positioning, the mobile overlay, active states, nested lists and the styling of `details` submenus. Your app still owns the navigation data and the current route.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/sidebar.min.js" defer></script>

<!-- Or load every component script at once -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

## HTML Structure

### Basic Sidebar Structure
```html
<aside id="sidebar" class="sidebar" data-side="left">
  <nav aria-label="Sidebar navigation">
    <section class="scrollbar-sm">
      <div role="group" aria-labelledby="group-label-content-1">
        <h3 id="group-label-content-1">Getting started</h3>
        <ul>
          <li>
            <a href="#" aria-current="page">
              <svg class="lucide lucide-square-terminal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
              <span>Playground</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
              <span>Models</span>
            </a>
          </li>
          <li>
            <details id="submenu-content-1-3">
              <summary aria-controls="submenu-content-1-3-content">
                <span>Settings</span>
              </summary>
              <ul id="submenu-content-1-3-content">
                <li><a href="#"><span>General</span></a></li>
                <li><a href="#"><span>Team</span></a></li>
                <li><a href="#"><span>Billing</span></a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </section>
  </nav>
</aside>
<main>
  <button type="button" class="btn" data-variant="ghost" data-size="icon" aria-label="Toggle sidebar" onclick="document.getElementById('sidebar')?.toggle()">
    <svg class="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></svg>
  </button>
  <h1>Content</h1>
</main>
```

## Component Elements

| Element | Required | Description |
| --- | --- | --- |
| `<aside class="sidebar" id="...">` | Yes | Sidebar root. Supports `data-side="left\|right"`, `data-initial-open="false"`, `data-initial-mobile-open="true"` and `data-breakpoint`. JavaScript manages `aria-hidden`, `inert` and `data-sidebar-initialized`. |
| `<nav aria-label="...">` | Yes | Navigation landmark inside the sidebar. |
| `<header>` | Optional | Branding, workspace switcher or persistent actions (inside `nav`). |
| `<section class="scrollbar-sm">` | Yes | Scrollable content region between the header and footer. |
| `<div role="group" aria-labelledby="...">` | Optional | Named navigation group with a heading (`<h3>`) as label. |
| `<ul>` + `<li>` | Yes | Menu and menu items. Nested lists get their own spacing and border. |
| `<a>` / `<button>` | Yes | Menu item control. Supports `data-variant="default\|outline"`, `data-size="default\|sm\|lg"`, `data-active="true"`, `disabled` (buttons) and `aria-disabled="true"`. Prefer `aria-current="page"` on the current link. |
| `<details>` / `<summary>` | Optional | Collapsible submenu. Put the nested `<ul>` right after `<summary>`; `summary` takes the same active, variant and size attributes. |
| `<hr role="separator">` | Optional | Separator between groups. |
| `<footer>` | Optional | Account controls or status (inside `nav`). |
| `<main>` | Yes | Page content. Must be the sibling immediately after the sidebar to receive the desktop margin. |

### Root Options
| Attribute | Description |
| --- | --- |
| `data-side="left"` / `"right"` | Physical viewport side (not flipped in RTL). |
| `data-initial-open="false"` | Start closed on desktop. |
| `data-initial-mobile-open="true"` | Start open on mobile. |
| `data-breakpoint="..."` | Width at which the sidebar switches between mobile and desktop behavior. |

## Implementation Examples

### Header, Footer and Separator
```html
<aside id="sidebar" class="sidebar" data-side="left">
  <nav aria-label="App navigation">
    <header>
      <a href="/" class="font-semibold">Acme Inc</a>
    </header>
    <section class="scrollbar-sm">
      <div role="group" aria-labelledby="group-main">
        <h3 id="group-main">Main</h3>
        <ul>
          <li><a href="/dashboard" aria-current="page"><span>Dashboard</span></a></li>
          <li><a href="/projects"><span>Projects</span></a></li>
        </ul>
      </div>
      <hr role="separator">
      <div role="group" aria-labelledby="group-admin">
        <h3 id="group-admin">Admin</h3>
        <ul>
          <li><a href="/users"><span>Users</span></a></li>
          <li><button type="button" disabled><span>Audit log</span></button></li>
        </ul>
      </div>
    </section>
    <footer>
      <a href="/account" data-variant="outline" data-size="lg"><span>John Doe</span></a>
    </footer>
  </nav>
</aside>
<main>
  <!-- Page content -->
</main>
```

### Right Sidebar Closed by Default
```html
<aside id="details-sidebar" class="sidebar" data-side="right" data-initial-open="false">
  <nav aria-label="Details">
    <section class="scrollbar-sm">
      <ul>
        <li><a href="#overview" data-active="true"><span>Overview</span></a></li>
        <li><a href="#activity"><span>Activity</span></a></li>
      </ul>
    </section>
  </nav>
</aside>
```

### Keep the Mobile Sidebar Open
By default clicking an item closes the sidebar on mobile. Add `data-keep-mobile-sidebar-open` to the control (or an ancestor) to keep it open.
```html
<li><button type="button" data-keep-mobile-sidebar-open onclick="toggleFilters()"><span>Filters</span></button></li>
```

### Custom Width
```css
:root {
  --sidebar-width: 18rem;        /* default 16rem */
  --sidebar-mobile-width: 20rem; /* default 18rem */
}
```

### RTL
Set `dir="rtl"` on the sidebar or a parent element. `data-side` stays physical: `left` and `right` refer to viewport sides.

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `sidebar.open()` | Method | Opens the sidebar. |
| `sidebar.close()` | Method | Closes the sidebar. |
| `sidebar.toggle()` | Method | Toggles the sidebar. |

`sidebar` is the `<aside class="sidebar">` element.

```javascript
const sidebar = document.getElementById('sidebar');

sidebar.toggle();
sidebar.open();
sidebar.close();
```

### Updating the Active Item
```javascript
function setActive(href) {
  document.querySelectorAll('#sidebar a[aria-current]').forEach((a) => a.removeAttribute('aria-current'));
  document.querySelector(`#sidebar a[href="${href}"]`)?.setAttribute('aria-current', 'page');
}
```

## Limitations
Basecoat supports the stable HTML sidebar: fixed left/right sidebars, the mobile overlay, grouped navigation, active states and native `details` submenus. It does not include shadcn/ui's rail, inset/floating variants, icon-only collapse mode, menu actions, menu badges or menu skeletons.

## Accessibility Guidelines
- Give the `<nav>` a descriptive `aria-label`
- Label each group with a heading referenced by `aria-labelledby`
- Mark the current page with `aria-current="page"`
- Give icon-only toggle buttons an `aria-label`
- Use links for navigation and buttons for actions

## Best Practices
- Keep group labels short and items to a scannable number
- Use `details` submenus for one extra level only
- Put the toggle button in a persistent header inside `<main>`
- Render `aria-current` on the server based on the current route

## Migrating from 0.x
- The `basecoat:sidebar` document event was removed. Replace `document.dispatchEvent(new CustomEvent('basecoat:sidebar', ...))` with `document.getElementById('sidebar').toggle()`, `.open()` or `.close()`.
- The scroll region uses `scrollbar-sm` (0.x used `scrollbar-thin`).
- Include `sidebar.min.js` (or `all.min.js`) from the 1.0.2 CDN path `dist/js/`.
- To keep old class names working temporarily, load `@import "basecoat-css/compat";` after Basecoat.
