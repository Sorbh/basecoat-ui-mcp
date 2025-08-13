# Textarea Component Usage

## Overview
The textarea component provides a multi-line text input field for longer content. It supports various configurations including sizing, validation states, and accessibility features.

## Basic Usage

### Simple Textarea
```html
<textarea class="textarea" placeholder="Enter your message" rows="3"></textarea>
```

### Textarea with Label
```html
<div class="grid gap-2">
  <label for="message" class="label">Message</label>
  <textarea class="textarea" id="message" placeholder="Enter your message" rows="4"></textarea>
</div>
```

### Textarea with Helper Text
```html
<div class="grid gap-2">
  <label for="description" class="label">Description</label>
  <textarea class="textarea" id="description" placeholder="Enter description" rows="4"></textarea>
  <p class="text-muted-foreground text-sm">Provide a detailed description (max 500 characters)</p>
</div>
```

### Complete Textarea with Label and Helper Text
```html
<div class="grid gap-2">
  <label for="feedback" class="label">Feedback</label>
  <textarea class="textarea" id="feedback" placeholder="Share your feedback" rows="5" maxlength="1000"></textarea>
  <p class="text-muted-foreground text-sm">Help us improve by sharing your thoughts (max 1000 characters)</p>
</div>
```

## Textarea Configurations

### Different Sizes
```html
<!-- Small textarea -->
<textarea class="textarea" rows="2" placeholder="Small textarea"></textarea>

<!-- Medium textarea (default) -->
<textarea class="textarea" rows="4" placeholder="Medium textarea"></textarea>

<!-- Large textarea -->
<textarea class="textarea" rows="8" placeholder="Large textarea"></textarea>

<!-- Auto-expanding textarea -->
<textarea class="textarea" placeholder="Auto-expanding textarea" style="min-height: 80px; resize: vertical;"></textarea>
```

### With Character Count
```html
<div class="grid gap-2">
  <label for="bio" class="label">Bio</label>
  <textarea class="textarea" id="bio" placeholder="Tell us about yourself" rows="4" maxlength="250"></textarea>
  <div class="flex justify-between text-sm text-muted-foreground">
    <span>Brief description of yourself</span>
    <span id="char-count">0/250</span>
  </div>
</div>

<script>
document.getElementById('bio').addEventListener('input', function() {
  const count = this.value.length;
  const max = this.maxLength;
  document.getElementById('char-count').textContent = `${count}/${max}`;
  
  // Change color when approaching limit
  const counter = document.getElementById('char-count');
  if (count > max * 0.9) {
    counter.className = 'text-destructive';
  } else if (count > max * 0.75) {
    counter.className = 'text-warning';
  } else {
    counter.className = 'text-muted-foreground';
  }
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
<div class="grid gap-2">
  <label for="required-textarea" class="label">
    Comments <span class="text-destructive">*</span>
  </label>
  <textarea class="textarea" id="required-textarea" required placeholder="Required field"></textarea>
</div>
```

### Invalid State
```html
<div class="grid gap-2">
  <label for="invalid-textarea" class="label">Message</label>
  <textarea class="textarea" id="invalid-textarea" aria-invalid="true" placeholder="Enter message"></textarea>
  <p class="text-destructive text-sm">Please enter a message with at least 10 characters</p>
</div>
```

### Disabled State
```html
<textarea class="textarea" disabled placeholder="This textarea is disabled"></textarea>
```

### Readonly State
```html
<textarea class="textarea" readonly>This content is readonly and cannot be edited.</textarea>
```

## Form Integration

### Contact Form with Textarea
```html
<form class="form grid gap-6">
  <div class="grid gap-2">
    <label for="name" class="label">Name</label>
    <input class="input" id="name" type="text" required>
  </div>
  
  <div class="grid gap-2">
    <label for="email" class="label">Email</label>
    <input class="input" id="email" type="email" required>
  </div>
  
  <div class="grid gap-2">
    <label for="subject" class="label">Subject</label>
    <input class="input" id="subject" type="text" required>
  </div>
  
  <div class="grid gap-2">
    <label for="message" class="label">Message</label>
    <textarea class="textarea" id="message" rows="6" required 
              placeholder="Enter your message here..."></textarea>
    <p class="text-muted-foreground text-sm">Please provide as much detail as possible</p>
  </div>
  
  <button type="submit" class="btn">Send Message</button>
</form>
```

### Feedback Form
```html
<form class="form grid gap-6">
  <div class="grid gap-2">
    <label for="rating" class="label">Rating</label>
    <select class="select" id="rating" required>
      <option value="">Select rating...</option>
      <option value="5">Excellent (5 stars)</option>
      <option value="4">Good (4 stars)</option>
      <option value="3">Average (3 stars)</option>
      <option value="2">Poor (2 stars)</option>
      <option value="1">Terrible (1 star)</option>
    </select>
  </div>
  
  <div class="grid gap-2">
    <label for="feedback-text" class="label">Detailed Feedback</label>
    <textarea class="textarea" id="feedback-text" rows="5" 
              placeholder="Please share your experience..."></textarea>
    <p class="text-muted-foreground text-sm">Your feedback helps us improve our service</p>
  </div>
  
  <div class="grid gap-2">
    <label for="suggestions" class="label">Suggestions (Optional)</label>
    <textarea class="textarea" id="suggestions" rows="3" 
              placeholder="Any suggestions for improvement?"></textarea>
  </div>
  
  <button type="submit" class="btn">Submit Feedback</button>
</form>
```

## Advanced Features

### Auto-Resizing Textarea
```html
<div class="grid gap-2">
  <label for="auto-resize" class="label">Auto-resizing Textarea</label>
  <textarea class="textarea" id="auto-resize" 
            placeholder="Type here and watch it grow..." 
            style="min-height: 80px; resize: none;"></textarea>
</div>

<script>
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

document.getElementById('auto-resize').addEventListener('input', function() {
  autoResize(this);
});

// Initialize
autoResize(document.getElementById('auto-resize'));
</script>
```

### Textarea with Toolbar
```html
<div class="grid gap-2">
  <label for="rich-textarea" class="label">Description</label>
  
  <!-- Simple formatting toolbar -->
  <div class="flex gap-1 p-2 border rounded-t border-b-0">
    <button type="button" class="btn-sm-ghost" onclick="formatText('bold')" title="Bold">
      <strong>B</strong>
    </button>
    <button type="button" class="btn-sm-ghost" onclick="formatText('italic')" title="Italic">
      <em>I</em>
    </button>
    <button type="button" class="btn-sm-ghost" onclick="formatText('underline')" title="Underline">
      <u>U</u>
    </button>
  </div>
  
  <textarea class="textarea rounded-t-none" id="rich-textarea" rows="6" 
            placeholder="Enter your text here..."></textarea>
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

### Textarea with Mentions
```html
<div class="grid gap-2">
  <label for="mention-textarea" class="label">Comment</label>
  <textarea class="textarea" id="mention-textarea" rows="4" 
            placeholder="Type @ to mention someone..."></textarea>
  <div id="mention-suggestions" class="hidden border rounded bg-background shadow-lg p-2"></div>
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
      `<div class="p-2 hover:bg-muted cursor-pointer" onclick="insertMention('${user.username}', ${position})">
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
<form class="form grid gap-6" id="validation-form">
  <div class="grid gap-2">
    <label for="title" class="label">Title</label>
    <input class="input" id="title" type="text" required minlength="5" maxlength="100">
  </div>
  
  <div class="grid gap-2">
    <label for="content" class="label">Content</label>
    <textarea class="textarea" id="content" rows="6" required 
              minlength="50" maxlength="2000"
              placeholder="Enter at least 50 characters..."></textarea>
    <div class="flex justify-between text-sm text-muted-foreground">
      <span>Minimum 50 characters required</span>
      <span id="content-count">0/2000</span>
    </div>
  </div>
  
  <button type="submit" class="btn">Submit</button>
</form>

<script>
const form = document.getElementById('validation-form');
const contentTextarea = document.getElementById('content');
const contentCount = document.getElementById('content-count');

// Character count
contentTextarea.addEventListener('input', function() {
  const count = this.value.length;
  const max = this.maxLength;
  const min = this.minLength;
  
  contentCount.textContent = `${count}/${max}`;
  
  // Update validation state
  if (count < min) {
    this.setCustomValidity(`Please enter at least ${min} characters`);
    contentCount.className = 'text-destructive';
  } else if (count > max * 0.9) {
    this.setCustomValidity('');
    contentCount.className = 'text-warning';
  } else {
    this.setCustomValidity('');
    contentCount.className = 'text-muted-foreground';
  }
});

// Form validation
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (this.checkValidity()) {
    console.log('Form is valid!');
    // Submit form
  } else {
    console.log('Form has validation errors');
    // Show validation errors
  }
});
</script>
```

## Accessibility Guidelines

### ARIA Attributes
```html
<div class="grid gap-2">
  <label for="accessible-textarea" class="label">Message</label>
  <textarea class="textarea" 
            id="accessible-textarea"
            aria-describedby="textarea-help"
            aria-required="true"
            aria-invalid="false"
            rows="4"
            placeholder="Enter your message"></textarea>
  <div id="textarea-help" class="text-sm text-muted-foreground">
    Please provide a detailed message with at least 20 characters
  </div>
</div>
```

### Error Handling with ARIA
```html
<div class="grid gap-2">
  <label for="error-textarea" class="label">Description</label>
  <textarea class="textarea" 
            id="error-textarea"
            aria-describedby="error-message"
            aria-invalid="true"
            rows="4"></textarea>
  <div id="error-message" class="text-destructive text-sm" role="alert">
    Description must be at least 10 characters long
  </div>
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
- Limit auto-resize calculations
- Use pagination or lazy loading for very long content

### Mobile Optimization
```html
<!-- Mobile-friendly textarea -->
<textarea class="textarea" 
          rows="3"
          style="resize: vertical;"
          placeholder="Tap to enter text..."></textarea>
```

## JavaScript Utilities

### Textarea Helper Functions
```javascript
class TextareaHelper {
  static autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  
  static updateCharCount(textarea, counterElement) {
    const count = textarea.value.length;
    const max = textarea.maxLength || Infinity;
    counterElement.textContent = max === Infinity ? count : `${count}/${max}`;
    
    // Update styling based on usage
    if (count > max * 0.9) {
      counterElement.className = 'text-destructive';
    } else if (count > max * 0.75) {
      counterElement.className = 'text-warning';
    } else {
      counterElement.className = 'text-muted-foreground';
    }
  }
  
  static insertAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.setRangeText(text, start, end, 'end');
    textarea.focus();
  }
  
  static validateLength(textarea, minLength, maxLength) {
    const length = textarea.value.length;
    
    if (length < minLength) {
      textarea.setCustomValidity(`Please enter at least ${minLength} characters`);
      return false;
    } else if (maxLength && length > maxLength) {
      textarea.setCustomValidity(`Please enter no more than ${maxLength} characters`);
      return false;
    } else {
      textarea.setCustomValidity('');
      return true;
    }
  }
}

// Usage
document.querySelectorAll('textarea[data-auto-resize]').forEach(textarea => {
  textarea.addEventListener('input', () => TextareaHelper.autoResize(textarea));
});
```