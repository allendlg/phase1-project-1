const fox_btn = document.getElementById('fox_btn');
const cat_btn = document.getElementById('cat_btn');
const fox_result = document.getElementById('fox_result');
const cat_result = document.getElementById('cat_result');
let mouseCursor = document.querySelector(".cursor");


fox_btn.addEventListener('click', getRandomFox);
cat_btn.addEventListener('click', getRandomCat);

function getRandomFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomCat();
			}
			else {
				cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
			}
		});
}
 //Grabing classes
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", animation);

function animation (e){
	cursor.style.top = e.pageY +20 + "px";
	cursor.style.left = e.pageX + 35 + "px";
  };


