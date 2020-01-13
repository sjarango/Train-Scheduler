# Train-Scheduler

## Overview 

    Train scheduling application that uses Firebase to host arrival and departure data. Retrieves and manipulates this information with Moment.js. Provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
 - - - 

## Techonologies
* HTML
* Javascript
* jQuery
* Firebase
* Moment.js

## How it works
* Gets data from Firebase and displays the train name, destination, and frequency (in minutes) in a table under "Current Train Schedule"
* With Moment.js, it calculates the next time for arrival and how many minutes away the train is. This is dependent on the time that the first train arrives and the frequency it arrives. 
* At the bottom of the screen there is an "Add Train" form where the data submited to Firebase

### Room for improvement
* Adding stylish CSS to page
* Security - removing keys from source code
* Have clock with current time on top of the screen
* Updating your "minutes to arrival" and "next train time" text once every minute
* Adding 'update' and 'remove' buttons for each train
* Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then by relation, minutes to arrival).
* Adding authentication for users using Firebase
* Removing "Add Train" form

### Deployed
https://sjarango.github.io/Train-Scheduler/

