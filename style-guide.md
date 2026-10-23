
# Digital Photo Frame - Style Guide

## 🎨 CSS Framework Hierarchy & Rules

This style guide establishes the CSS framework hierarchy and usage rules for the Digital Photo Frame application. It targets **Basecoat CSS 1.0.2**.

### **Priority Order (Most to Least Preferred)**

1. **🥇 Basecoat CSS Components** - Primary styling framework
2. **🥈 Tailwind CSS** - Only when absolutely necessary for layout/utilities
3. **🥉 Custom CSS** - Minimize usage, only for unique requirements

### **The 1.0 API in One Paragraph**

Every component has a single **root class** (`btn`, `badge`, `alert`, `card`, `avatar`, `field`, ...). Variants and sizes are **data attributes** on that root: `data-variant="secondary|outline|ghost|link|destructive"` and `data-size="xs|sm|lg|icon|icon-xs|icon-sm|icon-lg"`. Structure comes from semantic HTML (`<header>`, `<section>`, `<footer>`, ARIA roles). Interactive components expose methods on their root element (e.g. `toaster.toast()`, `sidebar.toggle()`) instead of global document events.

---

## 📦 Basecoat CSS Components

> **Rule**: Use Basecoat CSS components for ALL UI elements. These provide consistent, accessible, and well-designed components.

### 🔗 CDN Setup
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
```

- `basecoat.cdn.min.css` is the default bundle (the **Vega** style pack).
- `all.min.js` initializes every interactive component except Chart. To ship less JS, load the runtime once and then only the components you use:

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/dropdown-menu.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/select.min.js" defer></script>
```

With npm + a Tailwind build:

```css
@import "tailwindcss";
@import "basecoat-css";        /* or "basecoat-css/maia", "basecoat-css/sera", ... */
```

```js
import "basecoat-css/all";     /* or "basecoat-css/basecoat" + individual components */
```

### 🖌️ Style Packs

Basecoat 1.0 ships eight visual styles (the shadcn/ui style families): **vega** (default), **nova**, **maia**, **lyra**, **mira**, **luma**, **sera**, **rhea**. Markup is identical across all of them; only the look changes.

```html
<!-- Pick exactly ONE stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat-maia.cdn.min.css">
```

```css
@import "tailwindcss";
@import "basecoat-css/sera";
```

- Each style bundle is **standalone**. Never load two (e.g. `basecoat.cdn.min.css` *and* `basecoat-nova.cdn.min.css`).
- Load Basecoat **after** Tailwind or any stylesheet that emits a reset/preflight.
- To customise colours, import a shadcn/ui-compatible theme (e.g. from TweakCN) after Basecoat and override tokens such as `--background`, `--primary`, `--border`, `--ring` for `:root` and `.dark`.
- For a fully custom look, start from `basecoat-css/base` (structure, no style pack) plus your own style file; do not override a full bundle wholesale.

### 📋 Form Components

#### **Field (replaces the old `.form` wrapper)**
```html
<!-- ✅ Correct: one .field per control, optional .fieldset to group them -->
<form class="grid gap-6">
  <fieldset class="fieldset">
    <legend>Profile</legend>
    <p>This information is shown on your frame.</p>
    <div role="group" class="field">
      <label for="display-name">Display name</label>
      <input id="display-name" type="text" placeholder="Living room frame" aria-describedby="display-name-help" />
      <p id="display-name-help">Shown on the device settings screen.</p>
    </div>
  </fieldset>
</form>
```

- `<div role="group" class="field">` styles the native `<label>`, `<input>`, `<select>`, `<textarea>` and helper `<p>` inside it.
- `data-orientation="horizontal"` puts the control beside its label (checkboxes, switches); `data-orientation="responsive"` stacks on narrow containers.
- Wrap label + description in a `<section>` when the control sits beside text.
- `<div class="field-separator"><hr role="separator" /></div>` separates groups.

#### **Input Fields**
```html
<!-- ✅ Correct: Basic input -->
<input class="input" type="text" placeholder="Enter text">

<!-- ✅ Correct: With label and helper text -->
<div role="group" class="field">
  <label for="input-id">Field Label</label>
  <input id="input-id" type="text" placeholder="Enter text" aria-describedby="input-id-help">
  <p id="input-id-help">Helper text here</p>
</div>

<!-- ✅ Correct: Invalid state (aria-invalid on the control, role="alert" on the message) -->
<div role="group" class="field" data-invalid="true">
  <label for="email">Email</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-error" placeholder="Email">
  <p id="email-error" role="alert">Enter a valid email address.</p>
</div>
```

#### **Input Group**
```html
<!-- ✅ Input with leading icon and trailing addon -->
<div class="input-group">
  <input type="text" placeholder="Search photos..." />
  <span data-align="start" aria-hidden="true"><svg class="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></span>
</div>
```

#### **Buttons**
```html
<!-- ✅ Primary button -->
<button class="btn">Primary Action</button>

<!-- ✅ Button variants -->
<button class="btn" data-variant="secondary">Secondary</button>
<button class="btn" data-variant="destructive">Delete</button>
<button class="btn" data-variant="outline">Outline</button>
<button class="btn" data-variant="ghost">Ghost</button>
<button class="btn" data-variant="link">Link Style</button>

<!-- ✅ Button sizes -->
<button class="btn" data-size="xs">Extra small</button>
<button class="btn" data-size="sm">Small</button>
<button class="btn" data-size="lg">Large</button>

<!-- ✅ Icon buttons (always add aria-label) -->
<button class="btn" data-size="icon" aria-label="Search"><svg><!-- icon --></svg></button>
<button class="btn" data-variant="outline" data-size="icon-lg" aria-label="Take photo"><svg><!-- icon --></svg></button>

<!-- ✅ Variant + size combined -->
<button class="btn" data-variant="destructive" data-size="sm">Small Delete</button>

<!-- ✅ Loading state -->
<button class="btn" disabled>
  <svg class="animate-spin lucide lucide-loader-circle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
  Saving...
</button>
```

#### **Button Group**
```html
<div role="group" class="button-group">
  <button type="button" class="btn" data-variant="outline">Archive</button>
  <button type="button" class="btn" data-variant="outline">Report</button>
  <button type="button" class="btn" data-variant="outline">Snooze</button>
</div>
```

#### **Labels**
```html
<!-- ✅ Standard label (inside .field the class is optional) -->
<label class="label" for="field-id">Field Name</label>

<!-- ✅ Label wrapping a checkbox -->
<label class="label gap-2">
  <input type="checkbox" class="input">
  Accept terms and conditions
</label>
```

#### **Select Dropdowns**
```html
<!-- ✅ Native select -->
<select class="select w-full" aria-label="Slideshow speed">
  <option value="5">5 seconds</option>
  <option value="10">10 seconds</option>
</select>

<!-- ✅ Custom select with JavaScript -->
<div id="transition-select" class="select" data-placeholder="Choose transition">
  <button type="button" class="w-[180px]" id="transition-select-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="transition-select-listbox">
    <span class="truncate">Choose transition</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground opacity-50 shrink-0"><path d="m6 9 6 6 6-6" /></svg>
  </button>
  <div id="transition-select-popover" data-popover aria-hidden="true">
    <div role="listbox" id="transition-select-listbox" aria-orientation="vertical" aria-labelledby="transition-select-trigger">
      <div role="option" data-value="fade">Fade</div>
      <div role="option" data-value="slide">Slide</div>
      <div role="option" data-value="zoom">Zoom</div>
    </div>
  </div>
  <input type="hidden" name="transition" value="" />
</div>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/select.min.js" defer></script>
```

Listen for `change` on the `.select` root (`event.detail.value`). Call `select.refresh()` after replacing options.

#### **Textarea**
```html
<!-- ✅ Basic textarea -->
<textarea class="textarea" placeholder="Enter description" rows="3"></textarea>
```

#### **Checkbox**
```html
<!-- ✅ Checkbox with label -->
<div role="group" class="field" data-orientation="horizontal">
  <input type="checkbox" id="terms" class="input" />
  <label for="terms">Accept terms and conditions</label>
</div>

<!-- ✅ Checkbox with description -->
<div role="group" class="field" data-orientation="horizontal">
  <input type="checkbox" id="notifications" class="input" checked />
  <section>
    <label for="notifications">Email notifications</label>
    <p>Receive email updates about your account activity</p>
  </section>
</div>
```

#### **Radio Group**
```html
<!-- ✅ Radio button group -->
<div role="radiogroup" aria-label="Display mode" class="grid gap-3">
  <div class="flex items-center gap-3">
    <input type="radio" id="mode-comfortable" name="display-mode" value="comfortable" class="input" checked />
    <label for="mode-comfortable">Comfortable</label>
  </div>
  <div class="flex items-center gap-3">
    <input type="radio" id="mode-compact" name="display-mode" value="compact" class="input" />
    <label for="mode-compact">Compact</label>
  </div>
  <div class="flex items-center gap-3">
    <input type="radio" id="mode-spacious" name="display-mode" value="spacious" class="input" />
    <label for="mode-spacious">Spacious</label>
  </div>
</div>
```

#### **Switch**
```html
<!-- ✅ Toggle switch -->
<div role="group" class="field" data-orientation="horizontal">
  <input type="checkbox" id="airplane-mode" role="switch" class="input" />
  <label for="airplane-mode">Airplane Mode</label>
</div>

<!-- ✅ Switch with description (data-size="sm" for a smaller switch) -->
<div role="group" class="field" data-orientation="horizontal">
  <section>
    <label for="notifications-switch">Push Notifications</label>
    <p id="notifications-switch-description">Receive notifications on your device</p>
  </section>
  <input type="checkbox" id="notifications-switch" role="switch" class="input" aria-describedby="notifications-switch-description" />
</div>
```

#### **Slider**
```html
<!-- ✅ Range slider -->
<div role="group" class="field">
  <label for="volume">Volume</label>
  <input type="range" id="volume" class="input w-full" min="0" max="100" value="50" />
</div>

<!-- Required JavaScript: keeps the filled track in sync (included in all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/range.min.js" defer></script>
```

### 🎯 Feedback Components

#### **Alerts**
```html
<!-- ✅ Success / info alert -->
<div class="alert">
  <svg><!-- success icon --></svg>
  <h2>Success!</h2>
  <section>Operation completed successfully.</section>
</div>

<!-- ✅ Error alert -->
<div class="alert" data-variant="destructive">
  <svg><!-- error icon --></svg>
  <h2>Error!</h2>
  <section>Something went wrong.</section>
</div>

<!-- ✅ Alert with inline action -->
<div class="alert">
  <h2>Update available</h2>
  <section>Restart the frame to install it.</section>
  <footer><button type="button" class="btn" data-size="xs">Restart</button></footer>
</div>
```

#### **Badges**
```html
<!-- ✅ Badge variants -->
<span class="badge">Primary</span>
<span class="badge" data-variant="secondary">Secondary</span>
<span class="badge" data-variant="destructive">Error</span>
<span class="badge" data-variant="outline">Outline</span>
```

#### **Alert Dialog**
```html
<!-- ✅ Alert dialog structure -->
<button type="button" class="btn" data-variant="destructive" onclick="document.getElementById('alert-dialog-id').showModal()">Delete album</button>

<dialog id="alert-dialog-id" class="alert-dialog" aria-labelledby="alert-title-id" aria-describedby="alert-description-id">
  <div>
    <header>
      <h2 id="alert-title-id">Confirmation Required</h2>
      <p id="alert-description-id">Are you sure you want to perform this action?</p>
    </header>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="button" class="btn" data-variant="destructive" onclick="confirmAction()">Delete</button>
    </footer>
  </div>
</dialog>

<script>
function confirmAction() {
  // Perform the action
  document.getElementById('alert-dialog-id').close();
}
</script>
```

**Key Features:**
- `class="alert-dialog"` on a native `<dialog>`; content lives in a single child `<div>`
- No close button (must use action buttons)
- Not dismissed by clicking the backdrop
- Use `showModal()` to display
- Accessible with `aria-labelledby` and `aria-describedby`

#### **Progress**
```html
<div class="progress" role="progressbar" aria-label="Uploading" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <span style="width: 40%"></span>
</div>
```

#### **Spinner**
There is no dedicated spinner class. Use an animated Lucide icon:

```html
<svg aria-label="Loading" role="status" class="animate-spin lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
```

#### **Empty State**
```html
<section class="empty">
  <header>
    <figure><svg><!-- icon --></svg></figure>
    <h3>No photos yet</h3>
    <p>Upload your first photo to start the slideshow.</p>
  </header>
  <footer>
    <button type="button" class="btn">Upload photo</button>
  </footer>
</section>
```

### 🧭 Navigation Components

#### **Accordion**
```html
<!-- ✅ Accordion structure using native HTML elements -->
<section class="accordion">
  <details open>
    <summary>
      Section Title
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>Section content goes here...</section>
  </details>
  <details>
    <summary>
      Another Section
      <svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </summary>
    <section>More content...</section>
  </details>
</section>
```

**Key Features:**
- Uses native `<details>` and `<summary>` elements; no border/padding utilities needed
- Built-in accessibility with WAI-ARIA compliance
- Animated expand/collapse and chevron rotation come from the style pack
- `accordion.js` (in `all.min.js`) adds single-open behaviour

#### **Breadcrumb**
```html
<!-- ✅ Basic breadcrumb navigation -->
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li aria-hidden="true"><svg data-rtl-flip class="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg></li>
    <li><a href="/admin">Admin</a></li>
    <li aria-hidden="true"><svg data-rtl-flip class="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg></li>
    <li><span aria-current="page">Photos</span></li>
  </ol>
</nav>

<!-- ✅ Collapsed middle levels in a dropdown menu -->
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li aria-hidden="true"><svg data-rtl-flip class="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg></li>
    <li>
      <div id="breadcrumb-menu" class="dropdown-menu">
        <button type="button" id="breadcrumb-menu-trigger" aria-haspopup="menu" aria-controls="breadcrumb-menu-menu" aria-expanded="false" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Show more">
          <svg class="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
        </button>
        <div id="breadcrumb-menu-popover" data-popover aria-hidden="true">
          <div role="menu" id="breadcrumb-menu-menu" aria-labelledby="breadcrumb-menu-trigger">
            <div role="menuitem">Documentation</div>
            <div role="menuitem">Themes</div>
            <div role="menuitem">GitHub</div>
          </div>
        </div>
      </div>
    </li>
    <li aria-hidden="true"><svg data-rtl-flip class="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg></li>
    <li><span aria-current="page">Breadcrumb</span></li>
  </ol>
</nav>
```

**Key Features:**
- `class="breadcrumb"` on `<nav>`; semantic `<ol>`/`<li>` items
- Separators are `aria-hidden` list items; `data-rtl-flip` mirrors the chevron in RTL
- Current page marked with `aria-current="page"`
- Deep paths can collapse into a Dropdown Menu

#### **Pagination**
```html
<!-- ✅ Pagination navigation (built from Button) -->
<nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center">
  <ul class="flex flex-row items-center gap-1">
    <li>
      <a href="#" class="btn" data-variant="ghost" aria-label="Go to previous page">
        <svg class="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        <span>Previous</span>
      </a>
    </li>
    <li><a href="#" class="btn" data-variant="ghost" data-size="icon">1</a></li>
    <li><a href="#" class="btn" data-variant="outline" data-size="icon" aria-current="page">2</a></li>
    <li><a href="#" class="btn" data-variant="ghost" data-size="icon">3</a></li>
    <li><div class="size-9 flex items-center justify-center" aria-hidden="true"><svg class="size-4 shrink-0 lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></div></li>
    <li><a href="#" class="btn" data-variant="ghost" data-size="icon">10</a></li>
    <li>
      <a href="#" class="btn" data-variant="ghost" aria-label="Go to next page">
        <span>Next</span>
        <svg class="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </a>
    </li>
  </ul>
</nav>
```

#### **Sidebar**
```html
<!-- ✅ Sidebar navigation structure -->
<aside id="sidebar" class="sidebar" data-side="left">
  <nav aria-label="Sidebar navigation">
    <section class="scrollbar-sm">
      <div role="group" aria-labelledby="sidebar-nav-label">
        <h3 id="sidebar-nav-label">Navigation</h3>
        <ul>
          <li><a href="/dashboard" aria-current="page"><span>Dashboard</span></a></li>
          <li><a href="/photos"><span>Photos</span></a></li>
          <li>
            <!-- Nested menu with native details -->
            <details id="sidebar-settings">
              <summary aria-controls="sidebar-settings-content"><span>Settings</span></summary>
              <ul id="sidebar-settings-content">
                <li><a href="/settings/profile"><span>Profile</span></a></li>
                <li><a href="/settings/account"><span>Account</span></a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </section>
  </nav>
</aside>
<main>
  <!-- Toggle button -->
  <button type="button" class="btn" data-variant="ghost" data-size="icon" aria-label="Toggle sidebar" onclick="document.getElementById('sidebar')?.toggle()">
    <svg class="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></svg>
  </button>
</main>
```

**Key Features:**
- `data-side="left|right"` for positioning; `data-initial-open`, `data-initial-mobile-open`, `data-breakpoint` for initial state
- Element methods: `sidebar.open()`, `sidebar.close()`, `sidebar.toggle()` (no document event)
- Item states via `aria-current="page"` or `data-active="true"`; native `<details>` for submenus
- Scrollable content area with the `.scrollbar-sm` class
- The script manages `aria-hidden` and `inert`; `main` must be the sibling right after the sidebar

#### **Tabs**
```html
<!-- ✅ Tab navigation with panels -->
<div class="tabs w-full" id="demo-tabs">
  <nav role="tablist" aria-orientation="horizontal" class="w-full">
    <button type="button" role="tab" id="demo-tabs-tab-1" aria-controls="demo-tabs-panel-1" aria-selected="true" tabindex="0">Account</button>
    <button type="button" role="tab" id="demo-tabs-tab-2" aria-controls="demo-tabs-panel-2" aria-selected="false" tabindex="-1">Password</button>
    <button type="button" role="tab" id="demo-tabs-tab-3" aria-controls="demo-tabs-panel-3" aria-selected="false" tabindex="-1">Settings</button>
  </nav>
  <div role="tabpanel" id="demo-tabs-panel-1" aria-labelledby="demo-tabs-tab-1" tabindex="-1" aria-selected="true">
    <p>Manage your account information here.</p>
  </div>
  <div role="tabpanel" id="demo-tabs-panel-2" aria-labelledby="demo-tabs-tab-2" tabindex="-1" aria-selected="false" hidden>
    <p>Change your password here.</p>
  </div>
  <div role="tabpanel" id="demo-tabs-panel-3" aria-labelledby="demo-tabs-tab-3" tabindex="-1" aria-selected="false" hidden>
    <p>Configure application preferences.</p>
  </div>
</div>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/tabs.min.js" defer></script>
```

**Key Features:**
- Uses ARIA roles for accessibility (`tablist`, `tab`, `tabpanel`); no border utilities needed
- Keyboard navigation support
- Element methods: `tabs.select(tabButton)` and `tabs.refresh()`
- Dispatches `basecoat:initialized` when ready
- Hidden panels use the `hidden` attribute

### 🎛️ Interactive Components

#### **Combobox**
```html
<!-- ✅ Searchable input with autocomplete (input-first) -->
<div id="framework-combobox" class="combobox w-[240px]">
  <input type="text" role="combobox" placeholder="Select framework..." autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="framework-combobox-listbox" /><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="combobox-trigger-icon"><path d="m6 9 6 6 6-6" /></svg>
  <div id="framework-combobox-popover" data-popover aria-hidden="true">
    <div role="listbox" id="framework-combobox-listbox" aria-orientation="vertical" data-empty="No frameworks found.">
      <div role="option" data-value="react">React</div>
      <div role="option" data-value="vue">Vue</div>
      <div role="option" data-value="angular">Angular</div>
      <div role="option" data-value="svelte">Svelte</div>
    </div>
  </div>
  <input type="hidden" name="selected-framework" value="" />
</div>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/combobox.min.js" defer></script>
```

- Multiple selection: add `aria-multiselectable="true"` to the listbox (the hidden input then holds a JSON array).
- API on the root: `change` event, `setValue(value)`, `clear()`, `refresh()`.

#### **Command**
```html
<!-- ✅ Command menu (use <dialog class="command-dialog"> for a palette) -->
<div id="frame-command" class="command" aria-label="Command menu">
  <header>
    <svg aria-hidden="true"><!-- search icon --></svg>
    <input type="text" role="combobox" placeholder="Type a command or search..." autocomplete="off" aria-autocomplete="list" aria-expanded="true" aria-controls="frame-command-menu" />
  </header>
  <div role="menu" id="frame-command-menu" data-empty="No results found.">
    <div role="menuitem">Start slideshow</div>
    <div role="menuitem">Upload photos</div>
  </div>
</div>
```

#### **Dialog**
```html
<!-- ✅ Modal dialog -->
<button type="button" onclick="document.getElementById('example-dialog').showModal()" class="btn" data-variant="outline">Open Dialog</button>

<dialog id="example-dialog" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description" onclick="if (event.target === this) this.close()">
  <div class="sm:max-w-sm">
    <header>
      <h2 id="dialog-title">Edit Profile</h2>
      <p id="dialog-description">Update your profile information</p>
    </header>
    <section>
      <form class="grid gap-4">
        <div role="group" class="field">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" autofocus />
        </div>
        <div role="group" class="field">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
      </form>
    </section>
    <footer>
      <button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Cancel</button>
      <button type="button" class="btn" onclick="this.closest('dialog').close()">Save Changes</button>
    </footer>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" aria-label="Close dialog" onclick="this.closest('dialog').close()"><svg class="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
  </div>
</dialog>
```

#### **Drawer (beta)**
```html
<button type="button" class="btn" data-variant="outline" onclick="document.getElementById('photo-drawer').showModal()">Photo details</button>
<dialog id="photo-drawer" class="drawer" data-side="bottom" aria-labelledby="photo-drawer-title">
  <article>
    <header><h2 id="photo-drawer-title">Photo details</h2></header>
    <section><!-- content --></section>
    <footer><button type="button" class="btn" data-variant="outline" onclick="this.closest('dialog').close()">Close</button></footer>
  </article>
</dialog>
```

#### **Dropdown Menu**
```html
<!-- ✅ Context menu with various item types -->
<div id="options-dropdown" class="dropdown-menu">
  <button type="button" id="options-dropdown-trigger" aria-haspopup="menu" aria-controls="options-dropdown-menu" aria-expanded="false" class="btn" data-variant="outline">Options</button>
  <div id="options-dropdown-popover" data-popover aria-hidden="true" class="min-w-48">
    <div role="menu" id="options-dropdown-menu" aria-labelledby="options-dropdown-trigger">
      <div role="menuitem"><span>Edit</span><kbd>⌘E</kbd></div>
      <div role="menuitem"><span>Copy</span><kbd>⌘C</kbd></div>
      <hr role="separator" />
      <div role="menuitemcheckbox" aria-checked="true">
        <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
        Show toolbar
      </div>
      <div role="group" aria-labelledby="options-dropdown-view">
        <div role="heading" id="options-dropdown-view">View</div>
        <div role="menuitemradio" aria-checked="true">
          <span data-indicator><svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
          Grid view
        </div>
      </div>
      <hr role="separator" />
      <div role="menuitem" data-variant="destructive">Delete</div>
    </div>
  </div>
</div>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/dropdown-menu.min.js" defer></script>
```

- The script toggles `aria-checked` on checkbox/radio items automatically.
- API on the root: `open()`, `close()`, `toggle()`, `refresh()`.

#### **Popover**
```html
<!-- ✅ Rich content popover with positioning -->
<div id="info-popover" class="popover">
  <button id="info-popover-trigger" type="button" aria-expanded="false" aria-controls="info-popover-popover" class="btn" data-variant="outline">More Info</button>
  <div id="info-popover-popover" data-popover aria-hidden="true" data-side="top" data-align="center" class="w-72">
    <header>
      <h4>Additional Information</h4>
      <p>This popover contains rich content that provides additional context.</p>
    </header>
  </div>
</div>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/popover.min.js" defer></script>
```

#### **Tooltip**
```html
<!-- ✅ Simple hover tooltips (CSS-only, no JS) -->
<button class="btn" data-variant="outline" data-tooltip="This is a helpful tooltip">Hover me</button>
<button class="btn" data-variant="outline" data-tooltip="Right side tooltip" data-side="right">Right tooltip</button>
<button class="btn" data-variant="outline" data-tooltip="Bottom aligned tooltip" data-side="bottom" data-align="start">Bottom + Start</button>
```

**Key Features:**
- Simple `data-tooltip` attribute implementation (text only)
- Positioning with `data-side` (top, bottom, left, right, inline-start, inline-end)
- Alignment with `data-align` (start, center, end)
- Works on hover and keyboard focus

#### **Toast Notifications**
```html
<!-- ✅ Toast container (one per page, near the end of <body>) -->
<div id="toaster" class="toaster" data-align="end"></div>

<script>
function showToast(category, title, description) {
  document.getElementById('toaster').toast({
    category: category, // success, info, warning, error
    title: title,
    description: description,
    duration: 5000,     // -1 keeps it open
    cancel: { label: 'Dismiss' }
  });
}

// Usage examples
showToast('success', 'Success!', 'Your changes have been saved.');
showToast('error', 'Error!', 'Something went wrong. Please try again.');
</script>

<!-- Required JavaScript (or all.min.js) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/toast.min.js" defer></script>
```

- `toaster.toast(config)` returns the new `.toast` element; `toaster.closeAll()` closes all; `toast.close()` closes one.
- Server-rendered toasts: append `<div class="toast" role="status" aria-atomic="true" aria-hidden="false" data-category="success"><div class="toast-content">...</div></div>` into `#toaster` (e.g. with HTMX `hx-target="#toaster" hx-swap="beforeend"`).

#### **Theme Switcher**
```html
<!-- ✅ Required flash-prevention script (place in <head>, before stylesheets) -->
<script>
  (() => {
    try {
      const stored = localStorage.getItem("themeMode");
      if (stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    } catch (_) {}
  })();
</script>

<!-- ✅ Dark/Light mode toggle -->
<button type="button" aria-label="Toggle dark mode" data-tooltip="Toggle dark mode" data-side="bottom" onclick="window.basecoat.theme.toggle()" class="btn size-8" data-variant="outline" data-size="icon">
  <span class="hidden dark:block"><svg class="lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg></span>
  <span class="block dark:hidden"><svg class="lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg></span>
</button>
```

- `window.basecoat.theme.toggle()`, `.set('dark' | 'light')`, `.get()`; the mode is stored in `localStorage.themeMode`.
- Listen for `basecoat:themechange` on `document` (`event.detail.mode`) to react to changes.

### 🗂️ Layout Components

#### **Cards**
```html
<!-- ✅ Basic card structure -->
<div class="card">
  <header>
    <h2>Card Title</h2>
    <p>Card description.</p>
  </header>
  <section>
    <p>Card content goes here.</p>
  </section>
  <footer>
    <button type="button" class="btn">Action</button>
  </footer>
</div>

<!-- ✅ Denser card -->
<div class="card" data-size="sm">...</div>
```

#### **Item**
```html
<article class="item" data-variant="outline">
  <section>
    <h3>Living room frame</h3>
    <p>Online · 1,204 photos</p>
  </section>
  <footer>
    <button type="button" class="btn" data-variant="outline" data-size="sm">Manage</button>
  </footer>
</article>
```

#### **Avatar**
```html
<!-- ✅ Avatar with image and fallback initials -->
<span class="avatar">
  <img src="/path/to/avatar.jpg" alt="Jane Doe" />
  <span>JD</span>
</span>

<!-- ✅ Sizes -->
<span class="avatar" data-size="sm"><span>JD</span></span>
<span class="avatar" data-size="lg"><span>JD</span></span>

<!-- ✅ Overlapping group -->
<div class="avatar-group">
  <span class="avatar"><img src="/a.jpg" alt="Ann" /><span>AN</span></span>
  <span class="avatar"><img src="/b.jpg" alt="Ben" /><span>BE</span></span>
</div>
```

#### **Skeleton**
```html
<!-- ✅ Loading skeletons -->
<div class="flex items-center gap-4">
  <div class="skeleton size-10 shrink-0 rounded-full"></div>
  <div class="grid gap-2">
    <div class="skeleton h-4 w-[150px]"></div>
    <div class="skeleton h-4 w-[100px]"></div>
  </div>
</div>
```

#### **Tables**
```html
<!-- ✅ Responsive table -->
<div class="table-container">
  <table class="table">
    <caption>Recent uploads.</caption>
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

#### **Scroll Area**
```html
<div class="card h-72 p-0">
  <div class="scrollbar h-full overflow-y-auto p-4">
    <!-- long content -->
  </div>
</div>
```

#### **Kbd**
```html
<span class="inline-flex items-center gap-1"><kbd class="kbd">⌘</kbd><kbd class="kbd">K</kbd></span>
```

#### **Chart (beta)**
Chart uses Chart.js plus Basecoat's chart helper for themed colours and tooltips. It is **not** part of `all.min.js`: load Chart.js and `dist/js/chart.min.js` separately.

```html
<canvas id="visitors-chart" aria-label="Visitors by device"></canvas>
```

### 🔄 JavaScript Lifecycle

- Components initialize on page load and automatically when new DOM is inserted.
- After manually inserting HTML: `window.basecoat.initAll()` (only initializes new components).
- After a framework restores cached DOM (e.g. HTMX history restore): `window.basecoat.initAll({ force: true })`, or per component `window.basecoat.init('select', { force: true })`. Force mode resets transient state (open menus, focus).
- After changing children of an existing component, call `refresh()` on its root: Command, Select, Combobox, Dropdown Menu, Tabs.

```javascript
document.body.addEventListener('htmx:historyRestore', () => {
  window.basecoat.initAll({ force: true });
});
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

<!-- ❌ Don't use raw palette colours -->
<p class="text-gray-600 text-sm">
<!-- ✅ Use Basecoat theme tokens instead -->
<p class="text-muted-foreground text-sm">

<!-- ❌ Don't restyle component internals (menu items, options, accordion rows) -->
<div role="menuitem" class="p-2 hover:bg-muted rounded">
<!-- ✅ The style pack already styles them -->
<div role="menuitem">
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
   .photo-fade {
     animation: fade-in 600ms ease-out;
   }
   
   @keyframes fade-in {
     from { opacity: 0; }
   }
   ```

3. **Theme Tokens** (import after Basecoat)
   ```css
   :root {
     --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
   }
   ```

Scrollbars: prefer Basecoat's `.scrollbar` / `.scrollbar-sm` classes over custom scrollbar CSS.

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
<form class="grid gap-6">
  <div role="group" class="field">
    <label for="field">Field Name</label>
    <input type="text" id="field" placeholder="Enter text" aria-describedby="field-help">
    <p id="field-help">Helper text</p>
  </div>

  <div role="group" class="field" data-orientation="horizontal">
    <button type="submit" class="btn">Submit</button>
    <button type="button" class="btn" data-variant="outline">Cancel</button>
  </div>
</form>
```

### **2. Alert Messages**
```html
<!-- ✅ Error pattern -->
<div class="alert" data-variant="destructive" id="errorAlert" hidden>
  <svg><!-- error icon --></svg>
  <h2>Error Title</h2>
  <section id="errorText"></section>
</div>

<!-- JavaScript -->
<script>
function showError(message) {
  document.getElementById('errorText').textContent = message;
  document.getElementById('errorAlert').hidden = false;
}
</script>
```

### **3. Card Layout**
```html
<!-- ✅ Content card pattern -->
<div class="card">
  <header>
    <h2>Card Title</h2>
    <p>Subtitle</p>
    <div class="card-action">
      <button type="button" class="btn" data-variant="outline" data-size="icon" aria-label="Take photo"><svg><!-- camera icon --></svg></button>
    </div>
  </header>
  
  <section>
    <!-- Main content -->
  </section>
  
  <footer class="gap-2">
    <button type="button" class="btn" data-variant="outline">Cancel</button>
    <button type="button" class="btn">Confirm</button>
  </footer>
</div>
```

---

## 🚀 Quick Reference

### **Component Checklist**
Before writing custom styles, check if these Basecoat components exist:

**📋 Form Components:**
- [ ] `btn` + `data-variant` / `data-size` for buttons
- [ ] `button-group` for joined button sets
- [ ] `field` / `fieldset` for labels, helper text, errors and layout (replaces `.form`)
- [ ] `input` for text inputs, checkboxes, radios, switches, sliders
- [ ] `input-group` for inputs with icons, addons and buttons
- [ ] `textarea` for multi-line text input
- [ ] `select` for native selects (Native Select) and the custom JS Select
- [ ] `label` for standalone labels
- [ ] `dropdown-menu` with various menu item types

**🧭 Navigation Components:**
- [ ] `accordion` with `<details>` and `<summary>`
- [ ] `breadcrumb` navigation with semantic markup
- [ ] `sidebar` with `open()` / `close()` / `toggle()` methods
- [ ] `tabs` with ARIA roles and keyboard navigation
- [ ] pagination built from `btn` links

**🎛️ Interactive Components:**
- [ ] `dialog` and `alert-dialog` for modals
- [ ] `drawer` (beta) for edge-anchored panels
- [ ] `popover` for rich floating content
- [ ] `tooltip` with simple `data-tooltip` attribute
- [ ] `combobox` for searchable, input-first selection
- [ ] `command` / `command-dialog` for command menus and palettes

**🎯 Feedback Components:**
- [ ] `alert` (+ `data-variant="destructive"`) for messages
- [ ] `badge` (+ `data-variant`) for status indicators
- [ ] `toast` notifications via `toaster.toast(config)`
- [ ] `progress` for determinate progress
- [ ] spinner via an `animate-spin` icon
- [ ] `empty` for empty states

**🗂️ Layout Components:**
- [ ] `card` for content containers
- [ ] `item` for list rows with media, content and actions
- [ ] `table` (+ `table-container`) for data display
- [ ] `scrollbar` / `scrollbar-sm` for scroll areas

**📊 Data Display Components:**
- [ ] `avatar` / `avatar-group`
- [ ] `kbd` for keyboard shortcuts
- [ ] `skeleton` loading states
- [ ] `chart` (beta) with Chart.js
- [ ] theme switcher via `window.basecoat.theme`

### **CSS Priority Decision Tree**
1. **Does Basecoat have this component?** → Use Basecoat
2. **Is this a layout/positioning need?** → Consider Tailwind
3. **Is this application-specific?** → Minimal custom CSS
4. **Can this be achieved with utilities?** → Use utilities

### **File Organization**
```html
<head>
  <!-- 1. Theme flash-prevention script (inline, first) -->
  <script>/* see Theme Switcher */</script>

  <!-- 2. Tailwind CSS (browser build) -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <!-- 3. ONE Basecoat stylesheet (default or a style pack) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">

  <!-- 4. Basecoat JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>

  <!-- 5. Custom CSS (minimal, after Basecoat) -->
  <style>
    /* Only application-specific styles */
  </style>
</head>
```

---

## 🧳 Migrating from 0.3.x

Basecoat 1.0 replaced variant classes with data attributes, removed the `.form` wrapper and the global document events, and rewrote Combobox. Migrate in this order:

### **1. Update the CDN links**
Replace `basecoat-css@0.3.x` with `basecoat-css@1.0.2` in every `<link>` and `<script>` URL. Pick one stylesheet (default or a style pack).

### **2. Optional: load the compatibility layer while you migrate**
The compat stylesheet restores pre-1.0 aliases such as `btn-outline`, `btn-sm-ghost`, `btn-icon-outline`, `badge-secondary`, `alert-destructive`, `card-title`. Load it **after** Basecoat. It targets the default (Vega) style and is not a style pack; remove it once markup is migrated.

```css
@import "tailwindcss";
@import "basecoat-css";
@import "basecoat-css/compat";
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat.cdn.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/basecoat-compat.cdn.min.css">
```

### **3. Rewrite class variants as data attributes**

| 0.3.x | 1.0.2 |
| --- | --- |
| `btn-secondary`, `btn-outline`, `btn-ghost`, `btn-link`, `btn-destructive` | `btn` + `data-variant="secondary\|outline\|ghost\|link\|destructive"` |
| `btn-sm`, `btn-lg`, `btn-xs` | `btn` + `data-size="sm\|lg\|xs"` |
| `btn-icon`, `btn-sm-icon`, `btn-lg-icon-outline` | `btn` + `data-size="icon\|icon-sm\|icon-lg"` (+ `data-variant`) |
| `btn-sm-destructive` | `btn` + `data-variant="destructive" data-size="sm"` |
| `badge-secondary`, `badge-outline`, `badge-destructive` | `badge` + `data-variant="..."` |
| `alert-destructive` | `alert` + `data-variant="destructive"` |
| `card-sm` | `card` + `data-size="sm"` |
| `avatar-sm`, `avatar-lg` | `avatar` + `data-size="sm\|lg"` |
| `scrollbar-thin` | `scrollbar-sm` |
| `<form class="form">` | `<form>` with `<div role="group" class="field">` per control |
| `<div class="select">` + search `<header>` (combobox) | `<div class="combobox">` with `<input role="combobox">` |
| `data-multiple` on combobox | `aria-multiselectable="true"` on the listbox |

### **4. Replace document events with element methods**

| 0.3.x | 1.0.2 |
| --- | --- |
| `document.dispatchEvent(new CustomEvent('basecoat:toast', { detail: { config } }))` | `document.getElementById('toaster').toast(config)` |
| `document.dispatchEvent(new CustomEvent('basecoat:sidebar', { detail: { id, action } }))` | `document.getElementById(id).toggle()` / `.open()` / `.close()` |
| `document.dispatchEvent(new CustomEvent('basecoat:theme'))` + custom listener | `window.basecoat.theme.toggle()` / `.set(mode)` / `.get()` |
| (none) | `basecoat:themechange` event on `document` after every theme change |

### **5. Temporary event bridge**
If old code still dispatches the removed events, add this bridge after the Basecoat scripts and delete it once every call site is migrated:

```html
<script>
  // Bridges pre-1.0 Basecoat document events to the 1.0 element APIs.
  document.addEventListener("basecoat:toast", (event) => {
    document.getElementById("toaster")?.toast(event.detail?.config || {});
  });

  document.addEventListener("basecoat:sidebar", (event) => {
    const { id, action = "toggle" } = event.detail || {};
    const sidebar = id ? document.getElementById(id) : document.querySelector(".sidebar");
    if (sidebar && typeof sidebar[action] === "function") sidebar[action]();
  });

  document.addEventListener("basecoat:theme", (event) => {
    const mode = event.detail?.mode;
    if (mode) window.basecoat.theme.set(mode);
    else window.basecoat.theme.toggle();
  });
</script>
```

### **6. Clean up component internals**
- Dropdown menus: `data-popover aria-hidden="true"` instead of the native `popover` attribute, `<hr role="separator">`, `aria-checked` + `<span data-indicator>` instead of nested `<input>`s, `data-variant="destructive"` on dangerous items.
- Popovers: drop `popovertarget`; use `aria-controls` + `data-popover`.
- Remove manual `p-2 hover:bg-muted border rounded shadow-lg` utilities on options, menu items, accordion rows and popover content.
- Slider: replace the hand-written `--slider-value` script with `range.js` (included in `all.min.js`).
- Theme: keep only the inline flash-prevention script; drop the `basecoat:theme` listener.

---

## 📚 Resources

- **Basecoat Components**: Use the MCP tools (`get_component`, `get_usage`) for complete component snippets and usage docs
- **Basecoat Documentation**: [https://basecoat.dev](https://basecoat.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

> **Remember**: The goal is consistency, maintainability, and leveraging well-tested component libraries. Always prefer Basecoat components over custom implementations.
