const fs = require('fs');
const file = 'C:\\Users\\Administrator\\Documents\\redhomes-v2\\app\\globals.css';
let css = fs.readFileSync(file, 'utf8');

// Replace the @font-face block
const oldBlock = `@font-face {
  font-family: "design_plus";
  src: url("http://molaholdings.com/jp/wp/wp-content/themes/vogue_tcd051/assets/fonts/design_plus.eot?v=1.0");
  src:
    url("http://molaholdings.com/jp/wp/wp-content/themes/vogue_tcd051/assets/fonts/design_plus.eot?v=1.0#iefix") format("embedded-opentype"),
    url("http://molaholdings.com/jp/wp/wp-content/themes/vogue_tcd051/assets/fonts/design_plus.woff?v=1.0") format("woff"),
    url("http://molaholdings.com/jp/wp/wp-content/themes/vogue_tcd051/assets/fonts/design_plus.ttf?v=1.0") format("truetype"),
    url("http://molaholdings.com/jp/wp/wp-content/themes/vogue_tcd051/assets/fonts/design_plus.svg?v=1.0#design_plus") format("svg");
  font-weight: normal;
  font-style: normal;
}`;

const newBlock = `@font-face {
  font-family: "design_plus";
  src:
    url("/fonts/design_plus.woff") format("woff"),
    url("/fonts/design_plus.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}`;

if (css.includes('molaholdings.com')) {
  // Use regex to replace the whole @font-face block robustly
  css = css.replace(/@font-face \{[\s\S]*?font-style: normal;\n\}/, newBlock);
  fs.writeFileSync(file, css, 'utf8');
  console.log('globals.css updated');
} else {
  console.log('No molaholdings.com reference found - already clean?');
}

