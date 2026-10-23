# Accordion Component Usage

## Overview
The accordion is a vertically stacked set of headings that each reveal a section of content. It is built on native `<details>` and `<summary>` elements. The accordion script only enforces single-item behavior by default and prevents disabled items from toggling.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/accordion.min.js" defer></script>

<!-- Or load every component script at once -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

Without the script the accordion still works with native `details` behavior, but several items can be open at once and `aria-disabled` items still toggle.

## HTML Structure

### Basic Accordion Structure
```html
<section class="accordion">
  <details open>
    <summary>
      Is it accessible?
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Yes. It uses native disclosure semantics.</section>
  </details>
  <details>
    <summary>
      Is it styled?
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Yes. It matches the other Basecoat components.</section>
  </details>
</section>
```

## Component Elements

| Element | Required | Description |
| --- | --- | --- |
| `<section class="accordion">` | Yes | Root container. Add `data-multiple` to allow several open items. |
| `<details>` | Yes | Accordion item. Use `open` for the default expanded item. Add `aria-disabled="true"` to stop it from toggling. |
| `<summary>` | Yes | Trigger. Visible text plus an optional trailing chevron icon. |
| `<section>` | Yes | Item content. Any semantic element works. |

## Implementation Examples

### Multiple Open Items
```html
<section class="accordion" data-multiple>
  <details open>
    <summary>
      Notification Settings
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Manage how you receive notifications.</section>
  </details>
  <details>
    <summary>
      Privacy &amp; Security
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Control account security, session history, and privacy preferences.</section>
  </details>
</section>
```

### Disabled Item
```html
<details aria-disabled="true">
  <summary>
    Premium feature information
    <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
  </summary>
  <section>This item is disabled.</section>
</details>
```

### Bordered
Add horizontal padding to the rows when the root has a border.
```html
<section class="accordion rounded-md border [&>details>summary]:px-4 [&>details>:not(summary)]:px-4">
  <details id="billing" open>
    <summary>
      How does billing work?
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Billing is charged at the beginning of each cycle, and you can cancel anytime.</section>
  </details>
  <details>
    <summary>
      Is my data secure?
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Data is encrypted in transit and at rest.</section>
  </details>
</section>
```

### Inside a Card
```html
<div class="card">
  <header>
    <h2>Subscription &amp; Billing</h2>
    <p>Common questions about plans, payments and cancellations.</p>
  </header>
  <section>
    <section class="accordion">
      <!-- details items -->
    </section>
  </section>
</div>
```

### RTL
Accordion spacing uses logical properties. Set `dir="rtl"` on the accordion or a parent element.

## JavaScript API
The accordion has no custom methods or events. Open or close an item with the native `details.open` property, and listen for the native `toggle` event.

```javascript
// Open an item
document.querySelector('#billing').open = true;

// React to changes
document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    console.log(item.querySelector('summary').textContent.trim(), item.open);
  });
});
```

## Accessibility Guidelines
- Native `details`/`summary` provide keyboard support (Enter/Space) and expanded state
- Keep the trigger text visible; the chevron icon is decorative
- Use `aria-disabled="true"` instead of hiding unavailable items

## Best Practices
- Keep summaries short and phrased as questions or topics
- Open the most relevant item by default with `open`
- Use `data-multiple` when users need to compare sections
- Avoid nesting accordions

## Migrating from 0.x
- Use `<section class="accordion">` as the root instead of utility-only wrappers; Basecoat now styles the dividers, trigger and chevron rotation.
- Remove custom JavaScript that closed sibling items; `accordion.min.js` handles single-open behavior. Add `data-multiple` to opt out.
- To keep old class names working temporarily, load `@import "basecoat-css/compat";` after Basecoat.
