
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

// Création des 'bullets":

let bannerImg = document.querySelector ('.banner-img');


for (let i = 0; i < slides.length; i++) {
	let bullet = document.createElement('div');
	bullet.classList.add ('dot');
	const allBullet = document.querySelector('.dots');
	allBullet.appendChild(bullet);
	console.log('allBullet');
}

// Différencier le point qui signale la photo en cours de visionnage::::::::::::::::::::::::::::::::::

let arrayDot = document.querySelectorAll ('.dot');
arrayDot[0].classList.add('dot_selected');
let slideVu = 0;

// Changement du "bullet" avec le changement de l'images:

function bulletVu () {
for (let i = 0; i < arrayDot.length; i++) {
	if (i === slideVu){
		arrayDot[i].classList.add("dot_selected");
	} else {
			arrayDot[i].classList.remove("dot_selected");
	}
}}

// Teste pour effacer la bannière:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// document.getElementById('banner').innerHTML = '';

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const arrow_left = document.querySelector('.arrow_left');
const arrow_rigth = document.querySelector('.arrow_right');
let texte = document.querySelector('p')


arrow_left.addEventListener ('click', ()=>{
	slideVu --;
	if (slideVu === -1) {
		slideVu = slides.length -1;
	}
	bannerImg.src =`./assets/images/slideshow/${slides[slideVu].image}`;
	texte.innerHTML = slides[slideVu].tagLine;
	bulletVu ();
});


arrow_rigth.addEventListener ('click', ()=>{
	slideVu ++;
	if (slideVu === slides.length) {
		slideVu = 0;
	}
	bannerImg.src =`./assets/images/slideshow/${slides[slideVu].image}`;
	texte.innerHTML = slides[slideVu].tagLine;
	bulletVu ();
});