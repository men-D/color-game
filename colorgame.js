var numSquares = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#picked");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButton();
	setUpSquares();
	reset();
}






function setUpModeButton() {
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

 function setUpSquares() {
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
				if (clickedColor === colorPicked){
					resetButton.textContent = "play again?";
					messageDisplay.textContent = "Correct";
					changeColors(colorPicked);
					h1.style.background = colorPicked;
				} else {
					this.style.background = "#232323";
					messageDisplay.textContent = "Try again";
				} 
			});
		}
	}
	
//reset the colors with the button 	
function reset (){
	colors = generateColorRandom(numSquares);
	colorPicked = pickedColor();
	colorDisplay.textContent = colorPicked;
	messageDisplay.textContent = "";
	resetButton.textContent = "new colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.background = "steelBlue";
}
resetButton.addEventListener("click", function(){
	reset();
})

//changing all the squares to the picked color
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
};

//picking a random color from the colors array
function pickedColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//pushing a random color to the array
function generateColorRandom(num){
	var arr = [];
	for (i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//generating a random color 
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}









