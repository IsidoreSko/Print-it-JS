
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

// Ajout de l'EvenementListener de la flèche de gauche:

const arrow_left = document.querySelector('.arrow_left');

function showMsg() {
  console.log("Bonjour");
}

arrow_left.addEventListener("click", showMsg);

// Ajout de l'EvenementListener de la flèche de droite:

const arrow_rigth = document.querySelector('.arrow_right');

function showMsg2() {
  console.log("Au revoir");
}

arrow_rigth.addEventListener("click", showMsg2);

// Comptage du nombre de "bullet point" dans le tableau:
// En écrivant "slides.length" dans la console on obtient "4".




