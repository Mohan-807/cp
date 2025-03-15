const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'cloth-spot');  // Corrected path

const redirectsPath = path.join(distDir, '_redirects');

const redirectsContent = '/*    /index.html   200';

if (!fs.existsSync(distDir)) {
    console.error(`Directory ${distDir} does not exist.`);
    process.exit(1);
}

fs.writeFileSync(redirectsPath, redirectsContent, 'utf8');
console.log('_redirects file created successfully!');
