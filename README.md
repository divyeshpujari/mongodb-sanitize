# mongodb-sanitize
This repository provide a functionality to sanitize the data that going to use for Insert into Mongodb collection, use for an query on a mongodb.

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

const sanitizedObject = sanitize(<SOME_OBJECT>);
```
