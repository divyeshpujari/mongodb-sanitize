# mongodb-sanitize

[![NPM](https://nodei.co/npm/mongodb-sanitize.png)](https://www.npmjs.com/package/mongodb-sanitize)

![npm](https://img.shields.io/npm/v/mongodb-sanitize)
![node-current](https://img.shields.io/node/v/mongodb-sanitize)
![GitHub branch checks state](https://img.shields.io/github/checks-status/divyeshpujari/mongodb-sanitize/master?label=build)
![npm](https://img.shields.io/npm/dw/mongodb-sanitize)
![GitHub issues](https://img.shields.io/github/issues/divyeshpujari/mongodb-sanitize)
![NPM](https://img.shields.io/npm/l/mongodb-sanitize)
[![dependencies Status](https://status.david-dm.org/gh/divyeshpujari/mongodb-sanitize.svg)](https://david-dm.org/divyeshpujari/mongodb-sanitize)
[![devDependencies Status](https://status.david-dm.org/gh/divyeshpujari/mongodb-sanitize.svg?type=dev)](https://david-dm.org/divyeshpujari/mongodb-sanitize?type=dev)
![npm bundle size](https://img.shields.io/bundlephobia/min/mongodb-sanitize)
![GitHub contributors](https://img.shields.io/github/contributors/divyeshpujari/mongodb-sanitize)

This repository provides a functionality to sanitize the data that going to use for mongoDb operation.
This will make sure that, incoming request not includes the bad/wrong formatted data which break or security breach for mongoDb.
In short, it's provide some amount of security at code level to avoid any injection over mongoDb.

# How to install

```javascript
npm i --save mongodb-sanitize
```
or
```javascript
yarn add mongodb-sanitize
```

# How to use as middleware

Set as the middleware like below example:
By default this package will sanitize the data for `req.body`, `req.params`, `req.query`

```javascript
const express = require('express');
const mongodbSanitize = require('mongodb-sanitize');

const app = express();

app.use(mongodbSanitize());
```

If you want to sanitize on custom fields then you can configure the middleware as below:

```javascript
const express = require('express');
const mongodbSanitize = require('mongodb-sanitize');

const app = express();

app.use(mongodbSanitize(['body', 'query']));
```

Note:- Here, sanitize operation should be performed on only two fields(`body`, `query`) of request.

# How to use as separate method

Here, you can see the example that how to use sanitize method separately

```javascript
const { sanitize } = require('mongodb-sanitize');

const sanitizedObject = sanitize(<SOME_OBJECT_OR_ARRAY>);
```

# How to use `isSanitized` method

`isSanitized` method used to check that is the pass object/array in argument is sanitize or not for mongodb operations.

```javascript
const { isSanitized } = require('mongodb-sanitize');

const checkSanitization = isSanitized(<SOME_OBJECT_OR_ARRAY>);
```
