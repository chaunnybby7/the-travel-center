

//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW







//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW

// Fecth for first api (natural disasters) (https://www.programmableweb.com/api/foreca-weather-warnings-feed-rest-api)
// First call we should get latitude and longitude (any call that requires lat and long should be called within first fetch)

// fetch second api (set global variables) var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'

// fetch third api for map (tomtom) (possibly) https://developer.tomtom.com/products/traffic-api

// fetch fourth api for media (national news agency) (NewApi.org) https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=588c1b13240446baa7e3517d3a8afdaa key=588c1b13240446baa7e3517d3a8afdaa

// Radio station api for the bottom row (rapidApi) (possibly) = 

// Using Bulma for formatting 





//Create a container
$('main').append($('<div>').addClass('column is-one-third box').text('hello'));


// then have ~3 rows
//  within first row: 2 columns. 
//      First column is the map (possibly use html modal)
//      second column is the nav bar (possibly use html modal)
// CODE BETWEEN THE LINES

// within second row: 5 columns (dynamically create from javascript)
    // First:searchbox and search history.
    // Second column: natural disaster
    // third column is live events and gatherings.
    // Fourth is current traffic conditions.
    // fifth is media
// CODE BETWEEN THE LINES

// Third row
    // One column for radio (possibly use html modal)
// CODE BETWEEN THE LINES













//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW









//LISTEN AND TAKE ACTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW





















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
