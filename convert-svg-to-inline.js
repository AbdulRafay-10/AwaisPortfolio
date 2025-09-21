// This script will convert SVG files to inline SVG in HTML
const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// SVG files to convert to inline
const svgFiles = [
  'icon-app.svg',
  'icon-dev.svg', 
  'icon-design.svg',
  'icon-photo.svg',
  'icon-quote.svg',
  'Dart.svg',
  'Figma.svg',
  'Firebase.svg',
  'Flutter.svg',
  'AndroidStudio.svg',
  'Postman.svg'
];

// Convert each SVG to inline
svgFiles.forEach(svgFile => {
  try {
    const svgContent = fs.readFileSync(`assets/images/${svgFile}`, 'utf8');
    const svgPath = `/assets/images/${svgFile}`;
    
    // Replace img tags with inline SVG
    const imgRegex = new RegExp(`<img[^>]*src="${svgPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');
    html = html.replace(imgRegex, svgContent);
    
    console.log(`Converted ${svgFile} to inline SVG`);
  } catch (error) {
    console.log(`Could not convert ${svgFile}:`, error.message);
  }
});

// Write the updated HTML
fs.writeFileSync('index.html', html);

console.log('SVG conversion complete!');
