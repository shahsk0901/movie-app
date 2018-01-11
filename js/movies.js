function initialize () {
  //alert("initialize");
}

function initiateRequest () {
  var json_all;
  var query = encodeURI(document.getElementById("form-input").value);

  // Callback function to retrieve the pageCount from AJAX Request
  // http://recurial.com/programming/understanding-callback-functions-in-javascript/
  getPageCount(query,function(pageCount) {
     for(i=1;i<=pageCount;i++) {
       alert(i);
     }
   });
   /*var str = JSON.stringify(json_all,undefined,2);
   alert(str);
   document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";*/
}
