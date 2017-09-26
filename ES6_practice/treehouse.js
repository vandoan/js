// http://blog.teamtreehouse.com/get-started-ecmascript-6

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Somg.prototype.start = function start() {
  this.isPlaying = true;
};

Song.prototype.stop = function stop() {
  this.isPlaying = false;
};


// ***** E6 *****
// new class syntax

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
  }
  stop() {
    this.isPlaying = false;
  }
}



// **** NEW DEFAULT VALUES
function pet(type="dog", age, name) {
  // ...
}


// ***** INHERITANCE
class Media {
  constructor(title, duration, isPlaying = false) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = isPlaying;
  }

  start() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }
}

class Song extends Media {
  constructor(title, artist, duration, isPlaying - false) {
    super(title, duration, isPlaying);
    this.artist = artist;
  }
}

class Movie extends Media {
  comstructor(title, year, duration, isPlaying = false) {
    super(title, duration, isPlaying);
    this.year = year;
  }
}







// ***** DESTRUCTURING ******

var person = {
  firstName: "Andy",
  lastName: "Chalkley"
}

var {firstName, lastName} = person;
// same as
var firstName = person.firstName;
var lastName = person.lastName;
// different name than key
var {firstName: first, lastName: last} = person;
// change it in the params
function getFirstName({firstName: first}) {
 return first;
}
getFirstName(person); // returns "Andy"



// ***** REST AND SPREAD ******

var runners = ['jo', 'mo', 'lu', 'stu', 'roo'];

function getLosers(first, second, third, ...losers) {
  return losers;
}
getLosers(...runners);
// ...runners to spread out the array



