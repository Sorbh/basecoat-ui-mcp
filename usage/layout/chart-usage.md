# Chart Component Usage (BETA)

> **BETA:** Chart support is beta. The JavaScript API, generated markup, and option names may change before the stable release.

## Overview
Basecoat charts use [Chart.js](https://www.chartjs.org/) with Basecoat defaults: theme colors (`--chart-1` … `--chart-5`), muted axes and grid lines, an external Basecoat-styled tooltip, and an optional generated legend. You render a `<canvas>` and call `window.basecoat.chart()`; charts re-render automatically when the theme (light/dark) or style pack changes.

## Required JavaScript
Chart needs three scripts, in this order:

```html
<script src="/assets/js/chart.umd.min.js"></script>        <!-- Chart.js itself (or https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js) -->
<script src="/assets/js/basecoat.min.js" defer></script>   <!-- Basecoat runtime -->
<script src="/assets/js/chart.min.js" defer></script>      <!-- Basecoat chart script -->
```

**`chart.js` is NOT included in `all.min.js`.** If you already load `all.min.js`, add Chart.js and `chart.min.js` after it (`all.min.js` contains the runtime, so `basecoat.min.js` is not needed then):

```html
<script src="/assets/js/chart.umd.min.js"></script>
<script src="/assets/js/all.min.js" defer></script>
<script src="/assets/js/chart.min.js" defer></script>
```

Charts are **not** auto-initialized; call `window.basecoat.chart()` after the scripts load (e.g. on `DOMContentLoaded`). It throws `Chart.js is required before calling basecoat.chart().` if Chart.js is missing.

## Basic Usage

### Bar Chart
```html
<canvas id="visitors-chart" aria-label="Monthly visitors"></canvas>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    window.basecoat.chart("#visitors-chart", {
      type: "bar",
      labelKey: "month",
      data: [
        { month: "Jan", desktop: 186, mobile: 80 },
        { month: "Feb", desktop: 305, mobile: 200 },
        { month: "Mar", desktop: 237, mobile: 120 },
        { month: "Apr", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "Jun", desktop: 214, mobile: 140 },
      ],
      series: {
        desktop: { label: "Desktop", color: "var(--chart-1)" },
        mobile: { label: "Mobile", color: "var(--chart-2)" },
      },
    })
  })
</script>
```

`basecoat.chart()` targets the `<canvas>` and wraps it in an internal `<div class="chart">` container for sizing. You don't need to add a wrapper or class yourself. Classes on the canvas are moved to that container.

### Sizing
Charts default to `aspect-video`. To change it, add a height, `min-h-*` or `aspect-*` utility to the canvas (moved to the container) or wrap the canvas in your own `<div class="chart h-64">`.

## Examples

### Legend
`legend: true` renders a display-only Basecoat legend after the canvas.
```js
window.basecoat.chart("#visitors-chart", { type: "bar", labelKey: "month", data, series, legend: true })
```

### Line Chart with Gradient Surface
```js
window.basecoat.chart("#revenue-chart", {
  type: "line",
  labelKey: "month",
  data,
  series: {
    recurring: {
      label: "Recurring",
      color: "var(--chart-1)",
      surface: "gradient",
      dataset: { fill: true, tension: 0.35 },
    },
    new: {
      label: "New",
      color: "var(--chart-2)",
      dataset: { borderDash: [4, 4] },
    },
  },
})
```

### Stacked Bar
```js
window.basecoat.chart("#pipeline-chart", {
  type: "bar",
  labelKey: "month",
  data,
  series,
  options: { scales: { x: { stacked: true }, y: { stacked: true } } },
})
```

### Donut / Radar
Use `type: "doughnut"`, `"pie"`, `"polarArea"` or `"radar"`. Cartesian axes are disabled automatically for these types.

### Escape Hatches (raw Chart.js)
```js
const chart = window.basecoat.chart("#visitors-chart", {
  type: "bar",
  labelKey: "month",
  data,
  series,
  options: {
    scales: { y: { beginAtZero: true } },
    plugins: { tooltip: { mode: "index" } },
  },
  plugins: [myChartJsPlugin],
})
```

Pass full Chart.js data through `chartData` when the `data` + `series` mapper is not enough:
```js
window.basecoat.chart("#custom-chart", {
  type: "scatter",
  chartData: {
    datasets: [{ label: "Samples", data: [{ x: 1, y: 2 }, { x: 2, y: 5 }] }],
  },
  options: { scales: { x: { type: "linear" } } },
})
```

### Declarative Config with Data Attributes
Options not passed in the config object are read from `data-chart-*` attributes on the canvas (JSON for data/series). You still need to call `basecoat.chart()`.
```html
<canvas id="sales-chart" aria-label="Sales by month"
  data-chart-type="line"
  data-chart-label-key="month"
  data-chart-legend="true"
  data-chart-data='[{"month":"Jan","sales":120},{"month":"Feb","sales":180}]'
  data-chart-series='{"sales":{"label":"Sales","color":"var(--chart-1)"}}'></canvas>
<script>
  document.addEventListener("DOMContentLoaded", () => window.basecoat.chart("#sales-chart"))
</script>
```

## Config Reference

| Option | Data attribute | Default | Description |
| --- | --- | --- | --- |
| `type` | `data-chart-type` | `"bar"` | Chart.js chart type. |
| `labelKey` | `data-chart-label-key` | `"label"` | Row key used for labels. |
| `data` | `data-chart-data` (JSON) | `[]` | Array of row objects, or raw Chart.js data with `datasets`. |
| `series` | `data-chart-series` (JSON) | `{}` | Series config keyed by row keys. |
| `legend` | `data-chart-legend` | `false` | Generate a Basecoat legend after the canvas. |
| `tooltip` | `data-chart-tooltip` | `true` | Use the Basecoat external tooltip. |
| `options` | – | `{}` | Raw Chart.js options (merged with Basecoat defaults). |
| `plugins` | – | `[]` | Raw Chart.js plugins. |
| `chartData` | – | `undefined` | Complete Chart.js data object; overrides the mapper. |
| `Chart` | – | `window.Chart` | Chart.js constructor, for bundler setups. |

### Series Options

| Option | Description |
| --- | --- |
| `label` | Display label for legend and tooltip. |
| `color` | Base color for stroke, fill, legend and tooltip marker. CSS variables like `var(--chart-1)` are resolved. Defaults cycle through `--chart-1`…`--chart-5`. |
| `surface` | Derive a fill from `color`: `true` (translucent), `"gradient"` (vertical fade), or `{ from, to }` opacity stops. |
| `dataset` | Raw Chart.js dataset options. |

### Theme Tokens

| CSS variable | Description |
| --- | --- |
| `--chart-1` … `--chart-5` | Series palette. |
| `--chart-bar-radius` | Default bar corner radius (set by the style pack). |

## JavaScript API

| API | Description |
| --- | --- |
| `window.basecoat.chart(target, config)` | Creates (or re-creates) a chart. `target` is a selector, canvas, element containing a canvas, NodeList or array. Returns the Chart.js instance, or an array for multiple targets. Calling it again on the same canvas destroys and rebuilds the chart. |
| `canvas._destroy()` | Destroys the chart and removes the generated tooltip and legend. |

Generated markup: `.chart` (container), `.chart-tooltip`, `.chart-legend`, `.chart-legend-item`. The canvas gets `data-chart-initialized`.

## Accessibility
- Give every canvas an `aria-label` describing the chart.
- Canvas content is not readable by screen readers; provide the key numbers in text or a table nearby for important data.
- Don't rely on color alone; use the legend, labels or dashed lines to distinguish series.

## Best Practices
- Use `var(--chart-N)` colors so charts follow light/dark mode and style packs.
- Keep data and series keys aligned: every `series` key must exist in each data row.
- Use `options`/`plugins` for advanced Chart.js features instead of editing generated markup.
- Pin your Chart.js version in production since this API is beta.
