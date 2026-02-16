const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

// Default Grid on Load
createGrid(16)

resizeBtn.addEventListener("click", () => {
	let userInput = prompt("Enter number of squares per side (max 100):")

	userInput = Number(userInput);

	if (userInput > 0 && userInput <= 100) {
		createGrid(userInput);
	} else {
		alert("Please enter a number between 0 and 100.");
	};
})

function createGrid(size) {
	container.innerHTML = "";

	const squareSize = 960 / size;

	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div");
		// Create Squares
		square.classList.add("square");
		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;

		// Hover Effect
		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = "black";
		});
	container.appendChild(square);
	};
};
