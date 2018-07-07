// URL to Darksky api.
var urlOne = 'https://api.darksky.net/forecast/[key]/' // [latitude] [longitude]
//URL to USDA PubAG api.
var urlTwo = 'https://api.nal.usda.gov/pubag/rest/search/?query={}' // [&parameters]

// Ajax GET request to darksky api.
$.ajax({
    url: urlOne,
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