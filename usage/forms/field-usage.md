# Field Component Usage

## Overview
Field is the 1.0 layout primitive for form controls. `class="field"` wraps one control with its label, description and error text; `class="fieldset"` groups related fields. Native `input`, `select`, `textarea`, checkbox, radio and switch controls inside a `.field` are styled automatically, so you do not need `.input` or `.label` classes there. Field replaces the old `.form` wrapper (do not use `.form` in 1.0).

**JavaScript required:** None. Field is CSS only.

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/field.css`.

## Basic Usage

### Simple Field
```html
<div role="group" class="field">
  <label for="name">Full name</label>
  <input id="name" type="text" placeholder="Evil Rabbit" />
</div>
```

### Field with Description
```html
<div role="group" class="field">
  <label for="username">Username</label>
  <input id="username" type="text" aria-describedby="username-description" />
  <p id="username-description">Choose a unique username for your account.</p>
</div>
```
The description `<p>` may also be placed between the label and the control.

### Invalid Field
Add `data-invalid` to `.field` and `aria-invalid="true"` to the control itself.
```html
<div role="group" class="field" data-invalid>
  <label for="email">Email</label>
  <input id="email" type="email" value="wrong-email" aria-invalid="true" aria-describedby="email-error" />
  <p id="email-error" role="alert">Enter a valid email address.</p>
</div>
```

## Variants and Examples

### Fieldset with Legend
```html
<fieldset class="fieldset">
  <legend>Address Information</legend>
  <p>We need your address to deliver your order.</p>
  <div role="group" aria-label="Address fields">
    <div role="group" class="field">
      <label for="street">Street Address</label>
      <input id="street" type="text" placeholder="123 Main St" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div role="group" class="field">
        <label for="city">City</label>
        <input id="city" type="text" placeholder="New York" />
      </div>
      <div role="group" class="field">
        <label for="zip">Postal Code</label>
        <input id="zip" type="text" placeholder="90502" />
      </div>
    </div>
  </div>
</fieldset>
```
Use `<legend data-variant="label">` for a smaller, label-style legend.

### Textarea and Select
```html
<div role="group" class="field">
  <label for="feedback">Feedback</label>
  <textarea id="feedback" rows="4" aria-describedby="feedback-description"></textarea>
  <p id="feedback-description">Share your thoughts about our service.</p>
</div>

<div role="group" class="field">
  <label for="department">Department</label>
  <select id="department" class="select w-full">
    <option value="">Choose department</option>
    <option value="engineering">Engineering</option>
    <option value="design">Design</option>
  </select>
</div>
```

### Horizontal (Checkbox, Radio, Switch)
```html
<div role="group" class="field" data-orientation="horizontal">
  <input id="terms" type="checkbox" />
  <label for="terms" class="font-normal">Accept terms and conditions</label>
</div>

<fieldset class="fieldset">
  <legend data-variant="label">Subscription Plan</legend>
  <div role="radiogroup" aria-label="Subscription plan">
    <div role="group" class="field" data-orientation="horizontal">
      <input id="plan-monthly" type="radio" name="plan" value="monthly" checked />
      <label for="plan-monthly" class="font-normal">Monthly</label>
    </div>
    <div role="group" class="field" data-orientation="horizontal">
      <input id="plan-yearly" type="radio" name="plan" value="yearly" />
      <label for="plan-yearly" class="font-normal">Yearly</label>
    </div>
  </div>
</fieldset>
```

### Label and Description Beside a Control
Wrap label + description in `<section>`.
```html
<div role="group" class="field" data-orientation="horizontal">
  <section>
    <label for="mfa">Multi-factor authentication</label>
    <p>Require a one-time code when signing in.</p>
  </section>
  <input id="mfa" type="checkbox" role="switch" />
</div>
```

### Choice Card
Wrap a `.field` in a `<label>` to make the whole card selectable.
```html
<div role="radiogroup" aria-label="Compute environment">
  <label for="compute-k8s">
    <div role="group" class="field" data-orientation="horizontal">
      <section>
        <h3>Kubernetes</h3>
        <p>Run GPU workloads on a K8s cluster.</p>
      </section>
      <input id="compute-k8s" type="radio" name="compute" value="kubernetes" checked />
    </div>
  </label>
</div>
```

### Separator Between Groups
```html
<div class="field-separator">
  <hr role="separator" />
</div>
```
Add a `<span>` after the `<hr>` for centered separator text (e.g. "Or continue with").

### Responsive Layout
`data-orientation="responsive"` stacks by default and switches to horizontal when the containing field group is wide enough (container query).
```html
<div role="group" aria-label="Profile fields">
  <div role="group" class="field" data-orientation="responsive">
    <section>
      <label for="r-name">Name</label>
      <p id="r-name-description">Provide your full name</p>
    </section>
    <input id="r-name" aria-describedby="r-name-description" />
  </div>
</div>
```

### Disabled
Add `disabled` to the control and `data-disabled="true"` to the `.field`.

## Attribute and Class Reference

| Selector / Attribute | Purpose |
|---|---|
| `<div role="group" class="field">` | Single-field wrapper |
| `<fieldset class="fieldset">` | Native group with `<legend>` and following `<p>` description |
| `<div role="group" class="fieldset" aria-label="...">` | Structural group when a `<fieldset>` is not appropriate |
| `role="group"` / `role="radiogroup"` inside `.fieldset` | Field group container (vertical stack, container-query context) |
| `data-orientation="horizontal"` | Control and label in a row |
| `data-orientation="responsive"` | Stacked, becomes horizontal in wide containers |
| `data-invalid` / `data-invalid="true"` | Destructive text color for the field |
| `<legend data-variant="label">` | Label-sized legend |
| `<section>` | Groups label and description beside a control |
| `<p>` | Helper or error text (`role="alert"` for errors) |
| `.field-separator > hr[role="separator"]` | Divider, optional `<span>` label |

## Accessibility
- Associate every label with its control via `for`/`id`.
- Connect helper and error text with `aria-describedby`.
- Put `aria-invalid="true"` on the invalid control, not only `data-invalid` on the wrapper.
- Give error messages `role="alert"` so they are announced.
- Use `<fieldset>` + `<legend>` for groups of radios or checkboxes; otherwise label `role="group"` wrappers with `aria-label`.
- Add `dir="rtl"` to the field, fieldset, or an ancestor for right-to-left layouts.

## Best Practices
- Use one `.field` per control; do not nest controls of different meaning in one field.
- Keep descriptions short and placed consistently (below the control by default).
- Use `class="font-normal"` on checkbox/radio labels to distinguish them from field labels.
- Use `.fieldset` and `.field-separator` to break long forms into sections.
