// replace() match() reverse()



// #11
// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 
// Sample Test Cases
// Input:"after badly"
// Output:"false"

// Input:"Laura sobs"
// Output:"true"


function ABCheck(str) { 
	var check = false;
	// loop through and check for "a"
	arr = str.toLowerCase().split("");
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i] != "a") { continue; }
		if(arr[i + 4] == "b"){
			check = true;
		}
	}
  return check; 
         
}


// ans
// function ABCheck(str) { 
//   return str.match(/[ab](...)[ab]/g) !== null;
// }



//console.log(ABCheck('dladddbkfKa'));



// #12 
//sing the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. 

function VowelCount(str) { 
	var count = 0;
	var vowels = ['a','e','i','o','u'];

	for(let i = 0; i < str.length; i++){
		if(vowels.indexOf(str[i]) >= 0){
			count++;
		}
	}
  // code goes here  
  console.log(count);
  return count; 
         
}
// VowelCount("Argument goes here");

// function VowelCount(str) { 

//   var patt = /[aeiou]/gi;
//   var arr = str.match(patt);
  
//   if (arr == null) {
//     return 0;
//   }
//   else {
//     return arr.length; 
//   }
// }



// function VowelCount(str) { 

//   // code goes here
//   str = str.toLowerCase();
//   var counter = 0;
//   for(x in str) {
//   	if(str[x] == 'a' || str[x] == 'e'|| str[x] == 'i'|| str[x] == 'o'|| str[x] == 'u') {
//       counter++;
//     }
//   }
//   return counter; 
         
// }

// function VowelCount(str) { 
//     return str.match(/[AEIOUaeiou]/g).length;
// }

   
// ***** # 13
https://coderbyte.com/editor/Word%20Count:JavaScript

function WordCount(str) { 
	arr = str.split(" ").length;
  return arr; 
         
}
//console.log(WordCount("the cat adn"));




// ******* 14
// https://coderbyte.com/editor/Palindrome:JavaScript


function Palindrome(str) { 
	var arr = str.split("");
	var backward = [];

	for(let i = arr.length - 1; i >= 0; i--){
		backward.push(arr[i]);
	}
	if(arr.join("") == backward.join("")){
		return true;
	}
  // code goes here  
  return false; 
         
}

//Palindrome('racedcars');

// function Palindrome(str) { 

//   // first we'll get rid of spaces and make the characters 
//   // all lowercase to make it easier to work with
//   var str = str.split(" ").join("").toLowerCase();

//   // we wrote this reverse code in a previous solution
//   var rev = str.split('').reverse().join('');

//   // now it's very easy to check if a string is a palindrome
//   return str === rev;
         
// }





// #15 https://coderbyte.com/information/Arith%20Geo



function ArithGeo(arr) {
	var divi = arr[1] / arr[0];
	var diff = arr[2] - arr[1];

	for(let i = 0; i < arr.length - 1; i++){ 	// check for arth
		if(arr[i] + diff == arr[i+1]) {
			if(i == arr.length - 2) {
				return "Arithmetic"
			}
			continue;
		} else {
			break;
		}
	}

	for(let i = 0; i < arr.length - 1; i++){

		if(arr[i] * divi == arr[i+1]) {
			if(i == arr.length - 2) {
				return "Geometric"
			}
			continue;
		} else {
			break;
		}

	}
	
  return -1; 
         
}



console.log(ArithGeo([2,4,6,8,12]));
































