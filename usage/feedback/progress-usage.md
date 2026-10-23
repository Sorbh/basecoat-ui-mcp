# Progress Component Usage

## Overview
Progress shows how far a task has advanced, such as an upload or a multi-step process. The root has `class="progress"` and `role="progressbar"`; a single child `<span>` is the indicator, and its width represents the current value.

**JavaScript required:** None for display. Basecoat ships no progress script; to animate or update progress, set the indicator width and `aria-valuenow` yourself (see below).

**CSS:** Included in any full bundle (e.g. `basecoat-css/vega.css`). For granular imports, use `basecoat-css/components/progress.css`.

## Basic Usage

### Simple Progress
```html
<div class="progress" role="progressbar" aria-label="Loading" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
  <span style="width: 66%"></span>
</div>
```

## Variants and Examples

### With Label and Value
```html
<div class="field">
  <div class="flex items-center gap-3 text-sm">
    <label id="upload-label">Upload progress</label>
    <output class="ms-auto tabular-nums">66%</output>
  </div>
  <div class="progress" role="progressbar" aria-labelledby="upload-label" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
    <span style="width: 66%"></span>
  </div>
</div>
```

### Updating with JavaScript
```html
<div id="upload-progress" class="progress" role="progressbar" aria-label="Uploading" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <span style="width: 0%"></span>
</div>

<script>
  function setProgress(id, value) {
    const progress = document.getElementById(id);
    const indicator = progress?.querySelector("span");
    if (!progress || !indicator) return;
    progress.setAttribute("aria-valuenow", String(value));
    indicator.style.width = value + "%";
  }

  setProgress("upload-progress", 40);
</script>
```

### Custom Width
Use Tailwind width utilities on the root, e.g. `class="progress w-60"`.

### RTL
Add `dir="rtl"` on the root or an ancestor; the indicator fills from the right.
```html
<div class="field w-full" dir="rtl">
  <label id="upload-rtl">تقدم الرفع</label>
  <div class="progress" role="progressbar" aria-labelledby="upload-rtl" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
    <span style="width: 66%"></span>
  </div>
</div>
```

## Attribute Reference

| Attribute / Element | Where | Purpose |
|---|---|---|
| `class="progress"` | root | Track styling |
| `role="progressbar"` | root | Exposes progress to assistive tech |
| `aria-label` / `aria-labelledby` | root | Accessible name |
| `aria-valuenow`, `aria-valuemin`, `aria-valuemax` | root | Current value and range |
| `<span style="width: N%">` | child | Visual indicator; width must match the value |

## Accessibility
- Always give the progressbar an accessible name with `aria-label` or `aria-labelledby`.
- Keep `aria-valuenow` in sync with the indicator width.
- For indeterminate work where the value is unknown, omit `aria-valuenow` or use a spinner instead.
- Show the numeric value as text (e.g. an `<output>`) when precise progress matters.

## Best Practices
- Use Progress for determinate tasks; use a spinner for short, indeterminate waits.
- Update in reasonable steps rather than on every byte, to avoid jitter.
- Pair long-running progress with a short description of what is happening.
