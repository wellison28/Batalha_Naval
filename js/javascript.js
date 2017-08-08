var view = {

	displayMessage: function(msg){
		document.getElementById("messageArea").innerHTML = msg;
	},

	displayHit: function(location){
		document.getElementById(location).setAttribute("class","hit");
	},

	displayMiss: function(location){
		document.getElementById(location).setAttribute("class","miss");
	}
}

var model = {

	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
			{locations: ["24", "34", "44"], hits: ["", "", ""]},
			{locations: ["10", "11", "12"], hits: ["", "", ""]}],

	fire: function(guess){
		for(var i = 0; i < this.numShips; i++){
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if(index >= 0){
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if(this.isSunk(ship)){
					view.displayMessage("You sunk my battleship!");
					this.shipsSunk++;
				} 
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	}, 

	isSunk: function(ship){
		for(var i = 0; io < this.shipLength; i++){
			if(ship.hits[i] !== "hit"){
				return false;
			}
		}
		return true;
	}
};

var controller = {
	guesses: 0,

	processesGuess: function(guess){
		
	}
}


function parseGuess(guess){
	var alphabet = ["A","B","C","D","E","F","G"];
	if(guess === null || guess.length !== 2)
		alert("Oops, please enter a letter and a number on the board.");
	else{
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		if(isNaN(column))
			alert("Oops, that isn't on the board.");
		else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize)
			alert("Oops, that's off the board!");
		else
			return row + column;
	}
	return null;
}

console.log(parseGuess("Ao"));
console.log(parseGuess("U5"));
console.log(parseGuess("12"));
console.log(parseGuess("86"));
console.log(parseGuess("F5"));

















