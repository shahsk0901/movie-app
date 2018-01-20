function checkResponse() {
  alert("checkResponse");
  if(pages != null && all_results.length == pages) {
    clearInterval(check);
  }
}

function inflateSearchResults (response) {
  alert("inflateSearchResults");
  alert(JSON.stringify(response,null,2));
  for(i=0;i<response.results.length;i++) {
    document.getElementById("u").innerHTML +=
    "<li class='movie-list'>" + response.results[i].id + response.results[i].title + "</li>";
  }
}
