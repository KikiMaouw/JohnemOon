const students = [
  
  'Oli', 'Via',
  'No', 'Ra',
  'Dia', 'Na',
  'Mo', 'Hab',
  'Ly' , 'Ne',
  'Ja' , 'Son',
  'Séba' , 'Stien',
  'Cris' , 'Telle',
  'Fa' , 'Rid',
  'Ju' , 'Lien',
  'Edou' , 'Ard',
  'Jo' , 'Sias',
  'Benj' , 'Amin',
  'Mat' , 'Teo',
  'Re' , 'Da',
  'Dona' , 'Tien',
  'Re' , 'Naud',
  'Anto' , 'Ine',
  'Vin' , 'Ciane',
  'Sté' , 'Phen',
  'Moha' , 'Med',
  'Ha' ,'Kim',
  'Pi' , 'Erre',
  'Hu' ,'Go',
  'Thé' ,'O',
  'Max' ,'Ime'
]

class Johnemon {
  constructor() {
    this.name = this.generateRandomName();
    this.level = 1;
    this.experienceMeter = 0;
    this.attackRange = this.getRandomNumber(8, 1);
    this.defenseRange = this.getRandomNumber(3, 1);
    this.healthPool = this.getRandomNumber(30, 10);
    this.catchPhrase = this.generateCatchPhrase();
  }
 
  generateRandomName() {
    const randomStudent1 = students[Math.floor(Math.random() * students.length)];
    const randomStudent2 = students[Math.floor(Math.random() * students.length)];
    return `${randomStudent1}${randomStudent2}`;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCatchPhrase() {
    const phrases = ["Wambooooooo", "On va les massacrer!","Pfff même pas peur","Je vais n'en faire qu'une bouchée", "JohnemOon, go!","Go go gooooo!!!","Come on baby!","Ho nonnnn j'ai pas envie"];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  attack(defender) {
    const damage = this.getRandomNumber(this.attackRange * this.level, this.attackRange) - defender.defenseRange;
    defender.healthPool -= damage;
    console.log(`${this.name} attacked ${defender.name} and dealt ${damage} damage!`);
  }

  gainExperience(opponentLevel) {
    const experienceGain = this.getRandomNumber(1, 5) * opponentLevel;
    this.experienceMeter += experienceGain;
    console.log(`${this.name} gained ${experienceGain} experience points!`);
    if (this.experienceMeter >= this.level * 100) {
      this.evolve();
    }
  }

  evolve() {
    this.level += 1;
    const attackIncrease = this.getRandomNumber(1, 5);
    const defenseIncrease = this.getRandomNumber(1, 5);
    const healthIncrease = this.getRandomNumber(1, 5);

    this.attackRange += attackIncrease;
    this.defenseRange += defenseIncrease;
    this.healthPool += healthIncrease;

    console.log(`${this.name} evolved into a higher level! New stats: Level ${this.level}, Attack Range ${this.attackRange}, Defense Range ${this.defenseRange}, Health Pool ${this.healthPool}`);
  }

  sayCatchPhrase() {
    console.log(`${this.name} says: "${this.catchPhrase}"`);
  }
}

module.exports = Johnemon
