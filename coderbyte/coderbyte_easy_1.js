// ARRAY.includes(A)
// STRING.indexOf(I);
// let alph  = "abcdefghijklmnopqrstuvwxyz";
// let alph  = "abcdefghijklmnopqrstuvwxyz";
// let numbs = "0123456789";
// split()
// sort





// #1
function FirstReverse(str) { 
var o = ''
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;

}
// console.log(FirstReverse("cats"));
 

 // #2  *****REDO
// Input:"hello*3"
// Output:"Ifmmp*3"

// Input:"fun times!"
// Output:"gvO Ujnft!"

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let newStr = "";

function LetterChanges(str) { 
	const vowels = ['a','e','i','o','u'];

	for(let i = 0; i < str.length; i++ ){
		var newLetter = "";
//		console.log( alphabet.includes(str[i]) );
		if(alphabet.includes(str[i])){
			// get the position in alphbet 
			let position = alphabet.indexOf(str[i]);
			// console.log(position);

			newLetter += alphabet[position +1];

			if(vowels.includes(newLetter)){
				if(newLetter == "a"){
					newLetter = "A";
				} else if (newLetter == "e") {
					newLetter = "E";
				} else if (newLetter == "i") {
					newLetter = "I";
				} else if (newLetter == "o") {
					newLetter = "O";
				} else {
					newLetter = "U";
				}
			}
		} else { 
			newStr += str[i];
		}

		newStr += newLetter;
	}

	return newStr;
}
  
// console.log(LetterChanges("fun times!"))


// #3 SIMPLE ADDING
function SimpleAdding(num) { 
	total = 0;
	for(let i = 0; i <= num; i++){
		total += i;
	}
  return total; 
}
// console.log(SimpleAdding(5));


// #4 *** DO AGAIN
function SimpleSymbols(str) { 
	let alph  = "abcdefghijklmnopqrstuvwxyz";
	let state = true;
	//console.log(str.length);

	for(let i = 0; i < str.length; i++ ){ // go through and see if it's a letter
		if(alph.indexOf(str[i]) > -1){ //if i is a letter
			// check to see if the letter behind and forward are +'s
			//console.log(str[i-1]=="+" && str[i+1] == "+");
			if(str[i-1]!="+" || str[i+1] != "+"){
			 		//console.log(str[i-1]=="+");
			 		state = false;
			}
		}
	}
	return state;
}

SimpleSymbols("++d+");




// #5
function CheckNums(num1,num2) { 
	// if num1 == num2  -> -1
	if(num1 == num2){
		return -1;
	} else if(num2 > num1){
		return true
	} else {
		return false
	}  	
         
} 
// console.log(CheckNums(3,3));


// #6 ALPHABET SOUP     ***** REPEAT
function AlphabetSoup(str) { 
  // convert the string into an array of characters
  var chars = str.split("");

  // sort the array in alphabetical order
  var sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");         
}


console.log(AlphabetSoup('irfenwdgo'));







// FIRST FACTORIAL
function FirstFactorial(num) { 
let factorial = 1;
  // code goes here 
  for(i=1; i < num + 1; i++){
       factorial = factorial * i;
  }
  return factorial;         
}
// console.log(FirstFactorial(5));