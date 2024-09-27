

class JohnemonArena {
  constructor(johnemon_1, johnemon_2) {
    this.johnemon_1 = johnemon_1;
    this.johnemon_2 = johnemon_2;
  }

  startBattle() {
    console.log(`\nUn combat commence entre ${this.johnemon_1.name} et ${this.johnemon_2.name} !`);
    while (this.johnemon_1.healthPool > 0 && this.johnemon_2.healthPool > 0) {
      this.johnemon_1.attack(this.johnemon_2);

      if (this.johnemon_2.healthPool <= 0 ) {
        console.log(`${this.johnemon_2.name} est KO !!! ${this.johnemon_1.name} remporte le combat :)`);
        break;
      }
      this.johnemon_2.attack(this.johnemon_1);

      if (this.johnemon_1.healthPool)
    }
  }

  chooseJohnemon() {
  	
  }

  startRound(selectedJohnemon) {
  	
  }

  playerAction(selectedJohnemon) {
  	
  }

  attack(selectedJohnemon) {
    
  }

  tryToCatch() {
    

  }

  calculateDamage(attackRange, defenseRange) {
    
  }

  wildJohnemonAction() {
    
  }

  checkBattleStatus() {
    
  }

  startNewRound() {
    
  }

  endBattle() {
    
  }
}

module.exports = JohnemonArena