// https://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582



// BLOCK SCOPING WITH LET
var jsFuture = 'es6';

(function(){
	if(!jsFuture){ var jsFuture = "es5"; }
	console.log(jsFuture);	// Prints es5
}()) // SELF CALLING Function

// JS vars are function-scoped
// Even vars in nexted blocks are available in the func
// Var declarations are hoisted to the top
// But var initialization are not.