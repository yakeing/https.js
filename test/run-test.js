const https = require('../src/https.js');

var url = 'https://example.com';
var res_function = function(res, status) {
  if( status == 200){ //ok
  	// responseText
  }
}
var ARGUMENTS = {URL:url, RES_FUNCTION:res_function, HEADER:{'Content-type':'text/html; charset=UTF-8'}};
https(ARGUMENTS);
