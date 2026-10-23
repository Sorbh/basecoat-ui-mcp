# Card Component Usage

## Overview
The card component provides a flexible container for organizing related content. It supports an optional header (title, description, and a top-right action), a content section, a footer, a leading image, and a compact size.

## HTML Structure

### Basic Card Structure
```html
<div class="card">
  <header>
    <h2>Card Title</h2>
    <p>Card Description</p>
    <div class="card-action">Card Action</div>
  </header>
  <section>
    <p>Card Content</p>
  </section>
  <footer>
    <p>Card Footer</p>
  </footer>
</div>
```

## Component Elements

| Element | Required | Description |
| --- | --- | --- |
| `<div class="card">` | Yes | Card container. Add `data-size="sm"` for a denser layout. |
| `<img>` | Optional | Image placed before the header for a media card. |
| `<header>` | Optional | Card header. |
| `<h2>` or `<h3>` | Optional | Card title (inside header). |
| `<p>` | Optional | Card description (inside header). |
| `<div class="card-action">` | Optional | Action or metadata in the top-right of the header. Use `<menu class="card-action">` for a list of commands. |
| `<section>` | Yes | Main card content. |
| `<footer>` | Optional | Footer actions or secondary content. |

### Size
| Size | Markup |
| --- | --- |
| Default | `class="card"` |
| Small | `class="card" data-size="sm"` |

## Implementation Examples

### Basic Content Card
```html
<div class="card">
  <header>
    <h2>Card Title</h2>
  </header>
  <section>
    <p>This is the main content of the card.</p>
  </section>
</div>
```

### Login Card
```html
<div class="card w-full max-w-sm">
  <header>
    <h2>Login to your account</h2>
    <p>Enter your email below to login to your account</p>
    <div class="card-action">
      <button type="button" class="btn" data-variant="link">Sign Up</button>
    </div>
  </header>
  <section>
    <form class="grid gap-6">
      <div role="group" class="field">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" placeholder="m@example.com" required />
      </div>
      <div role="group" class="field">
        <label for="login-password">Password</label>
        <input type="password" id="login-password" required />
      </div>
    </form>
  </section>
  <footer class="flex-col gap-2">
    <button type="button" class="btn w-full">Login</button>
    <button type="button" class="btn w-full" data-variant="outline">Login with Google</button>
  </footer>
</div>
```

### Small Card
```html
<div class="card" data-size="sm">
  <header>
    <h2>Small Card</h2>
    <p>This card uses the small size variant.</p>
    <div class="card-action">
      <button type="button" class="btn" data-size="sm" data-variant="outline">Action</button>
    </div>
  </header>
  <section>
    <p>Compact spacing for dense layouts.</p>
  </section>
</div>
```

### Meeting Notes Card
```html
<div class="card">
  <header>
    <h2>Meeting Notes</h2>
    <p>Transcript from the meeting with the client</p>
  </header>
  <section>
    <div class="grid gap-4">
      <div>
        <h3 class="font-medium">Date</h3>
        <p>March 15, 2024</p>
      </div>
      <div>
        <h3 class="font-medium">Agenda</h3>
        <ul class="list-disc list-inside">
          <li>Project timeline review</li>
          <li>Budget discussion</li>
          <li>Next steps</li>
        </ul>
      </div>
    </div>
  </section>
  <footer class="gap-2">
    <span class="text-sm text-muted-foreground">Participants:</span>
    <div class="avatar-group">
      <span class="avatar" data-size="sm"><img src="/avatar1.jpg" alt="John" /><span>JD</span></span>
      <span class="avatar" data-size="sm"><img src="/avatar2.jpg" alt="Jane" /><span>JA</span></span>
    </div>
  </footer>
</div>
```

### Product Card (Image)
Place the image before the header.
```html
<div class="card">
  <img src="/product.jpg" alt="Product" class="aspect-video w-full object-cover" />
  <header>
    <h2>Product Name</h2>
    <p>Product description goes here.</p>
    <div class="card-action">
      <span class="badge" data-variant="secondary">$99.99</span>
    </div>
  </header>
  <footer class="gap-2">
    <button type="button" class="btn flex-1" data-variant="outline">Add to Cart</button>
    <button type="button" class="btn flex-1">Buy Now</button>
  </footer>
</div>
```

### Card with Icon Header
```html
<div class="card">
  <header>
    <div class="flex items-center gap-3">
      <div class="flex size-10 items-center justify-center rounded-md border">
        <svg class="lucide lucide-camera size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" /><circle cx="12" cy="13" r="3" /></svg>
      </div>
      <div>
        <h2>Photo Gallery</h2>
        <p>Manage your photo collection</p>
      </div>
    </div>
  </header>
  <section>
    <div class="grid grid-cols-3 gap-2">
      <img src="/photo1.jpg" alt="Photo 1" class="aspect-square object-cover rounded">
      <img src="/photo2.jpg" alt="Photo 2" class="aspect-square object-cover rounded">
      <img src="/photo3.jpg" alt="Photo 3" class="aspect-square object-cover rounded">
    </div>
  </section>
  <footer>
    <button type="button" class="btn w-full">Upload More Photos</button>
  </footer>
</div>
```

## Card Variations

### Header with Command Menu
```html
<div class="card">
  <header>
    <h2>Quick Actions</h2>
    <p>Shortcuts for common tasks</p>
    <menu class="card-action flex gap-2">
      <li><button type="button" class="btn" data-size="sm">Action 1</button></li>
      <li><button type="button" class="btn" data-size="sm" data-variant="outline">Action 2</button></li>
    </menu>
  </header>
  <section>
    <p>Content</p>
  </section>
</div>
```

### Content-Only Card
```html
<div class="card">
  <section>
    <p>Simple card with just content, no header or footer.</p>
  </section>
</div>
```

### Minimal Card
```html
<div class="card">
  <section class="text-center">
    <h3>Minimal Card</h3>
    <p>Clean and simple design.</p>
  </section>
</div>
```

### RTL
```html
<div class="card" dir="rtl">
  <!-- Card content -->
</div>
```

## Responsive Design

### Full Width on Mobile
```html
<div class="card w-full md:w-auto">
  <!-- Card content -->
</div>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card"><!-- Card 1 --></div>
  <div class="card"><!-- Card 2 --></div>
  <div class="card"><!-- Card 3 --></div>
</div>
```

## Accessibility Guidelines

### Semantic Structure
- Use appropriate heading levels (h2, h3, etc.)
- Maintain logical content hierarchy
- Include alt text for images

### Focus Management
```html
<div class="card">
  <header>
    <h2 id="card-heading">Card Title</h2>
  </header>
  <section>
    <button type="button" class="btn" aria-describedby="card-heading">
      Action Button
    </button>
  </section>
</div>
```

### Interactive Cards
Prefer a real link or button inside the card. If the whole card must be clickable:
```html
<a href="/details" class="card hover:shadow-lg transition-shadow" aria-label="Open card details">
  <!-- Card content -->
</a>
```

## Best Practices

### Content Organization
- Keep card content focused and related
- Use consistent header structure across cards
- Put secondary actions or metadata in `.card-action`
- Limit footer actions to 2-3 buttons

### Layout Considerations
- Use `data-size="sm"` instead of overriding padding manually
- Consider card width and height consistency
- Implement responsive behavior for different screen sizes
- Group related cards together

### Interactive Elements
- Place primary actions in the footer
- Use `.card-action` for header actions
- Ensure adequate touch targets for mobile

## JavaScript Integration

### Card Interactions
```javascript
// Handle card click
document.addEventListener('click', function(e) {
  const card = e.target.closest('.card');
  if (card && card.hasAttribute('data-clickable')) {
    // Handle card click
  }
});
```

### Dynamic Card Creation
```javascript
function createCard(title, content, { small = false } = {}) {
  return `
    <div class="card"${small ? ' data-size="sm"' : ''}>
      <header>
        <h2>${title}</h2>
      </header>
      <section>
        <p>${content}</p>
      </section>
    </div>
  `;
}
```

## Migrating from 0.x
- `card-sm` is now `class="card" data-size="sm"`.
- Header actions use `<div class="card-action">` inside `<header>`.
- Button classes inside cards: `btn-outline` becomes `class="btn" data-variant="outline"`, `btn-sm` becomes `class="btn" data-size="sm"`.
- The `.form` wrapper is gone: wrap each control in `<div role="group" class="field">`.
- To keep old class names working temporarily, load `@import "basecoat-css/compat";` after Basecoat.
