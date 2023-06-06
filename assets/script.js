
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

// Création de la constante "bnnerImg":
let bannerImg = document.querySelector ('.banner-img');


for (let i = 0; i < slides.length; i++) {
	// A chaque fois on crée une nouvelle "div":
	let bullet = document.createElement('div');
	// On assigne une "class" ("dot") à la nouvelle "div":
	bullet.classList.add ('dot');
	// Récupération de la "div" parent grâce à sa "class" ("dots"):
	const allBullet = document.querySelector('.dots');
	// On affilie les nouvelles "div" à la "div" parent:
	allBullet.appendChild(bullet);
	// Teste:
	console.log('allBullet');
}

// Différencier le point qui signale la photo en cours de visionnage::::::::::::::::::::::::::::::::::

// Création d'une liste d'éléments "dot":
let listDot = document.querySelectorAll ('.dot');
// Ajout d'une "class" (dot_selected) au premier élément de la liste:
listDot[0].classList.add('dot_selected');

// Changement du "bullet" avec le changement de l'image:

// Initialisation de la variable "slideVu":
let slideVu = 0;

// Fonction permettant le changement:
function bulletVu () {
for (let i = 0; i < listDot.length; i++) {
	if (i === slideVu){
		// Ajout de la "class" (dot_selected):
		listDot[i].classList.add("dot_selected");
	} else {
		// Supression de la "class" (dot_selected):
			listDot[i].classList.remove("dot_selected");
	}
}}

// Teste pour effacer la bannière:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// document.getElementById('banner').innerHTML = '';

// Changement des images et des slogans au clique sur les flèches::::::::::::::::::::

// Création de constantes ou de variables:
	// Pour la flèche de gauche:
const arrow_left = document.querySelector('.arrow_left');
	// Pour la flèche de droite:
const arrow_rigth = document.querySelector('.arrow_right');
	// Pour le slogan de la bannière:
let texte = document.querySelector('p')

// Au clic sur le flèche de gauche:

arrow_left.addEventListener ('click', ()=>{
	slideVu --;
	if (slideVu == -1) {
		slideVu = slides.length -1;
	} 
	// Changement de l'image dans la bannière: 
	bannerImg.src =`./assets/images/slideshow/${slides[slideVu].image}`;
	// Changement du slogan dans la bannière:
	texte.innerHTML = slides[slideVu].tagLine;
	// Changement du "bullet point" correspondant:
	bulletVu ();
});

// Au clic sur le flèche de droite:

arrow_rigth.addEventListener ('click', ()=>{
	slideVu ++;	
	if (slideVu === slides.length) {
		slideVu = 0;
	}	
	// Changement de l'image dans la bannière: 
	bannerImg.src =`./assets/images/slideshow/${slides[slideVu].image}`;
	// Changement du slogan dans la bannière:
	texte.innerHTML = slides[slideVu].tagLine;
	// Changement du "bullet point" correspondant:
	bulletVu ();	
});

