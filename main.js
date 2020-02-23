
//Functions


//hide current step show next
function hideCurShowNext(cur){
	var parent = $(cur).parents('.step-container');
	parent.hide();
	parent.next('.step-container').show();
}

//pagination, set next li as active
function nextNumberActive(){
	var active = $('li.active.num');
	active.removeClass('active');
	active.next('li').addClass('active');
}

//append image in img tag with class = "appendImg"
function appendImage(i, path, imgType){
	$('.appendImg').attr('src',path + i + '.' + imgType);
}

//generate random number based on min max given
function randomNumber(min, max){
	var number  = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}

//used for backoffer.js too
function getUrlVars(){
   var vars = {};
   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
	function(m,key,value) {
	   vars[key] = value;
	});
	 return vars;
}

//when the user clicks next btn reset checked checkboxes to go to next step
function resetCheckboxesOfPreviousStep(){
		$('input:checkbox:checked').prop('checked', false);
}

//only i checkboxes checked are allowed to be checked
function CheckboxesAllowed(i,el){
	if ($('input[type=checkbox]:checked').length > i) {
		$(el).prop('checked', false);
	} else {
		var allChecked = [];
		allChecked.push(el.val());
	}
}

function showAlertBox(text,time){
	if(time!==undefined){
		if(time == 'yes'){
			alert(text);
		} else {
			setTimeout(function(){ alert(text); }, time*1000);
		}
	}
}
