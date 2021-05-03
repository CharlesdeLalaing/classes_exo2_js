// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

class Lieux {
    constructor(nom, contenu, ingredient) {
        this.nom = nom,
        this.contenu = contenu,
        this.ingredient = ingredient;
    }
}

let maison = new Lieux ("maison", []);
let epicerie = new Lieux ("epicerie", [], []);
let cuisine = new Lieux ("cuisine", [], []);

console.log(maison);


// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom,
        this.etat = etat,
        this.prix = prix;
    }
}
let poivron = new Ingredients ("poivrons", "entier",1+"euro");
let oignon = new Ingredients ("oignons", "entier", 2+"euros");
let oeuf = new Ingredients ("oeuf", "entier",4+"euros" );
let epice = new Ingredients ("epices", "moulu", 3.25+"euros");
let paprika = new Ingredients ("paprika", "moulu", 1.5+"euros");
let fromage = new Ingredients ("fromage", "coupé", 1.6+"euros");

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }

class Personne {
    constructor (nom, lieu, argent, panier) {
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent
        this.panier = panier,
        this.se_deplacer = (x) => {
            return console.log(`${this.nom} se deplace de ${this.lieu} au ${x}`);
        }
        this.payer = (x) => {
            return console.log(`${this.nom} a acheter deux poivrons à ${x}, il avait ${this.argent} dans son portefeuille.. il lui reste donc ${this.argent - x}`);
        }
        this.couper = (x,y) => {
            console.log(`${this.nom} a pris la sortie d'autoroute ${x} mais est c'est trompé donc est sortit à ${y} à la place.`)
        }
    }
}

let maxime = new Personne ("Maxime", "néant", 100, []);
maxime.se_deplacer("Maroc");
maxime.payer(2);
maxime.couper("Lomel", "Richebeamont")
