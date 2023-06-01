
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout de l'EvenementListener de la flèche de gauche::::::::::::::::::::::::::::::::::::::::::::::::::

// const arrow_left = document.querySelector('.arrow_left');

// function befor() {
//   console.log("Bonjour");
// }

// arrow_left.addEventListener("click", befor);

// Ajout de l'EvenementListener de la flèche de droite:::::::::::::::::::::::::::::::::::::::::::::::::::::

// const arrow_rigth = document.querySelector('.arrow_right');

// function after() {
//   console.log("Au revoir");
// }

// arrow_rigth.addEventListener("click", after);

// Comptage du nombre de "bullet point" dans le tableau:::::::::::::::::::::::::::::::::::::::::::::::::::::

// Création des 'bullet"

for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement('div');
	bullet.classList.add ('dot');
	let div = document.querySelector(".dots");
	div.appendChild(bullet);
} 

// Différencier le point qui signale la diapositive en cours de visionnage::::::::::::::::::::::::::::::::::

let imageVue = document.querySelector('.dot:nth-child(1)');
imageVue.classList.add ('dot_selected');

// Teste pour effacer la bannière:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// document.querySelector("#banner").innerHTML = '';

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const arrow_left = document.querySelector('.arrow_left');
const arrow_rigth = document.querySelector('.arrow_right');
let bannerImg = document.querySelector ('.banner-img');

let texte = document.querySelector('p')

// Flèche droite:
let i = 1;
let y = 1;

arrow_rigth.addEventListener ('click', ()=>{
	if (i < slides.length ){
		bannerImg.src =`./assets/images/slideshow/${slides[i++].image}`;
		texte.innerHTML = slides[y++].tagLine;
	}
	else if (i = slides.length){
		bannerImg.src =`./assets/images/slideshow/${slides[0].image}`;
		texte.innerHTML = slides[0].tagLine;
	}
	
	// else {
	// 	bannerImg.src =`./assets/images/slideshow/${slides[i++].image}`;
	// 	texte.innerHTML = slides[y++].tagLine;
	// }
})

// / Flèche gauche:
let i2 = 3;
let y2 = 3;

arrow_left.addEventListener ('click', ()=>{
	if (i2 <= slides.length ){
		bannerImg.src =`./assets/images/slideshow/${slides[i2--].image}`;
		texte.innerHTML = slides[y2--].tagLine;
	}
	else if (i2 = 1 ){
		bannerImg.src =`./assets/images/slideshow/${slides[3].image}`;
		texte.innerHTML = slides[3].tagLine;
	}
	else {
		bannerImg.src =`./assets/images/slideshow/${slides[i2--].image}`;
		texte.innerHTML = slides[y2--].tagLine;
	}
})





