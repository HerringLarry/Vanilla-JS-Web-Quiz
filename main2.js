var allQuestions = [
{
	description: "What is Tia's favorite color?",
	choices:["Red","Blue","None","Green"],
	correctChoiceIndex: 3

},
{
	description: "What is Tia's new favorite movie?",
	choices:["American Honey","Good Time","Casablanca","Stalker"],
	correctChoiceIndex: 0
},
{
	description: "What is Tia's favorite activity?",
	choices:["Swimming","Relaxing","Baking","Boyfriend"],
	correctChoiceIndex: 2
}
];

var currentQuestion = 0;
var totalCorrect = 0;
var start = document.getElementById("start")
var b1 = document.getElemen

start.onclick = function(){
	start.parentNode.removeChild(start);
	askQuestion();
}

function askQuestion(){
	var newHeader = document.createElement('h3');
	var currHeader = document.getElementById('Q');
	newHeader.innerHTML = "<h3 id = 'Q'>" + allQuestions[currentQuestion].description + "</h3";
	currHeader.parentNode.replaceChild(newHeader,currHeader);

	for(var x = 0; x < 4; x++){
		buttonCreation(x);
	}

}

function buttonCreation(i){
	var butt = document.getElementById(String(i));
	if(currentQuestion==0){
		butt.addEventListener('click',function(){
			buttonFunctionality(i);
		});
	}
	butt.innerHTML = '<button id = ' + i + "> " + allQuestions[currentQuestion].choices[i] + '</button>';
}

function buttonFunctionality(i){
	
	if(i == allQuestions[currentQuestion].correctChoiceIndex){
		totalCorrect++;
		currentQuestion++;
		if(isDone()){
			askQuestion();
		}
	}
	else{
		currentQuestion++;
		if(isDone()){
			askQuestion();
		}
	}
}


function isDone(){
	if(currentQuestion > 2){
		document.body.innerHTML = '<h2> You got ' + totalCorrect + ' out of 3 questions right! </h2>'
		return false;
	}
	else{
		return true;
	}
}