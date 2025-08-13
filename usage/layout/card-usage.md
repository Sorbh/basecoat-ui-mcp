# Card Component Usage

## Overview
The card component provides a flexible container for organizing related content. It supports optional headers, content sections, and footers with semantic HTML structure.

## HTML Structure

### Basic Card Structure
```html
<div class="card">
  <header>
    <h2>Card Title</h2>
    <p>Card Description (optional)</p>
  </header>
  <section>
    <p>Card Content</p>
  </section>
  <footer>
    <p>Card Footer (optional)</p>
  </footer>
</div>
```

## Component Elements

### Card Container
- `<div class="card">` - Main container with card styling

### Header Section (Optional)
- `<header>` - Contains card title and optional description
- `<h2>` - Primary card title
- `<p>` - Optional subtitle or description

### Content Section
- `<section>` - Primary content area
- Can contain any type of content (text, forms, images, etc.)

### Footer Section (Optional)
- `<footer>` - Optional footer area
- Typically contains actions, metadata, or supplementary information

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
<div class="card w-full max-w-md">
  <header>
    <h2>Login to your account</h2>
    <p>Enter your details below to login to your account</p>
  </header>
  <section>
    <form class="form grid gap-4">
      <div class="grid gap-2">
        <label for="email" class="label">Email</label>
        <input class="input" id="email" type="email" required>
      </div>
      <div class="grid gap-2">
        <label for="password" class="label">Password</label>
        <input class="input" id="password" type="password" required>
      </div>
    </form>
  </section>
  <footer>
    <div class="flex gap-2">
      <button class="btn-outline w-full">Sign Up</button>
      <button class="btn w-full">Sign In</button>
    </div>
  </footer>
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
  <footer>
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Participants:</span>
      <div class="flex -space-x-2">
        <img class="size-6 rounded-full border-2 border-background" src="/avatar1.jpg" alt="John">
        <img class="size-6 rounded-full border-2 border-background" src="/avatar2.jpg" alt="Jane">
      </div>
    </div>
  </footer>
</div>
```

### Product Card
```html
<div class="card">
  <header>
    <img src="/product.jpg" alt="Product" class="w-full h-48 object-cover rounded-t-md">
  </header>
  <section>
    <h2 class="text-lg font-semibold">Product Name</h2>
    <p class="text-muted-foreground">Product description goes here.</p>
    <p class="text-xl font-bold mt-2">$99.99</p>
  </section>
  <footer>
    <div class="flex gap-2">
      <button class="btn-outline flex-1">Add to Cart</button>
      <button class="btn flex-1">Buy Now</button>
    </div>
  </footer>
</div>
```

### Card with Icon Header
```html
<div class="card">
  <header>
    <div class="flex items-center gap-3">
      <div class="btn-lg-icon-outline">📷</div>
      <div>
        <h2>Photo Gallery</h2>
        <p class="text-muted-foreground">Manage your photo collection</p>
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
    <button class="btn w-full">Upload More Photos</button>
  </footer>
</div>
```

## Card Variations

### Header-Only Card
```html
<div class="card">
  <header>
    <h2>Quick Actions</h2>
    <div class="flex gap-2 mt-3">
      <button class="btn-sm">Action 1</button>
      <button class="btn-sm-outline">Action 2</button>
    </div>
  </header>
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
    <h2 id="card-title">Card Title</h2>
  </header>
  <section>
    <button class="btn" aria-describedby="card-title">
      Action Button
    </button>
  </section>
</div>
```

### Interactive Cards
```html
<div class="card cursor-pointer hover:shadow-lg transition-shadow" 
     role="button" 
     tabindex="0"
     aria-label="Open card details">
  <!-- Card content -->
</div>
```

## Best Practices

### Content Organization
- Keep card content focused and related
- Use consistent header structure across cards
- Limit footer actions to 2-3 buttons
- Maintain visual hierarchy with typography

### Layout Considerations
- Use appropriate spacing between card elements
- Consider card width and height consistency
- Implement responsive behavior for different screen sizes
- Group related cards together

### Interactive Elements
- Place primary actions in the footer
- Use secondary actions in headers when appropriate
- Ensure adequate touch targets for mobile
- Provide clear visual feedback for interactions

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
function createCard(title, content) {
  return `
    <div class="card">
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