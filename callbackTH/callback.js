function sayHello(){
	console.log("Hello");
}

function executeCallback( callback ){
	callback();
}

// executeCallback(sayHello);


// inline function and anonymous function
// executeCallback(function() {
// 	console.log("Bye");
// })

// arrow function
// executeCallback(() => console.log("hello"));



function log() {
  console.log("Hello World!");
}

// functionRunner( function(){console.log("Hello World!")} );



const surpriseSection = document.getElementById("surprise");

function showSurprise() {
	surpriseSection.textContent = "Surprise";
}

const randomTime = Math.random() * 4000;

// setTimeout(showSurprise, randomTime);
// setTimeout( function(){ surpriseSection.textContent = "Surprise" }, randomTime);
// setTimeout( () => surpriseSection.textContent = "Surprise", randomTime);



const clockSection = document.getElementById("clock");

function getTime(){
	function pad(number){
		if (number < 10) {
			return "0" + number;
		} else {
			return number;
		}
	}

	const now = new Date();
	const hh = pad(now.getHours());
	const mm = pad(now.getMinutes());
	const ss = pad(now.getSeconds());

	return `${hh}:${mm}:${ss}`;
}

function tickClock() {
	clockSection.textContent = getTime();
}

// tickClock();
// setInterval(tickClock, 1000);











const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

function makeRed(element) {
	element.style.backgroundColor = "red";
}

function makeGreen(element) {
	element.style.backgroundColor = "green";
}

function makeBlue(element) {
	element.style.backgroundColor = "blue";
}

function addStyleToElement(element, callback){
	callback(element);
}

// addStyleToElement(div1, makeRed);
// addStyleToElement(div2, makeGreen);
// addStyleToElement(div3, makeBlue);







const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


// element.addEventListener(eventType, callback);
// eventType: click, mouse 
// event.target: element
// function(event) { // do something }
// or
// event => { // do something}


const focusHandler = event => {
	event.target.className = "highlight" // add name
}
const blurHandler = event => {
	event.target.className = "" // clear name
}

nameInput.addEventListener("focus", focusHandler);
nameInput.addEventListener("blur", blurHandler);

messageTextArea.addEventListener("focus", focusHandler);
messageTextArea.addEventListener("blur", blurHandler);













