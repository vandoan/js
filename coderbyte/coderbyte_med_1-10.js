
// #1 PRIME TIME
function PrimeTime(num) { 
let prime = true;
	for(let i = 2; i < num; i++){
		// check to see if num is divisible from num within
		if(num%i == 0) {
			prime =  false;
		}
	}
	
	//console.log(prime);  
  	return prime; 
}

PrimeTime(18);

   // ----------------------------------


// #2 RUN LENGTH
// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter 
// being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string. 

// Input:"aabbcde"
// Output:"2a2b1c1d1e"

// Input:"wwwbbbw"
// Output:"3w3b1w"

function RunLength(str) { 
	 var i = 0;
	 var output = "";

	 while(i < str.length){
	 	var currentLetter = str[i]; //get the currentLetter
	 	var j = i + 1; // next index
	 	var compressedVersion = [ 1, currentLetter ];
	 	
	 	while(j < str.length){
	 		if(str[j] == currentLetter){ // if next letter = checking letter
	 			compressedVersion[0] += 1;
	 		} else {
	 			break;
	 		}
	 		j++; // next letter
	 	}
		output += compressedVersion.join(''); // join the array and add it to the output
	 	i = j; // set i to where it stopped
	 }

  	//console.log(output);

  	return output; 

}
// RunLength("aaaaaaabbbeiiiiggggg");                                                    
// RunLength("yesssssnomaybe");                                                    

// ----------------------------------

// #3 PRIME MOVER
// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
// Sample Test Cases
// Input:9
// Output:23

// Input:100
// Output:541



function PrimeMover(num) { 
	// if not divisible by 2, 3 5, 
	if( num < 1) { return null }
	if( num == 1) { return 2 }

	var newPrime = 0;
	var currentNumber = 3; // start after 2
	var currentPrime = 3;
	var primeCount = 1;
	var primeNumber = true;

	while(primeCount <= num){
		
		for( let i = 2; i < currentNumber -1; i++){ // 
			primeNumber = true;

			if(currentNumber%i == 0){ // loop through to see if there are any divisibles
				primeNumber = false;
			}
		}
					// console.log(currentNumber);

				
		if(primeNumber == true){ // if not, add to prime count
			primeCount++;
			newPrime = currentNumber;
		}
		currentNumber++; // next number
		// when prime count reaches num, end
	}

	// console.log(newPrime);

  return newPrime; 
         
}
   
PrimeMover(4);

// ----------------------------------
// # 4

function PalindromeTwo(str) { 
	const alph  = "abcdefghijklmnopqrstuvwxyz";
	var pali = false;
	var cleanStr = "";
	var reverseStr = "";
	var str = str.toLowerCase();					

	// lowercase
	str = str.toLowerCase();					
	// turn into array
	var strArray = str.split("");

	// remove spaces and punctuations
	for(let i = 0; i < strArray.length; i++){
		if(alph.indexOf(strArray[i]) >= 0){
			cleanStr += strArray[i];
		}
	}

	// reverse order 
	for(let i = cleanStr.length - 1; i >= 0; i--){
		reverseStr += cleanStr[i];
		
	}
	// compare strings
	if(cleanStr == reverseStr){
		pali = true
	}
	
// console.log(pali);
	return pali;
}


//SOLUTION

// function PalindromeTwo(str) { 

//   // only match letters and numbers, ignore punctuation
//   var arr = str.match(/[a-z0-9]+/gi);
  
//   // join into a string
//   var joined = arr.join('').toLowerCase();
  
//   // check for palindrome
//   return joined === joined.split('').reverse().join('');
         
// }
   
// ----------------------------------

// # 5 GREATEST COMMON FACTOR

function Division(num1,num2) { 
	var arr1 = [];
	var arr2 = [];
	var gcn = 0;

// find the factors for each
// loop through num1
// array, get the divisble number, half num1 to save time

  	for(let i = 0; i <= num1; i++){
  		if(num1 % i == 0){
  			arr1.push(i);
  		}
  	}
  	  	console.log(arr1);

  // do the same for num2 
 	for(let i = 0; i <= num2; i++){
  		if(num2 % i == 0){
  			arr2.push(i);
  		}
  	}
  // loop through the arrays for top match

  for(let i = 0; i <= arr1.length; i++){
  	if(arr2.indexOf(arr1[i]) >= 0 ){
  		gcn = arr1[i];
  	}
  }

  return gcn;
         
}

// SOLUTION
// function Division(num1, num2) { 

//   // setup variables
//   var a = num1;
//   var b = num2;
//   var r;
  
//   // keep using the mod function until a or b hits 0
//   while (a > 0 && b > 0) {
//     r = a % b;
//     a = b;
//     b = r;
//   }
  
//   // return the non-zero answer
//   return (a === 0) ? b : a;
         
// }
   
// Division(36, 54); 
   





// ----------------------------------
// # 6   scramble soup - FML
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 
// Sample Test Cases
// Input:"cdore" & str2= "coder"
// Output:"true"

// Input:"h3llko" & str2 = "hello"
// Output:"false"


function StringScramble(str1,str2) { 
	var scramble = true;
	const s1 =  str1;
	const s2 = str2;

	for(let i = 0; i < s2.length; i++ ){
	// check s2 against s2
	//console.log(s1.indexOf(s2[i]));
		if(s1.indexOf(s2[i]) < 0){
			scramble = false;
		}
	//	console.log(scramble);
	}

  	return scramble;
         
}
   
StringScramble('dkfjactm','catm');


// function StringScramble(str1, str2) { 

//   // loop through string 2 
//   for (var i = 0; i < str2.length; i++) {
    
//     // check if each character also exists in string 1
//     // if not, return false
//     if (str1.indexOf(str2.charAt(i)) === -1) {
//       return false;
//     }
    
//   }
  
//   // return true if all characters exist in string 1
//   return true;
         
// }
   
// StringScramble("rkqodlw", "world");   






// ----------------------------------
// # 7   ARITHMATIC AND GEOMETRIC

function ArithGeoII(arr) { 

	if(arr[1] - arr[0] == arr[3] - arr[2]){
		return "Geometric";
	// geo pattern arr[1]/arr[0] * arr[1] = arr[3]
	} else if((arr[1] / arr[0]) * arr[1] == arr[2] && (arr[2] / arr[1]) * arr[2] == arr[3]){
		return "Geometric";
	} else {
		return -1;
	}         
}

function ArithGeo(arr) { 

  // this function will loop through the provided array
  // checking to see if the difference provided matches
  // every element-pair difference in the array
  function arrayDiffs(diff, arr, subtract) {

    // loop starting from i=2 and check if every difference is the same
    for (var i = 2; i < arr.length; i++) { 

      // store the temporary difference 
      var tempDiff = (subtract) ? arr[i] - arr[i-1] : arr[i] / arr[i-1];

      // if differences do not match return false
      if (tempDiff !== diff) { return false; }

      // if we reach the end of the array and all differences matched, return true
      else if (i === arr.length-1 && tempDiff === diff) { return true; }

    }

  }

  // store the first difference for a potential arithmetic sequence
  var diffArith = arr[1] - arr[0];

  // store the first difference for a potential geometric sequence
  var diffGeo = arr[1] / arr[0];

  // check the whole array for an arithmetic sequence
  var isArithSeq = arrayDiffs(diffArith, arr, true);
  
  // if not an arithmetic sequence, check for geometric sequence
  if (!isArithSeq) {

    var isGeoSeq = arrayDiffs(diffGeo, arr, false);
    return (isGeoSeq) ? "Geometric" : -1;

  } else {
    return "Arithmetic";
  }
         
}
   
// ArithGeo([3, 9, 27, 81]);                                                              

//console.log(ArithGeoII([2,4,6]));
//console.log(ArithGeoII([2,6,19]));








// ----------------------------------
// # 8   ARRAY ADDITION

// Input:5,7,16,1,2
// Output:"false"

// Input:3,5,-1,8,12
// Output:"true"
// note: many had false positives




// function ArrayAddition(arr) { 
// 	// get the max
// 	max = Math.max(...arr);
// 	arr.splice(arr.indexOf(max), 1);
// 	console.log(arr);
	
// 	// for through each number
// 	for(let i = 0; i < arr.length; i++){
// 		// mulitple it against all other number
// 		var runningSum = i;
// 		for(let j = 0; j < arr.length; j++){
// 			runningSum += arr[j];
// 			console.log(runningSum);
// 			if(runningSum == max){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }



function ArrayAddition(arr) { 
 
 var biggest = Math.max(...arr);
 for(i=0;i<=arr.length - 1;i++){
     var result = arr[i];
     
     for(j=0;j<=arr.length - 1;j++){
     console.log( result);    
         if(arr[j] == result) continue;
         else result += arr[j];
         if(result == biggest) return "true";
     }
  }
return "false";
         
}

//console.log(ArrayAddition([5,7,16,1,2]));
//console.log(ArrayAddition([3,5,-1,8,12]));

// 3 + 5 + -1+ 8
// 3 + -1 + 8 + 3
// 3 + 8 + -1
// 3 + 1




//-------
// #9 Binary Converter
//https://coderbyte.com/editor/Binary%20Converter:JavaScript

function BinaryConverter(str) { 
  return parseInt(str,2);
}
console.log(BinaryConverter("011"));




//--------------------
// #10 letter count https://coderbyte.com/language/Letter%20Count
// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
// Sample Test Cases
// Input:"Hello apple pie"
// Output:Hello

// Input:"No words"
// Output:-1

function LetterCount(str) { 
	var winningWord = "";
	var highestLetterCount = 0;
	var arr = str.split(" ");
	// go through each word
	for(let i = 0; i < arr.length; i++){
	// grab the first word and check for multples
		var word = arr[i];
		// go through the letters
		for(let j = 0; j < word.length; j++){
			var letterCount = 0;
			// compare it to the others
			var curLetter = word[j];
			for(let k = 0; k < word.length; k++){
				if(j == k) { continue;} // skip self
				if(curLetter == word[k]){
					letterCount++;
				}

			}
			// compare the letter count with current
			if(letterCount > highestLetterCount){
				winningWord = word;
				highestLetterCount = letterCount;
				console.log(winningWord);
			}
		}
	}
	
	if(highestLetterCount == 0){
		return -1;
	}

  	return winningWord; 
         
}



 LetterCount("Today, is the greatest day ever eeee!");





