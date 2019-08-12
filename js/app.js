let score = 0;

$("#start").click(function () {
	let timer = 100;
	setInterval(function() {
		timer--;
		if(timer >= 0) {
			span = document.getElementById("timer");
			span.innerHTML = timer;
			$('#timer').text(`Time: ${timer}`);
		}
		if (timer === 0) {
			alert('Time Up!');
			clearInterval(timer);
		}
	}, 1000);

})

const handleHit = (e) => {
	const hit = $(e.target).css('backgroundImage');
	checkValidHit(hit)
	 // $(e.target.style.background = black
	 	$(e.target).css({
	 		//opacity: 0.75,
	 		//width: 200,
			//height: 250
	 	});
	$(e.target).css('opacity', 0.5);
}

$('button').on('click', () => {
  console.log('button click is working');

$('.windows').on('click', handleHit);

});

const $div = $('<div/>');
$('.windows').append($div);

const checkValidHit = (hit) => {
	console.log(hit);
	if(hit === 'url("http://childrenschapel.org/biblestories/graphics/rainwindow.gif")'){
		score += 100;
	}

	// $('#score').html(`Score: ${score}`);
	$('#score').text(`Score: ${score}`);
	// $("#score").html(score);
}

document.getElementById('windows').onclick=function(){
    let updatedScore = parseInt(document.getElementById("#score").value);
    score++;
    document.getElementById('updatedScore').value = score;
}

//
function start_scroll_down() { 
   scroll = setInterval(function(){ 
   	window.scrollBy(0, 1000); 
   		console.log('start');}, 1500);
}







