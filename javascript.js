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

// adding some moments magic
	// var randomDate = "03/11/2016";
    var convertedDate = moment(new Date(startInput));

    var months = moment(convertedDate).diff(moment(), "months");

    var monthsWorked = Math.abs(months);

    var totalBilled = monthsWorked * rateInput;

	$('tbody').append('<tr><td>' + nameInput + '</td>'+'<td>' + roleInput + '</td>'+'<td>' + startInput + '</td>'+'<td>' + monthsWorked + '</td>'+'<td>' + rateInput + '</td>'+'<td>' + totalBilled + '</td></tr>');

	clearInputs();
});

function clearInputs() {
	$('#name').val('');
	$('#role').val('');
	$('#start-date').val('');
	$('#monthly-rate').val('');
}