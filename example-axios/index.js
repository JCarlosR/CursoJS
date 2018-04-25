const btn = document.getElementById('btnRandom');
btn.addEventListener('click', fetchDogImageAndShow);

function fetchDogImageAndShow() {
	axios.get('https://dog.ceo/api/breeds/image/random')
	.then((response) => {
		const urlImage = response.data.message;
		const content = document.getElementById('content');
		content.innerHTML = `<img src="${urlImage}">`;
	})
	.catch(function (error) {
		console.log(error);
	});
}

fetchDogImageAndShow();
