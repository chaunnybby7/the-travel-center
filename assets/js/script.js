

var today = dayjs().format();
var apiKeyLatLon = '1371c97168ddd23b4146579d8cbe687b';//BL key
var apiKeyGeoCode 
var fetchedList = 20;
var city = 'San Diego';
var mapCity = 'San Diego';
var cityConvertURL = convertInputForURL(city);
var lat;
var lon;


var weatherKey='a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var weatherAPILatLon = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityConvertURL + '&units=imperial&appid=' + weatherKey;//Devin
var weatherApi;//Defined in the lead fetch function (requires lat & lon)

var geocodeKey = 'a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var geocode ='http://api.openweathermap.org/geo/1.0/direct?q=' + cityConvertURL + '&limit=5&appid=' + geocodeKey;

var ticketmasterKey='HFGYWE0osHys0ANa0ezvm1g9uNqmWxpM';
var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' + ticketmasterKey + '&locale=*&startDateTime=' + today + '&city=' + cityConvertURL;

var tomtomKey='9SVo7CMwOXDtJdDxTNsfWfWgimsIrLTU';//Devin
var tomtomApi;//Defined in the lead fetch function (requires lat & lon)

var newsKey='GBXG5EPQF9rQORZISKtLpJ7DKJO9ylEm';//Devin
var newsApi = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=' + newsKey;


// 2022-04-11T23:59:00Z

//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW

function displayTime() {
    var rightNow = dayjs().format();
    var hourNow = dayjs().format('H');
    var minNow = dayjs().format('m');
    var secNow = dayjs().format('s');
    var ampmNow = dayjs().format('a');
    secondsLeftToday = (((24 - hourNow) * 60 * 60) - (minNow * 60) - secNow);
    $('#current-day').text(rightNow);
    window.setTimeout("displayTime()", 1000);
}

function convertInputForURL(input) {
    output = encodeURIComponent(input.trim());
    return output;
}


function getTomTom() {
fetch(tomtomApi,{
    method:'Get',
    credentials:'same-origin',
    redirect: 'follow'
})
    .then(function(response){
        console.log(response)
        // Declare varible/function here
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

function getTicketMaster() {
fetch(ticketmasterApi,{
    method:'Get',
    credentials:'same-origin',
    redirect: 'follow'
})
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    console.log(data);
    })
}


function uponEvent() {
    
    var cityConvertURL = convertInputForURL(city);
    getTomTom()
    getTicketMaster()
}


//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//DEFINE THE PRIMARY FUNCTION BELOW

    function getLatLon(URL) {
        fetch(URL, {
            method: 'GET',
            credentials: 'same-origin',
            redirect: 'follow',
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                lat = data.coord.lat;
                lon = data.coord.lon;
                weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=' + weatherKey;
                tomtomApi = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=' + lat + '&' + lon + '&unit=MPH&openLr=false&key='+ tomtomKey;
                
                getTomTom();

            })
            .catch(function (error) {
                console.log(error);
                alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
            });
    }

function devinsTempFunction() {

// Fecth for first api (natural disasters) 
// fetch(disastersApi,{
//     method:'Get',
//     credentials:'same-origin',
//     redirect: 'follow'
// })
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//     console.log(data);
//     })
// // First call we should get latitude and longitude (any call that requires lat and long should be called within first fetch)
// fetch(geocode,{
//     method:'Get',
//     credentials:'same-origin',
//     redirect: 'follow'
// })
//     .then(function(response){
//         console.log(response)
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
// fetch second api (set global variables) var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'
// fetch third api for map (tomtom) (possibly) https://developer.tomtom.com/products/traffic-api
    // fetch fourth api for media (national news agency) (NewApi.org) https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=588c1b13240446baa7e3517d3a8afdaa key=588c1b13240446baa7e3517d3a8afdaa
fetch(newsApi,{
    method:'Get',
    credentials:'same-origin',
    redirect: 'follow'
})
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    console.log(data);
    })
// Radio station api for the bottom row (rapidApi) (possibly) = 
}

function constructHeader() {
    $('#main').append($('<div>').addClass('row').attr('id', 'radio-stream'));
}

function constructSearchBox() {
    $('#main').append($('<div>').addClass('container is-justify-content-space-evenly').attr('id', 'search-group'));//Container
    $('#search-group').append($('<p>').addClass('').attr('id', 'search-title').text('Search:'));//Left orientation
    $('#search-group').append($('<input>').addClass('').attr({ id: 'search-input', type: 'text', placeholder: 'Search for a city' }));//Input text box
    $('#search-group').append($('<button>').addClass('').attr('id', 'search-button').text('Search'));//Search button
}

function constructMain() {
    $('#main').addClass('container');
    $('#main').append($('<div>').addClass('columns is-flex-wrap-wrap is-flex-grow-1 is-justify-content-space-evenly').attr('id', 'all-container'));

    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'search-history'));
    $('#search-history').append($('<div>').addClass('row').attr('id', 'history-title').text('Search History'));
    for (var i = 0; i < fetchedList; i++) {
        $('#search-history').append($('<div>').addClass('row').attr('id', 'history' + i).text('asdf'));//parsed variable for text
    }
    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'alerts'));
    $('#alerts').append($('<div>').addClass('row').attr('id', 'alerts-title').text('Alerts'));
    for (var i = 0; i < fetchedList; i++) {
        $('#alerts').append($('<div>').addClass('row').attr('id', 'alerts' + i).text('asdf'));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'live-events'));
    $('#live-events').append($('<div>').addClass('row').attr('id', 'events-title').text('Events'));
    for (var i = 0; i < fetchedList; i++) {
        $('#live-events').append($('<div>').addClass('row').attr('id', 'events' + i).text('asdf'));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'current-traffic'));
    $('#current-traffic').append($('<div>').addClass('row').attr('id', 'traffic-title').text('Traffic'));
    for (var i = 0; i < fetchedList; i++) {
        $('#current-traffic').append($('<div>').addClass('row').attr('id', 'traffic' + i).text('asdf'));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'media-reports'));
    $('#media-reports').append($('<div>').addClass('row').attr('id', 'media-title').text('Media'));
    for (var i = 0; i < fetchedList; i++) {
        $('#media-reports').append($('<div>').addClass('row').attr('id', 'traffic' + i).text('asdf'));//parse variable for text
    }
}

// Initialize and add the map
function initMap() {
    // The location of mapCity
    const mapCity = { lat: lat, lng: lon };
    // The map, centered at mapCity
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: mapCity,
    });
    // The marker, positioned at mapCity
    const marker = new google.maps.Marker({
      position: mapCity,
      map: map,
    });
  }


function davidsTempFunction() {
    var searchCt = [];
    function find(c) {
        for (var i = 0; i < searchCt.length; i++) {
            if (c.toUpperCase() == searchCt[i]) {
                return -1;
            }
        }
        return 1;
    }
    function displayNews(event) {
        event.preventDefault();
        if ($('#search-city').val().trim() !== "") {
            city = $('#search-city').val().trim();
            currentNews(city);
        }
    }
}



//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW
getLatLon();
constructHeader();
constructSearchBox();
constructMain();
initMap();


$('#search-button').on('click', activateUponEvent())


//LISTEN AND TAKE ACTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//NOTES BELOW HERE
//------------------------------------------------------------------------------------------------------------------



// Javascript
//     SELECT BY ID
//         document.querySelector('#someIDHere');
//     SELECT BY CLASS
//         document.querySelector('.someClassHere');
//     SELECT CHILDREN OF
//         document.querySelector('someSelectorHere).children[0].children[0];
//     CREATE DOM ELEMENT
//         document.createElement("someTagHere");
//     ASSIGN A CONTAINER ELEMENT
//         document.querySelector("someSelectorHere");
//     ADD ATTRIBUTE (CLASS)
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere');
//     ADD TEXT
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere').textContent;
//     RANDOM CONSOLIDATED EXAMPLE
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere').textContent = 'some text';
//     EVENT LISTENERS
//         document.querySelector("someSelectorHere").addEventListener('click', function () {
//             function goes here
//         })


// jQuery
//     SELECT BY ID
//         $('#someIDhere');
//     SELECT BY CLASS
//         $('.someClassHere');
//     SELECT CHILDREN OF
//         $('.someClassHere').child(0).child(0);
//     CREATE DOM ELEMENT
//         $('<someTagHere>');
//     ASSIGN A CONTAINER ELEMENT
//         $('someSelectorHere');
//     ADD ATTRIBUTE (CLASS)
//         $('someSelectorHere').addClass('someClassAssignmentHere');
//     ADD TEXT
//         $('someSelectorHere').addClass('someClassAssignmentHere').text('someTextHere');
//     RANDOM CONSOLIDATED EXAMPLE
//         $('<td>').addClass('p-2').text(type);













