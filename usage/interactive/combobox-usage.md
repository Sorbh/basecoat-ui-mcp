# Combobox Component Usage

## Overview
A combobox is a text input with a filterable list of suggestions. In Basecoat 1.0 the combobox is **input-first**: the visible `<input role="combobox">` filters the list, and a hidden `<input>` stores the submitted value. It supports single and multiple selection, groups, custom option content, a clear button, input groups and a popup (button-triggered) mode.

## HTML Structure
- `<div class="combobox">` - Root (give it an `id`)
  - `data-auto-highlight="true"` - First visible option becomes active when the list opens or filters (optional)
  - `data-format="object"` - Serialize selected values as objects (optional)
  - `data-filter="manual"` - Your app owns filtering (optional)
- `<input type="text" role="combobox" aria-controls="{LISTBOX_ID}">` - Editable control. Direct child, inside `.input-group`, or inside `data-popover` for popup mode
- `<svg class="combobox-trigger-icon">` - Decorative trailing chevron (optional)
- `<button data-clear>` - Clears the selection (optional)
- `<button aria-haspopup="listbox">` - Opens the list from an input group or popup trigger (optional)
- `<div data-popover aria-hidden="true">` - Suggestions popup; accepts `data-side` / `data-align`
  - `<div role="listbox" data-empty="No items found.">` - The list. Add `aria-multiselectable="true"` for multiple mode
    - `<div role="option" data-value="...">` - Option. Use `data-label` when the input should show different text than the rendered HTML, and `data-filter` for extra search text
    - `<div role="group" aria-labelledby>` + `<div role="heading">` and `<hr role="separator">` for groups
- `<input type="hidden" name="...">` - Submitted value: a string (single) or a JSON array (multiple)

## Basic Implementation

```html
<div id="framework-combobox" class="combobox w-[240px]">
  <input type="text" role="combobox" placeholder="Select a framework" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="framework-combobox-listbox" /><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="combobox-trigger-icon"><path d="m6 9 6 6 6-6" /></svg>
  <div id="framework-combobox-popover" data-popover aria-hidden="true">
    <div role="listbox" id="framework-combobox-listbox" aria-orientation="vertical" data-empty="No items found.">
      <div role="option" data-value="Next.js">Next.js</div>
      <div role="option" data-value="SvelteKit">SvelteKit</div>
      <div role="option" data-value="Nuxt.js">Nuxt.js</div>
      <div role="option" data-value="Remix">Remix</div>
      <div role="option" data-value="Astro">Astro</div>
    </div>
  </div>
  <input type="hidden" name="framework" value="" />
</div>
```

## Multiple Selection
Add `aria-multiselectable="true"` to the listbox. Selected values render as chips around the input, and the hidden input holds a JSON array.

```html
<div id="frameworks-combobox" class="combobox w-full" data-auto-highlight="true">
  <input type="text" role="combobox" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="frameworks-combobox-listbox" />
  <div id="frameworks-combobox-popover" data-popover aria-hidden="true">
    <div role="listbox" id="frameworks-combobox-listbox" aria-orientation="vertical" aria-multiselectable="true" data-empty="No items found.">
      <div role="option" data-value="Next.js">Next.js</div>
      <div role="option" data-value="SvelteKit">SvelteKit</div>
      <div role="option" data-value="Astro">Astro</div>
    </div>
  </div>
  <input type="hidden" name="frameworks" value='["Next.js"]' />
</div>
```

## Clear Button (Input Group)

```html
<div id="clear-combobox" class="combobox">
  <div class="input-group">
    <input type="text" role="combobox" placeholder="Select a framework" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="clear-combobox-listbox" />
    <span role="group" data-align="inline-end">
      <button type="button" data-clear aria-label="Clear selection"><svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
      <button type="button" class="btn" data-variant="ghost" data-size="icon-xs" aria-label="Open suggestions" aria-haspopup="listbox" aria-expanded="false" aria-controls="clear-combobox-listbox"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
    </span>
  </div>
  <div id="clear-combobox-popover" data-popover aria-hidden="true">
    <div role="listbox" id="clear-combobox-listbox" aria-orientation="vertical" data-empty="No items found.">
      <div role="option" data-value="Next.js">Next.js</div>
      <div role="option" data-value="Remix">Remix</div>
    </div>
  </div>
  <input type="hidden" name="framework-clear" value="Next.js" />
</div>
```

## Popup Mode (Button Trigger)
The trigger shows the selection through a child with `data-value` (and optional `data-placeholder`); the search input lives inside the popover.

```html
<div id="popup-combobox" class="combobox">
  <button type="button" class="btn w-64 justify-between font-normal" data-variant="outline" aria-haspopup="listbox" aria-expanded="false" aria-controls="popup-combobox-listbox">
    <span data-value data-placeholder="Select country">Select country</span>
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
  </button>
  <div id="popup-combobox-popover" data-popover aria-hidden="true">
    <div class="input-group">
      <input type="text" role="combobox" placeholder="Search" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="popup-combobox-listbox" />
    </div>
    <div role="listbox" id="popup-combobox-listbox" aria-orientation="vertical" data-empty="No items found.">
      <div role="option" data-value="argentina" data-label="Argentina">Argentina</div>
      <div role="option" data-value="japan" data-label="Japan">Japan</div>
    </div>
  </div>
  <input type="hidden" name="country" value="" />
</div>
```

## Inside a Field (Invalid State)

```html
<div role="group" class="field" data-invalid="true">
  <label for="invalid-combobox-input">Framework</label>
  <div id="invalid-combobox" class="combobox">
    <input type="text" role="combobox" id="invalid-combobox-input" aria-invalid="true" placeholder="Select a framework" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="invalid-combobox-listbox" /><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="combobox-trigger-icon"><path d="m6 9 6 6 6-6" /></svg>
    <div id="invalid-combobox-popover" data-popover aria-hidden="true">
      <div role="listbox" id="invalid-combobox-listbox" aria-orientation="vertical" data-empty="No items found.">
        <div role="option" data-value="Next.js">Next.js</div>
      </div>
    </div>
    <input type="hidden" name="framework" value="" />
  </div>
  <p role="alert">Select a framework to continue.</p>
</div>
```

Add `disabled` to the `role="combobox"` input to disable the whole control.

## JavaScript Requirements

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/combobox.min.js" defer></script>
```

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `change` | Event | Fired on selection changes with `event.detail.value` and `event.detail.selected` |
| `combobox.setValue(value)` | Method | Sets the value from a plain value or `{ value, label }` object |
| `combobox.clear()` | Method | Clears the selection |
| `combobox.refresh()` | Method | Rescans options after you change children of the existing `role="listbox"` |

```javascript
const combobox = document.getElementById('framework-combobox');
combobox.addEventListener('change', (event) => {
  console.log('Selected:', event.detail.value);
});
combobox.setValue('Astro');

// After replacing options from the server
combobox.querySelector('[role="listbox"]').innerHTML = '<div role="option" data-value="Qwik">Qwik</div>';
combobox.refresh();
```

## Migrating from 0.3.x
- The old "select with a search `<header>`" markup (`<div class="select">` + button + `<header><input>`) is replaced by `<div class="combobox">` with the input as the control.
- `data-multiple` was removed; use `aria-multiselectable="true"` on the listbox.
- Drop manual utilities on options (`p-2 hover:bg-muted cursor-pointer`); the style pack styles them.

## Accessibility Notes
- Keep `aria-controls` on the input pointing at the listbox `id`
- Keep `aria-autocomplete="list"` and `aria-expanded="false"` in the initial markup
- Put `aria-invalid="true"` on the input itself (not only on the field wrapper)
- Use `data-empty` to give screen readers and sighted users a "no results" message
