const fox_btn = document.getElementById('fox_btn');
const cat_btn = document.getElementById('cat_btn');
const fox_result = document.getElementById('fox_result');
const cat_result = document.getElementById('cat_result');
let mouseCursor = document.querySelector(".cursor");

fox_btn.addEventListener("mouseenter", function(event) {
	// highlight the mouseenter target
	event.target.style.color = "grey";
  
	// reset the color after a short delay
	setTimeout(function() {
	  event.target.style.color = "";
	}, 500);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  cat_btn.addEventListener("mouseover", function( event ) {
	// highlight the mouseover target
	event.target.style.color = "orange";
  
	// reset the color after a short delay
	setTimeout(function() {
	  event.target.style.color = "";
	}, 500);
  }, false);

  cat_btn.addEventListener("mouseenter", function(event) {
	// highlight the mouseenter target
	event.target.style.color = "grey";
  
	// reset the color after a short delay
	setTimeout(function() {
	  event.target.style.color = "";
	}, 500);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  fox_btn.addEventListener("mouseover", function( event ) {
	// highlight the mouseover target
	event.target.style.color = "orange";
  
	// reset the color after a short delay
	setTimeout(function() {
	  event.target.style.color = "";
	}, 500);
  }, false);

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
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.url} alt="dog" />`
		});
}

 //Grabing classes
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", animation);

function animation (e){
	cursor.style.top = e.pageY +20 + "px";
	cursor.style.left = e.pageX + 35 + "px";
  };


