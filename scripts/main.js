 // f80278c0-e8aa-4999-9b93-75a64feeb288
var pageCounter = 0
var newsfeedSummary = document.getElementById("newsfeed-summary");
var newsfeed = document.getElementById("newsfeed");

btn.addEventListener("click", function(){

  var ourRequest = new XMLHttpRequest();
  // tells the browser to go to the URL and get the JSON data
  // "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
  // ourRequest.open("GET", 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search');
  ourRequest.open("GET", 'https://content.guardianapis.com/search?api-key=f80278c0-e8aa-4999-9b93-75a64feeb288');

  ourRequest.onload = function(){
    // error handling if else statement
      var ourData = JSON.parse(ourRequest.responseText);
      var headlineData = ourData.response.results
      renderHTML(headlineData);
  };

  ourRequest.onerror = function(){
    console.log("connection error");
  };
 //  hides the button if page counter is higher than 1
  ourRequest.send()
  pageCounter ++;
  if (pageCounter > 0) {
    btn.classList.add("hide-me");
  }

});


function renderHTML(data){
  var htmlString = ""
  for (var i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].webTitle + " <a href=" + data[i].webUrl +">Full article</a></p>";

    // for (ii = 0; ii < data[i].foods.likes.length; ii++){
    //   if (ii == 0) {
    //       htmlString += data[i].foods.likes[ii];
    //   } else {
    //       htmlString += " and " + data[i].foods.likes[ii];
    //   }
    // }

    // htmlString += " and dislikes ";

    // for (iii = 0; iii < data[i].foods.dislikes.length; iii++){
    //   if (iii == 0) {
    //       htmlString += data[i].foods.dislikes[iii];
    //   } else {
    //       htmlString += " and " + data[i].foods.dislikes[iii];
    //   }
    // }

    // htmlString += ".</p>";
  }
  newsfeed.insertAdjacentHTML("beforeend", htmlString)
};

//  Summary section //
//                  //
var summaryRequest = new XMLHttpRequest();
summaryRequest.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/football/live/2017/sep/17/real-sociedad-v-real-madrid-la-liga-live");
summaryRequest.onload = function(){
  // error handling if else statement
    var summaryData = JSON.parse(summaryRequest.responseText);
    // var headlineData = ourData.response.results
    console.log(summaryData)
    // renderHTML(headlineData);
};
summaryRequest.send()
