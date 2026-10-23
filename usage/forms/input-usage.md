# Input Component Usage

## Overview
The input component styles native `<input>` elements. Add `class="input"` to a standalone input, or place the input inside a `<div role="group" class="field">`, which styles common text-like inputs, labels, and helper text automatically. Behavior and states come from native HTML attributes (`disabled`, `required`, `readonly`, `aria-invalid`).

## Class and Attribute Reference

| Markup | Description |
| --- | --- |
| `<input class="input">` | Standalone styled input. |
| `<div role="group" class="field">` | Field wrapper for one label + control + helper text. Inputs, labels and `<p>` inside it are styled without extra classes. |
| `<fieldset class="fieldset">` | Group of related fields with a `<legend>` and optional description `<p>`. |
| `data-invalid` (on `.field`) | Invalid field styling (label and helper text). |
| `aria-invalid="true"` (on the input) | Invalid control styling. Always set it on the control itself. |
| `data-orientation="horizontal\|responsive"` (on `.field`) | Lay the label and control side by side. |
| `<label class="label">` | Standalone styled label when not inside a `.field`. |

## Basic Usage

### Simple Input
```html
<input class="input" type="text" placeholder="Enter text" />
```

### Input with Label
```html
<div role="group" class="field">
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="m@example.com" />
</div>
```

### Input with Helper Text
```html
<div role="group" class="field">
  <label for="username">Username</label>
  <input id="username" type="text" placeholder="Enter username" aria-describedby="username-description" />
  <p id="username-description">Public display name</p>
</div>
```

### Description Before the Input
```html
<div role="group" class="field">
  <label for="password">Password</label>
  <p id="password-description">Must be at least 8 characters long.</p>
  <input id="password" type="password" placeholder="••••••••" aria-describedby="password-description" />
</div>
```

### Standalone Label and Input (without .field)
```html
<div class="grid gap-3">
  <label class="label" for="email-standalone">Email</label>
  <input class="input" id="email-standalone" type="email" placeholder="name@example.com" />
</div>
```

## Input Types

### Text Input
```html
<input class="input" type="text" placeholder="Enter text" />
```

### Email Input
```html
<input class="input" type="email" placeholder="Enter email" />
```

### Password Input
```html
<input class="input" type="password" placeholder="Enter password" />
```

### Number Input
```html
<input class="input" type="number" placeholder="Enter number" min="0" max="100" />
```

### URL Input
```html
<input class="input" type="url" placeholder="https://example.com" />
```

### Search Input
```html
<input class="input" type="search" placeholder="Search..." />
```

### File Input
```html
<input class="input" type="file" />
```

## Input States

### Default State
```html
<input class="input" type="text" placeholder="Default state" />
```

### Invalid State
```html
<input class="input" type="email" placeholder="Email" aria-invalid="true" />
```

### Disabled State
```html
<input class="input" type="email" placeholder="Email" disabled />
```

### Required Input
```html
<div role="group" class="field">
  <label for="input-required">Username <span class="text-destructive">*</span></label>
  <input id="input-required" type="text" placeholder="hunvreus" required />
</div>
```

### Readonly Input
```html
<input class="input" type="text" readonly value="Readonly value" />
```

## Form Integration

### Inline Input with Button
```html
<div class="flex items-center gap-2">
  <input class="input" type="search" placeholder="Search..." />
  <button type="submit" class="btn">Search</button>
</div>
```

### Input Joined with a Button (Button Group)
```html
<div role="group" aria-label="Search" class="button-group">
  <input class="input" type="search" placeholder="Search..." />
  <button type="submit" class="btn" data-variant="outline" data-size="icon" aria-label="Search">
    <svg class="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
  </button>
</div>
```

For icons, text, or buttons inside the input itself, use the Input Group component (`<div class="input-group">`).

### Multiple Inputs in a Form
```html
<form>
  <fieldset class="fieldset">
    <legend>Contact details</legend>
    <div role="group" aria-label="Contact fields">
      <div class="grid grid-cols-2 gap-4">
        <div role="group" class="field">
          <label for="first-name">First name</label>
          <input id="first-name" type="text" placeholder="Jane" required />
        </div>
        <div role="group" class="field">
          <label for="last-name">Last name</label>
          <input id="last-name" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div role="group" class="field">
        <label for="contact-email">Email</label>
        <input id="contact-email" type="email" placeholder="m@example.com" required />
      </div>
    </div>
  </fieldset>
  <button type="submit" class="btn mt-6">Submit</button>
</form>
```

### Simple Stacked Form
```html
<form class="space-y-6">
  <div role="group" class="field">
    <label for="input-form-username">Username</label>
    <input id="input-form-username" type="text" placeholder="hunvreus" required />
    <p>This is your public display name.</p>
  </div>
  <div role="group" class="field">
    <label for="input-form-email">Email</label>
    <input id="input-form-email" type="email" placeholder="m@example.com" required />
  </div>
  <button type="submit" class="btn">Submit</button>
</form>
```

## Validation

### Invalid Field with Error Message
Add `data-invalid` to `.field`, `aria-invalid="true"` to the control, and link the error with `aria-describedby` and `role="alert"`.
```html
<div role="group" class="field" data-invalid>
  <label for="invalid-email">Email</label>
  <input id="invalid-email" type="email" value="wrong-email" aria-invalid="true" aria-describedby="invalid-email-error" />
  <p id="invalid-email-error" role="alert">Enter a valid email address.</p>
</div>
```

## Accessibility Guidelines

### Label Association
```html
<!-- Explicit labeling inside a field (preferred) -->
<div role="group" class="field">
  <label for="email-field">Email Address</label>
  <input id="email-field" type="email" />
</div>

<!-- Input without a visible label -->
<input class="input" type="search" placeholder="Search..." aria-label="Search" />
```

### ARIA Attributes
```html
<!-- Input with description -->
<div role="group" class="field">
  <label for="pwd">Password</label>
  <input id="pwd" type="password" aria-describedby="pwd-help" />
  <p id="pwd-help">Password must be at least 8 characters long</p>
</div>

<!-- Required field -->
<div role="group" class="field">
  <label for="handle">Username <span class="text-destructive" aria-hidden="true">*</span></label>
  <input id="handle" type="text" required />
</div>
```

## Best Practices

### Input Design
- Use appropriate input types for better mobile experience
- Provide clear placeholders that don't replace labels
- Keep labels concise but descriptive
- Use helper text for additional context

### Validation
- Validate on blur, not on every keystroke
- Provide clear, specific error messages
- Put `aria-invalid="true"` on the control, not only `data-invalid` on the wrapper
- Show validation messages close to the input

### Form UX
- Group related inputs with `fieldset.fieldset`
- Use `.field-separator` (`<div class="field-separator"><hr role="separator" /></div>`) to divide sections
- Provide clear visual hierarchy
- Consider progressive disclosure for complex forms

## JavaScript Integration

Inputs are CSS-only; no Basecoat script is required.

### Basic Event Handling
```javascript
const input = document.querySelector('#email');

input.addEventListener('focus', function() {
  // Handle focus
});

input.addEventListener('blur', function() {
  // Handle blur, validation
});

input.addEventListener('input', function() {
  // Handle input changes
});
```

### Validation Example
```javascript
function validateEmail(input) {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
  const field = input.closest('.field');

  if (isValid) {
    input.removeAttribute('aria-invalid');
    field?.removeAttribute('data-invalid');
  } else {
    input.setAttribute('aria-invalid', 'true');
    field?.setAttribute('data-invalid', '');
  }
}
```

## Migrating from 0.x
The `.form` wrapper class was removed in 1.0. Wrap each label + control in `<div role="group" class="field">` (or add `input` / `label` classes to each element). The optional `basecoat-css/compat` stylesheet only restores legacy aliases for older markup during migration.
