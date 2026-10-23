# Textarea Component Usage

## Overview
The textarea component styles native `<textarea>` elements for multi-line text. Add `class="textarea"` to a standalone textarea, or place it inside a `<div role="group" class="field">`, which styles it (plus its label and helper text) automatically. States come from native attributes: `disabled`, `readonly`, `required`, and `aria-invalid="true"`.

## Class and Attribute Reference

| Markup | Description |
| --- | --- |
| `<textarea class="textarea">` | Standalone styled textarea. Grows with its content (`field-sizing: content`) in supporting browsers, with a minimum height. |
| `<div role="group" class="field">` | Field wrapper for label + textarea + helper text. The textarea needs no class inside it. |
| `data-invalid` (on `.field`) | Invalid field styling. |
| `aria-invalid="true"` (on the textarea) | Invalid control styling. |
| `rows="..."` | Initial visible height. |

## Basic Usage

### Simple Textarea
```html
<textarea class="textarea" placeholder="Type your message here"></textarea>
```

### Textarea with Label
```html
<div role="group" class="field">
  <label for="message">Message</label>
  <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
</div>
```

### Textarea with Helper Text
```html
<div role="group" class="field">
  <label for="description">Description</label>
  <textarea id="description" placeholder="Enter description" rows="4" aria-describedby="description-help"></textarea>
  <p id="description-help">Provide a detailed description (max 500 characters)</p>
</div>
```

### Textarea with Button
```html
<div class="grid w-full max-w-xs gap-3">
  <textarea class="textarea" placeholder="Type your message here"></textarea>
  <button type="submit" class="btn">Submit</button>
</div>
```

## Textarea Configurations

### Different Sizes
```html
<!-- Small textarea -->
<textarea class="textarea" rows="2" placeholder="Small textarea"></textarea>

<!-- Medium textarea -->
<textarea class="textarea" rows="4" placeholder="Medium textarea"></textarea>

<!-- Large textarea -->
<textarea class="textarea" rows="8" placeholder="Large textarea"></textarea>

<!-- Fixed height, no resize handle -->
<textarea class="textarea min-h-[100px] resize-none" placeholder="Fixed textarea"></textarea>
```

### With Character Count
```html
<div role="group" class="field">
  <label for="bio">Bio</label>
  <textarea id="bio" placeholder="Tell us about yourself" rows="4" maxlength="250" aria-describedby="bio-help"></textarea>
  <div class="flex justify-between text-sm text-muted-foreground">
    <span id="bio-help">Brief description of yourself</span>
    <span id="char-count">0/250</span>
  </div>
</div>

<script>
document.getElementById('bio').addEventListener('input', function() {
  const count = this.value.length;
  const max = this.maxLength;
  const counter = document.getElementById('char-count');
  counter.textContent = `${count}/${max}`;

  // Highlight when approaching the limit
  counter.className = count > max * 0.9 ? 'text-destructive' : 'text-muted-foreground';
});
</script>
```

## Textarea States

### Default State
```html
<textarea class="textarea" placeholder="Default textarea"></textarea>
```

### Required Textarea
```html
<div role="group" class="field">
  <label for="required-textarea">Comments <span class="text-destructive">*</span></label>
  <textarea id="required-textarea" required placeholder="Required field"></textarea>
</div>
```

### Invalid State
```html
<div role="group" class="field" data-invalid>
  <label for="textarea-invalid">Message</label>
  <textarea id="textarea-invalid" placeholder="Type your message here" aria-invalid="true" aria-describedby="textarea-invalid-error"></textarea>
  <p id="textarea-invalid-error" role="alert">Message is required.</p>
</div>
```

### Disabled State
```html
<textarea class="textarea" placeholder="Type your message here" disabled></textarea>
```

### Readonly State
```html
<textarea class="textarea" readonly>This content is readonly and cannot be edited.</textarea>
```

## Form Integration

### Contact Form with Textarea
```html
<form>
  <fieldset class="fieldset">
    <legend>Contact us</legend>
    <p>We usually reply within one business day.</p>
    <div role="group" aria-label="Contact fields">
      <div role="group" class="field">
        <label for="name">Name</label>
        <input id="name" type="text" required />
      </div>
      <div role="group" class="field">
        <label for="email">Email</label>
        <input id="email" type="email" required />
      </div>
      <div role="group" class="field">
        <label for="subject">Subject</label>
        <input id="subject" type="text" required />
      </div>
      <div role="group" class="field">
        <label for="contact-message">Message</label>
        <textarea id="contact-message" rows="6" required placeholder="Enter your message here..." aria-describedby="contact-message-help"></textarea>
        <p id="contact-message-help">Please provide as much detail as possible</p>
      </div>
    </div>
  </fieldset>
  <button type="submit" class="btn mt-6">Send Message</button>
</form>
```

### Feedback Form
```html
<form class="space-y-6">
  <div role="group" class="field">
    <label for="rating">Rating</label>
    <select class="select w-full" id="rating" required>
      <option value="">Select rating...</option>
      <option value="5">Excellent (5 stars)</option>
      <option value="4">Good (4 stars)</option>
      <option value="3">Average (3 stars)</option>
      <option value="2">Poor (2 stars)</option>
      <option value="1">Terrible (1 star)</option>
    </select>
  </div>

  <div role="group" class="field">
    <label for="feedback-text">Detailed Feedback</label>
    <textarea id="feedback-text" rows="5" placeholder="Please share your experience..." aria-describedby="feedback-text-help"></textarea>
    <p id="feedback-text-help">Your feedback helps us improve our service</p>
  </div>

  <div role="group" class="field">
    <label for="suggestions">Suggestions (Optional)</label>
    <textarea id="suggestions" rows="3" placeholder="Any suggestions for improvement?"></textarea>
  </div>

  <button type="submit" class="btn">Submit Feedback</button>
</form>
```

### Responsive Label Beside Textarea
```html
<div role="group" class="field" data-orientation="responsive">
  <section>
    <label for="responsive-message">Message</label>
    <p id="responsive-message-description">Keep it short, preferably under 100 characters.</p>
  </section>
  <textarea id="responsive-message" placeholder="Hello, world!" rows="4" aria-describedby="responsive-message-description" class="min-h-[100px] resize-none sm:min-w-[300px]"></textarea>
</div>
```

## Advanced Features

### Auto-Resizing Textarea
Basecoat textareas already grow with their content where the browser supports `field-sizing: content`. For other browsers, add a small script fallback.
```html
<div role="group" class="field">
  <label for="auto-resize">Auto-resizing Textarea</label>
  <textarea id="auto-resize" placeholder="Type here and watch it grow..." class="resize-none"></textarea>
</div>

<script>
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

if (!CSS.supports('field-sizing', 'content')) {
  const el = document.getElementById('auto-resize');
  el.addEventListener('input', () => autoResize(el));
  autoResize(el);
}
</script>
```

### Textarea with Toolbar
```html
<div role="group" class="field">
  <label for="rich-textarea">Description</label>

  <!-- Simple formatting toolbar -->
  <div role="group" aria-label="Formatting" class="button-group">
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" onclick="formatText('bold')" aria-label="Bold">
      <strong>B</strong>
    </button>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" onclick="formatText('italic')" aria-label="Italic">
      <em>I</em>
    </button>
    <button type="button" class="btn" data-variant="ghost" data-size="icon-sm" onclick="formatText('underline')" aria-label="Underline">
      <u>U</u>
    </button>
  </div>

  <textarea id="rich-textarea" rows="6" placeholder="Enter your text here..."></textarea>
</div>

<script>
function formatText(command) {
  const textarea = document.getElementById('rich-textarea');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);

  if (selectedText) {
    let formattedText = selectedText;
    switch(command) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
    }

    textarea.setRangeText(formattedText, start, end, 'select');
    textarea.focus();
  }
}
</script>
```

For a textarea with inline addons (send button, spinner, footer), use the Input Group component (`<div class="input-group">` with a `<footer data-align="block-end">`).

### Textarea with Mentions
```html
<div role="group" class="field">
  <label for="mention-textarea">Comment</label>
  <textarea id="mention-textarea" rows="4" placeholder="Type @ to mention someone..."></textarea>
  <div id="mention-suggestions" class="hidden rounded-md border bg-popover text-popover-foreground shadow-md p-1"></div>
</div>

<script>
const users = [
  { id: 1, name: 'John Doe', username: 'johndoe' },
  { id: 2, name: 'Jane Smith', username: 'janesmith' },
  { id: 3, name: 'Bob Johnson', username: 'bobjohnson' }
];

document.getElementById('mention-textarea').addEventListener('input', function(e) {
  const value = this.value;
  const cursorPos = this.selectionStart;
  const lastAtIndex = value.lastIndexOf('@', cursorPos - 1);

  if (lastAtIndex !== -1) {
    const query = value.substring(lastAtIndex + 1, cursorPos);
    showMentionSuggestions(query, lastAtIndex);
  } else {
    hideMentionSuggestions();
  }
});

function showMentionSuggestions(query, position) {
  const suggestions = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  const container = document.getElementById('mention-suggestions');

  if (suggestions.length > 0 && query.length > 0) {
    container.innerHTML = suggestions.map(user =>
      `<div class="rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer" onclick="insertMention('${user.username}', ${position})">
        <strong>${user.name}</strong> @${user.username}
       </div>`
    ).join('');
    container.classList.remove('hidden');
  } else {
    hideMentionSuggestions();
  }
}

function hideMentionSuggestions() {
  document.getElementById('mention-suggestions').classList.add('hidden');
}

function insertMention(username, atPosition) {
  const textarea = document.getElementById('mention-textarea');
  const value = textarea.value;
  const beforeAt = value.substring(0, atPosition);
  const afterCursor = value.substring(textarea.selectionStart);

  textarea.value = beforeAt + '@' + username + ' ' + afterCursor;
  hideMentionSuggestions();
  textarea.focus();
}
</script>
```

## Validation

### Client-side Validation
```html
<form class="space-y-6" id="validation-form" novalidate>
  <div role="group" class="field">
    <label for="title">Title</label>
    <input id="title" type="text" required minlength="5" maxlength="100" />
  </div>

  <div role="group" class="field">
    <label for="content">Content</label>
    <textarea id="content" rows="6" required minlength="50" maxlength="2000"
              placeholder="Enter at least 50 characters..." aria-describedby="content-help"></textarea>
    <div class="flex justify-between text-sm text-muted-foreground">
      <span id="content-help">Minimum 50 characters required</span>
      <span id="content-count">0/2000</span>
    </div>
  </div>

  <button type="submit" class="btn">Submit</button>
</form>

<script>
const form = document.getElementById('validation-form');
const contentTextarea = document.getElementById('content');
const contentCount = document.getElementById('content-count');

function setInvalid(control, invalid) {
  const field = control.closest('.field');
  if (invalid) {
    control.setAttribute('aria-invalid', 'true');
    field.setAttribute('data-invalid', '');
  } else {
    control.removeAttribute('aria-invalid');
    field.removeAttribute('data-invalid');
  }
}

// Character count
contentTextarea.addEventListener('input', function() {
  const count = this.value.length;
  contentCount.textContent = `${count}/${this.maxLength}`;
  contentCount.className = count < this.minLength ? 'text-destructive' : 'text-muted-foreground';
});

// Form validation
form.addEventListener('submit', function(e) {
  e.preventDefault();

  this.querySelectorAll('input, textarea').forEach(control => {
    setInvalid(control, !control.checkValidity());
  });

  if (this.checkValidity()) {
    console.log('Form is valid!');
    // Submit form
  }
});
</script>
```

## Accessibility Guidelines

### ARIA Attributes
```html
<div role="group" class="field">
  <label for="accessible-textarea">Message</label>
  <textarea id="accessible-textarea"
            aria-describedby="textarea-help"
            required
            rows="4"
            placeholder="Enter your message"></textarea>
  <p id="textarea-help">Please provide a detailed message with at least 20 characters</p>
</div>
```

### Error Handling with ARIA
```html
<div role="group" class="field" data-invalid>
  <label for="error-textarea">Description</label>
  <textarea id="error-textarea"
            aria-describedby="error-message"
            aria-invalid="true"
            rows="4"></textarea>
  <p id="error-message" role="alert">Description must be at least 10 characters long</p>
</div>
```

## Best Practices

### Content Guidelines
- Provide clear labels that describe the expected content
- Use helpful placeholder text that shows examples
- Include character limits and guidance
- Offer formatting tips when relevant

### UX Considerations
- Set appropriate default heights (rows attribute)
- Allow resizing when users need more space
- Provide real-time feedback for character limits
- Consider auto-save for longer content

### Performance
- Debounce input events for expensive operations
- Rely on native `field-sizing` before adding auto-resize scripts
- Use pagination or lazy loading for very long content

### Mobile Optimization
```html
<!-- Mobile-friendly textarea -->
<textarea class="textarea resize-y" rows="3" placeholder="Tap to enter text..."></textarea>
```

## JavaScript Utilities

Textareas are CSS-only; no Basecoat script is required.

### Textarea Helper Functions
```javascript
class TextareaHelper {
  static autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  static updateCharCount(textarea, counterElement) {
    const count = textarea.value.length;
    const max = textarea.maxLength > 0 ? textarea.maxLength : Infinity;
    counterElement.textContent = max === Infinity ? count : `${count}/${max}`;
    counterElement.className = count > max * 0.9 ? 'text-destructive' : 'text-muted-foreground';
  }

  static insertAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.setRangeText(text, start, end, 'end');
    textarea.focus();
  }

  static validateLength(textarea, minLength, maxLength) {
    const length = textarea.value.length;
    let message = '';

    if (length < minLength) {
      message = `Please enter at least ${minLength} characters`;
    } else if (maxLength && length > maxLength) {
      message = `Please enter no more than ${maxLength} characters`;
    }

    textarea.setCustomValidity(message);
    if (message) {
      textarea.setAttribute('aria-invalid', 'true');
    } else {
      textarea.removeAttribute('aria-invalid');
    }
    return !message;
  }
}

// Usage
document.querySelectorAll('textarea[data-auto-resize]').forEach(textarea => {
  textarea.addEventListener('input', () => TextareaHelper.autoResize(textarea));
});
```

## Migrating from 0.x
The `.form` wrapper class was removed in 1.0: wrap each label + textarea in `<div role="group" class="field">` instead of relying on a styled form wrapper. Combined button classes such as `btn-sm-ghost` became `class="btn" data-variant="ghost" data-size="sm"`. The optional `basecoat-css/compat` stylesheet only restores legacy aliases for older markup during migration.
