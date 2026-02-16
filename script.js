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

		// Square Count For Black
		square.dataset.darkness = 0;

		square.addEventListener("mouseover", () => {
			let darkness = Number(square.dataset.darkness);

			if (darkness < 10) {

				if (darkness === 0) {
					square.dataset.r = Math.floor(Math.random() * 256);
					square.dataset.g = Math.floor(Math.random() * 256);
					square.dataset.b = Math.floor(Math.random() * 256);
				}

				darkness ++;
				square.dataset.darkness = darkness

				const r = square.dataset.r
				const g = square.dataset.g 
				const b = square.dataset.b

				square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${1 - darkness * 0.1})`;
			};
		});

	container.appendChild(square);
	};
};
