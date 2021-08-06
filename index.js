const fox_btn = document.getElementById('fox_btn');
const cat_btn = document.getElementById('cat_btn');
const fox_result = document.getElementById('fox_result');
const cat_result = document.getElementById('cat_result');
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);
function moveCursor(e){
    let x = e.clientX;
    let y = e.clentY;
    //console.log(x,y)
innerCursor.index.left = `${x}`;
innerCursor.index.top =`${y}`;
outerCursor.index.left = `${x}`;
outerCursor.index.top =`${y}`;
}

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
