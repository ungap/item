# item

[![Build Status](https://travis-ci.com/ungap/item.svg?branch=master)](https://travis-ci.com/ungap/item) [![Coverage Status](https://coveralls.io/repos/github/ungap/item/badge.svg?branch=master)](https://coveralls.io/github/ungap/item?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

The [item proposal](https://github.com/tabatkins/proposal-item-method) polyfill/sham `*`

  * CDN global utility via https://unpkg.com/@ungap/item
  * ESM via `import any from '@ungap/item'`
  * CJS via `const any = require('@ungap/item')`

`*` The implementation doesn't care about truncating doubles, assuming you'll never access arrays via doubles values.
