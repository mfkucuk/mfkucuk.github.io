// Brainfuck
let commands = ['>', '<', '+', '-', '.', ',', '[', ']'];
let cells = [0, 0, 0, 0, 0, 0, 0, 0];
let pointer = 0;
let code = '';
let markedCell = -1;
let loopStart;

// HTML elements
const cellsCanvas = document.getElementById('cellsCanvas');
const codeArea = document.getElementById('codeArea');
const outputArea = document.getElementById('outputArea');
const runButton = document.getElementById('runButton');

const ctx = cellsCanvas.getContext('2d');

// Initalize cells
updateCells();

// Action Listeners
runButton.addEventListener('click', function() {
	code = codeArea.value;
	execute(code);
});

// Command definitions
let right = () => { 
	pointer++;
	if (pointer >= 8) {
		pointer = 0;
	}
};

let left = () => { 
	pointer--;
	if (pointer <= -1) {
		pointer = 7;
	}
};

let increment = () => {
	cells[pointer]++
	if (cells[pointer] >= 256) {
		cells[pointer] = 0;
	}
};

let decrement = () => {
	cells[pointer]--
	if (cells[pointer] <= -1) {
		cells[pointer] = 255;
	}
};

let print = () => outputArea.value += String.fromCharCode(cells[pointer]);

let input = () => { 
	cells[pointer] = parseInt(prompt('Enter a number between 0 - 9: ')) + 48;
};

let startLoop = (index) => {
	markedCell = pointer;
	loopStart = index;
}

// Execution function
function execute(code) {
	resetCells();
	codeContent = code.split('');

	for (let i = 0; i < codeContent.length; i++) {
		console.log(i);
		switch (codeContent[i]) {
			case commands[0]:
			right();
			break;

			case commands[1]:
			left();
			break;

			case commands[2]:
			increment();
			break;

			case commands[3]:
			decrement();
			break;

			case commands[4]:
			print();
			break;

			case commands[5]:
			input();
			break;

			case commands[6]:
			startLoop(i);
			break;

			case commands[7]:
			if (cells[markedCell] == 0) {
				markedCell = -1;
			}
			else {
				i = loopStart;
			}
			break;

			case ' ':
			break;

			case '\n':
			break;

			default:
			alert('Error');
			return;
			break;
		}
	}

	ctx.clearRect(0, 0, 800, 100);
	updateCells();
}

function updateCells() {

	ctx.font = "16px Arial Bold"

	// Writing cell values
	for (let i = 0; i < 8; i++) {
		ctx.fillText(cells[i], i * 75 + 33, 50);
	}

	// Drawing the cells
	ctx.rect(0, 0, 800, 100);
	ctx.stroke();
	for (let i = 75; i <= 600; i += 75) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, 100);
		ctx.stroke();
	}
}

function resetCells() {
	for (let i = 0; i < 8; i++) {
		cells[i] = 0;
	}

	outputArea.value = '';
	pointer = 0;
}

