console.log("hey");



// Entrainement/Learning by teaching

//     Exercez vous sur les sujets javascript que l'on a vu ensemble
//     Inventez ou trouvez de petits exercices


// Fonction bonjour( prenom, nom)

//     Faire une fonction que vous appelerez bonjour
//     Qui prend en paramètre le prénom et le nom
//     Qui affiche une alert() avec comme texte par exemple: "Bonjour Prénom Nom comment allez vous?"



// ---------------------------- Partie 1 -----------------------------------
var objet ={};



	$("#valider").click (function() {
		objet.prenom = $("#first_name").val();
		objet.nom = $("#last_name").val();

	 alert("Bonjour et bienvenue " + objet.prenom + " " + objet.nom + " comment allez vous ?");

	 });


$("input").change(function(){
	if ($("#first_name").val() !== "" && $("#last_name").val() !== ""){


	
		objet.prenom = $("#first_name").val();
		objet.nom = $("#last_name").val();

 	alert("Bonjour et bienvenue " + objet.prenom + " " + objet.nom + " comment allez vous ?");

}

 	});


// ------------------------------- Partie 2 -------------------------------------------



// Fonction compteToNombre( nombre )

//     Faire une fonction qui s'appelle compteToNombre
//     qui prends en parametre nombre
//     qui va compter de 1 à nombre et l'afficher dans la console ( utiliser une boucle for)
//     faire la mème chose en définissant une valeur par défaut à nombre et tester

var cadis = 20;

function compteNumber (number){

	var nombre = 0;

	for (var i = 0; i < cadis; i++) {

		nombre++;

	}

	console.log("il y a : " + nombre + " produits dans le cadis");

}

console.log(compteNumber());