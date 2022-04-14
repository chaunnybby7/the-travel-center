# the-events-center
​
## Description 

We designed an event center to inform users with real-time information on the weather, local events, traffic condition, severe weather conditions such as flood and earthquakes. 


This app can also be used in daily lives for people who needs to commute from/to school or work. 

## User stories
 
 1. The `Severe Weather Conditions` feature for 
 - It informs HTML: New div, Javascript: API Call

 2. The `Traffic` feature would be preferred for commuters. 
 - It informs HTML: New div, Javascript: API Call

 3. The `Local Events` feature 
 - It informs HTML: New div, Javascript: API Call 

 4. The `Media` feature helps users
 - It informs HTML: Organized wireframe, Javascript: Interactive UI



# Purpose of this WebAPI

We wanted to create this WebAPI because we realized that we tend to overlook natural disasters or severe weather conditions in our daily lives.
These are often unpredictable and we will always be vulnerable if we do not pay attention to severe weather conditions and the damages it could cause.

With an app like this, we will be proactive and evacuate immediately and strategically. This can reduce the level of tension in crowds.

- As an event planner, I want to set up a location and let the event run smoothly. 

- As a local residing in high affected zone areas, I want to be be well-prepared if there's an earthquake. 

- As a traveller, I want to eliminate unncessary cancellations on flights and hotels.

- As a commuter, I want to check current weather and traffic conditions before I leave for school or work. 

Did you know? California experiences 10-15 quakes everyday, but most of them are too mild to be felt by humans.
This app will inform users if there are any severe earthquakes and users can check the traffic condition to decide which routes to take so that they could travel safely out of the affected zones. 

That said, media would help users stay in the loop on the affected zones.


# How did we do it?

- We used `fetch()` method to fetch resources asynchrounously from the network. 

For example, the main `<div>` section:

```
function constructMain() {
    $('#main').addClass('container');
    $('#main').append($('<div>').addClass('columns is-flex-wrap-wrap is-flex-grow-1 is-justify-content-space-evenly').attr('id', 'all-container'));

    $('#all-container').append($('<div>').addClass('column is-2').attr('id', 'search-history'));
    $('#search-history').append($('<div>').addClass('row has-text-centered').attr('id', 'history-title').text('Search History'));
    for (var i = 0; i < fetchedList; i++) {
        $('#search-history').append($('<div>').addClass('row').attr('id', 'history' + i).text('asdf'));//parsed variable for text
    }

```



- We used Bulma, Jquery and style.css for the CSS framework.


​
## Installation
​
No installations or downloads are required. 


# Deployed Link (Github)

​* https://kuyadevin.github.io/the-event-center/

* https://github.com/kuyadevin/the-event-center

​
## Functionality 
​
- When searching for a city, the current weather conditions for that city will be displayed and that city will be added to the search history. 
  
- When viewing current weather conditions for the city, the following is displayed:
  * City name 
  * Google map will be displayed on the footer section of HTML 
  * Search History

  
- When viewing the severe weather conditions for the city, the following information is displayed:
  * Date
  * Type of severe weather conditions:
  - Floods and earthquakes

- When viewing the events for the city, the following information is displayed:
* Current events/concerts 

- When viewing the traffic conditions for the city, the following information is displayed:
* Real-time traffic conditions
- Eg: Heavy traffic and accidents

- When viewing the media for the city, the following information is displayed:
* Current news of what's going on in the city


## Demo 

​
```
![img](assets/images/.png)

![gif]()
```
​
​
## Credits
​
* https://github.com/kuyadevin
* https://github.com/Blec333
*​ https://github.com/chaunnybby7
​* https://github.com/nghia314


## Badges

![Top Language](https://img.shields.io/github/languages/top/kuyadevin/the-event-center)


​
## Features

​* Bulma
* HTML
* JQuery
* CSS
* Javascript 
​
* Live Traffic Conditions via Tomtom API
* Live Events via Ticketmaster API
* Severe Weather Alerts to inform users of floods and earthquakes via OpenWeatherAPI
* Current News via NYTimes 
* day.js for current date and time display




## License

  Copyright (c) Devin Nguyen. All rights reserved.
  
  Licensed under the [MIT](LICENSE) license.
​
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
