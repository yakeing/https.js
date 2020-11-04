function Http(ARGUMENTS, RES_FUNCTION) {
  var ARG ={}, res;
  var DefaultArg = {
    ASYNC : true,
    DATA : null,
    HEADER : {'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'},
    METHOD: 'GET',
    PASSWORD : undefined,
    URL : undefined,
    USERNAME : undefined
  };
  for(var k in DefaultArg) {
    ARG[k] = ARGUMENTS[k] || DefaultArg[k];
  }
  console.log('1.sendData', ARG);
  try{
    var xhr = new XMLHttpRequest();
  }catch(e){
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open(ARG.METHOD, ARG.URL, ARG.ASYNC, ARG.USERNAME, ARG.PASSWORD);
  for(var n in ARG.HEADER) {
    xhr.setRequestHeader(n, ARG.HEADER[n]);
  }
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      //console.log('ResponseHeaders:', xhr.getAllResponseHeaders());
      //getResponseHeader responseURL responseType statusText
      //response responseXML
      console.log('2.receiveData:', xhr.responseText);
      if ( arguments[1] !== undefined ) {
        RES_FUNCTION(xhr.responseText);
      }
    }
  };
  //xhr.timeout = 0;
  //xhr.withCredentials = false;
  //xhr.upload.οnprοgress = UP_FUNCTION; //loaded total
  //xhr.οnprοgress = DOWNLOAD_FUNCTION; //loaded total
  xhr.send(ARG.DATA);
  //xhr.abort(); stop
}
exports.Http=Http;