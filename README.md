# next-trim-repeated
> Trim repeat for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-trim-repeated
```

## usage
```js
import '@jswork/next-trim-repeated';

nx.trimRepeated('foo--bar---baz', '-');
//=> 'foo-bar-baz'

nx.trimRepeated('foo@#@#baz', '@#');
//=> 'foo@#baz'
```

## resources
- https://github.com/sindresorhus/trim-repeated

## license
Code released under [the MIT license](https://github.com/afeiship/next-trim-repeated/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-trim-repeated
[version-url]: https://npmjs.org/package/@jswork/next-trim-repeated

[license-image]: https://img.shields.io/npm/l/@jswork/next-trim-repeated
[license-url]: https://github.com/afeiship/next-trim-repeated/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-trim-repeated
[size-url]: https://github.com/afeiship/next-trim-repeated/blob/master/dist/next-trim-repeated.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-trim-repeated
[download-url]: https://www.npmjs.com/package/@jswork/next-trim-repeated
