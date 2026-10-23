# Native Select Component Usage

## Overview
Native Select styles the browser's own `<select>` element with `class="select"`. It keeps native behavior: form submission, keyboard support and mobile-optimized pickers. Use it for simple option lists. For custom option content, search, or a JavaScript API, use the custom Select component (`div.select`, requires `select.js`).

**JavaScript required:** None.

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/native-select.css`. A bare `<select>` that is a direct child of `.field` is also styled without the class.

## Basic Usage

### Simple Native Select
```html
<select class="select" aria-label="Fruit">
  <option value="">Select a fruit</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="blueberry">Blueberry</option>
  <option value="pineapple">Pineapple</option>
</select>
```

### With a Field Label
```html
<div role="group" class="field">
  <label for="fruit">Fruit</label>
  <select id="fruit" class="select w-full">
    <option value="">Select a fruit</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </select>
</div>
```

## Variants and Examples

### Option Groups
```html
<select class="select w-full" aria-label="Food">
  <option value="">Select food</option>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="potato">Potato</option>
  </optgroup>
</select>
```

### Small Size
```html
<select class="select" data-size="sm" aria-label="Small size">
  <option>Small</option>
  <option>Apple</option>
</select>
```

### Disabled
```html
<select class="select w-full" aria-label="Fruit" disabled>
  <option value="">Select a fruit</option>
  <option value="apple">Apple</option>
</select>
```

### Invalid
```html
<div role="group" class="field" data-invalid="true">
  <label for="fruit-invalid">Fruit</label>
  <select id="fruit-invalid" class="select w-full" aria-invalid="true" aria-describedby="fruit-invalid-error">
    <option value="">Select a fruit</option>
    <option value="apple">Apple</option>
  </select>
  <p id="fruit-invalid-error" role="alert">Select a fruit to continue.</p>
</div>
```

### RTL
```html
<select dir="rtl" class="select w-full" aria-label="الفاكهة">
  <option value="">اختر فاكهة</option>
  <option value="apple">تفاح</option>
</select>
```

## Attribute and Class Reference

| Selector / Attribute | Purpose |
|---|---|
| `<select class="select">` | Styled native select |
| `.field > select` | Styled automatically inside a field |
| `data-size="sm"` | Smaller control |
| `disabled` | Disabled state (reduced opacity, not-allowed cursor) |
| `aria-invalid="true"` | Invalid styling and semantics |
| `<optgroup label>` | Grouped options |
| `w-full`, `w-42`, etc. | Tailwind width utilities |

## Accessibility
- Always provide a `<label for>` or `aria-label`.
- Use an empty-value first option as a placeholder, and add `required` when a choice is mandatory.
- Link error text with `aria-describedby` and give it `role="alert"`.
- Native selects are fully keyboard and screen reader accessible out of the box.

## Best Practices
- Prefer Native Select on mobile-heavy forms and for long, plain-text lists.
- Use `<optgroup>` rather than disabled "header" options.
- Switch to the custom Select (`select.js`) only when you need rich option content or filtering.
