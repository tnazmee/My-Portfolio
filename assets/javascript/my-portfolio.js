var config = {
    apiKey: "AIzaSyBypLMI8Gjxu6rGmmJHxjRHRLK3ZOnQW-Y",
    authDomain: "tahsin-s-portfolio.firebaseapp.com",
    databaseURL: "https://tahsin-s-portfolio.firebaseio.com",
    projectId: "tahsin-s-portfolio",
    storageBucket: "",
    messagingSenderId: "631117079037",
    appId: "1:631117079037:web:2d59513acd19b63b"
};

firebase.initializeApp(config);
var database = firebase.database();

$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    var contactName = $("#contact-name").val().trim();
    var contactEmail = $("#contact-email").val().trim();
    var contactMsg = $("#contact-message").val().trim();

    var addContact = {
        name: contactName,
        email: contactEmail,
        message: contactMsg,
    };

    database.ref().push(addContact);

    console.log(addContact.name);
    console.log(addContact.email);
    console.log(addContact.message);

    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#contact-message").val("");

    return false;
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var contactName = childSnapshot.val().name;
    var contactEmail = childSnapshot.val().email;
    var contactMsg = childSnapshot.val().message;

    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMsg);
});