# Stunning Secure String
A good looking crypto random string to use for things like API keys.  
Looks similar to the Stripe API key.


## Usage

For use in Node

`npm install stunning-secure-string`

```javascript
const secureString = require('stunning-secure-string');
const token = secureString();
// FV6G7LR9Ng9hUZZNvfEZUJRU13lPVlKJ23qKPXNOmpE3F1rmrjwU9Wx9NdFLJsC0nLEOHi88RPsX7SB4kdWY99PDXqViIuQ0Q

// or add a size
const token = secureString(14)
// tmii7akxzZGt1ayEYk
```