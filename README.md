# eslint-config-standard [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[ci-image]: https://github.com/standard/eslint-config-standard/actions/workflows/ci.yml/badge.svg?branch=master
[ci-url]: https://github.com/standard/eslint-config-standard/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### The ESLint config of [JavaScript Standard Style](http://standardjs.com)

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

This module is for advanced users. You probably want to use [`standard`](http://standardjs.com) instead :)

## Usage

This package exports [a flat ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new).

```bash
npm install --save-dev eslint eslint-config-standard
```


Example `eslint.config.js`:
```js
const standard = require('eslint-config-standard')

module.exports = [
    standard,
    {
      // your overrides here
    }
] 
```

### Looking for something easier than this?

The easiest way to use JavaScript Standard Style to check your code is to use the
[`standard`](http://standardjs.com) package. This comes with a global
Node command line program (`standard`) that you can run or add to your `npm test` script
to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

```markdown
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](http://standardjs.com).

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
