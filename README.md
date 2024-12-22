<div align="center">

### Welcome to image-to-pdf 👋

> A simple 🖼️ to 📄 converter for NodeJS

<br>

<img alt="Version" src="https://img.shields.io/github/package-json/v/devicarus/image-to-pdf?style=for-the-badge" />

</div>

---

## Instalation
```sh
npm install image-to-pdf
```

## Example (CommonJS)
```js
const { convert, sizes } = require('image-to-pdf');
const fs = require('fs')

const pages = [
    "./pages/image1.jpeg", // path to the image
    "data:image/png;base64,iVBORw...", // base64
    fs.readFileSync('./pages/image3.png') // Buffer
]
 
convert(pages, sizes.A4).pipe(fs.createWriteStream('output.pdf'))
```

## Example (ECMAScript)
```js
import imageToPDF, { sizes } from 'image-to-pdf';
import fs from 'fs';

let pages = fs.readdirSync('./img').map(file => `./img/${file}`);

imageToPDF(pages, sizes.A4).pipe(fs.createWriteStream('output-esm.pdf'));
```

## Example (TypeScript)
```js
const imageToPDF = require('image-to-pdf').default;
const fs = require('fs');

let pages: string[] = fs.readdirSync('./img').map((file: string) => `./img/${file}`);
// Alternatively you can also pass the size as a string like this:
imageToPDF(pages, 'A4').pipe(fs.createWriteStream('output-ts.pdf'));
```

## Documentation
### Accepted formats
The only accepted image formats are `png` and `jpeg`. They can be passed to the function as `base64`, `Buffer` or simply as a path to the file (see [Example](#example)).

### Page size
A list of all size presets in `sizes` can be found [here](sizes.json). A custom size can be passed to the function simply as `[x, y]`.

### Output
The function returns a `Stream` (see [official documentation](https://nodejs.org/api/stream.html)). The easiest way to get a file is to `pipe` it into a `WriteStream` (see [Example](#example)).
