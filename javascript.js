// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCkPLKf5tE4yQcJolyNU04uiJfNX6cyDG8",
   authDomain: "test-empl-database.firebaseapp.com",
   databaseURL: "https://test-empl-database.firebaseio.com",
   storageBucket: "test-empl-database.appspot.com",
   messagingSenderId: "56084223550"
 };

firebase.initializeApp(config);

var database = firebase.database();

var name = "joe";
var role = "prez";



$("body").on("click", function(){
	// Save the new price in Firebase
    database.ref().set({
      name: name,
      role: role
    });
});

$('#submit-data').on('click', function(event) {
	event.preventDefault();
	console.log('submit button has been clicked');
	var nameInput = $('#name').val().trim();
	var roleInput = $('#role').val().trim();
	var startInput = $('#start-date').val().trim();
	var rateInput = $('#monthly-rate').val().trim();

	console.log(nameInput + '' + roleInput + '' + startInput + '' + rateInput);

	$('tbody').append('<tr>').append('<td>' + nameInput + '</td>').append('<td>' + roleInput + '</td>').append('<td>' + startInput + '</td>').append('<td>' + 'placeholder' + '</td>').append('<td>' + rateInput + '</td>').append('<td>' + 'placeholder' + '</td>');

});

