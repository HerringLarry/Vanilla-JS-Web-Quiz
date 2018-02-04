

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


var currQuestion = 0;
var correctAnswers = 0;
var currQHTML;
var currAnswersHTML = [];


var start = document.getElementById("start");

//Kicks off quiz
start.addEventListener("click",function() {
 	currQHTML = document.createElement('h3');
 	for(var x = 0; x < allQuestions[currQuestion].choices.length; x++){
 		currAnswersHTML.push(document.createElement('button'))
 		currAnswersHTML[x].innerHTML = "<button>" + allQuestions[currQuestion].choices[x] + "</button> \n";
 	}
 	currQHTML.innerHTML = "<h3 id = \"Q\">" + allQuestions[currQuestion].description + "</h3>";

 	start.parentNode.replaceChild(currQHTML,start);
 	for(var x = 0; x < allQuestions[currQuestion].choices.length; x++){
 		document.body.appendChild(currAnswersHTML[x]);
 	}
 	currQuestion++;
 	correctAnswers++;
 	getAnswer()

 });

function Question(description, choices, correctChoiceIndex) {
    this.description = description;
    this.choices = choices;
    this.correctChoiceIndex = correctChoiceIndex;
}

function askQuestion() {
	var nextQ = document.createElement('h1');
	nextQ.innerHtml = "<h1>" + allQuestions[currQuestion].description + "</h1>";
	currQ.parentNode.replaceChild(nextQ,currQ);


}
