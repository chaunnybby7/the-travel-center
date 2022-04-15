

var today = dayjs().format('YYYY-MM-DDTHH:mm:ss[Z]');
var todayDate = dayjs().format('YYYY-MM-DD');
var nextWeek = dayjs().add(7, 'day').format('YYYY-MM-DDTHH:mm:ss[Z]');
var unixDate;
var fetchedList = 20;
var city = 'San Diego';
var cityConvertURL = convertInputForURL(city);
var lat;
var lon;
var map;
var center;
var zoom;
var lat;
var lon;
var googleAPIKey = 'AIzaSyBRgqXsr0WiJVT2pK9YsH9otZQPkImwJHs';
var googleMap;//Defined in the lead fetch function (requires lat & lon)
var weatherKey='a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var weatherAPILatLon = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityConvertURL + '&units=imperial&appid=' + weatherKey;//Devin
var weatherApi;//Defined in the lead fetch function (requires lat & lon)
var geocodeKey = 'a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var geocode ='http://api.openweathermap.org/geo/1.0/direct?q=' + cityConvertURL + '&limit=5&appid=' + geocodeKey;
// https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*
var ticketmasterKey='HFGYWE0osHys0ANa0ezvm1g9uNqmWxpM';
var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' + ticketmasterKey + '&locale=*&startDateTime=' + today + '&endDateTime=' + nextWeek + '&city=' + cityConvertURL;
// https://developer.tomtom.com/products/traffic-api
var tomtomKey='9SVo7CMwOXDtJdDxTNsfWfWgimsIrLTU';//Devin
var tomtomApi;//Defined in the lead fetch function (requires lat & lon)
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=588c1b13240446baa7e3517d3a8afdaa 
var newsKey='GBXG5EPQF9rQORZISKtLpJ7DKJO9ylEm';//Devin
var newsApi = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=' + newsKey;



//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW



function displayTime() {
    var rightNow = dayjs().format('YYYY-MM-DD HH:mm:ss');
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

function locationChangeOnApis() {
    weatherAPILatLon = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityConvertURL + '&units=imperial&appid=' + weatherKey;//Devin
    geocode = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityConvertURL + '&limit=5&appid=' + geocodeKey;
    ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' + ticketmasterKey + '&locale=*&startDateTime=' + today + '&endDateTime=' + nextWeek + '&city=' + cityConvertURL;
    newsApi = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=' + newsKey;
}

function activateUponEvent() {
    city = $('#search-input').val();
    cityConvertURL = encodeURIComponent(city.trim());
    locationChangeOnApis();
    getLatLon(weatherAPILatLon);
    console.log('TicketMaster API fetch below');
    getTicketMaster(ticketmasterApi);
    console.log('TicketMaster API fetch above');
    console.log('News API fetch below');
    getnews(newsApi);
    console.log('News API fetch above');
    for (var i = fetchedList; i > 0; i--) {
        storeArray(('city-history-' + i), $('#history' + (i - 1)).text());
    }
    storeArray('city-history-0', $('#search-input').val());
    for (var i = 0; i < fetchedList; i++) {
        $(('#history' + i)).text(retrieveStoredArray(('city-history-' + i)));
    }
    console.log('Event activated');
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lon },
        zoom: 14,
    });
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
            return response.json();
        })
        .then(function (data) {
            console.log('Weather Lat & Long fetch below');
            console.log(data);
            console.log('Weather Lat & Long fetch above');
            lat = data.coord.lat;
            lon = data.coord.lon;
            weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude={part}&appid=' + weatherKey;
            tomtomApi = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=' + lat + '%2C' + lon + '&unit=MPH&openLr=false&key=' + tomtomKey;
            getTomTom(tomtomApi);
            getWeather(weatherApi);
            googleMap = 'https://www.google.com/maps/embed/v1/view?key=' + googleAPIKey + '&center=' + lat + ',' + lon + '&zoom=18&maptype=satellite';
            initMap();
            window.initMap = initMap;
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
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log('Weather OneCall API fetch below');
            console.log(data);
            console.log('Weather OneCall API fetch above');
            for (var i = 0; i < data.daily.length - 1; i++) {
                $('#weather').append($('<div>').addClass('row weather').attr('id', 'weather' + i).text(
                    dayjs.unix(data.daily[i].dt).format('YYYY-MM-DD') +
                    ': Conditions = ' + data.daily[i].weather[0].description +
                    '| sunrise @ ' + dayjs.unix(data.daily[i].sunrise).format('HH:mm:ss') +
                    '| sunset @ ' + dayjs.unix(data.daily[i].sunset).format('HH:mm:ss') +
                    '| Day Temp = ' + data.daily[i].temp[1] +
                    '| Night Temp = ' + data.daily[i].temp[4]
                ));
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
        });
}
function getTomTom(URL) {
    console.log(tomtomApi);
    fetch(URL, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log('TomTom API fetch below');
            console.log(data);
            console.log('TomTom API fetch above');
            trafficAlerts = data.flowSegmentData.roadClosure;
            // console.log(data.flowSegmentData.roadClosure)
            if (data.flowSegmentData.roadClosure = 'false'){
                $(('#traffic' + 1)).text("There are currently no road closures.");
            } else {
                $(('#traffic' + 1)).text("There are currently road closures.");
            };
            $(('#traffic' + 2)).text('The current speed is' + data.flowSegmentData.currentSpeed + ' mph.');
            $(('#traffic' + 3)).text('The Free Flow Speed (Average driver speed with no traffic) is ' + data.flowSegmentData.freeFlowSpeed + ' mph.');


            $('#current-traffic').append($('<div>').addClass('row traffic').attr('id', 'traffic1').text("There are currently no road closures."));
            $('#current-traffic').append($('<div>').addClass('row traffic').attr('id', 'traffic1')).text("There are currently road closures.");
            $('#current-traffic').append($('<div>').addClass('row traffic').attr('id', 'traffic2')     );
            $('#current-traffic').append($('<div>').addClass('row traffic').attr('id', 'traffic3')     );
        })
        .catch(function (error) {
            console.log(error);
            alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
        });
}
function getTicketMaster(URL) {
    fetch(URL, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log('TicketMaster API fetch below');
            console.log(data);
            console.log('TicketMaster API fetch above');
            todayEvents = data._embedded.events['0'].name;
            for (i = 0; i < data._embedded.events.length; i++){
                $('#live-events').append($('<a>').addClass('row events').attr( {id: 'events' + i, href: data._embedded.events[i].url, target: '_blank'} ).text(data._embedded.events[i].name));
                $('#live-events').append($('<br>'));
            }            
        })
        .catch(function (error) {
            console.log(error);
            alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
        });
}
function getnews(newsApi) {
    fetch(newsApi, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow'
    })
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log('News API fetch below');
            console.log(data);
            console.log('News API fetch above');
            var news = data.results['0'].title;
            for(var i = 0; i < data.results.length-1; i++){
                // console.log(data.results[i].title)
                $(('#media' + i)).text(data.results[i].title);
            }
            
        })
        .catch(function (error) {
            console.log(error);
            alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
        });
    }


function constructHeader() {
    $('#header').append($('<div>').addClass('row').attr('id', 'current-day'));
    $('#header').append($('<div>').addClass('row').attr('id', 'radio-stream'));
}

function constructSearchBox() {
    $('#main').append($('<div>').addClass('container is-flex is-justify-content-center').attr('id', 'search-container'));//Container
    $('#search-container').append($('<div>').addClass('container is-flex is-justify-content-center is-4').attr('id', 'search-group'));//Container
    $('#search-group').append($('<span>').addClass('').attr('id', 'search-title').text('Search:'));//Left orientation
    $('#search-group').append($('<input>').addClass('').attr({ id: 'search-input', type: 'text', placeholder: 'Search for a city' }));//Input text box
    $('#search-group').append($('<button>').addClass('').attr('id', 'search-button').text('Search'));//Search button
}

function constructMain() {
    $('#main').addClass('container-fluid is-widescreen');
    $('#main').append($('<div>').addClass('columns is-flex-wrap-wrap is-flex-grow-1 is-justify-content-space-evenly is-gapless is-1 is-Mobile').attr('id', 'all-container'));

    $('#all-container').append($('<div>').addClass('column box').attr('id', 'weather'));
    $('#weather').append($('<div>').addClass('row has-text-centered').attr('id', 'weather-title').text('Weather'));
    $('#all-container').append($('<div>').addClass('column box').attr('id', 'live-events'));
    $('#live-events').append($('<div>').addClass('row has-text-centered').attr('id', 'events-title').text('Events'));
    $('#all-container').append($('<div>').addClass('column box').attr('id', 'current-traffic'));
    $('#current-traffic').append($('<div>').addClass('row has-text-centered').attr('id', 'traffic-title').text('Traffic'));
    for (var i = 0; i < fetchedList; i++) {
        $('#current-traffic').append($('<div>').addClass('row traffic').attr('id', 'traffic' + i));
    }
    $('#all-container').append($('<div>').addClass('column box').attr('id', 'media-reports'));
    $('#media-reports').append($('<div>').addClass('row has-text-centered').attr('id', 'media-title').text('Media'));
    for (var i = 0; i < fetchedList; i++) {
        $('#media-reports').append($('<a>').addClass('row media').attr('id', 'media' + i));
        $('#media-reports').append($('<br>'));
    }
    $('#all-container').append($('<div>').addClass('box').attr('id', 'search-history'));
    $('#search-history').append($('<div>').addClass('row has-text-centered').attr('id', 'history-title').text('Search History'));
    for (var i = 0; i < fetchedList; i++) {
        $('#search-history').append($('<div>').addClass('row history').attr('id', 'history' + i));
    }
}

function constructFooter() {
    $('#footer').addClass('is-flex is-justify-content-center').append($('<div>').attr('id', 'map'));
}




//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW


//Activate upon page load/reload
displayTime();
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













