let score = 0 //start score at 0
let time=60;

let counter=setInterval(timer, 1000);

function timer() {
	time=time-1;
	if (time <= 0) {
		clearInterval(timer);
		return time;
	}
	document.getElementById("timer").innerHTML=count + "s";
}

var upPressed = false;
var downPressed = false;

function downKeyHandle(event) {
	if(event.keyCode === 40) {
		downPressed = true; 
	else(event.keyCode === 38) {
		upPressed = true;
		}
	}
}
// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.innerHTML = `Click count: ${event.detail}`;
// });

const hitDetection = (e) => {
 const color = $(e.target).css('backgroundColor');
 checkSmallWindowHit(color)
 $(e.target).css('opacity', 0);

}

$('button').on('click', () => { //instantiating start button
  // console.log('click is working'); //checking start button

  // createSmallWindows(30);
});

$('.smallwindows').on('click', hitDetection);

// const createSmallWindows = (numberOfSmallWindows) => {
// 	for(let i = 0; i <= numberOfSmallWindows; i++) {
// 		const $div = $('<div/>');
// 		applyRandomColor($div);
// 		$('.smallwindows').append($div);
// 	}
// }

// const createLargeWindows = (numberOfLargeWindows) => {
// 	for(let i = 0; i <= numberOfLargeWindows; i++) {
// 		const $div = $('<div/>');
// 		applyRandomColor($div);
// 		$('.largewindows').append($div);
// 	}
// }

const applyRandomColor = ($smallWindows) => {
	const randomNumber = Math.floor(Math.random() * 3) +1;
		if(randomNumber === 1){
			$smallWindows.css('backgroundColor', 'yellow');
		} else if (randomNumber === 2){
			$smallWindows.css('backgroundColor', 'Light yellow1');
		} else {
			$smallWindows.css('backgroundColor', 'Light yellow3');
		}

}

// const applyRandomColor = ($windows) => {
// 	const randomNumber = Math.floor(Math.random() * 3) +1;
// 		if(randomNumber === 1){
// 			$windows.css('backgroundColor', 'yellow');
// 		} else if (randomNumber === 2){
// 			$windows.css('backgroundColor', 'Light yellow1');
// 		} else {
// 			$windows.css('backgroundColor', 'Light yellow3');
// 		}

// }

const checkSmallWindowHit = (color) => {
	console.log(color);
	if(color === 'rgb(255,255,102)'){
		score +=100;
	}
	$('h1').text(`SCORE: ${score}`);
}

const checkWindowHit = (color) => {
	console.log(color);
	if(color === 'rgb(255,255,102)'){
		e += 50;
	$('score').text(`SCORE: ${score}`);
}

}

document.addEventListener('downkey', downKeyHandler, false);
document.addEventListener('upkey', upKeyHandler, false);