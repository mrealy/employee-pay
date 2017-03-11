var nameInput = '';
var roleInput = '';
var startInput = '';
var rateInput = '';

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

// var name = "joe";
// var role = "prez";



// $("body").on("click", function(){
// 	// Save the new price in Firebase
//     database.ref().push({
//       name: nameInput,
//       role: roleInput,
//       start: startInput,
//       rate: rateInput
//     });
// });

$('#submit-data').on('click', function(event) {
	event.preventDefault();
	console.log('submit button has been clicked');
	nameInput = $('#name').val().trim();
	roleInput = $('#role').val().trim();
	startInput = $('#start-date').val().trim();
	rateInput = $('#monthly-rate').val().trim();

	// Save the new price in Firebase
    database.ref().push({
      name: nameInput,
      role: roleInput,
      start: startInput,
      rate: rateInput
    });

	console.log(nameInput + '' + roleInput + '' + startInput + '' + rateInput);

	$('tbody').append('<tr>').append('<td>' + nameInput + '</td>').append('<td>' + roleInput + '</td>').append('<td>' + startInput + '</td>').append('<td>' + 'placeholder' + '</td>').append('<td>' + rateInput + '</td>').append('<td>' + 'placeholder' + '</td>');

	clearInputs();
});

function clearInputs() {
	$('#name').val('');
	$('#role').val('');
	$('#start-date').val('');
	$('#monthly-rate').val('');
}