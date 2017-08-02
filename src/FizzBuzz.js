

function FizzBuzz() {};

FizzBuzz.prototype.say = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

// FizzBuzz.prototype._isDivisbleByFifteen = function(number, divisor) {
//   return this._isDivisbleBy(number, 15);
// }
//
// FizzBuzz.prototpye.isDivisibleByThree = function(number) {
//   return (number % 3 === 0);
// };
//
// FizzBuzz.prototype.isDivisibleByFive = function(number) {
//   return (number % 5 === 0);
// };
//
// FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
//   return (number % 15 === 0);
// };


// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
