(function() {


function nextQuestion() {
	//console.log("NextQuestion: " + currentAnswer + currentQuestion.toString());
	alert("Answer to question " + currentQuestion + " submitted. Close dialog and wait for next question.")
	currentQuestion = currentQuestion + 1;
	var type = questiontype[currentQuestion];
	document.getElementById("submitBtn").disabled = true;
	if (type == 1) {
		document.getElementById("compassrose").style.display = "inline";
		document.getElementById("truefalse").style.display = "none";
	}
	else {
		document.getElementById("compassrose").style.display = "none";
		document.getElementById("truefalse").style.display = "inline";
		console.log(svgDoc1);
		if (typeof svgDoc1 === 'undefined') {
			const b = document.getElementById("truefalse");
		b.addEventListener("load",function(){
			//alert("loaded");
			// get the inner DOM of compassrose.svg
			svgDoc1 = b.contentDocument;
			// get the inner element by id
			east = svgDoc1.getElementById("east");
			// add behaviour
			east.addEventListener("mousedown",function(){
					console.log("Inside mousedown east");
					currentAnswer = "east";
					updateColors(east);
			}, false);
			west = svgDoc1.getElementById("west");
			// add behaviour
			west.addEventListener("mousedown",function(){
				currentAnswer = "west";
					updateColors(west);
			}, false);
		}, false);
		}
	}
	const currentQuestionText = document.getElementById("currentQuestion");
	currentQuestionText.innerHTML = "Question " + currentQuestion.toString();
	resetColors();
	if (currentQuestion == 13) {
		document.getElementById("currentQuestion").style.visibility = "hidden";
		document.getElementById("submitBtn").style.visibility = "hidden";
		document.getElementById("compassrose").style.display = "none";
		document.getElementById("truefalse").style.display = "none";
		document.getElementById("submitBtn").disabled = true;
		document.getElementById("endText").innerHTML = "End of quiz. Thanks for Participating!";
	}
	
}

function submitAnswer() {
	console.log("Inside Submit Answer");
	
	if (typeof teamName === 'undefined') {
		alert("You must select a TEAM NAME!");
	}
	if (getCookie(theCookie) {
		console.log("Already Visited");
	}
	else {
		// submit answer to feature service
		
		 var viewURL = "https://services.arcgis.com/lA2FZKuu26Fips7U/ArcGIS/rest/services/SalesChallenge_Q" + currentQuestion.toString() + "/FeatureServer/0/addFeatures";
		console.log(viewURL);
		var xhr = new XMLHttpRequest();
		var features = "features={'attributes':{'team':'" + teamName +"','questions':'" + currentAnswer + currentQuestion.toString() + "'}}";
		console.log("Current Answer: " + currentAnswer);
		var rollbackOnFailure = "rollbackOnFailure=true";
		var f = "f=json";
		var params = [f,features,rollbackOnFailure].join("&");
		xhr.open("POST", viewURL, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() { // Call a function when the state changes.
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			  console.log("Got an response");
			  var response = JSON.parse(xhr.responseText);
			  console.log(response);
			  if (response.error){
					  console.log(JSON.stringify(response.error));
			  } else {
				  if (response){
					console.log(JSON.stringify(response));
				  }
				  else{
					console.log("ERROR");
				  }
			  }
			}
		  };
		xhr.send(params);
		theCookie = "EOYSalesChallenge_Q" + currentQuestion.toString();
		var theResult = setCookie(theCookie,'true',2);
		nextQuestion();
	}
}

function updateColors(currentAnswer) {
    console.log("in updateColors");
	if (typeof teamName === 'undefined') {
		alert("You must select a TEAM NAME before you can select an answer!");
	}
	else {
		document.getElementById("submitBtn").disabled = false;
		southeast.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
		northeast.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
		southwest.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
		northwest.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	
		if (east) {
			east.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
			west.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
		}
		currentAnswer.setAttribute("style", "fill:red;stroke:red;fill-opacity:0.75");
	}
}

function resetColors() {
    console.log("in resetColors");
	southeast.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	northeast.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	southwest.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	northwest.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	
	if (east) {
		east.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
		west.setAttribute("style", "fill:#007ac2;stroke:#007ac2;fill-opacity:0");
	}
	
}
function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var expires = exdate.toUTCString();
    var isIE8 = (document.documentMode !== undefined);
    if (exdays == 0) {
        expires = (isIE8 == true) ? "" : "0";
    }
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+expires);
    document.cookie=c_name + "=" + c_value;
}

 function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//variables
	  var teamName;
	  var currentQuestion = 1;
	  var currentAnswer; 
	  var southwest;
	  var northwest;
	  var southeast;
	  var northeast;
	  var west;
	  var east;
	  var svgDoc;
	  var svgDoc1;
	  var theCookie;
	  var questiontype = [0,1,1,1,1,1,1,1,1,1,1,1,1];
	  var theCookie;
	  
document.addEventListener('DOMContentLoaded', function(event) {
  //the event occurred
	  if (getCookie('visited')) {
		//deleteCookie('visited');
		console.log("visited");
		} else {
			var theResult = setCookie('visited','true',2); //2 days expiration
		    console.log("Cookie: " + theResult);
		}	

	  //document.addEventListener('contextmenu', event => event.preventDefault());
	  document.getElementById("submitBtn").disabled = true;
      // Get team name //
      const selectTN = document.getElementById("select-team-name");
      console.log(selectTN);
      selectTN.addEventListener("change", () => {
        console.log("inside change");
        teamName = selectTN.value;
      });
	   	// It's important to add an load event listener to the object,
	// as it will load the svg doc asynchronously
	const a = document.getElementById("compassrose");
	a.addEventListener("load",function(){
		//alert("loaded");
		// get the inner DOM of compassrose.svg
		svgDoc = a.contentDocument;
		// get the inner element by id
		northeast = svgDoc.getElementById("northeast");
		// add behaviour
		northeast.addEventListener("mousedown",function(){
			    console.log("Inside mousedown northeast");
				currentAnswer = "northeast";
				updateColors(northeast);
		}, false);
		northwest = svgDoc.getElementById("northwest");
		// add behaviour
		northwest.addEventListener("mousedown",function(){
			currentAnswer = "northwest";
				updateColors(northwest);
		}, false);
		southwest = svgDoc.getElementById("southwest");
		// add behaviour
		southwest.addEventListener("mousedown",function(){
			currentAnswer = "southwest";
				updateColors(southwest);
		}, false);
		southeast = svgDoc.getElementById("southeast");
		// add behaviour
		southeast.addEventListener("mousedown",function(){
			currentAnswer = "southeast";
				updateColors(southeast);
		}, false);
	}, false);

	const b = document.getElementById("truefalse");
		b.addEventListener("load",function(){
			//alert("loaded");
			// get the inner DOM of compassrose.svg
			svgDoc1 = b.contentDocument;
			// get the inner element by id
			east = svgDoc1.getElementById("east");
			// add behaviour
			east.addEventListener("mousedown",function(){
					console.log("Inside mousedown east");
					currentAnswer = "east";
					updateColors(east);
			}, false);
			west = svgDoc1.getElementById("west");
			// add behaviour
			west.addEventListener("mousedown",function(){
				currentAnswer = "west";
					updateColors(west);
			}, false);
		}, false);
	
	const submitButton = document.getElementById("submitBtn");
	submitButton.addEventListener("click", function() {
		console.log("Submit Button Click");
		
		theCookie = "EOYSalesChallenge_Q" + currentQuestion.toString();
		if(getCookie(theCookie)) {
			console.log("Cookie Exists, Moving on");
			nextQuestion()
		}
		else {
			console.log("Submit Answer being called");
			submitAnswer();
		}
	});
});
})();

