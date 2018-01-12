function getPageCount(query,page) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "resources/proxy.php?method=/3/search/movie&query=" + query,true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200 && this.statusText == "OK") {
        var json = JSON.parse(this.responseText); //this.responseXML, any can be returned by request
        //pageCount(json.total_pages);
        page(json.total_pages);
      }
  };
  xhr.send(null); // used for post request, send data required. use send() for get request
}
