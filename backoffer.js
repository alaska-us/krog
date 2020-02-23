
if (!isIE()){
  window.history.pushState({page: 1}, "", "");
}

window.addEventListener('popstate', function(event) {

  if(event){
  	//use getUrlVars function from main.js
	var b = getUrlVars()['b'];
	var campId = getUrlVars()['campid'];



	var parameters = ['campid','creative','adid','spotid','reqid'];


	//store the values into an array
	var allGivenParams = {};

	for(i=0;i<parameters.length;i++){

		var paramName = parameters[i];
		var paramValue = getUrlVars()[parameters[i]]

		if(paramValue !== undefined){

			allGivenParams[paramName] = paramValue;

		}

	}


	checkBandRedirect(b, allGivenParams);

  }

});

function checkBandRedirect(b, allGivenParams){

	if(b == 'yes'){

		var urlAppend = '';


		for (var key in allGivenParams) {
      		if (allGivenParams.hasOwnProperty(key)) {
      			urlAppend += '&' + key + '=' + allGivenParams[key];
      		}
    	}


		if((b == "yes")||(b == undefined)||(b > 9 )){
			b = 0;
		}

		var possibleUrls=new Array()
		possibleUrls[0]="http://track.trkvluum.com/c94a6550-1f3d-4ad6-b3dd-fa5e9bdaad51";
		possibleUrls[1]="http://track.trkvluum.com/b65f0ac9-b356-4731-99a0-9f0fbffb7d72";
		possibleUrls[2]="http://track.trkvluum.com/7efaba2d-4806-48b5-bb86-1f394b09f5a4";
		possibleUrls[3]="http://track.trkvluum.com/ad6ac731-b973-4827-a8ad-af84c8314e0e";
		possibleUrls[4]="http://track.trkvluum.com/953410f3-45f3-4759-9f58-e9830380cc72";
		possibleUrls[5]="http://track.trkvluum.com/03179c18-231c-46d7-9c74-99b73337fffa";
		possibleUrls[6]="http://track.trkvluum.com/5e8855a6-5bc9-47b9-8980-c5172b532ea8";
		possibleUrls[7]="http://track.trkvluum.com/5f116f31-6330-4849-9288-530f21ee6902";
		possibleUrls[8]="http://track.trkvluum.com/c3679617-834d-45db-a608-45a383395ef0";
		possibleUrls[9]="http://track.trkvluum.com/e8ea9852-9d1e-48f9-ba90-829f701b0e23";

		b++;

		var finalUrl = possibleUrls[b-1] + '?b=' + b;

		finalUrl += urlAppend;

		redirectTo(finalUrl);

  } else if ((b!==undefined)&&(b.startsWith("vlm"))){

    var finalUrl = "http://track.afcpatrk.com/click";
    var cep_param = getUrlVars()['cep'];
    var param_to_add = "";
    if(cep_param!==undefined){
      param_to_add += '?cep=' + cep_param;
    }

    if(b !== "vlm"){
      finalUrl += '/' + b.replace('vlm','');
    }

    finalUrl += param_to_add;

    redirectTo(finalUrl);

  } else {
    window.history.back();
  }

}

function redirectTo(url){
	window.location = url;
}

function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
