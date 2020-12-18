const core = require('@actions/core');
import { https } from 'src/https.js';
async function run() {
  try {
      var url = "https://example.com";
      var res_function = function(res, status) {
        if( status != 200){ //ok
          // responseText
          return 1;
        }
      }

      var ARGUMENTS = {URL:url, RES_FUNCTION:res_function, HEADER:{'Content-type':'application/json;charset=UTF-8'}};
      https(ARGUMENTS);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}
run()
