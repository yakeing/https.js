---
layout: default
title: Header
---

### Header

Terminate these steps if header is a case-insensitive match for one of the following headers:

* Accept-Charset
* Accept-Encoding
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Connection
* Content-Length
* Cookie
* Cookie2
* Date
* DNT
* Expect
* Host
* Keep-Alive
* Origin
* Referer
* TE
* Trailer
* Transfer-Encoding
* Upgrade
* User-Agent
* Via

… or if the start of header is a case-insensitive match for `Proxy-` or `Sec-` (including when header is just `Proxy-` or `Sec-` ).

The above headers are controlled by the user agent to let it control those aspects of transport. This guarantees data integrity to some extent. Header names starting with `Sec-` are not allowed to be set to allow new headers to be minted that are guaranteed not to come fromXMLHttpRequest.


### Author

weibo: [yakeing](https://weibo.com/yakeing)

twitter: [yakeing](https://twitter.com/yakeing)

## License

[MPL-2.0](https://github.com/yakeing/https.js/blob/main/LICENSE)

[![license](https://4.vercel.app/static/license/555/MPL-2.0/FE7D37?icon=github)](https://github.com/yakeing/https.js/blob/main/LICENSE)
