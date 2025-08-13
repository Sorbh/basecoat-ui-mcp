# Select Component Usage

## Overview
The select component allows users to choose an option from a list. It provides both native HTML select and custom JavaScript-enhanced implementations with improved styling and functionality.

## JavaScript Requirements

### Required Scripts
```html
<!-- Include Basecoat CSS and JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/select.min.js" defer></script>
```

## Native HTML Select

### Basic Native Select
```html
<select class="select" name="options">
  <option value="">Choose an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

### Native Select with Label
```html
<div class="grid gap-2">
  <label for="country" class="label">Country</label>
  <select class="select" id="country" name="country" required>
    <option value="">Select a country...</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>
</div>
```

### Native Select with Option Groups
```html
<select class="select" name="location">
  <option value="">Choose location...</option>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </optgroup>
</select>
```

## Custom JavaScript Select

### Basic Custom Select
```html
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded" aria-haspopup="listbox">
    <span>Choose option...</span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg" aria-hidden="true">
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div role="option" data-value="option1" class="p-2 hover:bg-muted cursor-pointer">Option 1</div>
      <div role="option" data-value="option2" class="p-2 hover:bg-muted cursor-pointer">Option 2</div>
      <div role="option" data-value="option3" class="p-2 hover:bg-muted cursor-pointer">Option 3</div>
    </div>
  </div>
  <input type="hidden" name="select-value" value="">
</div>
```

### Custom Select with Icons
```html
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded" aria-haspopup="listbox">
    <span class="flex items-center gap-2">
      <span class="w-4 h-4">🌍</span>
      <span>Choose country...</span>
    </span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div role="option" data-value="us" class="flex items-center gap-2 p-2 hover:bg-muted cursor-pointer">
        <span>🇺🇸</span>
        <span>United States</span>
      </div>
      <div role="option" data-value="ca" class="flex items-center gap-2 p-2 hover:bg-muted cursor-pointer">
        <span>🇨🇦</span>
        <span>Canada</span>
      </div>
      <div role="option" data-value="uk" class="flex items-center gap-2 p-2 hover:bg-muted cursor-pointer">
        <span>🇬🇧</span>
        <span>United Kingdom</span>
      </div>
    </div>
  </div>
  <input type="hidden" name="country" value="">
</div>
```

### Custom Select with Search (Combobox)
```html
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded" aria-haspopup="listbox">
    <span>Select framework...</span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
    <header class="p-2 border-b">
      <input type="text" class="input w-full" placeholder="Search frameworks..." aria-label="Search options">
    </header>
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div role="option" data-value="react" class="p-2 hover:bg-muted cursor-pointer">React</div>
      <div role="option" data-value="vue" class="p-2 hover:bg-muted cursor-pointer">Vue.js</div>
      <div role="option" data-value="angular" class="p-2 hover:bg-muted cursor-pointer">Angular</div>
      <div role="option" data-value="svelte" class="p-2 hover:bg-muted cursor-pointer">Svelte</div>
    </div>
  </div>
  <input type="hidden" name="selected-framework" value="">
</div>
```

### Custom Select with Groups
```html
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded" aria-haspopup="listbox">
    <span>Choose technology...</span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div class="px-2 py-1 text-sm font-medium text-muted-foreground bg-muted">Frontend</div>
      <div role="option" data-value="react" class="p-2 hover:bg-muted cursor-pointer">React</div>
      <div role="option" data-value="vue" class="p-2 hover:bg-muted cursor-pointer">Vue.js</div>
      
      <div class="px-2 py-1 text-sm font-medium text-muted-foreground bg-muted">Backend</div>
      <div role="option" data-value="node" class="p-2 hover:bg-muted cursor-pointer">Node.js</div>
      <div role="option" data-value="python" class="p-2 hover:bg-muted cursor-pointer">Python</div>
    </div>
  </div>
  <input type="hidden" name="technology" value="">
</div>
```

## Select States

### Disabled Select
```html
<!-- Native disabled -->
<select class="select" disabled>
  <option>Disabled select</option>
</select>

<!-- Custom disabled -->
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded opacity-50" disabled>
    <span>Disabled select</span>
    <svg class="w-4 h-4"><!-- chevron --></svg>
  </button>
</div>
```

### Required Select
```html
<div class="grid gap-2">
  <label for="required-select" class="label">
    Country <span class="text-destructive">*</span>
  </label>
  <select class="select" id="required-select" required>
    <option value="">Select country...</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
</div>
```

### Invalid Select
```html
<div class="grid gap-2">
  <label for="invalid-select" class="label">Country</label>
  <select class="select" id="invalid-select" aria-invalid="true" required>
    <option value="">Select country...</option>
    <option value="us">United States</option>
  </select>
  <p class="text-destructive text-sm">Please select a country</p>
</div>
```

## JavaScript API

### Programmatic Control
```javascript
// Initialize select after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.querySelector('.select');
  
  // Select option by value
  if (selectElement.selectByValue) {
    selectElement.selectByValue('option2');
  }
});

// Listen for select changes
document.addEventListener('change', function(e) {
  if (e.target.matches('.select input[type="hidden"]')) {
    console.log('Selected value:', e.target.value);
  }
});

// Listen for initialization
document.addEventListener('basecoat:initialized', function(e) {
  if (e.target.matches('.select')) {
    console.log('Select component initialized');
  }
});
```

### Dynamic Options
```javascript
function updateSelectOptions(selectElement, options) {
  const listbox = selectElement.querySelector('[role="listbox"]');
  const hiddenInput = selectElement.querySelector('input[type="hidden"]');
  
  // Clear existing options
  listbox.innerHTML = '';
  
  // Add new options
  options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.setAttribute('role', 'option');
    optionElement.setAttribute('data-value', option.value);
    optionElement.className = 'p-2 hover:bg-muted cursor-pointer';
    optionElement.textContent = option.label;
    listbox.appendChild(optionElement);
  });
  
  // Reset selection
  hiddenInput.value = '';
  selectElement.querySelector('button span').textContent = 'Choose option...';
}
```

## Accessibility Guidelines

### ARIA Attributes
```html
<div class="select">
  <button type="button" 
          aria-haspopup="listbox" 
          aria-expanded="false"
          aria-labelledby="select-label">
    <span>Choose option...</span>
  </button>
  <div data-popover aria-hidden="true">
    <div role="listbox" 
         aria-labelledby="select-label"
         aria-activedescendant="">
      <div role="option" 
           id="option-1" 
           data-value="option1"
           aria-selected="false">
        Option 1
      </div>
    </div>
  </div>
</div>
```

### Keyboard Navigation
- **Enter/Space**: Open/close select
- **Arrow Up/Down**: Navigate options
- **Escape**: Close select
- **Tab**: Move focus to next element

## Best Practices

### User Experience
- Provide clear default/placeholder text
- Use logical grouping for many options
- Implement search for long lists (10+ items)
- Show selected value clearly in the trigger button

### Accessibility
- Always associate labels with select elements
- Use semantic HTML and ARIA attributes
- Ensure keyboard navigation works properly
- Provide clear focus indicators

### Performance
- Lazy load options for large datasets
- Implement virtual scrolling for very long lists
- Debounce search input to avoid excessive filtering
- Cache frequently used option sets

### Form Integration
```html
<form class="form grid gap-6">
  <div class="grid gap-2">
    <label for="category" class="label">Category</label>
    <select class="select" id="category" name="category" required>
      <option value="">Select category...</option>
      <option value="tech">Technology</option>
      <option value="design">Design</option>
    </select>
  </div>
  
  <div class="select">
    <label class="label mb-2">Priority</label>
    <button type="button" class="flex items-center justify-between w-full p-2 border rounded">
      <span>Choose priority...</span>
      <svg class="w-4 h-4"><!-- chevron --></svg>
    </button>
    <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
      <div role="listbox">
        <div role="option" data-value="high" class="p-2 hover:bg-muted cursor-pointer">High</div>
        <div role="option" data-value="medium" class="p-2 hover:bg-muted cursor-pointer">Medium</div>
        <div role="option" data-value="low" class="p-2 hover:bg-muted cursor-pointer">Low</div>
      </div>
    </div>
    <input type="hidden" name="priority" value="">
  </div>
  
  <button type="submit" class="btn">Submit</button>
</form>
```