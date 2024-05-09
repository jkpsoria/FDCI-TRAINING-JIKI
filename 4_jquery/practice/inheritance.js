// Character prototype
function Character(name, health) {
  this.name = name;
  this.health = health;
}

Character.prototype.printStats = function () {
  console.log(`${this.name} - Health: ${this.health}`);
};

// Player constructor
function Player(name, health, level) {
  // Inherit from Character prototype
  Character.call(this, name, health);
  this.level = level;
}

// Inherit Player from Character
Player.prototype = Object.create(Character.prototype);
// Player.prototype.constructor = Player;

// Implement levelUp method for Player
Player.prototype.levelUp = function () {
  this.level++;
  this.health += this.level;
  console.log(`${this.name} leveled up! New level: ${this.level}`);
};

// Implement attack method for Player
Player.prototype.attack = function (target) {
  const damage = 10;
  if (this.health > 0) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.health -= damage;
    target.health <= 0 &&
      console.log(`${target.name} unalived. ${this.name} victory!`);
  }
};

// Enemy constructor
function Enemy(name, health) {
  // Inherit from Character prototype
  Character.call(this, name, health);
}

// Inherit Enemy from Character
Enemy.prototype = Object.create(Character.prototype);
// Enemy.prototype.constructor = Enemy;

// Implement attack method for Enemy
Enemy.prototype.attack = function (target) {
  const damage = 10;
  if (this.health > 0) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.health -= damage;
    target.health <= 0 && console.log(`${this.name} Victory!`);
  }
};

// Create instances and demonstrate functionalities
const player = new Player("Hero", 30, 1);
const enemy = new Enemy("Monster", 50);

// Demonstrate functionalities

player.printStats();
enemy.printStats();

player.attack(enemy);
enemy.attack(player);

player.levelUp();
