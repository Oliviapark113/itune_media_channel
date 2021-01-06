

var musicVideoURL;
var movieVideoURL;
var numResults = 0;
var musicMasterList = [];
var movieMasterList = [];

//DOM element 
var musicBtn = $("#musicBtn")
var movieBtn = $("#movieBtn")

var container = $(".mv-container")
var artistImage = $(".image-artist")
var media = $(".media")
var img;
// randomly pulled data based on selected Number 

function runRandom(num, type) {
  //number value string convert into " number"
  var parseNum = parseInt(num)
  var flatMasterList = type==="music" ? musicMasterList.flat(): movieMasterList.flat()
  artistImage.empty()


  for (var i = 0; i < parseNum; i++) {
    var randomVideo = flatMasterList[Math.floor(Math.random() * flatMasterList.length)]

    console.log(randomVideo)
    var imgBox = $("<div>")
    img = $("<img>")
    img.attr("src", randomVideo.artworkUrl100)
    img.attr("data-video", randomVideo.previewUrl)
    img.attr("data-track", randomVideo.trackName)
    img.attr("class", "artist-image")
    imgBox.append(img)

    var para = $("<p>")
    para.attr("class", "info")
    para.text(formatName(randomVideo.trackName))
 
    imgBox.append(para)
    artistImage.append(imgBox)

  }

  artistImage.on("click", img, playMusicVideo)
}

function formatName (string)  
{
  var shortStr = string.slice(0,20) + "..."
if (string.length > 20){
  console.log(shortStr)
  return shortStr 
}
else {
  console.log(string)
  return string
}
}

// formatName("Mike"), 
formatName("dhlafskdjakgjfgksdlgkdlgkdfflskfdlgks")

function playMusicVideo(e) {

e.stopPropagation()

  console.log(e.target)
  console.log($(this))
 
  var myVideo = e.target.getAttribute("data-video")
  var myTrack = e.target.getAttribute("data-track")
  openMedia(myVideo, myTrack)
  toggleOverlay();

}

function openMedia(url, title) {
  console.log(url)
  media.html(`<video controls autoplay width=700px src="${url}" ></video><p>${title}</p>`)
  media.append("<button class='closeBtn'>CLOSE</button>")
  media.removeClass("hide")
  
}


function closeMedia() {
  media.html("")
  toggleOverlay();
  musicBtn.removeAttr("data-music")
  movieBtn.removeAttr("data-movie")
  toggleWeatherBox()
}

function toggleOverlay() {

  $(".artist-image").toggleClass("blur")

}

media.on("click", closeMedia)

function toggleWeatherBox(){

  if(musicBtn.attr("data-music")==="on" ||
   movieBtn.attr("data-movie")==="on"){

  $(".city-search").addClass("hide")
  $(".zip-search").addClass("hide")
  $(".weather-result").addClass("hide")
  $(".select").addClass("selectMove")}
  else{
    $(".city-search").removeClass("hide")
  $(".zip-search").removeClass("hide")
  $(".weather-result").removeClass("hide")
  $(".select").removeClass("selectMove")

  }
}




var clearKeyword;    //("Clear")
var cloudsKeyword;  //("Clouds")
var snowKeyword;   //("Snow")
var rainKeyword;  //("Rain")
var windKeyword;  //("Windy")
var mistKeyword; //("Mist")
var defaultKeyword;//("None of the above conditions")

musicBtn.on("click", async function () {
  
  numResults = $("#numRecords").val()
  musicBtn.attr("data-music", "on")
  toggleWeatherBox();
  if (musicBtn.attr("data-music")==="on"){
  var userWeather = $("#main_weather").text()

  if (userWeather.includes("Clear")) {
    clearKeyword = ["pop", "hiphop", "country", "ska", "reggae"];

    for (var i = 0; i < clearKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + clearKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })

      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Clouds")) {
    cloudsKeyword = ["R&B", "lo-fi", "jazz", "blues"];

    for (var i = 0; i < cloudsKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + cloudsKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Snow")) {
    snowKeyword = ["christmaspop", "classical", "christmasjazz", "blues"];

    for (var i = 0; i < snowKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Rain")) {
    rainKeyword = ["jazz", "R&B", "soul", "blues"];

    for (var i = 0; i < rainKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Mist")) {
    mistKeyword = ["jazz", "R&B", "soul", "lo-fi"];

    for (var i = 0; i < mistKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + mistKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

    }

  }
  else{

    defaultKeyword = ["jazz", "R&B", "pop","metal","hiphop"];

    for (var i = 0; i < defaultKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + defaultKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

  }

}

}
  runRandom(numResults,"music");
})


movieBtn.on("click", async function () {
 
  numResults = $("#numRecords").val()
  movieBtn.attr("data-movie" , "on")
  toggleWeatherBox();
  if (movieBtn.attr("data-movie")==="on"){
  var userWeather = $("#main_weather").text()

  if (userWeather.includes("Clear")) {
    clearKeyword = ["action", "drama", "romance", "western", "comedy"];

    for (var i = 0; i < clearKeyword.length; i++) {

      movieVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + clearKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })

      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Clouds")) {
    cloudsKeyword = ["romance", "drama", "classics","scifi"];

    for (var i = 0; i < cloudsKeyword.length; i++) {

      movieVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + cloudsKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Snow")) {
    snowKeyword = ["romance", "comedy", "action", "kids","holiday"];

    for (var i = 0; i < snowKeyword.length; i++) {

      movieVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Rain")) {
    rainKeyword = ["thriller", "documentary", "horror", "independent"];

    for (var i = 0; i < rainKeyword.length; i++) {

      movieVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Mist")) {
    mistKeyword = ["thriller", "documentary", "horror", "romance"];

    for (var i = 0; i < mistKeyword.length; i++) {

      movieVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + mistKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })

      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

    }

  }

  else{
    defaultKeyword = ["romance", "classic", "animation","action","fiction"];

    for (var i = 0; i < defaultKeyword.length; i++) {

      musicVideoURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + defaultKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

  }

  }

}
  runRandom(numResults, "movie");
})

