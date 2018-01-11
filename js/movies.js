function initialize () {
  //alert("initialize");
}

function sendRequest () {
  //alert("request initialize");
   var xhr = new XMLHttpRequest();
   var query = encodeURI(document.getElementById("form-input").value);
   xhr.open("GET", "resources/proxy.php?method=/3/search/movie&query=" + query);
   xhr.setRequestHeader("Accept","application/json");
   xhr.onreadystatechange = function () {
       if (this.readyState == 4) {
         //alert("readyState");
          var json = JSON.parse(this.responseText);
          var str = JSON.stringify(json,undefined,2);
          alert(str);
          document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
       }
   };
   xhr.send(null);
}
