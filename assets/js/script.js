

//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW



// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    return rightNow;
}


//SET A TIMER
function setTimer(timeInSecs, timerDomElement) {
    timerInterval = setInterval(function () {
        timeInSecs--;
        minutesLeft = Math.floor(timeInSecs / 60);
        secondsRemainder = (timeInSecs - (minutesLeft * 60));
        timerDomElement = " -- " + minutesLeft + " mins " + secondsRemainder + " seconds left!";
        if (timeInSecs === 0) {
            clearInterval(timerInterval);
            timerDomElement = "Out of time...";
        }
        return timeInSecs;
    }, 1000);
}

//Text array assigned to DOM element array within container
function textArrToExistingDOMArr(container, arrDomElements, arrOfText) {
    const forceArray = (v) => [].concat(v).map(name => name);
    let arrDomElements = forceArray(arrDomElements);
    let arrOfText = forceArray(arrOfText);
    if (arrDomElements.length > arrOfText.length) {
        for (var i = 0; i < arrOfText.length; i++) {
            container.arrDomElements.at(i).textContent = arrOfText.at(i);
        }
    } else {
        for (var i = 0; i < arrDomElements.length; i++) {
            container.arrDomElements.at(i).textContent = arrOfText.at(i);
        }
    }
    return console.log('Text from array added to ' + i + ' DOM elements');
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
    } else if (typeof storedarray === 'object') {
        var combinedArray = storedArray.push(addData);
        var backToStorage = JSON.stringify(combinedArray);
    } else {
        var backToStorage = JSON.stringify(forceArray(addData));
    }
    localStorage.setItem(storedDataName, backToStorage);
    return console.log('Stored ' + storedDataName + ' as: ' + backToStorage)
}



//Create DOM elements from array; Append them to a container; Add text to to them from an array
function createAppendAndTextByArray(containerToFill, createdTagName, textArrToAppend) {
    if (textArrToAppend.length > 0) {
        let containerToFill;
        let createdTagName;
        let textArrToAppend;
        for (var i = 0; i < textArrToAppend.length; i++) {
            createdTagName = document.createElement("li");
            createdTagName.textContent = textArrToAppend.at(i);
            container.appendChild(textArrToAppend.at(i));
        }
        return console.log('Within ' + container + ' ' + textArrToAppend.length + ' ' + createdTagName + '\'s of text were created');
    }
    return console.log('Your array was empty');
}


//Randomw selection within an array
function getRandomArrIndex(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return i;
}


//Sort an array of numbers
function sortNumArray(numArray) {
    var swap = true;
    var save1st;
    var compare1;
    var compare2;
    for (var j = 0; j < numArray.length; j++) {
        for (var i = 0; i < numArray.length; i++) {
            swap = false;
            compare1 = numArray[i];
            compare2 = numArray[(i + 1)];
            if (compare1 > compare2) {
                save1st = compare1;
                numArray[i] = compare2;
                numArray[i + 1] = save1st;
                swap = true;
            }
        }
    }
    return numArray;
}



//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW

// Fecth for first api (natural disasters) (https://www.programmableweb.com/api/foreca-weather-warnings-feed-rest-api)
// First call we should get latitude and longitude (any call that requires lat and long should be called within first fetch)

// fetch second api (set global variables) var ticketmasterApi = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'

// fetch third api for map (tomtom) (possibly) https://developer.tomtom.com/products/traffic-api

// fetch fourth api for media (national news agency) (NewApi.org) https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=588c1b13240446baa7e3517d3a8afdaa key=588c1b13240446baa7e3517d3a8afdaa

// Radio station api for the bottom row (rapidApi) (possibly) = 

// Using TAILWIND for formatting 
//Create a container

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
