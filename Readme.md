
# set-prop

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Non-destructively set a nested property, given its path

## Installation

    $ npm install @f/set-prop

## Usage

```js
var setProp = require('@f/set-prop')
var obj = {a: {b: 1}}
var newObj = setProp('a.b', obj, 2)

obj.a.b === 1
newObj.a.b === 2
obj !== newObj

```

## API

### setProp(path, obj, value)

- `path` - The path (specified as array or dotted string) of the property you wish to set
- `obj` - The root object you want to set within
- `value` - The value you want to assign to `path` within `obj`

**Returns:** A new root `obj` that has `path` changed to `value`, and all of the sub-objects in its tree cloned as well.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/set-prop.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/set-prop
[git-image]: https://img.shields.io/github/tag/micro-js/set-prop.svg
[git-url]: https://github.com/micro-js/set-prop
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/set-prop.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/set-prop
