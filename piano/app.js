// asignar un evento a un elemento
// add event listener
var btnDO = document.getElementById('btnDO');

btnDO.addEventListener('click', playSound);

function playSound() {
	var audio = document.getElementById('audioDO');
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}