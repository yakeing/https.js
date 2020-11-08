---
layout: default
title: Examples
---

Terminate these steps if header is a case-insensitive match for one of the following headers:

### GET Example

```javascript
var url = "https://examples.com";
var res_function = function(res, status) {
  if( status == 200){ //ok
  	var responseText = JSON.parse(res);
  	// responseText
  }
}

var ARGUMENTS = {URL:url, RES_FUNCTION:res_function, HEADER:{'Content-type':'application/json;charset=UTF-8'}};
Http(ARGUMENTS);
```

Learn more about [header](/pages/Header.html).

Learn more about header [Content Type](/pages/ContentType.html).