# Image Optimization Guide

## Current Issues
Your project has several large images that are causing alignment and performance issues:

- `home1.png` (454KB) - Very large, should be optimized
- `house.png` (174KB) - Large, needs optimization  
- `logo.png` (168KB) - Large for a logo, should be smaller

## Recommended Image Sizes

### Hero Images
- **Desktop**: 1200x800px (max 200KB)
- **Mobile**: 800x600px (max 100KB)

### Property Images
- **Desktop**: 800x600px (max 150KB)
- **Mobile**: 600x450px (max 80KB)

### Icons & Logos
- **Icons**: 64x64px (max 10KB)
- **Logo**: 128x128px (max 20KB)

### Team Member Images
- **Desktop**: 400x400px (max 50KB)
- **Mobile**: 300x300px (max 30KB)

## Optimization Tools

### Online Tools
1. **TinyPNG** (https://tinypng.com/) - Compress PNG/JPEG
2. **Squoosh** (https://squoosh.app/) - Google's image optimization tool
3. **ImageOptim** (https://imageoptim.com/) - For Mac users

### Command Line Tools
```bash
# Using ImageMagick
convert input.png -resize 800x600 -quality 85 output.png

# Using cwebp (WebP format)
cwebp -q 80 input.png -o output.webp
```

## Implementation Steps

1. **Optimize existing images**:
   - Compress `home1.png` to under 200KB
   - Compress `house.png` to under 150KB
   - Compress `logo.png` to under 20KB

2. **Convert to WebP format** (optional but recommended):
   - WebP provides better compression
   - Modern browsers support it
   - Fallback to PNG/JPEG for older browsers

3. **Use responsive images**:
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <source srcset="image.jpg" type="image/jpeg">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

## CSS Classes Added

The following CSS classes have been added to improve image handling:

- `.hero-image` - For hero section images
- `.property-image` - For property listing images
- `.feature-icon` - For feature icons
- `.logo-image` - For logos
- `.team-image` - For team member photos
- `.responsive-image` - For general responsive images
- `.mobile-image` - Mobile-specific optimizations
- `.image-container` - Container for better alignment

## Benefits

After optimization, you should see:
- ✅ Better alignment across devices
- ✅ Faster page loading
- ✅ Improved mobile experience
- ✅ Better SEO scores
- ✅ Reduced bandwidth usage 