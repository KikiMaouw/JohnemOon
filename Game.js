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
  }, 2000)

  setTimeout(() => {
    mainMenu();
  }, 3000)
}

function askForName() {   
    rl.question("Quel est ton nom petit scarabé ?\n", (name) => {
      if (/^[A-Za-zÀ-ÿ]+$/.test(name)) { 
      console.log(`\n..........................................................\n\nBienvenue \x1b[1m\x1b[34m${name}\x1b[0m`); //crochet 1m pour le gras et 34m pour le bleu
      player.name = name;
      //console.log(player.name);

      proposeFirstJohnemon(); // passe à la prochaine fonction
    } else {
      console.log("\n>>>\x1b[31m Ton nom ne doit contenir que des lettres.\x1b[0m Recommence.\n..........................................................\n");
      askForName();
    };
  });
} 
 
function proposeFirstJohnemon(){
  let poke1 = new Johnemon();
  let poke2 = new Johnemon();
  let poke3 = new Johnemon();

  rl.question(`\nChoisis ton premier JohnemOom:\n\n1: ${poke1.name}\n2: ${poke2.name}\n3: ${poke3.name}\n\n  `, (choice) => {
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

      console.log(`\n..........................................................\n\nTu as choisi: ${chosenJohnemon.name}  >>  " ${chosenJohnemon.catchPhrase} "\n
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
  console.log("\n..........................................................\n\n -- Menu principal --\n\n1: Combattre\n2: Voir la collection\n3: Soigner un JohemOon\n4: Quitter\n");
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
        console.log('\n\x1b[31mChoix invalide\x1b[0m. Recommence.');
        mainMenu();
        break;    
    }
  });
}

function starBattle (){
  console.log("\nHooo un Johnemon sauvage devant nous !!!");
  const wildJohnemon = new Johnemon("Sauvage");
}

function startGame() {
  console.log("\n..........................................................\n\nHey, salut toi! \n\nBienvenue dans l'univers de JohnemOon. \n");
  askForName();
}

startGame();

