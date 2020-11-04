function Http(URL, RES_FUNCTION, METHOD, DATA, HEADER, ASYNC, USERNAME, PASSWORD) {
  var ARG ={}, i = 0, res;
  var DefaultArg = {
    URL : undefined,
    RES_FUNCTION : function(){},
    METHOD: 'GET',
    DATA : null,
    HEADER : {'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'},
    ASYNC : true,
    USERNAME : undefined,
    PASSWORD : undefined
  };
  for(var k in DefaultArg) {
    ARG[k] = arguments[i] || DefaultArg[k];
    i++;
  }
  console.log('1.sendData', ARG.URL, ARG.METHOD, ARG.DATA, ARG.HEADER, ARG.ASYNC, ARG.RES_FUNCTION, ARG.USERNAME, ARG.PASSWORD);
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
      RES_FUNCTION(xhr.responseText);
    }
  };
  //xhr.timeout = 0;
  //xhr.withCredentials = false;
  //xhr.upload.οnprοgress = UP_FUNCTION; //loaded total
  //xhr.οnprοgress = DOWNLOAD_FUNCTION; //loaded total
  xhr.send(ARG.DATA);
  //xhr.abort(); stop
}
