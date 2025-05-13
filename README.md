# Responsive Image Gallery

## Overview

A modern, responsive image gallery built with HTML, CSS, and JavaScript that allows users to view and interact with a collection of images. This project provides an elegant way to showcase photos with filtering capabilities, lightbox effects, and smooth transitions.

## Features

- **Responsive Design**: Adapts seamlessly to different screen sizes and devices
- **Image Filtering**: Filter images by categories
- **Lightbox Effect**: Click on images to view them in a larger overlay with details
- **Navigation Controls**: Easy navigation between images with next/previous buttons
- **Image Search**: Search functionality to find specific images
- **Smooth Animations**: CSS transitions and animations for a polished user experience
- **Keyboard Navigation**: Use arrow keys to navigate through images in lightbox mode
- **Lazy Loading**: Images load as they come into viewport for better performance

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: 
  - Flexbox and Grid for responsive layouts
  - CSS animations and transitions
  - Media queries for responsiveness
- **JavaScript**: 
  - DOM manipulation
  - Event handling
  - Dynamic content loading

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/image-gallery.git
   cd image-gallery
   ```

2. **Open in a browser**
   - Simply open the `index.html` file in any modern web browser
   - Alternatively, you can use a local development server:
   ```bash
   # Using Python
   python -m http.server

   # Using Node.js (with http-server installed)
   npx http-server
   ```

## Project Structure

```
image-gallery/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── images/             # Directory containing all gallery images
    ├── image1.jpg
    ├── image2.jpg
    └── ...
```

## Usage

### Basic Usage

1. Open the gallery in a web browser
2. Browse through the image thumbnails
3. Click on any image to open it in lightbox mode
4. Use the navigation arrows or keyboard arrow keys to move between images
5. Click outside the image or press ESC to close the lightbox

### Filtering Images

1. Use the category buttons at the top of the gallery to filter images
2. Click "All" to show all images

### Search Functionality

1. Type in the search box to find images by their title or tags
2. Results will update as you type

## Customization

### Adding New Images

1. Add your image files to the `images/` directory
2. Update the image data in the `script.js` file:

```javascript
const galleryImages = [
  {
    id: 'unique-id',
    src: 'images/your-image.jpg',
    alt: 'Image description',
    title: 'Image Title',
    category: 'category-name',
    tags: ['tag1', 'tag2']
  },
  // Add more images here
];
```

### Styling

Modify the `styles.css` file to change colors, spacing, animations, etc.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Placeholder images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)