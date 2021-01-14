const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
const rainSound = document.getElementById("rainSound");
const thunderSound = document.getElementById("thunderSound");
const rainButton = document.getElementById("0000");
const thunderButton = document.getElementById("0001");
const soundRange = document.getElementById("soundRange");

// Variables & Constants
var drops = [];

for ( let i = 0; i < 1000; i++ ) {
	var d = new Drops();
	drops[i] = d;
}

// Code

function setup() {
	rainSound.volume = soundRange.value;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if ( rainButton.checked ) {
		rainSound.play();
		for ( let i = 0; i < drops.length * rainSound.volume; i++ ) {
			drops[i].fall();		
		}
	}
	else {
		rainSound.pause();
	}

	if ( thunderButton.checked ) {
		thunderSound.play();
	}
	else {
		thunderSound.pause();
	}

	for ( let i = 0; i < drops.length * rainSound.volume; i++ ) {
		drops[i].draw();
	}

	requestAnimationFrame(setup);
}

requestAnimationFrame(setup);