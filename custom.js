$(document).ready(function () {

	var i = getUrlVars()['i'];

	if((i== undefined)||(i>5)){
		i = randomNumber(1,5);
	}

	appendImage(i,'../images/', 'gif');

	$(".step-container").on('click', '.btn-next', function () {

		hideCurShowNext($(this));

		resetCheckboxesOfPreviousStep();

		if ( $( this ).hasClass( "show-pagination" ) ) {
			$('.pagination-numbers').show();
		} else if ($( this ).hasClass( "show-next-pagination" )) {
			nextNumberActive();
		} else if ($( this ).hasClass( "hide-pagination" )){
			$('.pagination-numbers').hide();
		}
	});

	$(".checks").on('click', 'input[type=checkbox]', function () {

		CheckboxesAllowed(3, $( this ));

	});

		$('a').addClass('o-link');

});
