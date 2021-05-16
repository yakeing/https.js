---
layout: default
title: Examples
---

> Terminate these steps if header is a case-insensitive match for one of the following headers:

Learn more about [header](/pages/Header.html).

Learn more about header [Content Type](/pages/ContentType.html).

### GET Example

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

### OPTIONS, PUT, POST, DELETE Example

```javascript
var url = "https://example.com";
var db = "repositories=https&language=JavaScript";
var res_function = function(res, status) {
  if( status == 200){ //ok
  	var responseText = JSON.parse(res);
  	// responseText
  }
}
var ARGUMENTS = {URL:url, METHOD:'POST', DATA:db, RES_FUNCTION:res_function};
https(ARGUMENTS);
```

### Author

weibo: [yakeing](https://weibo.com/yakeing)

twitter: [yakeing](https://twitter.com/yakeing)

## License

[MPL-2.0](https://github.com/yakeing/https.js/blob/main/LICENSE)

[![license](https://badging.vercel.app/static/license/555/MPL-2.0/FE7D37?icon=github)](https://github.com/yakeing/https.js/blob/main/LICENSE)
