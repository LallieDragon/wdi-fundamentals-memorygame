 //console.log("User flipped " + cardOne);
 //console.log("User flipped " + cardFour);
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!!!");
	}
	else {
		alert("Sorry, you just keep trying, yeh?");
	}
}
console.log("User flipped a " + cardsInPlay[1]);
console.log("User flipped a " + cardsInPlay[0]);