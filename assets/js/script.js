

var today = dayjs().format('YYYY-MM-DDTHH:mm:ss[Z]')
var nextWeek = dayjs().add(7, 'day').format('YYYY-MM-DDTHH:mm:ss[Z]')
var fetchedList = 20;
var city = 'San Diego';
var cityConvertURL = convertInputForURL(city);
var lat;
var lon;

var googleAPIKey = 'AIzaSyBRgqXsr0WiJVT2pK9YsH9otZQPkImwJHs';
var googleMap;//Defined in the lead fetch function (requires lat & lon)

var weatherKey='a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var weatherAPILatLon = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityConvertURL + '&units=imperial&appid=' + weatherKey;//Devin
var weatherApi;//Defined in the lead fetch function (requires lat & lon)

var geocodeKey = 'a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var geocode ='http://api.openweathermap.org/geo/1.0/direct?q=' + cityConvertURL + '&limit=5&appid=' + geocodeKey;

var ticketmasterKey='HFGYWE0osHys0ANa0ezvm1g9uNqmWxpM';
var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' + ticketmasterKey + '&locale=*&startDateTime=' + today + '&endDateTime=' + nextWeek + '&city=' + cityConvertURL;

var tomtomKey='9SVo7CMwOXDtJdDxTNsfWfWgimsIrLTU';//Devin
var tomtomApi;//Defined in the lead fetch function (requires lat & lon)

var newsKey='GBXG5EPQF9rQORZISKtLpJ7DKJO9ylEm';//Devin
var newsApi = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=' + newsKey;


// // fetch second api (set global variables) var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'
// // fetch third api for map (tomtom) (possibly) https://developer.tomtom.com/products/traffic-api
//   // fetch fourth api for media (national news agency) (NewApi.org) https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=588c1b13240446baa7e3517d3a8afdaa 
// 2022-04-11T23:59:00Z

var severeWeatherAlert;
var floodWarning;
var alertFEMA;//------maybe
var earthquake;
var todayEvents;
var trafficAlerts;
var mediaEvents;

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

//Get storage
function retrieveStoredArray(storedDataName) {
    const forceArray = (v) => [].concat(v).map(name => name);
    var storedArray = forceArray(JSON.parse(localStorage.getItem(storedDataName)));
    return storedArray;
}

//Set storage
function storeArray(assignName, data) {
    const forceArray = (v) => [].concat(v).map(name => name);
    var sendToStorage = JSON.stringify(forceArray(data));
    localStorage.setItem(assignName, sendToStorage);
    return console.log('Stored ' + assignName + ' as: ' + sendToStorage)
}

//Update storage
function updateStoredArray(storedDataName, addData) {
    const forceArray = (v) => [].concat(v).map(name => name);
    var storedArray = JSON.parse(localStorage.getItem(storedDataName));
    if (typeof storedArray === 'string' && storedArray.length > 0) {
        storedArray = forceArray(JSON.parse(localStorage.getItem(storedDataName)));
        var combinedArray = storedArray.push(addData);
        var backToStorage = JSON.stringify(combinedArray);
    } else if (typeof storedArray === 'object') {
        var combinedArray = storedArray.push(addData);
        var backToStorage = JSON.stringify(combinedArray);
    } else {
        var backToStorage = JSON.stringify(forceArray(addData));
    }
    localStorage.setItem(storedDataName, backToStorage);
    return console.log('Stored ' + storedDataName + ' as: ' + backToStorage)
}

function activateUponEvent() {
    city = $('#search-input').val();
    cityConvertURL = encodeURIComponent(city.trim());
// weatherAPIURL = ('https://api.openweathermap.org/data/2.5/weather?q=' + cityNameForURL + '&units=imperial&appid=' + apiKey);
// getWeather(weatherAPIURL);
for (var i = fetchedList; i > 0; i--) {
    storeArray(('city-history-' + i), $('#history' + (i - 1)).text());
}
storeArray('city-history-0', $('#search-input').val());
for (var i = 0; i < fetchedList; i++) {
    $(('#history' + i)).text(retrieveStoredArray(('city-history-' + i)));
}
console.log('Event activated');
    // var cityConvertURL = convertInputForURL(city);
    // getTomTom()
    // getTicketMaster()
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
            // severeWeatherAlert = data.alerts['0'].event;
            // for (var i = 0; i < data.alerts.length; i++) {
            //     console.log(data.alerts[i.toString()].event);
            //     $(('#alerts' + i)).text(data.alerts[i].event);
            // }
            lat = data.coord.lat;
            lon = data.coord.lon;
            weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=' + weatherKey;
            tomtomApi = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=' + lat + '%2C' + lon + '&unit=MPH&openLr=false&key=' + tomtomKey;
            getTomTom(tomtomApi);
            console.log('gettingWeather');
            getWeather(weatherApi);
            googleMap = 'https://www.google.com/maps/embed/v1/view?key=' + googleAPIKey + '&center=' + lat + ',' + lon + '&zoom=18&maptype=satellite';

        })
        .catch(function (error) {
            console.log(error);
            alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
        });
}
function getWeather(URL) {
    fetch(URL, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
           console.log('This data here')
        })
}
function getTomTom(URL) {
    console.log(tomtomApi);
    fetch(URL, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            console.log(response)
            // Declare varible/function here
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            trafficAlerts = data.flowSegmentData.roadClosure;
            $(('#traffic' + 1)).text(data.flowSegmentData.roadClosure);
        })
}
function getTicketMaster(URL) {
    fetch(URL, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            todayEvents = data._embedded.events['0'].name;
            for (i = 0; i < data._embedded.events.length; i++){
                console.log(data._embedded.events[i].name)
                $(('#events' + i)).text(data._embedded.events[i].name);
            }            
        })
}
function getnews(newsApi) {
    fetch(newsApi, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            var news = data.results['0'].title;
            for(var i = 0; i < data.results.length; i++){
                console.log(data.results[i].title)
            }
            $(('#media' + i)).text(data.results[i].title);
        })
}


function constructHeader() {
    $('#main').append($('<div>').addClass('row').attr('id', 'radio-stream'));
}

function constructSearchBox() {
    $('#main').append($('<div>').addClass('container is-flex is-justify-content-center').attr('id', 'search-container'));//Container
    $('#search-container').append($('<div>').addClass('container is-flex is-justify-content-center is-4').attr('id', 'search-group'));//Container
    $('#search-group').append($('<span>').addClass('').attr('id', 'search-title').text('Search:'));//Left orientation
    $('#search-group').append($('<input>').addClass('').attr({ id: 'search-input', type: 'text', placeholder: 'Search for a city' }));//Input text box
    $('#search-group').append($('<button>').addClass('').attr('id', 'search-button').text('Search'));//Search button
}

function constructMain() {
    $('#main').addClass('container');
    $('#main').append($('<div>').addClass('columns is-flex-wrap-wrap is-flex-grow-1 is-justify-content-space-evenly').attr('id', 'all-container'));

    $('#all-container').append($('<div>').addClass('column box is-2').attr('id', 'search-history'));
    $('#search-history').append($('<div>').addClass('row has-text-centered').attr('id', 'history-title').text('Search History'));
    for (var i = 0; i < fetchedList; i++) {
        $('#search-history').append($('<div>').addClass('row').attr('id', 'history' + i).text(' '));//parsed variable for text
    }
    $('#all-container').append($('<div>').addClass('column box is-2').attr('id', 'alerts'));
    $('#alerts').append($('<div>').addClass('row has-text-centered').attr('id', 'alerts-title').text('Alerts'));
    for (var i = 0; i < fetchedList; i++) {
        $('#alerts').append($('<div>').addClass('row').attr('id', 'alerts' + i).text(' '));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column box is-2').attr('id', 'live-events'));
    $('#live-events').append($('<div>').addClass('row has-text-centered').attr('id', 'events-title').text('Events'));
    for (var i = 0; i < fetchedList; i++) {
        $('#live-events').append($('<div>').addClass('row').attr('id', 'events' + i).text(' '));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column box is-2').attr('id', 'current-traffic'));
    $('#current-traffic').append($('<div>').addClass('row has-text-centered').attr('id', 'traffic-title').text('Traffic'));
    for (var i = 0; i < fetchedList; i++) {
        $('#current-traffic').append($('<div>').addClass('row').attr('id', 'traffic' + i).text(' '));//parse variable for text
    }
    $('#all-container').append($('<div>').addClass('column box is-2').attr('id', 'media-reports'));
    $('#media-reports').append($('<div>').addClass('row has-text-centered').attr('id', 'media-title').text('Media'));
    for (var i = 0; i < fetchedList; i++) {
        $('#media-reports').append($('<div>').addClass('row').attr('id', 'traffic' + i).text(' '));//parse variable for text
    }
}

function constructFooter() {
    $('#footer').attr('src', googleMap);
}
let googlemap;

function initMap() {
  googlemap = new google.maps.Map(document.getElementById("map"), {
    center: { lat:32.7157 , lng:-117.1611 },
    zoom: 14,
  });
}

window.initMap = initMap;

//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW
constructHeader();
constructSearchBox();
constructMain();
constructFooter();
getLatLon(weatherAPILatLon);
getTicketMaster(ticketmasterApi);
getnews(newsApi);


//now listen
document.querySelector('button').addEventListener('click', function (event) {
    var inputEl = event.target;
    activateUponEvent();
});
document.querySelector('#search-input').addEventListener('keyup', function (event) {
    var inputEl = event.key;
    if (inputEl === "Enter") {
        activateUponEvent();
    }
});



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













