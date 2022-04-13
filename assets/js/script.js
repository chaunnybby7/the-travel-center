
var fetchedList = 20;
var city;
var lat;
var lon;
// var for the first api
var diastersApi ='https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=a7e97ca14eb00aee24f5e5ef8502534a'
// var for geocode
var geocode ='http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=a7e97ca14eb00aee24f5e5ef8502534a';
// var for the second api
var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=HFGYWE0osHys0ANa0ezvm1g9uNqmWxpM&locale=*&startDateTime=2022-04-11T00:01:00Z&endDateTime=2022-04-11T23:59:00Z&city=' + city;
// var for third api
var tomtomApi = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=' + lat + ' ' + lon + '&unit=MPH&openLr=false&key=9SVo7CMwOXDtJdDxTNsfWfWgimsIrLTU';
// var for fourth api
var newsApi = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=GBXG5EPQF9rQORZISKtLpJ7DKJO9ylEm'
// var for fifth api






//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW







//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//DEFINE THE PRIMARY FUNCTION BELOW



function devinsTempFunction() {

// Fecth for first api (natural disasters) (https://www.programmableweb.com/api/foreca-weather-warnings-feed-rest-api)
// First call we should get latitude and longitude (any call that requires lat and long should be called within first fetch)

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
 $('searchGroup').append($('<p>').addClass('control is-expanded').attr('id', 'searchText'));
 $('searchText').append($('<input>').addClass('input').type('text').attr('id', 'search').placeholder('Search for a city'));
$('searchGroup').append($('<p>').addClass('control'));
 $('searchGroup').append($('<a>').addClass("button is-info").attr('id', "searchbtn").text('Search'));


}





function brennansTempFunction() {



}







// devinsTempFunction();
// yilinsTempFunction();
// davidsTempFunction();
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


















// TO BE ORGANIZED LATER



//   // You can also chain methods onto new lines to keep code clean
//   var totalTdEl = $('<td>').addClass('p-2').text('$' + totalEarnings);

//   var deleteProjectBtn = $('<td>')
//     .addClass('p-2 delete-project-btn text-center')
//     .text('X');

//   // By listing each `<td>` variable as an argument, each one will be appended in that order
//   projectRowEl.append(
//     projectNameTdEl,
//     projectTypeTdEl,
//     rateTdEl,
//     dueDateTdEl,
//     daysLeftTdEl,
//     totalTdEl,
//     deleteProjectBtn
//   );

//   projectDisplayEl.append(projectRowEl);
//   //modal (hide)
//   projectModalEl.modal('hide');
// }

// function calculateTotalEarnings(rate, days) {
//   var dailyTotal = rate * 8;
//   var total = dailyTotal * days;
//   return total;
// }

// function handleDeleteProject(event) {
//   console.log(event.target);
//   var btnClicked = $(event.target);
//   btnClicked.parent('tr').remove();
// }

// // handle project form submission
// function handleProjectFormSubmit(event) {
//   event.preventDefault();

//   var projectName = projectNameInputEl.val().trim();
//   var projectType = projectTypeInputEl.val().trim();
//   var hourlyRate = hourlyRateInputEl.val().trim();
//   var dueDate = dueDateInputEl.val().trim();

//   printProjectData(projectName, projectType, hourlyRate, dueDate);

//   projectFormEl[0].reset();
// }

// projectFormEl.on('submit', handleProjectFormSubmit);
// projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
// dueDateInputEl.datepicker({ minDate: 1 });

// setInterval(displayTime, 1000);
