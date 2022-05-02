// [Milestone 1
// 	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// 	Milestone 2
// 	Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// 


const icons= [

	{ name: 'cat',            prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'crow',           prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'dog',            prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'dove',           prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'dragon',         prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'horse',          prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'hippo',          prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'fish',           prefix: 'fa-', type: 'animal',    family: 'fas', color: 'orange'},
	{ name: 'carrot',         prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{ name: 'apple-alt',      prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{ name: 'lemon',          prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{ name: 'pepper-hot',     prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{ name: 'user-astronaut', prefix: 'fa-', type: 'user',      family: 'fas', color: 'blue'},
	{ name: 'user-graduate',  prefix: 'fa-', type: 'user',      family: 'fas', color: 'blue'},
	{ name: 'user-ninja',     prefix: 'fa-', type: 'user',      family: 'fas', color: 'blue'},
	{ name: 'user-secret',    prefix: 'fa-', type: 'user',      family: 'fas', color: 'blue'}
];

// [Milestone 1
// 	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

//uso il ciclo forEach per creare il div in modo dinamico
const container = document.getElementById("wrapper");

icons.forEach(element => {
	let div = document.createElement("div");
	//Milestone 2
// 	Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
	divContent = div.innerHTML = `<div class="icon-box"> <div class="${element.type}"> <i class = "${element.family} ${element.prefix} ${element.name}"></i> </div> <h2>${element.name}</h2> </div>`
	container.append(div); 
});

console.log(container);
