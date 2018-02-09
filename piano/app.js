// asignar un evento a un elemento
// add event listener

var buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
	button.addEventListener('click', playSound);	
});

function playSound(event) {
	var button = event.target;
	var note = button.dataset.note;

	var audio = document.getElementById('audio'+note);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}
