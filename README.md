# next-trim-repeated
> Trim repeat for next.

## installation
```bash
npm install -S @feizheng/next-trim-repeated
```

## usage
```js
import '@feizheng/next-trim-repeated';

nx.trimRepeated('foo--bar---baz', '-');
//=> 'foo-bar-baz'

nx.trimRepeated('foo@#@#baz', '@#');
//=> 'foo@#baz'
```

## resources
- https://github.com/sindresorhus/trim-repeated
