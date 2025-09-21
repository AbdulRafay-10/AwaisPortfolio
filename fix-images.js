// This script will help fix image paths for Vercel deployment
const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace relative image paths with absolute paths
html = html.replace(/src="\.\/assets\//g, 'src="/assets/');

// Write the updated HTML
fs.writeFileSync('index.html', html);

console.log('Image paths updated for Vercel deployment!');
