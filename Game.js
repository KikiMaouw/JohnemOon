const readline = require('readline');
const JohnemonMaster = require('./JohnemonMaster'); // Replace 'your_classes_filename' with the actual filename
const Johnemon = require('./Johnemon')
const JohnemonWorld = require ('./JohnemonWorld')
const fs = require('fs');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let johnemon = new Johnemon();
let player = new JohnemonMaster(); 
let world = new JohnemonWorld();

function saveGameState() {
  //console.log("\nEt voilà il faut coder le SAVE");
  const gameState = {
    player: {
      name: player.name,
    },

    johnemon: {
      name: johnemon.name,
      level: johnemon.level,
      experience: johnemon.experienceMeter,
      attack: johnemon.attackRange,
      defense: johnemon.defenseRange,
      health: johnemon.healthPool,
      phrase: johnemon.catchPhrase,
    //world: world,
  }
}
  fs.writeFileSync(`gameState.json`, JSON.stringify(gameState, null, 2), 'utf-8');

  setTimeout(() => {
    console.log("\nProfil sauvegardé...");
  }, 1000)

  setTimeout(() => {
    mainMenu();
  }, 1000)
}

// function loadGameStat()

function askForName() {   
    rl.question("Quel est ton nom petit scarabé ?\n", (name) => {
      if (/^[A-Za-zÀ-ÿ]+$/.test(name)) { 
      console.log(`\nBienvenue ${name}`);
      player.name = name; //modifie le nom du joueur créée en haut du fichier
      //console.log(player.name);
      proposeFirstJohnemon(); // passe à la suite
    } else {
      console.log("\n>>> Ton nom ne dois contenir que des lettres. Recommence.\n");
      askForName();
    };
  })
} 
 
function proposeFirstJohnemon(){
  let poke1 = new Johnemon();
  let poke2 = new Johnemon();
  let poke3 = new Johnemon();

  rl.question(`\n++++++++++++++++++++++++++++++++\n\nChoisis ton premier JohnemOom:\n\n1: ${poke1.name}\n2: ${poke2.name}\n3: ${poke3.name}\n\n  `, (choice) => {
    if (/^[1-3]$/.test(choice)) {
      let chosenJohnemon;
      switch (choice) {
      case '1':
        chosenJohnemon = poke1;
        break;

      case '2':
        chosenJohnemon = poke2;
        break;

      case '3':
        chosenJohnemon = poke3;
        break;      
      }

      console.log(`\nTu as choisi: ${chosenJohnemon.name}  >>  " ${chosenJohnemon.catchPhrase} "\n
        Level:          ${chosenJohnemon.level}
        Attaque:        ${chosenJohnemon.attackRange}
        Défense:        ${chosenJohnemon.defenseRange}
        Points de vie:  ${chosenJohnemon.healthPool}`);

      johnemon = chosenJohnemon;
      //johnemonMaster.showCollection();

      saveGameState();

    } else {
      console.log("\nChoix invalide, tu dois entrer 1, 2 ou 3. Recommence !\n");
      proposeFirstJohnemon();
    }
  }); 
}

function mainMenu() {
  console.log("\n===============================\n\n -- Menu principal --\n\n1: Combattre\n2: Voir la collection\n3: soigner un JohemOon\n4: Quitter\n");
  rl.question("\nQue souhaites-tu faire ?", (choice) => {
    switch (choice) {

      case "1":
        starBattle();
        break;

      case "2":
        johnemonMaster.showCollection();
        mainMenu();
        break;

      case "3":
        healJohnemon();
        break;

      case "4":
        rl.close();
        break;

      default:
        console.log("\nChoix invalide. Recommence.");
        mainMenu();
        break;    
    }
  });
}


function startGame() {
  console.log("\n\nHey, salut toi! \n\nBienvenue dans l'univers de JohnemOon. \n");
  askForName();
}

startGame();
/*
chosenJohnemon.sayCatchPhrase();
chosenJohnemon.attack(johnemon2);
chosenJohnemon.gainExperience(johnemon2);
chosenJohnemon.evolve();
*/