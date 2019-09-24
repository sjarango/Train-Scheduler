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

// database.ref().on("value", function (snapshot) {

// });