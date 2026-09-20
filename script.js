// DONNÉES STATIQUES 
const plats = [
    { id:1, nom:"Thieboudienne", categorie:"plat", prix:3500, image:"thieboudieune.jpeg", desc:"Riz au poisson " },
    { id:2, nom:"Thiakry", categorie:"dessert", prix:1000, image:"thiakry.jpeg", desc:"Thiakry avec du lait caillé" },
    { id:3, nom:"Yassa Poulet", categorie:"plat", prix:4000, image:"yasss.jpeg", desc:"oighons poulet riz blanc" },
    { id:4, nom:"Mafé", categorie:"plat", prix:3000, image:"mafe.jpeg", desc:"Ragoût arachide et riz blanc" },
    { id:5, nom:"Fataya", categorie:"entree", prix:500, image:"fataya.jpg", desc:"farine avec de la viande" },
    { id:6, nom:"Pastels", categorie:"entree", prix:500, image:"pastelsaupoisson.jpg", desc:"Chaussons poisson" },
    { id:7, nom:"Salade Fruits", categorie:"dessert", prix:1500, image:"saladefruit.jpeg", desc:"Mangue papaye pasteques et toute sorte de fruits" }
];

let panier = [];
let filtreActuel = "tous";

// FONCTION 1 : Afficher menu (utilise boucle)
function afficherMenu(liste) {
    const menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = ""; // vide DOM
    if(liste.length === 0){
        menuDiv.innerHTML = `
       <div class="introuvable">
         <h2>Desole</h2>
         <h3>Plat ou dessert introuvable<h3>
         <p>Aucun plat ne correspond à votre recherche</p>
         <button onclick="filtrer('tous')">Retouner dans le menu</button>
         </div>
        `
        
    }
    for(let plat of liste) { // BOUCLE exigée
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${plat.image}" alt="${plat.nom}">
            <h3>${plat.nom}</h3>
            <p>${plat.desc}</p>
            <p><b>${plat.prix} FCFA</b></p>
            <button onclick="ajouterAuPanier(${plat.id})">Ajouter</button>
        `;
        menuDiv.appendChild(card);
    }
}

// FONCTION 2 : Filtrer (utilise condition)
function filtrer(categorie) {
    filtreActuel = categorie;
    let resultat;
    if(categorie === "tous") { // CONDITION exigée
        resultat = plats;
    } else {
        resultat = plats.filter(p => p.categorie === categorie);
    }
    afficherMenu(resultat);
}

// FONCTION 3 : Ajouter au panier (événement + mise à jour DOM)
function ajouterAuPanier(id) {
    const plat = plats.find(p => p.id === id);
    panier.push(plat); // ajout
    mettreAJourPanier();
}

// FONCTION 4 : Mise à jour DOM panier
function mettreAJourPanier() {
    const ul = document.getElementById("listePanier");
    const totalEl = document.getElementById("total");
    const countEl = document.getElementById("count");
    ul.innerHTML = "";
    let total = 0;
    for(let item of panier) { // BOUCLE
        total += item.prix;
        const li = document.createElement("li");
        li.textContent = `${item.nom} - ${item.prix} FCFA`;
        ul.appendChild(li);
    }
    totalEl.textContent = `Total: ${total} FCFA`;
    countEl.textContent = panier.length;
    console.log("Panier actuel:", panier); 
}

function viderPanier() {
    if(panier.length === 0) { // CONDITION
        alert("Panier déjà vide !");
        return;
    }
    panier = [];
    mettreAJourPanier();
}

// Recherche clavier (événement saisie)
document.getElementById("searchInput").addEventListener("keyup", (e) => {
    const mot = e.target.value.toLowerCase();
    const filtres = plats.filter(p => p.nom.toLowerCase().includes(mot));
    afficherMenu(filtres);
});

// Lancement initial

function retourMenu() {
    const input = 
    document.getElementById('searchInput') 
    if (input) input.value = "";
   afficherMenu(plats);
} 
document.addEventListener("DOMContentLoaded",
    () => {
         afficherMenu(plats);
    }

)