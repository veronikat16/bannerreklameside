const quizQuestions = [
    {
q: "Hvad er samkørsel?", //første plads i arrayet, plads 0 i console.log
a:["Når to biler støder sammen", "Når to biler kører parallelt med hinanden på motervejen", "Når flere personer pendler til og fra arbejde i den samme bil", "Når der sidder for mange personer i den samme bil"],
correct: "Når flere personer pendler til og fra arbejde i den samme bil",
point: 0
}, 
{ //anden plads i arrayet, plads 1
q: "Hvad hjælper samkørsel ikke med?",
a: ["At udlede mindre CO2", "At få benzin priserne ned", "At mindske myldretid", "At styrkefællesskabet mellem kolleger"],
correct: "At få benzin priserne ned",
point: 0
},
{//tredje plads i arrayet, plads 2
    q: "Hvor mange personer kan køre sammen i en normal bil?",
    a: ["2", "3", "5","7"],
    correct: "5",
    point: 0
}
];

//quizQuestions[0].point = 1;
//console.log(quizQuestions[0].point);


var count = 0;
var qElement = document.querySelector("h1");
var optionsElement = document.querySelector(".options")

function runProgram(){

qElement.innerHTML = quizQuestions[count].q

var aElements = "<form>" //starteb af vores form

quizQuestions[count].a.forEach(answer => {
aElements += `<input type="radio" name="answer" value="`+ answer +`"><label for="male">`+ answer + `</label><br></br>`
})

optionsElement.innerHTML = aElements + `<br><input type="submit" value="Svar" id="svar"> </form>`

checkAnswer();
} // afslutning af vores form med knap

function checkAnswer(){

answerElement = document.querySelector("#svar")

answerElement.addEventListener("click", function(e){

e.preventDefault();

var answer = document.querySelector(`input[name="answer"]:checked`).value

if(answer == quizQuestions[count].correct){
    quizQuestions[count].point = 1;
}
count = count +1;

if(quizQuestions.length == count){
    status();
}else{
    runProgram();
}

})

}

function status(){

qElement.innerHTML = "Point status"

optionsElement.innerHTML = "";

var samletPoint = 0;

quizQuestions.forEach(answer => {
    samletPoint += answer.point
})
optionsElement.innerHTML = " Du fik " + samletPoint + " ud af " + quizQuestions.length + " rigtige "
}

runProgram();