function checkResponse() {
  alert("checkResponse");
  if(pages != null && all_results.length == pages) {
    clearInterval(check);
    var json_all = all_results.join();
  }
}

function inflateSearchResults () {
  
}
