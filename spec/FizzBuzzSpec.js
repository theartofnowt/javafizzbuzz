describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.say(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.say(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.say(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.say(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.say(15)).toEqual('FizzBuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzBuzz.say(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz.say(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.say(11)).toEqual(11);
    });
  });
});




//

//
//   describe('knows when a number is', function () {
//     it('divisible by 3', function () {
//       expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
//     });
//   });
//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
//     });
//   });
//
//   describe('knows when a number is', function() {
//     it('is divisible by 5', function() {
//       expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
//     });
//   });
//
//   describe('knows when a number is NOT', function() {
//     it('is divisisble by 5', function() {
//       expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);
//     });
//   });
//
//   describe('knows when a number is', function() {
//     it('is divisible by 15', function() {
//       expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
//     });
//   });
//
//   describe('knows when a number is NOT', function() {
//     it('is divisible by 15', function() {
//       expect(fizzbuzz.isDivisibleByFifteen(29)).toBe(false);
//     });
//   });
//
// });








// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
