# Freecash Affiliate Landing Page

A mobile-optimized, high-converting landing page for the Freecash affiliate program, designed specifically for UK users and ready for Vercel deployment.

## Features

- **Mobile-First Design**: Fully responsive and optimized for mobile devices
- **High Conversion**: Clear CTA buttons and compelling copy
- **Trust Signals**: User testimonials, trust badges, and payment method icons
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads
- **Vercel Ready**: Includes Vercel configuration for instant deployment

## Structure

```
├── index.html          # Main landing page
├── styles.css          # Mobile-first responsive styling
├── script.js           # Interactive features and animations
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

## Customization

### Update Affiliate Link
Edit `script.js` and replace the placeholder affiliate link:

```javascript
const affiliateLink = 'https://freecash.com/r/YOUR_AFFILIATE_CODE';
```

### Modify Colors
Update the CSS variables in `styles.css` to match your branding:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Analytics
Add your tracking codes to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

### Local Development
```bash
npm install
npm run dev
```

## Performance Features

- **CSS Optimization**: Minimal, efficient styling
- **JavaScript Debouncing**: Optimized scroll handlers
- **Image Lazy Loading**: Ready for future image additions
- **Intersection Observer**: Smooth scroll animations
- **Touch Optimized**: Enhanced mobile interactions

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 7+)

## License
MIT License - feel free to use and modify for your affiliate campaigns.
