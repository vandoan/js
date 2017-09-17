// http://ryandao.net/summary-ecmascript-6-major-features/


// BLOCKED SCOPE VARIABLES
// THIS

// not sure what it does, not functioning in the console
function respondBack() {
  var button = document.getElementById("a-img");
  button.addEventListener('click', () => {
    console.log(this);
  });
}


// PARAMETER DEFAULT
function(x, y = 3) {... }



// PROTOYPICAL INHERITANCE
var obj = {
	__proto__: someOtherObj,
	method: function() {...}
}


// SYMBOLS
// Again, poor example
