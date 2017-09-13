// #11 https://coderbyte.com/language/Simple%20Mode
// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 
// MODE

function SimpleMode(arr) { 
	var highestCount = 0;
	var winningNumber;
	// loop
	// compare the first key to the rest
	for(let i = 0; i < arr.length; i++){
		var currentCount = 0;
	// if match

		for(let k = 0; k < arr.length; k++){
			if( k == i ){ continue; }

			if( arr[i] == arr[k]){
				currentCount++;
			}
		// add to total and compare to current high
		}

		if(currentCount > highestCount){
			highestCount = currentCount;
			winningNumber = arr[i];
		}
	}
  	
  	if(highestCount == 0){
  		return -1;
  	}
  	return winningNumber; 
         
}

// SimpleMode([1,2,3,100]);






// #12
//Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 
// Sample Test Cases
// Input:"Hello" & num = 4
// Output:"Lipps"

// Input:"abc" & num = 0
// Output:"abc"


function CaesarCipher(str,num) { 
	let alph = "abcdefghijklmnopqrstuvwxyz";
	let alphArr = alph.split("");
	var newArr = [];	
	var newStr = "";

	let arr = str.split("");
	for( let i = 0; i < arr.length; i++){
		var uppercase = false;
		var letter;

		// check for special characters
		if(alph.indexOf(arr[i].toLowerCase()) < 0) {
			newArr.push(arr[i]);
			continue;
		}
		//  if lower or upper case
		if(arr[i] == arr[i].toUpperCase()) {
			uppercase = true;
		}
		var newPosition = alph.indexOf(arr[i].toLowerCase()) + 2;
		if(newPosition > 25){
			newPosition = newPosition - 25;
		}

		if(uppercase){
			newArr.push(alphArr[newPosition].toUpperCase());
		} else {
			newArr.push(alphArr[newPosition]);
		}
		// if past z 
	}
		newStr = newArr.join("");
		//console.log(newStr);
		return newStr;

}


console.log(CaesarCipher("Caesar Cipher", 2));












