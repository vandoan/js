
// #1 PRIME TIME
function PrimeTime(num) { 
let prime = true;
	for(let i = 2; i < num; i++){
		// check to see if num is divisible from num within
		if(num%i == 0) {
			prime =  false;
		}
	}
	
	console.log(prime);  
  	return prime; 
}

PrimeTime(18);

   


// #2 RUN LENGTH

function RunLength(str) { 
	 let split = str.split;
	 for(let i = 0; i < str.length; i++){
	 	// if next once is the same as last
	 	if(str[i]==str[i+1]){
	 		counter[Str[i]]++;
	 	}

	 	// else add to counter and count next one
	 }
  // code goes here  
  return str; 
         
}
   
