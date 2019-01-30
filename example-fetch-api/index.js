const URL_API_RANDOM_IMAGE = 'https://dog.ceo/api/breeds/image/random';

const btn = document.getElementById('btnRandom');
btn.addEventListener('click', fetchDogImageAndShow);

const content = document.getElementById('content');

function fetchDogImageAndShow() {
	fetch(URL_API_RANDOM_IMAGE)
	.then(r => r.json())
	.then(data => {
		const urlImage = data.message;
		content.innerHTML = `<img src="${urlImage}">`;
	})
	.catch(error => console.log(error));
}

fetchDogImageAndShow();
