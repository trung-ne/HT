const fs = require('fs');
let f = fs.readFileSync('features/home/page-content.ts', 'utf8');

const viBlock = `  vi: {
    "v-about": {
      title: "V\u1ec1 redhomes",
      paragraphs: [
        "redhomes \u0111\u01b0\u1ee3c th\u00e0nh l\u1eadp nh\u1eb1m h\u1ed7 tr\u1ee3 c\u00e1c nh\u00e0 \u0111\u1ea7u t\u01b0 v\u00e0 ng\u01b0\u1eddi mu\u1ed1n \u0111\u1ecbnh c\u01b0 tr\u00ean to\u00e0n th\u1ebf gi\u1edbi ti\u1ebfp c\u1eadn th\u1ecb tr\u01b0\u1eddng b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n m\u1ed9t c\u00e1ch r\u00f5 r\u00e0ng v\u00e0 t\u1ef1 tin.",
        "\u0110\u1ed9i ng\u0169 c\u1ee7a ch\u00fang t\u00f4i g\u1ed3m c\u00e1c chuy\u00ean gia \u0111a ng\u00f4n ng\u1eef, th\u00e0nh th\u1ea1o ti\u1ebfng Nh\u1eadt, Anh, Trung v\u00e0 Vi\u1ec7t.",
        "T\u1eeb t\u00ecm ki\u1ebfm, mua b\u00e1n, qu\u1ea3n l\u00fd cho thu\u00ea \u0111\u1ebfn b\u1ea3o l\u00e3nh l\u1ee3i nhu\u1eadn d\u00e0i h\u1ea1n, ch\u00fang t\u00f4i cung c\u1ea5p d\u1ecbch v\u1ee5 to\u00e0n di\u1ec7n d\u01b0\u1edbi m\u1ed9t m\u00e1i nh\u00e0.",
        "Ch\u00fang t\u00f4i h\u01b0\u1edbng \u0111\u1ebfn m\u1ed1i quan h\u1ec7 l\u00e2u d\u00e0i, \u01b0u ti\u00ean minh b\u1ea1ch v\u00e0 hi\u1ec7u qu\u1ea3 \u0111\u1ea7u t\u01b0 cho b\u1ea1n.",
      ],
    },
    "v-service": {
      title: "D\u1ecbch v\u1ee5 c\u1ee7a ch\u00fang t\u00f4i",
      paragraphs: [
        "redhomes cung c\u1ea5p d\u1ecbch v\u1ee5 to\u00e0n di\u1ec7n cho vi\u1ec7c \u0111\u1ea7u t\u01b0 b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n.",
        "[M\u00f4i gi\u1edbi b\u1ea5t \u0111\u1ed9ng s\u1ea3n] C\u0103n h\u1ed9, ch\u01b0ng c\u01b0, nh\u00e0 \u1edf v\u00e0 \u0111\u1ea5t n\u1ec1n \u2014 bao g\u1ed3m mua, b\u00e1n v\u00e0 cho thu\u00ea.",
        "[\u0110\u1ecbch v\u1ee5 qu\u1ea3n l\u00fd cho thu\u00ea] T\u00ecm kh\u00e1ch thu\u00ea, qu\u1ea3n l\u00fd h\u1ee3p \u0111\u1ed3ng, s\u1eeda ch\u1eefa v\u00e0 quy\u1ebft to\u00e1n thu\u1ebf.",
        "[\u0110\u1ecbch v\u1ee5 c\u1ea3i t\u1ea1o] K\u1ebft n\u1ed1i v\u1edbi c\u00e1c \u0111\u01a1n v\u1ecb thi c\u00f4ng uy t\u00edn \u0111\u1ec3 t\u0103ng gi\u00e1 tr\u1ecb b\u1ea5t \u0111\u1ed9ng s\u1ea3n.",
        "[\u0110\u1ecbch v\u1ee5 chuy\u1ec3n nh\u01b0\u1ee3ng] H\u1ed7 tr\u1ee3 kh\u00e1ch h\u00e0ng n\u01b0\u1edbc ngo\u00e0i \u0111\u0103ng k\u00fd v\u00e0 \u0111\u1ecbnh c\u01b0 t\u1ea1i Nh\u1eadt B\u1ea3n.",
        "[\u0110\u0103ng k\u00fd c\u00f4ng ty v\u00e0 visa] H\u1ed7 tr\u1ee3 th\u00e0nh l\u1eadp c\u00f4ng ty v\u00e0 chu\u1ea9n b\u1ecb h\u1ed3 s\u01a1 visa \u0111\u1ea7u t\u01b0.",
      ],
    },
    blog: {
      title: "Blog",
      paragraphs: [
        "Blog c\u1ee7a redhomes c\u1eadp nh\u1eadt xu h\u01b0\u1edbng th\u1ecb tr\u01b0\u1eddng, thay \u0111\u1ed5i ph\u00e1p lu\u1eadt, th\u00f4ng tin thu\u1ebf v\u00e0 c\u00e1c th\u00f4ng tin h\u1ea5p d\u1eabn v\u1ec1 b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n.",
        "D\u00f9 b\u1ea1n m\u1edbi b\u1eaft \u0111\u1ea7u hay l\u00e0 nh\u00e0 \u0111\u1ea7u t\u01b0 d\u00e0y d\u1ea1n kinh nghi\u1ec7m, c\u00e1c b\u00e0i vi\u1ebft c\u1ee7a ch\u00fang t\u00f4i \u0111\u1ec1u th\u1ef1c t\u1ebf v\u00e0 \u0111\u00e1ng tin c\u1eady.",
      ],
    },
    contact: {
      title: "Li\u00ean h\u1ec7 ch\u00fang t\u00f4i",
      paragraphs: [
        "N\u1ebfu b\u1ea1n c\u00f3 b\u1ea5t k\u1ef3 c\u00e2u h\u1ecfi n\u00e0o v\u1ec1 \u0111\u1ea7u t\u01b0 b\u1ea5t \u0111\u1ed9ng s\u1ea3n Nh\u1eadt B\u1ea3n, \u0111\u1eebng ng\u1ea7n ng\u1ea1i li\u00ean h\u1ec7 ch\u00fang t\u00f4i.",
        "redhomes h\u1ed7 tr\u1ee3 b\u1eb1ng ti\u1ebfng Nh\u1eadt, Anh, Trung v\u00e0 Vi\u1ec7t. Ch\u00fang t\u00f4i s\u1ebd ph\u1ea3n h\u1ed3i s\u1edbm nh\u1ea5t c\u00f3 th\u1ec3.",
      ],
    },
    cdmmr: {
      title: "Th\u00f4ng tin giao d\u1ecbch th\u01b0\u01a1ng m\u1ea1i",
      paragraphs: [
        "Th\u00f4ng tin c\u00f4ng b\u1ed1 theo Lu\u1eadt Giao d\u1ecbch Th\u01b0\u01a1ng m\u1ea1i \u0110i\u1ec7n t\u1eed Nh\u1eadt B\u1ea3n.",
        "T\u00ean c\u00f4ng ty: redhomes / \u0110\u1ecba ch\u1ec9: Tokyo, Nh\u1eadt B\u1ea3n / Li\u00ean h\u1ec7: info@redhomes.jp",
      ],
    },
  },
};`;

// Find th: block start and end
const thStart = f.indexOf('\n  th: {');
// The file ends with }; after the th block
const closeIdx = f.lastIndexOf('\n};');
if (thStart === -1) { console.log('th block not found'); process.exit(1); }
f = f.slice(0, thStart) + '\n' + viBlock;
fs.writeFileSync('features/home/page-content.ts', f);
console.log('page-content.ts done, length=' + f.length);
