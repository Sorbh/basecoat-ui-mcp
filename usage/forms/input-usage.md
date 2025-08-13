# Input Component Usage

## Overview
The input component provides a styled input field that works with forms and supports various states, validation, and accessibility features.

## Basic Usage

### Simple Input
```html
<input class="input" type="text" placeholder="Enter text">
```

### Input with Label
```html
<div class="grid gap-2">
  <label for="email" class="label">Email</label>
  <input class="input" id="email" type="email" placeholder="Enter email">
</div>
```

### Input with Helper Text
```html
<div class="grid gap-2">
  <label for="username" class="label">Username</label>
  <input class="input" id="username" type="text" placeholder="Enter username">
  <p class="text-muted-foreground text-sm">Public display name</p>
</div>
```

### Complete Input with Label and Helper Text
```html
<div class="grid gap-2">
  <label for="password" class="label">Password</label>
  <input class="input" id="password" type="password" placeholder="Enter password">
  <p class="text-muted-foreground text-sm">Must be at least 8 characters</p>
</div>
```

## Input Types

### Text Input
```html
<input class="input" type="text" placeholder="Enter text">
```

### Email Input
```html
<input class="input" type="email" placeholder="Enter email">
```

### Password Input
```html
<input class="input" type="password" placeholder="Enter password">
```

### Number Input
```html
<input class="input" type="number" placeholder="Enter number" min="0" max="100">
```

### URL Input
```html
<input class="input" type="url" placeholder="https://example.com">
```

### Search Input
```html
<input class="input" type="search" placeholder="Search...">
```

## Input States

### Default State
```html
<input class="input" type="text" placeholder="Default state">
```

### Invalid State
```html
<input class="input" type="email" aria-invalid="true" placeholder="Invalid email">
```

### Disabled State
```html
<input class="input" type="text" disabled placeholder="Disabled input">
```

### Required Input
```html
<input class="input" type="email" required placeholder="Required field">
```

### Readonly Input
```html
<input class="input" type="text" readonly value="Readonly value">
```

## Form Integration

### Input Group with Button
```html
<div class="flex">
  <input class="input rounded-r-none" type="email" placeholder="Enter email">
  <button class="btn rounded-l-none">Subscribe</button>
</div>
```

### Multiple Inputs in Form
```html
<form class="form grid gap-6">
  <div class="grid gap-2">
    <label for="first-name" class="label">First Name</label>
    <input class="input" id="first-name" type="text" required>
  </div>
  
  <div class="grid gap-2">
    <label for="last-name" class="label">Last Name</label>
    <input class="input" id="last-name" type="text" required>
  </div>
  
  <div class="grid gap-2">
    <label for="email" class="label">Email</label>
    <input class="input" id="email" type="email" required>
  </div>
  
  <button type="submit" class="btn">Submit</button>
</form>
```

## Validation

### Client-side Validation
```html
<div class="grid gap-2">
  <label for="email" class="label">Email</label>
  <input class="input" id="email" type="email" aria-invalid="true" required>
  <p class="text-destructive text-sm">Please enter a valid email address</p>
</div>
```

### Success State
```html
<div class="grid gap-2">
  <label for="email" class="label">Email</label>
  <input class="input" id="email" type="email" value="user@example.com">
  <p class="text-success text-sm">Email is valid</p>
</div>
```

## Accessibility Guidelines

### Label Association
```html
<!-- Explicit labeling (preferred) -->
<label for="email-field" class="label">Email Address</label>
<input class="input" id="email-field" type="email">

<!-- Implicit labeling -->
<label class="label">
  Email Address
  <input class="input" type="email">
</label>
```

### ARIA Attributes
```html
<!-- Input with description -->
<label for="password" class="label">Password</label>
<input class="input" 
       id="password" 
       type="password" 
       aria-describedby="pwd-help" 
       aria-invalid="false">
<div id="pwd-help" class="text-sm text-muted-foreground">
  Password must be at least 8 characters long
</div>

<!-- Required field -->
<label for="username" class="label">
  Username <span aria-label="required">*</span>
</label>
<input class="input" 
       id="username" 
       type="text" 
       required 
       aria-required="true">
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
- Use `aria-invalid` to indicate validation state
- Show validation messages close to the input

### Form UX
- Group related inputs logically
- Use consistent spacing between form elements
- Provide clear visual hierarchy
- Consider progressive disclosure for complex forms

## JavaScript Integration

### Basic Event Handling
```javascript
const input = document.querySelector('.input');

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
  const email = input.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  input.setAttribute('aria-invalid', !isValid);
  
  if (!isValid) {
    // Show error message
  } else {
    // Clear error message
  }
}
```