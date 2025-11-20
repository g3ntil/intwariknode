# 🎨 Dropdown Design Specifications

## Visual Design

```
┌─────────────────────────────────────────────────────────┐
│  Budget *                                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │  Select budget...                            ▼ │   │  ← Default State
│  └────────────────────────────────────────────────┘   │
│  Background: #F5F3ED (cream)                          │
│  Border: rgba(10, 74, 74, 0.1) (subtle teal)          │
│  Text: #9ca3af (gray placeholder)                     │
│  Icon: #6FB98F (green chevron)                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  HOVER STATE                                            │
├─────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────┐   │
│  │  Select budget...                            ▲ │   │  ← Icon moves up
│  └────────────────────────────────────────────────┘   │
│  Chevron: Moves up 5% (translate-y-[-45%])            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOCUS STATE                                            │
├─────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────┐   │
│  │  $1,000 - $2,500                             ▼ │   │  ← Selected value
│  └────────────────────────────────────────────────┘   │
│  Background: #F5F3ED (cream)                          │
│  Border: #6FB98F (green)                              │
│  Box-shadow: 0 0 0 3px rgba(111, 185, 143, 0.1)      │  ← Green glow
│  Text: #0A4A4A (dark teal, selected)                 │
│  Icon: #6FB98F (green chevron)                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### HTML Structure:
```html
<div class="relative group">
  <select 
    class="form-input-focus appearance-none cursor-pointer"
    style="background: #F5F3ED; border: rgba(10,74,74,0.1)">
    <option value="" disabled>Select budget...</option>
    <option value="...">...</option>
  </select>
  <ChevronDown 
    class="absolute right-4 top-1/2 -translate-y-1/2 
           pointer-events-none transition-transform 
           group-hover:translate-y-[-45%]"
    style="color: #6FB98F; width: 18px; height: 18px"
  />
</div>
```

### CSS Classes:
```css
.form-input-focus {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input-focus:focus {
  border-color: #6FB98F !important;
  box-shadow: 0 0 0 3px rgba(111, 185, 143, 0.1) !important;
  outline: none;
}
```

### Features:
- ✅ `appearance-none` removes default browser arrow
- ✅ Custom ChevronDown icon positioned absolute
- ✅ `pointer-events-none` on icon so clicks go through to select
- ✅ `group-hover` animates icon
- ✅ `cursor-pointer` on select
- ✅ Dynamic text color (gray placeholder, teal when selected)

---

## Color System

| Element | State | Color | Hex/RGBA |
|---------|-------|-------|----------|
| Background | All | Cream | `#F5F3ED` |
| Border | Default | Subtle Teal | `rgba(10, 74, 74, 0.1)` |
| Border | Focus | Green | `#6FB98F` |
| Text | Placeholder | Gray | `#9ca3af` |
| Text | Selected | Dark Teal | `#0A4A4A` |
| Icon | All | Green | `#6FB98F` |
| Shadow | Default | Subtle | `0 1px 3px rgba(0,0,0,0.05)` |
| Shadow | Focus | Green Glow | `0 0 0 3px rgba(111,185,143,0.1)` |

---

## Matching Website Theme

These dropdowns match your site's design:

✅ **Rounded corners** (rounded-2xl)  
✅ **Cream backgrounds** (#F5F3ED)  
✅ **Green accents** (#6FB98F)  
✅ **Dark teal text** (#0A4A4A)  
✅ **Subtle borders** (10% opacity)  
✅ **Smooth transitions** (0.2s ease)  
✅ **Soft shadows** (minimal)  
✅ **Playful hover effects** (icon bounce)  

---

## Same as Other Inputs

All form inputs (text, email, phone, textarea, selects) share:

1. ✅ Same background color (#F5F3ED)
2. ✅ Same border style
3. ✅ Same focus state (green ring)
4. ✅ Same shadow effect
5. ✅ Same transitions
6. ✅ Same rounded corners
7. ✅ Same padding (px-4 py-3)

**Result:** Perfectly consistent, professional form design! 🎉
