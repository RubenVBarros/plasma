let tailleRef = 3779;
let rayon = 1500;
let centreX = 100;

let imgB, tailleReelleB, angleB;
let imgC, tailleReelleC, angleC;
let imgD, tailleReelleD, angleD;
let imgE, tailleReelleE, angleE;

let slider;

function setup() {
	createCanvas(windowWidth, windowHeight);
    slider = createSlider(-9, 12, 7, 0.000001);
	slider.size(windowWidth-20, 20);
    slider.position(0, 20);
    
	imgB = loadImage('../assets/moon.png');
	tailleReelleB = 3474200; // Taille réelle en mètres
	angleB = 0;				 // Angle de "sortie" de l'écran
	imgC = loadImage('../assets/earth.png');
	tailleReelleC = 12742000; angleC = Math.PI/6
	imgD = loadImage('../assets/saturn.png');
	tailleReelleD = 116460000; angleD = -Math.PI/8;
	imgE = loadImage('../assets/sun.png');
	tailleReelleE = 1392700000; angleE = Math.PI/7;
    imgF = loadImage('../assets/metre.png');
    tailleReelleF = 1; angleF = Math.PI/7;
    imgG = loadImage('../assets/main.png');
    tailleReelleG = 0.2; angleG = Math.PI/6;
    imgH = loadImage('../assets/cristal.png');
    tailleReelleH = 1e-9; angleH = Math.PI/8;
    imgI = loadImage('../assets/bus.png');
    tailleReelleI = 12; angleI = Math.PI/7;
    imgJ = loadImage('../assets/poisson.png');
    tailleReelleJ = 0.003; angleJ = Math.PI/6;
}
/* Affiche l'app en fullscreen
function toogleFullscreen(){
    let fs = fullscreen();
    fullscreen(!fs);
}
*/

function draw() {
	background(255);	
	let curseur = Math.pow(10,slider.value());

	let ratio, ratioTaille, largeur, hauteur, positionX, positionY;
	
	ratio = tailleReelleB / curseur;
	if (ratio < 10) 
	{ 
		ratioTaille = tailleRef/(Math.max(imgB.width, imgB.height));	
		largeur = imgB.width * ratio * ratioTaille;
		hauteur = imgB.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleB));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleB));
  	image(imgB, centreX, positionY - hauteur/2, largeur, hauteur);
	}

	ratio = tailleReelleC / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgC.width, imgC.height));	
		largeur = imgC.width * ratio * ratioTaille;
		hauteur = imgC.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleC));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleC));
  	image(imgC, positionX, positionY - hauteur/2, largeur, hauteur);
	}

	ratio = tailleReelleD / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgD.width, imgD.height));	
		largeur = imgD.width * ratio * ratioTaille;
		hauteur = imgD.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleD));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleD));
  	image(imgD, positionX, positionY - hauteur/2, largeur, hauteur);
	}

	ratio = tailleReelleE / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgE.width, imgE.height));	
		largeur = imgE.width * ratio * ratioTaille;
		hauteur = imgE.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleE));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleE));
  	image(imgE, positionX, positionY - hauteur/2, largeur, hauteur);
	}
	ratio = tailleReelleF / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgF.width, imgF.height));	
		largeur = imgF.width * ratio * ratioTaille;
		hauteur = imgF.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleF));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleF));
  	image(imgF, positionX, positionY - hauteur/2, largeur, hauteur);
	}
    ratio = tailleReelleG / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgG.width, imgG.height));	
		largeur = imgG.width * ratio * ratioTaille;
		hauteur = imgG.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleG));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleG));
  	image(imgG, positionX, positionY - hauteur/2, largeur, hauteur);
	}
    ratio = tailleReelleH / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgH.width, imgH.height));
		largeur = imgH.width * ratio * ratioTaille;
		hauteur = imgH.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleH));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleH));
  	image(imgH, positionX, positionY - hauteur/2, largeur, hauteur);
	}
    ratio = tailleReelleI / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgI.width, imgI.height));
		largeur = imgI.width * ratio * ratioTaille;
		hauteur = imgI.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleI));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleI));
  	image(imgI, positionX, positionY - hauteur/2, largeur, hauteur);
	}
    ratio = tailleReelleJ / curseur;
	if (ratio < 10) { 
		ratioTaille = tailleRef/(Math.max(imgJ.width, imgJ.height));
		largeur = imgJ.width * ratio * ratioTaille;
		hauteur = imgJ.height * ratio * ratioTaille;
		positionX = (centreX) + (ratio*rayon*Math.cos(angleJ));
		positionY = (windowHeight/2) + (ratio*rayon*Math.sin(angleJ));
  	image(imgJ, positionX, positionY - hauteur/2, largeur, hauteur);
	}
	text("10^" + slider.value(), 20, 20);
}