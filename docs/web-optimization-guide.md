# Zenith Industries Web Optimization Guide

This guide outlines best practices for maintaining and improving the Zenith Industries website. It covers responsive design, accessibility, image optimization, and performance considerations.

## Responsive Design Best Practices

### Media Queries
- We use mobile-first design with breakpoints at:
  - 576px (small devices)
  - 768px (medium devices - tablets)
  - 992px (large devices - desktops)
  - 1200px (extra large devices)
- Always test in both landscape and portrait orientations

### Preventing Horizontal Scrolling
- Set `overflow-x: hidden` on body and main container elements
- Use percentage or viewport-based widths instead of fixed pixel widths
- Always test using device emulation in browser DevTools

## Alignment Standards

- **Body Text**: Always left-aligned for optimal readability
- **Headings**:
  - Main section headings (h1, h2): Can be centered for visual hierarchy
  - Sub-headings (h3-h6): Should be left-aligned with the body text
- **Lists**: Always left-aligned
- **Buttons**: Centered in mobile views, aligned with text in desktop views

## Padding and Margin Standards

- Use CSS variables for consistent spacing: `var(--space-xs)`, `var(--space-sm)`, etc.
- Larger padding on mobile touch elements (minimum 44x44px for touch targets)
- Use consistent vertical rhythm:
  - Paragraphs: `margin-bottom: var(--space-md)`
  - Sections: `padding: var(--space-xl) 0`
  - Between related elements: `margin-bottom: var(--space-sm)`
  - Between unrelated elements: `margin-bottom: var(--space-lg)`

## Accessibility Requirements

### Color Contrast
- All text must meet WCAG 2.1 AA standards:
  - 4.5:1 contrast ratio for normal text
  - 3:1 contrast ratio for large text (18pt+ or 14pt+ bold)
- Test using the WebAIM Contrast Checker or browser DevTools

### Text Alternatives
- All images require meaningful alt text
- For decorative images, use empty alt attributes (`alt=""`)
- For complex images, provide detailed descriptions nearby

### Keyboard Navigation
- All interactive elements must be focusable
- Focus states must be visibly distinct
- Logical tab order following the visual layout
- Skip links for keyboard users to bypass repetitive navigation

## Image Optimization

### File Formats
- Use JPEG for photographs (.jpg)
- Use PNG for graphics with transparency (.png)
- Use SVG for icons and simple graphics (.svg)
- Consider WebP with proper fallbacks for all image types

### Size Optimization
- Resize images to match their display size (maximum 2x for high-DPI screens)
- Compress images using tools like:
  - ImageOptim
  - TinyPNG
  - Squoosh

### Responsive Images
- Use the `<picture>` element for art direction
- Use `srcset` and `sizes` attributes for resolution switching
- Implement lazy loading with the `loading="lazy"` attribute

## Performance Best Practices

### Asset Loading
- Minify CSS and JavaScript files
- Combine files where appropriate to reduce HTTP requests
- Use deferred loading for non-critical JavaScript
- Implement Critical CSS for above-the-fold content

### Font Loading
- Limit font families to 2-3
- Specify font display strategy: `font-display: swap`
- Consider using system font stacks for body text

### Third-Party Resources
- Load third-party scripts asynchronously
- Self-host critical resources when possible
- Implement resource hints (preconnect, preload) for critical resources

## Testing Checklist

Before deployment, ensure:

1. The site works on all target devices and browsers
2. All pages pass WCAG 2.1 AA accessibility requirements
3. All images are properly optimized and responsive
4. All links function correctly
5. Forms submit properly and include validation
6. Performance scores are satisfactory (use Lighthouse)
7. No console errors appear in DevTools

## Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Image Guide](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
