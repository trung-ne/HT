const fs = require('fs');

// 1. Update i18n/request.ts
let f = fs.readFileSync('i18n/request.ts', 'utf8');
f = f.replace("['ja', 'en', 'zh', 'th']", "['ja', 'en', 'zh', 'vi']");
fs.writeFileSync('i18n/request.ts', f);
console.log('request.ts done');

// 2. Update lib/i18n.ts
f = fs.readFileSync('lib/i18n.ts', 'utf8');
f = f.replace('["ja", "en", "zh", "th"]', '["ja", "en", "zh", "vi"]');
fs.writeFileSync('lib/i18n.ts', f);
console.log('i18n.ts done');

// 3. Update features/home/content.ts - replace th: block with vi:
f = fs.readFileSync('features/home/content.ts', 'utf8');
const thBlock = `  th: {
    navAbout: "\\u0e40\\u0e01\\u0e35\\u0e48\\u0e22\\u0e27\\u0e01\\u0e31\\u0e1a redhomes",`;
const viBlock = `  vi: {
    navAbout: "V\\u1ec1 redhomes",
    splashDesc: "C\\u1ed5ng v\\u00e0o b\\u1ea5t \\u0111\\u1ed9ng s\\u1ea3n Nh\\u1eadt B\\u1ea3n \\u0111\\u00e1ng tin c\\u1eady, d\\u00f9 b\\u1ea1n \\u1edf b\\u1ea5t k\\u1ef3 \\u0111\\u00e2u tr\\u00ean th\\u1ebf gi\\u1edbi.",
    philosophyTitle: "T\\u1ea7m nh\\u00ecn c\\u1ee7a ch\\u00fang t\\u00f4i",
    philosophyDesc:
      "redhomes \\u0111\\u01b0\\u1ee3c x\\u00e2y d\\u1ef1ng tr\\u00ean n\\u1ec1n t\\u1ea3ng an to\\u00e0n, minh b\\u1ea1ch v\\u00e0 gi\\u00e1 tr\\u1ecb d\\u00e0i h\\u1ea1n. Ch\\u00fang t\\u00f4i h\\u1ed7 tr\\u1ee3 c\\u00e1c nh\\u00e0 \\u0111\\u1ea7u t\\u01b0 qu\\u1ed1c t\\u1ebf b\\u01b0\\u1edbc v\\u00e0o th\\u1ecb tr\\u01b0\\u1eddng b\\u1ea5t \\u0111\\u1ed9ng s\\u1ea3n Nh\\u1eadt B\\u1ea3n m\\u1ed9t c\\u00e1ch t\\u1ef1 tin.",
    sections: [
      {
        title: "Chuy\\u00ean m\\u00f4n kh\\u00f4ng bi\\u00ean gi\\u1edbi",
        description:
          "\\u0110\\u1ed9i ng\\u0169 \\u0111a ng\\u00f4n ng\\u1eef c\\u1ee7a ch\\u00fang t\\u00f4i h\\u1ed7 tr\\u1ee3 kh\\u00e1ch h\\u00e0ng b\\u1eb1ng ti\\u1ebfng Nh\\u1eadt, Anh, Trung, Vi\\u1ec7t v\\u00e0 nhi\\u1ec1u ng\\u00f4n ng\\u1eef kh\\u00e1c.\\nCh\\u00fang t\\u00f4i gi\\u00fap v\\u01b0\\u1ee3t qua r\\u00e0o c\\u1ea3n ng\\u00f4n ng\\u1eef, v\\u0103n h\\u00f3a v\\u00e0 ph\\u00e1p l\\u00fd \\u0111\\u1ec3 nh\\u00e0 \\u0111\\u1ea7u t\\u01b0 n\\u01b0\\u1edbc ngo\\u00e0i ti\\u1ebfp c\\u1eadn th\\u1ecb tr\\u01b0\\u1eddng b\\u1ea5t \\u0111\\u1ed9ng s\\u1ea3n Nh\\u1eadt B\\u1ea3n m\\u1ed9t c\\u00e1ch thu\\u1eadn l\\u1ee3i.",
      },
      {
        title: "H\\u1ed7 tr\\u1ee3 \\u0111\\u1ea7u t\\u01b0 to\\u00e0n di\\u1ec7n",
        description:
          "T\\u1eeb t\\u00ecm ki\\u1ebfm b\\u1ea5t \\u0111\\u1ed9ng s\\u1ea3n, k\\u00fd h\\u1ee3p \\u0111\\u1ed3ng mua b\\u00e1n, qu\\u1ea3n l\\u00fd cho thu\\u00ea, s\\u1eeda ch\\u1eefa \\u0111\\u1ebfn khai thu\\u1ebf \\u2014 redhomes x\\u1eed l\\u00fd to\\u00e0n b\\u1ed9 quy tr\\u00ecnh trong m\\u1ed9t n\\u01a1i.\\nKh\\u00f4ng c\\u1ea7n li\\u00ean h\\u1ec7 nhi\\u1ec1u c\\u00f4ng ty. M\\u1ed9t \\u0111\\u1ed1i t\\u00e1c \\u0111\\u00e1ng tin c\\u1eady \\u0111\\u1ed3ng h\\u00e0nh c\\u00f9ng b\\u1ea1n t\\u1eeb l\\u00fac b\\u1eaft \\u0111\\u1ea7u \\u0111\\u1ebfn qu\\u1ea3n l\\u00fd t\\u00e0i s\\u1ea3n d\\u00e0i h\\u1ea1n.",
      },
      {
        title: "Minh b\\u1ea1ch v\\u00e0 uy t\\u00edn",
        description:
          "Ch\\u00fang t\\u00f4i c\\u00f4ng khai \\u0111\\u1ea7y \\u0111\\u1ee7 chi ph\\u00ed, \\u0111i\\u1ec1u ki\\u1ec7n v\\u00e0 r\\u1ee7i ro trong m\\u1ecdi giao d\\u1ecbch.\\nKh\\u00f4ng ph\\u00ed ti\\u1ec1n \\u1ea9n. Kh\\u00f4ng gi\\u1ea3i th\\u00edch mao h\\u1ed3. Ch\\u00fang t\\u00f4i tin r\\u1eb1ng kh\\u00e1ch h\\u00e0ng c\\u00f3 \\u0111\\u1ea7y \\u0111\\u1ee7 th\\u00f4ng tin s\\u1ebd \\u0111\\u01b0a ra quy\\u1ebft \\u0111\\u1ecbnh t\\u1ed1t h\\u01a1n.",
      },
      {
        title: "Cam k\\u1ebft gi\\u00e1 tr\\u1ecb d\\u00e0i h\\u1ea1n",
        description:
          "B\\u1ea5t \\u0111\\u1ed9ng s\\u1ea3n Nh\\u1eadt B\\u1ea3n \\u0111\\u01b0\\u1ee3c c\\u00f4ng nh\\u1eadn to\\u00e0n c\\u1ea7u v\\u1ec1 l\\u1ee3i nhu\\u1eadn \\u1ed5n \\u0111\\u1ecbnh v\\u00e0 b\\u1ea3o to\\u00e0n gi\\u00e1 tr\\u1ecb t\\u00e0i s\\u1ea3n.\\nredhomes kh\\u00f4ng ch\\u1ec9 d\\u1eebng l\\u1ea1i \\u1edf giao d\\u1ecbch mua b\\u00e1n, m\\u00e0 l\\u00e0 \\u0111\\u1ed1i t\\u00e1c d\\u00e0i h\\u1ea1n h\\u1ed7 tr\\u1ee3 qu\\u1ea3n l\\u00fd cho thu\\u00ea, chi\\u1ebfn l\\u01b0\\u1ee3c t\\u01b0 \\u0111\\u1ed3ng v\\u00e0 gia t\\u0103ng gi\\u00e1 tr\\u1ecb danh m\\u1ee5c.",
      },
    ],
    footerCommerce: "Th\\u00f4ng tin theo Lu\\u1eadt Giao d\\u1ecbch Th\\u01b0\\u01a1ng m\\u1ea1i \\u0110i\\u1ec7n t\\u1eed / Th\\u00f4ng tin b\\u00e1n h\\u00e0ng qua b\\u01b0u \\u0111i\\u1ec7n",
  },`;

// Find th: block and replace
const thStart = f.indexOf('\n  th: {');
const thEnd = f.indexOf('\n  },', thStart) + '\n  },'.length;
if (thStart === -1) { console.log('th block not found!'); process.exit(1); }
f = f.slice(0, thStart) + '\n' + viBlock + f.slice(thEnd);
fs.writeFileSync('features/home/content.ts', f);
console.log('content.ts done');
