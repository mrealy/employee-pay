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
