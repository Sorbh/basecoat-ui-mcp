
# Digital Photo Frame - Style Guide

## 🎨 CSS Framework Hierarchy & Rules

This style guide establishes the CSS framework hierarchy and usage rules for the Digital Photo Frame application.

### **Priority Order (Most to Least Preferred)**

1. **🥇 Basecoat CSS Components** - Primary styling framework
2. **🥈 Tailwind CSS** - Only when absolutely necessary for layout/utilities
3. **🥉 Custom CSS** - Minimize usage, only for unique requirements

---

## 📦 Basecoat CSS Components

> **Rule**: Use Basecoat CSS components for ALL UI elements. These provide consistent, accessible, and well-designed components.

### 🔗 CDN Setup
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/all.min.js" defer></script>
```

### 📋 Form Components

#### **Form Container**
```html
<!-- ✅ Correct: Use form class for automatic styling -->
<form class="form grid gap-6">
  <!-- form elements automatically styled -->
</form>
```

#### **Input Fields**
```html
<!-- ✅ Correct: Basic input -->
<input class="input" type="text" placeholder="Enter text">

<!-- ✅ Correct: With label and helper text -->
<div class="grid gap-2">
  <label for="input-id" class="label">Field Label</label>
  <input class="input" id="input-id" type="text" placeholder="Enter text">
  <p class="text-muted-foreground text-sm">Helper text here</p>
</div>

<!-- ✅ Correct: Invalid state -->
<input class="input" type="email" aria-invalid="true" placeholder="Email">
```

#### **Buttons**
```html
<!-- ✅ Primary button -->
<button class="btn">Primary Action</button>

<!-- ✅ Button variants -->
<button class="btn-secondary">Secondary</button>
<button class="btn-destructive">Delete</button>
<button class="btn-outline">Outline</button>
<button class="btn-ghost">Ghost</button>
<button class="btn-link">Link Style</button>

<!-- ✅ Button sizes -->
<button class="btn-sm">Small</button>
<button class="btn-lg">Large</button>

<!-- ✅ Icon buttons -->
<button class="btn-icon">🔍</button>
<button class="btn-lg-icon-outline">📷</button>

<!-- ✅ Combined classes -->
<button class="btn-sm-destructive">Small Delete</button>
```

#### **Labels**
```html
<!-- ✅ Standard label -->
<label class="label" for="field-id">Field Name</label>

<!-- ✅ Label with checkbox -->
<label class="label">
  <input type="checkbox" class="input">
  Accept terms and conditions
</label>
```

#### **Select Dropdowns**
```html
<!-- ✅ Native select -->
<select class="select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

<!-- ✅ Custom select with JavaScript -->
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded">
    <span>Choose option...</span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div role="option" data-value="option1" class="p-2 hover:bg-muted cursor-pointer">Option 1</div>
      <div role="option" data-value="option2" class="p-2 hover:bg-muted cursor-pointer">Option 2</div>
      <div role="option" data-value="option3" class="p-2 hover:bg-muted cursor-pointer">Option 3</div>
    </div>
  </div>
  <input type="hidden" name="select-value">
</div>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/select.min.js" defer></script>
```

#### **Textarea**
```html
<!-- ✅ Basic textarea -->
<textarea class="textarea" placeholder="Enter description" rows="3"></textarea>
```

#### **Checkbox**
```html
<!-- ✅ Basic checkbox -->
<input type="checkbox" class="input">

<!-- ✅ Checkbox with label -->
<label class="label gap-3">
  <input type="checkbox" class="input">
  Accept terms and conditions
</label>

<!-- ✅ Checkbox with description -->
<div class="flex items-start gap-3">
  <input type="checkbox" id="notifications" class="input">
  <div class="grid gap-2">
    <label for="notifications" class="label">Email notifications</label>
    <p class="text-muted-foreground text-sm">Receive email updates about your account activity</p>
  </div>
</div>
```

#### **Radio Group**
```html
<!-- ✅ Radio button group -->
<fieldset class="grid gap-3">
  <legend class="text-sm font-medium">Choose display mode</legend>
  <label class="label">
    <input type="radio" name="display-mode" value="comfortable" class="input" checked>
    Comfortable
  </label>
  <label class="label">
    <input type="radio" name="display-mode" value="compact" class="input">
    Compact
  </label>
  <label class="label">
    <input type="radio" name="display-mode" value="spacious" class="input">
    Spacious
  </label>
</fieldset>
```

#### **Switch**
```html
<!-- ✅ Toggle switch -->
<label class="label flex items-center gap-3">
  <input type="checkbox" role="switch" class="input">
  Airplane Mode
</label>

<!-- ✅ Switch with description -->
<div class="flex items-start justify-between">
  <div class="grid gap-1">
    <label for="notifications-switch" class="label">Push Notifications</label>
    <p class="text-sm text-muted-foreground">Receive notifications on your device</p>
  </div>
  <input type="checkbox" id="notifications-switch" role="switch" class="input">
</div>
```

#### **Slider**
```html
<!-- ✅ Range slider -->
<div class="grid gap-2">
  <label for="volume" class="label">Volume</label>
  <input type="range" id="volume" class="input w-full" min="0" max="100" value="50">
  <div class="flex justify-between text-sm text-muted-foreground">
    <span>0</span>
    <span>100</span>
  </div>
</div>

<!-- Required JavaScript for visual feedback -->
<script>
document.querySelectorAll('input[type="range"].input').forEach(slider => {
  const updateSlider = () => {
    const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.setProperty('--slider-value', `${percent}%`);
  };
  updateSlider();
  slider.addEventListener('input', updateSlider);
});
</script>
```

### 🎯 Feedback Components

#### **Alerts**
```html
<!-- ✅ Success alert -->
<div class="alert">
  <svg><!-- success icon --></svg>
  <h2>Success!</h2>
  <section>Operation completed successfully.</section>
</div>

<!-- ✅ Error alert -->
<div class="alert-destructive">
  <svg><!-- error icon --></svg>
  <h2>Error!</h2>
  <section>Something went wrong.</section>
</div>
```

#### **Badges**
```html
<!-- ✅ Badge variants -->
<span class="badge">Primary</span>
<span class="badge-secondary">Secondary</span>
<span class="badge-destructive">Error</span>
<span class="badge-outline">Outline</span>
```

#### **Alert Dialog**
```html
<!-- ✅ Alert dialog structure -->
<dialog class="dialog" id="alert-dialog-id" 
  aria-labelledby="alert-title-id" 
  aria-describedby="alert-description-id">
  <article>
    <header>
      <h2 id="alert-title-id">Confirmation Required</h2>
      <p id="alert-description-id">Are you sure you want to perform this action?</p>
    </header>
    <footer>
      <button class="btn-outline" onclick="document.getElementById('alert-dialog-id').close()">Cancel</button>
      <button class="btn-destructive" onclick="confirmAction()">Delete</button>
    </footer>
  </article>
</dialog>

<!-- JavaScript to show dialog -->
<script>
function showAlertDialog(dialogId) {
  document.getElementById(dialogId).showModal();
}

function confirmAction() {
  // Perform the action
  document.getElementById('alert-dialog-id').close();
}
</script>
```

**Key Features:**
- Modal dialog that requires user response
- No close button (must use action buttons)
- Cannot be closed by clicking backdrop
- Use `showModal()` to display
- Accessible with `aria-labelledby` and `aria-describedby`

### 🧭 Navigation Components

#### **Accordion**
```html
<!-- ✅ Accordion structure using native HTML elements -->
<section class="accordion">
  <details class="group border-b last:border-b-0">
    <summary class="flex items-center justify-between p-4 cursor-pointer">
      <h3>Section Title</h3>
      <svg class="w-4 h-4 transition-transform group-open:rotate-180" 
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <section class="p-4 pt-0">
      <p>Section content goes here...</p>
    </section>
  </details>
  
  <details class="group border-b last:border-b-0">
    <summary class="flex items-center justify-between p-4 cursor-pointer">
      <h3>Another Section</h3>
      <svg class="w-4 h-4 transition-transform group-open:rotate-180" 
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <section class="p-4 pt-0">
      <p>More content...</p>
    </section>
  </details>
</section>
```

**Key Features:**
- Uses native `<details>` and `<summary>` elements
- Built-in accessibility with WAI-ARIA compliance
- Animated expand/collapse with CSS transitions
- Can be enhanced with JavaScript for single-open behavior

#### **Breadcrumb**
```html
<!-- ✅ Basic breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
    <li>
      <a href="/" class="hover:text-foreground transition-colors">Home</a>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </li>
    <li>
      <a href="/admin" class="hover:text-foreground transition-colors">Admin</a>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </li>
    <li>
      <span class="text-foreground font-medium">Photos</span>
    </li>
  </ol>
</nav>

<!-- ✅ Compact breadcrumb with dropdown -->
<ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
  <li class="inline-flex items-center gap-1.5">
    <a href="#" class="hover:text-foreground transition-colors">Home</a>
  </li>
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="m9 18 6-6-6-6" /></svg>
  </li>
  <li class="inline-flex items-center gap-1.5">
    <div id="demo-breadcrumb-menu" class="dropdown-menu">
      <button type="button" id="demo-breadcrumb-menu-trigger" aria-haspopup="menu" aria-controls="demo-breadcrumb-menu-menu" aria-expanded="false" class="flex size-9 items-center justify-center h-4 w-4 hover:text-foreground cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </button>
      <div id="demo-breadcrumb-menu-popover" data-popover aria-hidden="true">
        <div role="menu" id="demo-breadcrumb-menu-menu" aria-labelledby="demo-breadcrumb-menu-trigger">
          <nav role="menu">
            <button type="button" role="menuitem">Documentation</button>
            <button type="button" role="menuitem">Themes</button>
            <button type="button" role="menuitem">GitHub</button>
          </nav>
        </div>
      </div>
    </div>
  </li>
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="m9 18 6-6-6-6" /></svg>
  </li>
  <li class="inline-flex items-center gap-1.5">
    <a href="#" class="hover:text-foreground transition-colors">Components</a>
  </li>
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="m9 18 6-6-6-6" /></svg>
  </li>
  <li class="inline-flex items-center gap-1.5">
    <span class="text-foreground font-normal">Breadcrumb</span>
  </li>
</ol>
```

**Key Features:**
- Uses semantic `<nav>` and `<ol>` elements for accessibility
- Chevron separators between navigation levels
- Hover states for interactive links
- Responsive flex layout with wrapping
- Current page shown as non-interactive span
- Compact version with dropdown for deep navigation

### 📊 Data Display Components

#### **Avatar**
```html
<!-- ✅ Profile avatar -->
<img class="size-8 shrink-0 object-cover rounded-full" alt="User avatar" src="/path/to/avatar.jpg">

<!-- ✅ Different sizes -->
<img class="size-6 shrink-0 object-cover rounded-full" alt="Small avatar" src="/path/to/avatar.jpg">
<img class="size-10 shrink-0 object-cover rounded-full" alt="Medium avatar" src="/path/to/avatar.jpg">
<img class="size-16 shrink-0 object-cover rounded-full" alt="Large avatar" src="/path/to/avatar.jpg">

<!-- ✅ Avatar with fallback -->
<div class="size-8 shrink-0 rounded-full bg-muted flex items-center justify-center">
  <span class="text-sm font-medium">JD</span>
</div>
```

#### **Pagination**
```html
<!-- ✅ Pagination navigation -->
<nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center">
  <ul class="flex flex-row items-center gap-1">
    <!-- Previous -->
    <li>
      <button class="btn-icon-ghost" aria-label="Go to previous page">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </li>
    
    <!-- Page numbers -->
    <li><button class="btn-ghost">1</button></li>
    <li><button class="btn-icon-outline" aria-current="page">2</button></li>
    <li><button class="btn-ghost">3</button></li>
    <li><span class="px-2">...</span></li>
    <li><button class="btn-ghost">10</button></li>
    
    <!-- Next -->
    <li>
      <button class="btn-icon-ghost" aria-label="Go to next page">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </li>
  </ul>
</nav>
```

#### **Skeleton**
```html
<!-- ✅ Loading skeletons -->
<div class="flex items-center gap-4">
  <!-- Avatar skeleton -->
  <div class="bg-accent animate-pulse size-10 shrink-0 rounded-full"></div>
  
  <!-- Text skeletons -->
  <div class="grid gap-2">
    <div class="bg-accent animate-pulse rounded-md h-4 w-[150px]"></div>
    <div class="bg-accent animate-pulse rounded-md h-4 w-[100px]"></div>
  </div>
</div>

<!-- ✅ Card skeleton -->
<div class="card">
  <div class="bg-accent animate-pulse rounded-md h-48 mb-4"></div>
  <div class="bg-accent animate-pulse rounded-md h-6 w-3/4 mb-2"></div>
  <div class="bg-accent animate-pulse rounded-md h-4 w-1/2"></div>
</div>
```

#### **Toast Notifications**
```html
<!-- ✅ Toast container -->
<div id="toaster" class="toaster fixed bottom-4 right-4 z-50" data-align="end"></div>

<!-- JavaScript to trigger toast -->
<script>
function showToast(category, title, description) {
  document.dispatchEvent(new CustomEvent('basecoat:toast', {
    detail: {
      config: {
        category: category, // success, info, warning, error
        title: title,
        description: description,
        duration: 5000
      }
    }
  }));
}

// Usage examples
showToast('success', 'Success!', 'Your changes have been saved.');
showToast('error', 'Error!', 'Something went wrong. Please try again.');
</script>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/toast.min.js" defer></script>
```

#### **Theme Switcher**
```html
<!-- ✅ Dark/Light mode toggle -->
<button onclick="document.dispatchEvent(new CustomEvent('basecoat:theme'))" 
        class="btn-icon-outline" title="Toggle theme">
  <svg class="w-4 h-4 dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
  <svg class="w-4 h-4 hidden dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
  </svg>
</button>

<!-- Required theme script (place in <head>) -->
<script>
(() => {
  try {
    const stored = localStorage.getItem('themeMode');
    if (stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
  
  document.addEventListener('basecoat:theme', (e) => {
    const mode = e.detail?.mode || (document.documentElement.classList.contains('dark') ? 'light' : 'dark');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('themeMode', mode);
  });
})();
</script>
```

#### **Sidebar**
```html
<!-- ✅ Sidebar navigation structure -->
<aside class="sidebar" data-side="left" aria-hidden="true" id="main-sidebar">
  <nav>
    <section class="scrollbar">
      <div class="p-4">
        <h3 class="font-medium mb-4">Navigation</h3>
        <ul class="space-y-2">
          <li><a href="/dashboard" class="block p-2 rounded hover:bg-muted">Dashboard</a></li>
          <li><a href="/photos" class="block p-2 rounded hover:bg-muted">Photos</a></li>
        </ul>
        
        <!-- Nested menu with accordion -->
        <details class="mt-4">
          <summary class="p-2 cursor-pointer hover:bg-muted rounded">Settings</summary>
          <ul class="ml-4 mt-2 space-y-1">
            <li><a href="/settings/profile" class="block p-2 rounded hover:bg-muted text-sm">Profile</a></li>
            <li><a href="/settings/account" class="block p-2 rounded hover:bg-muted text-sm">Account</a></li>
          </ul>
        </details>
      </div>
    </section>
  </nav>
</aside>

<!-- Toggle button -->
<button onclick="document.dispatchEvent(new CustomEvent('basecoat:sidebar', { detail: { id: 'main-sidebar', action: 'toggle' } }))" 
        class="btn-icon">
  <span class="material-symbols-outlined">menu</span>
</button>
```

**Key Features:**
- Uses `data-side` for positioning (left/right)
- Custom event system for toggle: `basecoat:sidebar`
- Supports nested menus with `<details>` elements
- Scrollable content area with `.scrollbar` class
- Accessible with `aria-hidden` attribute

#### **Tabs**
```html
<!-- ✅ Tab navigation with panels -->
<div class="tabs w-full" id="demo-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="border-b">
    <button type="button" role="tab" aria-selected="true" aria-controls="panel-1" 
            class="px-4 py-2 border-b-2 border-primary text-primary">
      Account
    </button>
    <button type="button" role="tab" aria-selected="false" aria-controls="panel-2" 
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Password
    </button>
    <button type="button" role="tab" aria-selected="false" aria-controls="panel-3" 
            class="px-4 py-2 border-b-2 border-transparent hover:border-muted">
      Settings
    </button>
  </nav>
  
  <div role="tabpanel" id="panel-1" aria-selected="true" class="p-4">
    <h3 class="text-lg font-medium">Account Settings</h3>
    <p>Manage your account information here.</p>
  </div>
  
  <div role="tabpanel" id="panel-2" aria-selected="false" class="p-4" hidden>
    <h3 class="text-lg font-medium">Password Settings</h3>
    <p>Change your password here.</p>
  </div>
  
  <div role="tabpanel" id="panel-3" aria-selected="false" class="p-4" hidden>
    <h3 class="text-lg font-medium">App Settings</h3>
    <p>Configure application preferences.</p>
  </div>
</div>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/tabs.min.js" defer></script>
```

**Key Features:**
- Uses ARIA roles for accessibility (`tablist`, `tab`, `tabpanel`)
- Keyboard navigation support
- `aria-selected` and `aria-controls` for screen readers
- Dispatches `basecoat:initialized` event when ready
- Hidden panels use `hidden` attribute

### 🎛️ Interactive Components

#### **Combobox**
```html
<!-- ✅ Searchable select with autocomplete -->
<div class="select">
  <button type="button" class="flex items-center justify-between w-full p-2 border rounded">
    <span>Select framework...</span>
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div data-popover class="w-full border rounded mt-1 bg-background shadow-lg">
    <header class="p-2 border-b">
      <input type="text" class="input w-full" placeholder="Search frameworks...">
    </header>
    <div role="listbox" class="max-h-48 overflow-y-auto">
      <div role="option" data-value="react" class="p-2 hover:bg-muted cursor-pointer">React</div>
      <div role="option" data-value="vue" class="p-2 hover:bg-muted cursor-pointer">Vue</div>
      <div role="option" data-value="angular" class="p-2 hover:bg-muted cursor-pointer">Angular</div>
      <div role="option" data-value="svelte" class="p-2 hover:bg-muted cursor-pointer">Svelte</div>
    </div>
  </div>
  <input type="hidden" name="selected-framework">
</div>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/select.min.js" defer></script>
```

#### **Dialog**
```html
<!-- ✅ Modal dialog (already covered above) -->
<button onclick="document.getElementById('example-dialog').showModal()" class="btn">Open Dialog</button>

<dialog id="example-dialog" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
  <article>
    <header>
      <h2 id="dialog-title">Edit Profile</h2>
      <p id="dialog-description">Update your profile information</p>
      <button onclick="this.closest('dialog').close()" class="btn-icon absolute top-4 right-4">
        <span class="material-symbols-outlined">close</span>
      </button>
    </header>
    <section>
      <form class="form grid gap-4">
        <div class="grid gap-2">
          <label for="name" class="label">Name</label>
          <input type="text" id="name" class="input" placeholder="Enter name">
        </div>
        <div class="grid gap-2">
          <label for="email" class="label">Email</label>
          <input type="email" id="email" class="input" placeholder="Enter email">
        </div>
      </form>
    </section>
    <footer>
      <button onclick="this.closest('dialog').close()" class="btn-outline">Cancel</button>
      <button class="btn">Save Changes</button>
    </footer>
  </article>
</dialog>
```

#### **Dropdown Menu**
```html
<!-- ✅ Context menu with various item types -->
<div class="dropdown-menu">
  <button type="button" aria-haspopup="menu" class="btn-outline">
    Options
    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div popover class="border rounded bg-background shadow-lg p-1">
    <div role="menu" class="min-w-48">
      <div role="menuitem" class="flex items-center p-2 hover:bg-muted rounded cursor-pointer">
        <span class="material-symbols-outlined mr-2">edit</span>
        Edit
      </div>
      <div role="menuitem" class="flex items-center p-2 hover:bg-muted rounded cursor-pointer">
        <span class="material-symbols-outlined mr-2">content_copy</span>
        Copy
      </div>
      <hr class="my-1">
      <div role="menuitemcheckbox" class="flex items-center p-2 hover:bg-muted rounded cursor-pointer">
        <input type="checkbox" class="mr-2" checked>
        Show toolbar
      </div>
      <div role="menuitemradio" class="flex items-center p-2 hover:bg-muted rounded cursor-pointer">
        <input type="radio" name="view" class="mr-2" checked>
        Grid view
      </div>
      <hr class="my-1">
      <div role="menuitem" class="flex items-center p-2 hover:bg-muted rounded cursor-pointer text-destructive">
        <span class="material-symbols-outlined mr-2">delete</span>
        Delete
      </div>
    </div>
  </div>
</div>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/dropdown-menu.min.js" defer></script>
```

#### **Popover**
```html
<!-- ✅ Rich content tooltip with positioning -->
<div class="popover">
  <button type="button" popovertarget="info-popover" aria-expanded="false" class="btn-outline">
    More Info
  </button>
  <div popover id="info-popover" data-popover data-side="top" data-align="center" 
       class="max-w-sm p-4 border rounded bg-background shadow-lg" aria-hidden="true">
    <h3 class="font-medium mb-2">Additional Information</h3>
    <p class="text-sm text-muted-foreground mb-3">This popover contains rich content that provides additional context.</p>
    <button onclick="document.getElementById('info-popover').hidePopover()" class="btn-sm">Got it</button>
  </div>
</div>

<!-- Required JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@0.3.1/dist/js/popover.min.js" defer></script>
```

#### **Tooltip**
```html
<!-- ✅ Simple hover tooltips -->
<button class="btn-outline" data-tooltip="This is a helpful tooltip">Hover me</button>
<button class="btn-outline" data-tooltip="Right side tooltip" data-side="right">Right tooltip</button>
<button class="btn-outline" data-tooltip="Bottom aligned tooltip" data-side="bottom" data-align="start">Bottom + Start</button>
```

**Key Features:**
- Simple `data-tooltip` attribute implementation
- Positioning with `data-side` (top, bottom, left, right)
- Alignment with `data-align` (start, center, end)
- Works on hover and keyboard focus

### 🗂️ Layout Components

#### **Cards**
```html
<!-- ✅ Basic card structure -->
<div class="card">
  <header>
    <h2>Card Title</h2>
  </header>
  <section>
    <p>Card content goes here.</p>
  </section>
  <footer>
    <button class="btn">Action</button>
  </footer>
</div>
```

#### **Tables**
```html
<!-- ✅ Responsive table -->
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 🎨 Tailwind CSS Usage

> **Rule**: Only use Tailwind CSS when Basecoat doesn't provide the needed functionality.

### ✅ **Acceptable Tailwind Usage**

1. **Layout & Positioning** (when Basecoat lacks these)
   ```html
   <!-- ✅ Flexbox centering -->
   <div class="min-h-screen flex items-center justify-center">
   
   <!-- ✅ Grid layouts -->
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
   
   <!-- ✅ Responsive spacing -->
   <div class="p-4 md:p-8">
   ```

2. **Responsive Breakpoints**
   ```html
   <!-- ✅ Responsive visibility -->
   <div class="hidden md:block">
   
   <!-- ✅ Responsive sizing -->
   <div class="w-full max-w-md lg:max-w-lg">
   ```

3. **Complex Positioning**
   ```html
   <!-- ✅ Absolute positioning -->
   <div class="absolute top-0 right-0">
   
   <!-- ✅ Z-index layering -->
   <div class="relative z-10">
   ```

### ❌ **Avoid Tailwind For**

```html
<!-- ❌ Don't use Tailwind for buttons when Basecoat exists -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">
<!-- ✅ Use Basecoat instead -->
<button class="btn">

<!-- ❌ Don't use Tailwind for form inputs -->
<input class="border border-gray-300 rounded px-3 py-2">
<!-- ✅ Use Basecoat instead -->
<input class="input">

<!-- ❌ Don't use Tailwind for typography when Basecoat has classes -->
<p class="text-gray-600 text-sm">
<!-- ✅ Use Basecoat instead -->
<p class="text-muted-foreground text-sm">
```

---

## 🔧 Custom CSS Guidelines

> **Rule**: Minimize custom CSS. Only add when neither Basecoat nor Tailwind provide the solution.

### ✅ **Acceptable Custom CSS**

1. **Application-Specific Layouts**
   ```css
   .login-container {
     width: 100%;
     max-width: 400px;
   }
   
   .photo-grid {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     gap: 16px;
   }
   ```

2. **Animations & Transitions**
   ```css
   .spinner {
     animation: spin 1s linear infinite;
   }
   
   @keyframes spin {
     to { transform: rotate(360deg); }
   }
   ```

3. **Browser-Specific Fixes**
   ```css
   .scroll-container {
     scrollbar-width: thin;
     scrollbar-color: #cbd5e0 transparent;
   }
   ```

### ❌ **Avoid Custom CSS For**

- Colors that exist in Basecoat/Tailwind
- Typography that Basecoat provides
- Spacing that can be achieved with utility classes
- Common UI patterns that Basecoat covers

---

## 📐 Implementation Patterns

### **1. Form Implementation**
```html
<!-- ✅ Recommended pattern -->
<form class="form grid gap-6">
  <div class="grid gap-2">
    <label for="field" class="label">Field Name</label>
    <input type="text" id="field" class="input" placeholder="Enter text">
    <p class="text-muted-foreground text-sm">Helper text</p>
  </div>
  
  <button type="submit" class="btn">Submit</button>
</form>
```

### **2. Alert Messages**
```html
<!-- ✅ Error pattern -->
<div class="alert-destructive" style="display: none;" id="errorAlert">
  <svg><!-- error icon --></svg>
  <h2>Error Title</h2>
  <section id="errorText"></section>
</div>

<!-- JavaScript -->
<script>
function showError(message) {
  document.getElementById('errorText').textContent = message;
  document.getElementById('errorAlert').style.display = 'grid';
}
</script>
```

### **3. Card Layout**
```html
<!-- ✅ Content card pattern -->
<div class="card">
  <header>
    <div class="btn-lg-icon-outline">📷</div>
    <h2>Card Title</h2>
    <p class="text-muted-foreground">Subtitle</p>
  </header>
  
  <section>
    <!-- Main content -->
  </section>
  
  <footer>
    <button class="btn-outline">Cancel</button>
    <button class="btn">Confirm</button>
  </footer>
</div>
```

---

## 🚀 Quick Reference

### **Component Checklist**
Before writing custom styles, check if these Basecoat components exist:

**📋 Form Components:**
- [ ] `btn` and variants for buttons (primary, secondary, outline, ghost, destructive)
- [ ] `input` for text inputs, checkboxes, radios, switches, sliders
- [ ] `textarea` for multi-line text input
- [ ] `select` for dropdown selections (native and custom)
- [ ] `label` for form labels and field descriptions
- [ ] `form` for form containers with proper spacing
- [ ] `dropdown-menu` with various menu item types

**🧭 Navigation Components:**
- [ ] `accordion` with `<details>` and `<summary>`
- [ ] `breadcrumb` navigation with semantic markup
- [ ] `sidebar` with event-driven toggle system
- [ ] `tabs` with ARIA roles and keyboard navigation

**🎛️ Interactive Components:**
- [ ] `dialog` for modals and alert dialogs
- [ ] `popover` for rich content tooltips
- [ ] `tooltip` with simple `data-tooltip` attribute
- [ ] `combobox` for searchable select dropdowns

**🎯 Feedback Components:**
- [ ] `alert` and `alert-destructive` for messages
- [ ] `badge` variants for status indicators
- [ ] `toast` notifications with event system

**🗂️ Layout Components:**
- [ ] `card` for content containers
- [ ] `table` for data display

**📊 Data Display Components:**
- [ ] `avatar` with Tailwind utilities
- [ ] `pagination` with navigation semantics
- [ ] `skeleton` loading states with `animate-pulse`
- [ ] `theme-switcher` with localStorage persistence

### **CSS Priority Decision Tree**
1. **Does Basecoat have this component?** → Use Basecoat
2. **Is this a layout/positioning need?** → Consider Tailwind
3. **Is this application-specific?** → Minimal custom CSS
4. **Can this be achieved with utilities?** → Use utilities

### **File Organization**
```html
<head>
  <!-- 1. Basecoat CSS (primary) -->
  <link rel="stylesheet" href="basecoat.cdn.min.css">
  
  <!-- 2. Tailwind CSS (when needed) -->
  <script src="@tailwindcss/browser"></script>
  
  <!-- 3. Custom CSS (minimal) -->
  <style>
    /* Only application-specific styles */
  </style>
</head>
```

---

## 📚 Resources

- **Basecoat Components**: See `/server/components.json` for complete component reference
- **Basecoat Documentation**: [https://basecoat.dev](https://basecoat.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

> **Remember**: The goal is consistency, maintainability, and leveraging well-tested component libraries. Always prefer Basecoat components over custom implementations.