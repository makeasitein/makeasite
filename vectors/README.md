# Vector Graphics from Freepik

This directory contains vector graphics downloaded from Freepik.

## How to Add Vectors

1. Visit [Freepik Vectors](https://www.freepik.com/vectors)
2. Search for relevant vectors like:
   - Business illustrations
   - Technology icons
   - Abstract patterns
   - Decorative elements
   - Background patterns

3. Download SVG or PNG formats
4. Place them in this directory
5. Reference them in your components

## Recommended Vectors for this Website:

- **hero-illustration.svg** - Main hero section illustration
- **services-bg.svg** - Background pattern for services
- **wave-divider.svg** - Section divider wave
- **dots-pattern.svg** - Decorative dots pattern
- **gradient-blob-1.svg** - Abstract gradient blob
- **gradient-blob-2.svg** - Abstract gradient blob
- **tech-icons.svg** - Technology icons set
- **success-illustration.svg** - Success/achievement illustration

## Usage Example:

```tsx
<img 
  src="/vectors/hero-illustration.svg" 
  alt="Hero Illustration" 
  className="w-full h-auto"
/>
```

## SVG as Background:

```css
.section {
  background-image: url('/vectors/pattern.svg');
  background-size: cover;
}
```
