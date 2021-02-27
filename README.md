# https.js

[![codecov](https://codecov.io/gh/yakeing/https.js/branch/master/graph/badge.svg)](https://codecov.io/gh/yakeing/https.js)
[![TAG](https://badging.now.sh/github/tag/yakeing/https.js?icon=github)](../../releases)
[![NPM](https://badging.now.sh/npm/version/https.js?icon=npm)](https://www.npmjs.com/package/https.js)

This is a pure JavaScript small program, does not need third-party software support

## Features

- Pure JavaScript writing
- A simple class file

## Code Example

```javascript
var url = "https://example.com";
var res_function = function(res, status) {
  if( status == 200){ //ok
  	var responseText = JSON.parse(res);
  	// responseText
  }
}

var ARGUMENTS = {URL:url, RES_FUNCTION:res_function, HEADER:{'Content-type':'application/json;charset=UTF-8'}};
https(ARGUMENTS);
```
If you need to learn more, go to [more examples](https://https.js.org/pages/Example.html).

### Author

weibo: [yakeing](https://weibo.com/yakeing)

twitter: [yakeing](https://twitter.com/yakeing)

## License

[MPL-2.0](LICENSE)

[![license](https://badging.now.sh/static/label/license/555/MPL-2.0/FE7D37?icon=github)](LICENSE)
