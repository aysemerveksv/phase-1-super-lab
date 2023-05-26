// Write your classes here
class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

// Testing the classes
const oak = new Deciduous("Deciduous", "Oak");
console.log(oak.species); // Deciduous
console.log(oak.name); // Oak
console.log(Deciduous.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.

const pine = new Evergreen("Evergreen", "Pine");
console.log(pine.species); // Evergreen
console.log(pine.name); // Pine
console.log(Evergreen.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
