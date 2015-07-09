# total-captcha

A captcha module for nodejs based on [node-canvas](https://www.npmjs.org/package/canvas)

## note

- install Cairo first, For system-specific installation view the  <a href="https://github.com/LearnBoost/node-canvas/wiki/_pages">Wiki</a> from [node-canvas](https://www.npmjs.org/package/canvas)

## Installation

```bash
$ npm install total-captcha
```

## use

```javascript
//captcha 
var captcha = require("total-captcha");
var obj = {
	"mode" : 3,
	"length" : 5
};
var resultant = captcha.createCaptcha(obj);
console.log("resultant", resultant);

```

## test

```bash
$ git clone https://github.com/BalaKrishna-BALU/total-captcha.git
$ cd total-captcha
$ sudo npm install
$ node test.js
```

## license

MIT
