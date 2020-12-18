function https(ARGUMENTS) {
  var ARG ={}, res;
  var DefaultArg = {
    ASYNC : ["[object Boolean]", true],
    DATA : ["[object String]", null],
    //DOWNLOAD_FUNCTION : ["[object Function]", function(){}],
    HEADER : ["[object Object]", {'Content-type':'application/x-www-form-urlencoded;charset=UTF-8'}],
    METHOD: ["[object String]", 'GET'],
    PASSWORD : ["[object String]", undefined],
    RES_FUNCTION : ["[object Function]", function(){}],
    TIMEOUT : ["[object Number]", 0],
    //UP_FUNCTION : ["[object Function]", function(){}],
    URL : ["[object String]", undefined],
    USERNAME : ["[object String]", undefined],
    WITHCREDENTIALS : ["[object Boolean]", false]
  };
  for(var k in DefaultArg) {
    if (Object.prototype.toString.call(ARGUMENTS[k]) === DefaultArg[k][0]) {
      ARG[k] = ARGUMENTS[k];
    } else {
      ARG[k] = DefaultArg[k][1];
    }
  }
  //console.log('1.sendData', ARG);
  var NEW_XHR = [
        function () { return new XMLHttpRequest () },
        function () { return new ActiveXObject ("Msxml2.XMLHTTP") },
        function () { return new ActiveXObject ("Msxml3.XMLHTTP") },
        function () { return new ActiveXObject ("Microsoft.XMLHTTP") }
  ];
  for(var x in NEW_XHR) {
    try{
      var xhr = NEW_XHR[x]();
    }catch(e){
      continue;
    }
    break;
  }
  xhr.open(ARG.METHOD, ARG.URL, ARG.ASYNC, ARG.USERNAME, ARG.PASSWORD);
  for(var n in ARG.HEADER) {
    xhr.setRequestHeader(n, ARG.HEADER[n]);
  }
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      //console.log('ResponseHeaders:', xhr.getAllResponseHeaders());
      //getResponseHeader responseURL responseType statusText
      //response responseXML
      //console.log('2.receiveData:', xhr.responseText);
      ARG.RES_FUNCTION(xhr.responseText, xhr.status);
    }
  };
  xhr.timeout = ARG.TIMEOUT;
  xhr.withCredentials = ARG.WITHCREDENTIALS; //cookie
  //xhr.upload.οnprοgress = UP_FUNCTION; //loaded total
  //xhr.οnprοgress = DOWNLOAD_FUNCTION; //loaded total
  xhr.send(ARG.DATA);
  //xhr.abort(); stop
}
module.exports = https;
