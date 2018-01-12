var all_results = [];
var check;
var pages = null;

function initiateRequest () {
  var query = encodeURI(document.getElementById("form-input").value);
  // Callback function to retrieve the pageCount from AJAX Request
  // http://recurial.com/programming/understanding-callback-functions-in-javascript/
  //https://www.webmasterworld.com/javascript/3952568.htm
  getPageCount(query,function(page) {
    alert("getPageCount: " + page);
    pages = page;
    for(i=1;i<=page;i++) {
      sendRequest(query,i);
    }

    check = setInterval(checkResponse,500);
   });
   /*var str = JSON.stringify(json_all,undefined,2);
   alert(str);
   document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";*/
}
