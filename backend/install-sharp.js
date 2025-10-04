#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Installing sharp for Linux platform...');

try {
  // Remove existing sharp installation
  const sharpPath = path.join(__dirname, 'node_modules', 'sharp');
  if (fs.existsSync(sharpPath)) {
    console.log('Removing existing sharp installation...');
    fs.rmSync(sharpPath, { recursive: true, force: true });
  }

  // Install sharp for Linux
  console.log('Installing sharp for linux-x64...');
  execSync('npm install --platform=linux --arch=x64 sharp', { 
    stdio: 'inherit',
    cwd: __dirname 
  });

  console.log('Sharp installation completed successfully!');
} catch (error) {
  console.error('Sharp installation failed:', error.message);
  process.exit(1);
}