# Select Component Usage

## Overview
Basecoat offers two select options:
- **Native Select**: add `class="select"` to a native `<select>`. CSS-only, best for form integration and mobile-optimized pickers.
- **Select (JavaScript)**: a `<div class="select">` with a trigger button, a popover listbox, and a hidden input. Use it for custom option content, groups with headings, multi-select, or the JavaScript API.

## JavaScript Requirements

Native Select needs no JavaScript. The JavaScript Select needs the Basecoat runtime plus the Select script, or the all-in-one bundle.

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/select.min.js" defer></script>

<!-- Or the all-in-one bundle -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

## Class and Attribute Reference

### Native Select
| Markup | Description |
| --- | --- |
| `<select class="select">` | Styled native select. Use `<option>` and `<optgroup>`. |
| `data-size="sm"` | Small size. |
| `aria-invalid="true"` | Invalid styling (pair with `data-invalid` on a wrapping `.field`). |

### JavaScript Select
| Markup | Description |
| --- | --- |
| `<div class="select">` | Select root. `data-placeholder="..."` shows placeholder text when nothing is selected. `data-close-on-select="true"` for multiple select; `data-format="object"` serializes `{ value, label }` objects. |
| `<button type="button">` | Trigger. Needs `aria-haspopup="listbox"`, `aria-expanded`, and `aria-controls` (the listbox id). Contains a `<span class="truncate">` label and a chevron icon. |
| `<div data-popover aria-hidden="true">` | Popover. Supports `data-side` and `data-align`. |
| `<div role="listbox">` | Options container with `aria-orientation="vertical"` and `aria-labelledby` (the trigger id). Add `aria-multiselectable="true"` for multiple selection. |
| `<div role="option" data-value="...">` | Option. `data-value` is submitted; optional `data-label` sets the displayed label. `aria-disabled="true"` disables it. |
| `<div role="group" aria-labelledby="...">` + `<span role="heading">` | Optional option group with heading. |
| `<hr role="separator" />` | Optional separator. |
| `<input type="hidden" name="..." value="">` | Submitted value. String for single select, JSON array for multiple select. |

The JavaScript Select has no built-in search box. For a searchable list, use the Combobox component.

## Native HTML Select

### Basic Native Select
```html
<select class="select" aria-label="Fruit">
  <option value="">Select a fruit</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="blueberry">Blueberry</option>
  <option value="pineapple">Pineapple</option>
</select>
```

### Native Select with Label
```html
<div role="group" class="field">
  <label for="department">Department</label>
  <select id="department" class="select w-full" aria-describedby="department-description">
    <option value="">Choose department</option>
    <option value="engineering">Engineering</option>
    <option value="design">Design</option>
    <option value="marketing">Marketing</option>
  </select>
  <p id="department-description">Select your department or area of work.</p>
</div>
```

### Native Select with Option Groups
```html
<select class="select w-full" aria-label="Food">
  <option value="">Select food</option>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="blueberry">Blueberry</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="potato">Potato</option>
    <option value="tomato">Tomato</option>
  </optgroup>
</select>
```

### Native Select Sizes
```html
<select class="select w-42" aria-label="Default size">
  <option>Default</option>
</select>
<select class="select w-42" data-size="sm" aria-label="Small size">
  <option>Small</option>
</select>
```

## Custom JavaScript Select

### Basic Custom Select
```html
<div id="select-theme" class="select" data-placeholder="Theme">
  <button type="button" class="w-[180px]" id="select-theme-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-theme-listbox">
    <span class="truncate">Theme</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
  </button>
  <div id="select-theme-popover" data-popover aria-hidden="true">
    <div role="listbox" id="select-theme-listbox" aria-orientation="vertical" aria-labelledby="select-theme-trigger">
      <div role="option" data-value="light">Light</div>
      <div role="option" data-value="dark">Dark</div>
      <div role="option" data-value="system">System</div>
    </div>
  </div>
  <input type="hidden" name="theme" value="" />
</div>
```

### Custom Select with Groups
```html
<div id="select-groups" class="select" data-placeholder="Select a fruit">
  <button type="button" class="w-[180px]" id="select-groups-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-groups-listbox">
    <span class="truncate">Select a fruit</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
  </button>
  <div id="select-groups-popover" data-popover aria-hidden="true">
    <div role="listbox" id="select-groups-listbox" aria-orientation="vertical" aria-labelledby="select-groups-trigger">
      <div role="group" aria-labelledby="select-groups-fruits">
        <span role="heading" id="select-groups-fruits">Fruits</span>
        <div role="option" data-value="apple">Apple</div>
        <div role="option" data-value="banana">Banana</div>
        <div role="option" data-value="blueberry">Blueberry</div>
      </div>
      <hr role="separator" />
      <div role="group" aria-labelledby="select-groups-vegetables">
        <span role="heading" id="select-groups-vegetables">Vegetables</span>
        <div role="option" data-value="carrot">Carrot</div>
        <div role="option" data-value="broccoli">Broccoli</div>
        <div role="option" data-value="spinach">Spinach</div>
      </div>
    </div>
  </div>
  <input type="hidden" name="select-groups-value" value="" />
</div>
```

### Scrollable Custom Select
For long lists, add scroll utilities to the listbox.
```html
<div role="listbox" id="select-scrollable-listbox" class="scrollbar-sm max-h-70 overflow-y-auto" aria-orientation="vertical" aria-labelledby="select-scrollable-trigger">
  <!-- options -->
</div>
```

## Select States

### Disabled Select
```html
<!-- Native disabled -->
<select class="select w-full" aria-label="Fruit" disabled>
  <option value="">Select a fruit</option>
  <option value="apple">Apple</option>
</select>

<!-- Custom select: disable the trigger, or single options with aria-disabled -->
<div id="select-disabled" class="select" data-placeholder="Select a fruit">
  <button type="button" class="w-[180px]" id="select-disabled-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-disabled-listbox" disabled>
    <span class="truncate">Select a fruit</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
  </button>
  <div id="select-disabled-popover" data-popover aria-hidden="true">
    <div role="listbox" id="select-disabled-listbox" aria-orientation="vertical" aria-labelledby="select-disabled-trigger">
      <div role="option" data-value="apple">Apple</div>
      <div role="option" data-value="grapes" aria-disabled="true">Grapes</div>
    </div>
  </div>
  <input type="hidden" name="select-disabled-value" value="" />
</div>
```

### Required Select
```html
<div role="group" class="field">
  <label for="required-select">Country <span class="text-destructive">*</span></label>
  <select class="select w-full" id="required-select" required>
    <option value="">Select country...</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
</div>
```

### Invalid Select
```html
<!-- Native -->
<div role="group" class="field" data-invalid="true">
  <label for="native-select-invalid">Fruit</label>
  <select id="native-select-invalid" class="select w-full" aria-invalid="true" aria-describedby="native-select-invalid-error">
    <option value="">Select a fruit</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </select>
  <p id="native-select-invalid-error" role="alert">Select a fruit to continue.</p>
</div>

<!-- Custom: aria-invalid goes on the trigger button -->
<div class="field" data-invalid="true">
  <label for="select-invalid-trigger">Fruit</label>
  <div id="select-invalid" class="select" data-placeholder="Select a fruit">
    <button type="button" class="w-[180px]" id="select-invalid-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-invalid-listbox" aria-invalid="true">
      <span class="truncate">Select a fruit</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    <div id="select-invalid-popover" data-popover aria-hidden="true">
      <div role="listbox" id="select-invalid-listbox" aria-orientation="vertical" aria-labelledby="select-invalid-trigger">
        <div role="option" data-value="apple">Apple</div>
        <div role="option" data-value="banana">Banana</div>
      </div>
    </div>
    <input type="hidden" name="fruit" value="" />
  </div>
  <p role="alert">Please select a valid fruit.</p>
</div>
```

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `change` | Event | Dispatched on the `.select` root on selection changes, with `event.detail.value` and `event.detail.selected`. Bubbles. |
| `select.refresh()` | Method | Rescans options after children change inside the existing `role="listbox"` element. |

Basecoat initializes selects on page load and when new DOM is inserted. After inserting HTML manually, call `window.basecoat.initAll()`.

### Listening for Changes
```javascript
const select = document.querySelector('#select-theme');

select.addEventListener('change', (event) => {
  console.log('Selected value:', event.detail.value);
  console.log('Selected option:', event.detail.selected);
});
```

### Dynamic Options
```javascript
function updateSelectOptions(selectElement, options) {
  const listbox = selectElement.querySelector('[role="listbox"]');

  listbox.innerHTML = '';

  options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.setAttribute('role', 'option');
    optionElement.setAttribute('data-value', option.value);
    optionElement.textContent = option.label;
    listbox.appendChild(optionElement);
  });

  // Let Basecoat pick up the new options
  selectElement.refresh();
}
```

## Accessibility Guidelines

### ARIA Attributes
- Trigger: `aria-haspopup="listbox"`, `aria-expanded="false"`, `aria-controls` pointing at the listbox id
- Listbox: `aria-labelledby` pointing at the trigger id, `aria-orientation="vertical"`
- Popover: starts with `aria-hidden="true"`; Basecoat toggles it
- Groups: `role="group"` with `aria-labelledby` pointing at its `role="heading"` span
- Native select without a visible label: add `aria-label`

### Keyboard Navigation
- **Enter/Space**: Open/close select
- **Arrow Up/Down**: Navigate options
- **Escape**: Close select
- **Tab**: Move focus to next element

## Best Practices

### User Experience
- Provide clear placeholder text via `data-placeholder` and the trigger label
- Use groups with headings for many options
- Use the Combobox component when users need to search long lists
- Prefer Native Select for simple choices and mobile forms

### Accessibility
- Always associate labels with select elements
- Use semantic HTML and ARIA attributes
- Ensure keyboard navigation works properly
- Provide clear focus indicators

### Performance
- Lazy load options for large datasets
- Call `refresh()` once after a batch of option changes, not per option
- Cache frequently used option sets

### Form Integration
```html
<form class="space-y-6">
  <div role="group" class="field">
    <label for="category">Category</label>
    <select class="select w-full" id="category" name="category" required>
      <option value="">Select category...</option>
      <option value="tech">Technology</option>
      <option value="design">Design</option>
    </select>
  </div>

  <div role="group" class="field">
    <label for="select-priority-trigger">Priority</label>
    <div id="select-priority" class="select" data-placeholder="Choose priority">
      <button type="button" class="w-full" id="select-priority-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-priority-listbox">
        <span class="truncate">Choose priority</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div id="select-priority-popover" data-popover aria-hidden="true">
        <div role="listbox" id="select-priority-listbox" aria-orientation="vertical" aria-labelledby="select-priority-trigger">
          <div role="option" data-value="high">High</div>
          <div role="option" data-value="medium">Medium</div>
          <div role="option" data-value="low">Low</div>
        </div>
      </div>
      <input type="hidden" name="priority" value="" />
    </div>
  </div>

  <button type="submit" class="btn">Submit</button>
</form>
```

## Migrating from 0.x
- The custom select no longer has a search `<header>` inside the popover; use the Combobox component for searchable lists.
- Options no longer need utility classes (`p-2 hover:bg-muted ...`) and the trigger no longer needs border/padding utilities; Basecoat styles them.
- The `.form` wrapper was removed; use `<div role="group" class="field">` around each label + control.
- The optional `basecoat-css/compat` stylesheet only restores legacy aliases for older markup during migration.
