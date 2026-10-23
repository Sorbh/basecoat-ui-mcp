# Theme Switcher Component Usage

## Overview
The theme switcher toggles between light and dark mode by adding or removing the `dark` class on `<html>`. In Basecoat 1.0 the theme logic ships in the runtime (`basecoat.min.js`, also included in `all.min.js`) as `window.basecoat.theme`. The chosen mode is stored in `localStorage.themeMode`, and a `basecoat:themechange` event is dispatched on `document` whenever it changes. You only need a tiny inline script in `<head>` to avoid a flash of the wrong theme.

## HTML Structure
- An icon button (`class="btn" data-variant="outline" data-size="icon"`) with `onclick="window.basecoat.theme.toggle()"`
- Two icon wrappers: `<span class="hidden dark:block">` (sun) and `<span class="block dark:hidden">` (moon)
- Optional `data-tooltip` + `aria-label` for an accessible name

## Step 1: Avoid the Initial Flash
Add this inline script in `<head>` **before** your stylesheets:

```html
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
```

## Step 2: Load the Runtime

```html
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/all.min.js" defer></script>
<!-- or just the runtime -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@1.0.2/dist/js/basecoat.min.js" defer></script>
```

## Step 3: Add the Toggle Button

```html
<button type="button" aria-label="Toggle dark mode" data-tooltip="Toggle dark mode" data-side="bottom" onclick="window.basecoat.theme.toggle()" class="btn size-8" data-variant="outline" data-size="icon">
  <span class="hidden dark:block"><svg class="lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg></span>
  <span class="block dark:hidden"><svg class="lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg></span>
</button>
```

## JavaScript API

| API | Type | Description |
| --- | --- | --- |
| `window.basecoat.theme.get()` | Method | Returns `"dark"` or `"light"` |
| `window.basecoat.theme.set(mode)` | Method | Sets `"dark"` or `"light"` and stores it in `localStorage.themeMode` |
| `window.basecoat.theme.toggle()` | Method | Toggles between dark and light |
| `basecoat:themechange` | Event | Dispatched on `document` after a change, with `event.detail.mode` |

## Explicit Light/Dark Buttons

```html
<div class="flex gap-2">
  <button type="button" class="btn" data-variant="outline" data-size="sm" onclick="window.basecoat.theme.set('light')">Light</button>
  <button type="button" class="btn" data-variant="outline" data-size="sm" onclick="window.basecoat.theme.set('dark')">Dark</button>
</div>
```

## Reacting to Changes

```javascript
document.addEventListener('basecoat:themechange', (event) => {
  console.log('Theme is now', event.detail.mode); // "dark" | "light"
});

// Follow the OS setting until the user picks a mode
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (!localStorage.getItem('themeMode')) {
    document.documentElement.classList.toggle('dark', event.matches);
  }
});
```

## Migrating from 0.3.x
- The `basecoat:theme` document event and the hand-written listener script are gone. Call `window.basecoat.theme.toggle()` / `set(mode)` instead.
- Keep only the small flash-prevention script in `<head>`; the runtime handles toggling and persistence (same `themeMode` key, so stored preferences carry over).
- Replace `class="btn-icon-outline"` with `class="btn" data-variant="outline" data-size="icon"`.

## Accessibility Notes
- Give the icon-only button an `aria-label`
- Mark the button `type="button"` so it never submits a form
- Respect `prefers-color-scheme` when no stored preference exists (the head script does this)
