var firebaseConfig = {
    apiKey: "AIzaSyCK66Vyy4KM4iF7SwaztAFOg-khq9ShbXs",
    authDomain: "fsf-trainsch.firebaseapp.com",
    databaseURL: "https://fsf-trainsch.firebaseio.com",
    projectId: "fsf-trainsch",
    storageBucket: "",
    messagingSenderId: "648986034354",
    appId: "1:648986034354:web:98d4053673c551f94689ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Button for adding Train data
$("#submit").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#first-train-input").val().trim();
    var freq = $("#frequency-input").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: trainName,
        dest: destination,
        startTime: firstTrainTime,
        frequency: freq
    };

    // Uploads local "temporary" object for holding train data
    database.ref().push(newTrain);

    // Logs everything to the console
    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.startTime);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrainTime = childSnapshot.val().startTime;
    var freq = childSnapshot.val().frequency;

    // Train info
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(freq);

    // get start time
    // get frequency of time arrivals
    // get current time
    // get start time, format it to use with moment
    var timeArray = firstTrainTime.split(":");
    var trainTime = moment().hours(timeArray[0]).minutes(timeArray[1]);

    // most distant future between the time right now and the first train time
    var maxMoment = moment.max(moment(), trainTime); 
    var nextArrival;
    var minsAway;

    if (maxMoment === trainTime) {
        nextArrival = trainTime.format("hh:mm A");
        minsAway = trainTime.diff(moment(), "minutes");
    } else {
        var differenceTimes = moment().diff(trainTime, "minutes");
        var remainder = differenceTimes % freq;
        minsAway = freq - remainder;
        nextArrival = moment().add(minsAway, "m").format("hh:mm A");
    }

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(freq),
        $("<td>").text(nextArrival),
        $("<td>").text(minsAway) 
    );

    // Append the new row to the table
    $("#current-time-table > tbody").append(newRow);

});