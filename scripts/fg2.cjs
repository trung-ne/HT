const fs = require('fs');
const file = 'C:/Users/Administrator/Documents/redhomes-v2/app/globals.css';
let css = fs.readFileSync(file, 'utf8');
css = css.replace(/url\("http:\/\/molaholdings\.com\/jp\/wp\/wp-content\/uploads\/2016\/10\/s_shutterstock_374002921-min\.jpg"\)/, 'url("/hero-bg.jpg")');
console.log('still has molaholdings:', css.includes('molaholdings'));
fs.writeFileSync(file, css, 'utf8');
console.log('done');

