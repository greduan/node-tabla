# extensions-parser

## Usage

```js
parser('package.json');
// => []

parser('boop.html.hbs.pug');
/*
 * => [
 *   { from: 'pug', to: 'hbs' },
 *   { from: 'hbs', to: 'html' },
 * ]
 */
```

## Notes

Only takes in file names, it assumes that its input is *only* the file name and
nothing else, since it'll do a split by `'.'`.
