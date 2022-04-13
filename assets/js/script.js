

var today = dayjs().format();
var apiKeyLatLon = '1371c97168ddd23b4146579d8cbe687b';//BL key
var apiKeyGeoCode 
var fetchedList = 20;
var city;
var cityConvertURL = encodeURIComponent(city.trim());
var lat;
var lon;


var weatherKey='a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var weatherAPIURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityConvertURL + '&units=imperial&appid=' + weatherKey;//Devin
var weatherApi ='https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=' + weatherKey;

var geocodeKey = 'a7e97ca14eb00aee24f5e5ef8502534a';//Devin
var geocode ='http://api.openweathermap.org/geo/1.0/direct?q=' + cityConvertURL + '&limit=5&appid=' + geocodeKey;

var ticketmasterKey='HFGYWE0osHys0ANa0ezvm1g9uNqmWxpM';
var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' + ticketmasterKey + '&locale=*&startDateTime=' + today + '&city=' + cityConvertURL;

var tomtomKey='9SVo7CMwOXDtJdDxTNsfWfWgimsIrLTU';//Devin
var tomtomApi = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=' + lat + '&' + lon + '&unit=MPH&openLr=false&key='+ tomtomKey;

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


//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//DEFINE THE PRIMARY FUNCTION BELOW



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

// fetch third api for map (tomtom) (possibly) https://developer.tomtom.com/products/traffic-api
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
//  npm install node-fetch


const phq = import('predicthq');

// Initialises PredictHQ client library using your access token
// Note: You can find/create your access token at https://control.predicthq.com/clients
const client = new phq.Client({access_token: 'o-ngmg3a614oMJibCQBVQFnHvVnhPQIHOR3CGnrt', fetch: nodeFetch});

// Use the events endpoint
const phqEvents = client.events;

// Basic event search without any parameters.
// phqEvents.search() 
//     .then(
//         res => {
//             result = res.toDict();
//             console.log(`Total number of events: ${res.count}`);
//             console.log(`Number of events returned in this request: ${result.length}`);

//             for (const event of res.toArray()) {

//                 // See https://developer.predicthq.com/resources/events/#fields for list of all event fields.
//                 console.log(`Event title: ${event.title}`);
//                 console.log(`Category: ${event.category}`);
//                 console.log('Entities:');
//                 (event.entities || []).forEach(ent => {
//                     console.log(`(${ent.type}) ${ent.name}`)
//                 });
//                 console.log();

//             }
//         }
//         ).catch(err => console.error(err));


// phqEvents.search()





function yilinsTempFunction() {

// Using Bulma for formatting


// then have ~3 rows
//  within first row: 2 columns. 
//      First column is the map (possibly use html modal)
//      second column is the nav bar (possibly use html modal)
// CODE BETWEEN THE LINES

// within second row: 5 columns (dynamically create from javascript)

// On the far left side of Main section, First column:searchbox and search history.
//Create a container for searched box


$('main').append($('<div>').addClass('column is-vcentered is-12').attr('id', 'search-history'));
//lets do search history in a for loop to create the list of divs for the history in storage
// count of 10 history lines?
for (var i = 0; i < fetchedList; i++) {
    $('#search-history').append($('<div>').addClass('row').text('asdf'));
}
//end of for loop


//flex box spaced evenly option in bulma??
$('main').append($('<div>').addClass('column is-one-fifth box is-pulled-left').attr('id', 'natural-disasters'));
//lets do natural disasters in a for loop to create the list of divs for the parsed variables
// count of 10 variable calls?
$('#natural-disasters').append($('<div>').addClass('row').text());
//end of for loop


$('main').append($('<div>').addClass('column is-one-fifth box is-pulled-left').attr('id', 'live-events'));
//lets do events in a for loop to create the list of divs for the parsed variables
// count of 10 variable calls?
$('#live-events').append($('<div>').addClass('row').text());
//end of for loop


$('main').append($('<div>').addClass('column is-one-fifth box is-pulled-left').attr('id', 'current-traffic'));
//lets do traffic in a for loop to create the list of divs for the parsed variables
// count of 10 variable calls?
$('#current-traffic').append($('<div>').addClass('row').text());
//end of for loop


$('main').append($('<div>').addClass('column is-one-fifth box is-pulled-left').attr('id', 'media-reports'));
//lets do media in a for loop to create the list of divs for the parsed variables
// count of 10 variable calls?
$('#media-reports').append($('<div>').addClass('row').text());
//end of for loop



//radio inside footer
$('main').append($('<div>').addClass('row box is-pulled-left').attr('id', 'radio-stream'));




// Third row
    // One column for radio (possibly use html modal)
// CODE BETWEEN THE LINES

}



function davidsTempFunction() {
// $('main').append($('<div>').addClass('<form>').attr('id', 'search-form'));
// $('search-form').append($('<input>').addClass('type').attr('id', 'search-form').text('Entern An City'));
// $('search-form').append($('<button>').addClass('btn').attr('id', 'search-btn').text('Search'));
 $('main').append($('<div>').addClass('<field is-grouped>').attr('id', 'searchGroup'));
 $('searchGroup').append($('<p>').addClass('control is-expanded').attr('id', 'searchText').text('Search:'));
 $('searchText').append($('<input>').addClass('input').attr({id: 'search', type: 'text', placeholder: 'Search for a city'}));
$('searchGroup').append($('<p>').addClass('control'));
 $('searchGroup').append($('<a>').addClass("button is-info").attr('id', "searchbtn").text('Search'));
$('main').append($('<input>').addClass('input is-primary').attr({id: 'search-city', placeholder: 'Search For a city'}))
$('main').append($('<div>').addClass('button').attr('id', 'search-btn').text("Search"));
$('#search-btn').on('click', davidsTempFunction)
var searchCt = [];

function find(c) {
    for (var i = 0; i < searchCt.length; i++) {
        if(c.toUpperCase() == searchCt[i]){
            return -1;
        }
    }
    return 1;
}
function displayNews(event){
    event.preventDefault();
    if($('#search-city').val().trim()!==""){
        city=$('#search-city').val().trim();
        currentNews(city);
    }
        
    
}

}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||





function brennansTempFunction() {

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





                //PIGGY BACK FUNCTION
                piggyBackFunctionHere(addAnInputIfNeeded);





            })
            .catch(function (error) {
                console.log(error);
                alert('\n\nError:\n\nPlease check your spelling.\n\nIf this problem persists consult the console log for more information.')
            });
    }

    //DEFINE THE PIGGY BACK CALLED WITHIN THE ABOVE RESPONSE
    function piggyBackFunctionHere(URL) {
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
            })
            .catch(function (error) {
                console.log(error);
                alert('\n\nError:\n\nWe experienced an error when retrieving data\n\nPlease check your connection.')
            });
    }
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||






// devinsTempFunction();
// yilinsTempFunction();
 davidsTempFunction();
// brennansTempFunction();



//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW









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













