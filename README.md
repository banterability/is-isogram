# is-isogram

Build Status: [![CircleCI](https://circleci.com/gh/banterability/is-isogram.svg?style=svg)](https://circleci.com/gh/banterability/is-isogram)

Test whether a word or phrase is an [isogram](https://en.wikipedia.org/wiki/Isogram) (a word or phrase without a repeating letter).

## Installation

```bash
$ npm install is-isogram --save
```

## Usage

```js
var isIsogram = require('is-isogram');

// Test whether letters repeat in a word:

isIsogram('sandwich');
// -> true

isIsogram('wedding');
// -> false


// Also supports phrases, ignoring spacing:

isIsogram('quick on the draw');
// -> true

isIsogram('flipped turned upside down');
// -> false
```
