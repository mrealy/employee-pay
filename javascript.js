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