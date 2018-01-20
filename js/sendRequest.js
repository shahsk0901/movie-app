function sendRequest(query,page,inflateSearchResults) {
  document.getElementById("u").innerHTML = "";
  alert("sendRequest: " + page);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "resources/proxy.php?method=/3/search/movie&query=" + query + "&page=" + page,true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200 && this.statusText == "OK") {
        alert("readyState: " + page);
        var json = JSON.parse(this.responseText); //this.responseXML, any can be returned by request
        inflateSearchResults(json);
      }
  };
  xhr.send(null); // used for post request, send data required. use send() for get request
}
