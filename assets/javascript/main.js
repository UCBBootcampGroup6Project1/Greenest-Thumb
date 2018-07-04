// URL to Darksky api.
var urlOne = 'https://api.darksky.net/forecast/[key]/', // [latitude] [longitude]
//URL to USDA PubAG api.
var urlTwo = 'https://api.nal.usda.gov/pubag/rest/search/?query={}', // [&parameters]

// Ajax GET request to darksky api.
$.ajax({
    url: urlOne
    method: 'GET'
}).then(function(response) {
    console.log(response);
});

// Ajax GET request to USDA PubAG api.
$.ajax({
    url: urlTwo,
    method: 'GET'
}).then(function(response) {
    console.log(response);
});

// Initialize Firebase.
var config = {
    apiKey: "AIzaSyA_7OL01n3e6lrQelTdHcb5fRGHZ_Q71Tg",
    authDomain: "greenest-thumb.firebaseapp.com",
    databaseURL: "https://greenest-thumb.firebaseio.com",
    projectId: "greenest-thumb",
    storageBucket: "",
    messagingSenderId: "513163004190"
  };
  firebase.initializeApp(config);