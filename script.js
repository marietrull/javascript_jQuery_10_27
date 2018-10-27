console.log("Javascript Connected");

//----------------FIZZBUZZ------------------//
console.log("Fizzbuzz");

// * Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

for (var i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz " + i);
	}
	else if (i % 3 === 0){
		console.log("Fizz" + i);
	}
	else if (i % 5 === 0){
		console.log("Buzz " + i);
	}
	else {
		console.log("Not Divisible")
	}
}


//----------------PRIME CHECKER------------------//
console.log("Prime Checker");
// * Write a function that checks to see if a number is a prime number or not. Have it return `true` if it is, or `false` if it isn't.

function primeChecker (number) {

	for (var i = 2; i < number; i++){
		if (number % i === 0){
			console.log(number + " is not prime.")
			break;
		}
		else {
			console.log(number + " is prime.")
			break;
		}
	}

}

primeChecker(4);

//----------------COIN FLIP ACTIVITY------------------//

// console.log("Coin Flip Activity");

var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flipThatCoin(result) {
  // STEP ONE:
  // Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
  var randomNumber = Math.floor(Math.random() * 2);

  //  STEP TWO:
  //  If randomNumber is equal to zero then:
  if (randomNumber === 0) {
  	//  Find the div with an id of coin-image.
    $("#coin-image").html(
    	//  Replace it's html with an img tag containing this image:
  		//  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
      "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />"
    );
  }

  // Else
  //  Find the div with an id of coin-image.
  //  Replace it's html with an img tag containing this image:
  //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
  else {
    $("#coin-image").html(
      "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />"
    );
  }

  //  STEP THREE:
  //  If result is equal to randomNumber, do the following:
  //  Increment wins by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
  //  Find the div with an id of wins. Update it with the value of the wins variable.

  if (result === randomNumber) {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
  }

  //  Else:
  //  Increment losses by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
  //  Find the div with an id of losses. Update it with the value of the losses variable.
  else {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
  }
}

$("#heads").on("click", function() {
  headsCount++;
  $("#heads-chosen").text(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

//  STEP FOUR:
//  Increment tailsCount by one.
//  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
//  Find the div with an id of guess. Update it with the word "Tails" bolded.
//  Call the flipThatCoin function and pass value 1 into it.

$("#tails").on("click", function() {
  tailsCount++;
  $("#tails-chosen").text(tailsCount);
  $("#guess").html("<b>Tails</b>");
  flipThatCoin(1);
});
