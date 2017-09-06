console.log('client.js loaded');

const HOW_FUSSY = 6;

class SmallChild {
  constructor(name = "") {
    // if (age > 0) {
    //   this.age = age;      
    // } else {
    //   console.log('age must be a number > 0 (denoted in months)');
    // }

    if (typeof name == 'string' && name.length > 0) {
      this.name = name;
    } else {
      console.log('please enter a string for a name');
    }

  } // end constructor 
} // end SmallChild

class InfantChild extends SmallChild {
  constructor(name) {
    super(name);
    this.fussOne = 'tired';
    this.fussTwo = 'hungry';
    this.fussFactor = 70;
  } // end constructor
}

class ToddlerChild extends SmallChild {
  constructor(name) {
    super(name);
    this.fussOne = 'bored';
    this.fussTwo = 'willful';
    this.fussFactor = 20;
  } // end constructor
}

let jamie = new InfantChild('Jamie');
let ellie = new ToddlerChild('Ellie');
let charlotte = new ToddlerChild('Charlotte');
let davey = new ToddlerChild('Davey');

let theChildren = [
  jamie,
  ellie,
  charlotte,
  davey
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// displays the fussiness of the passed array of children
function fussBudget(children) {

  for (var i = 0; i < children.length; i++) {
    let child = children[i];
    let fussRandom = randomNumber(1, 100);

    if (fussRandom < child.fussFactor) {
      console.log(child.name + ' is fussy. Probably because...');


      let typeRandom = randomNumber(1, 100);
      if (typeRandom < fussRandom) {
        console.log("...they're " + child.fussOne);
      } else {
        console.log("...they're " + child.fussTwo);
      }

      console.log('\n');
    }
  }

} // end fussBudget

// figure out the fuss-fuss hwoever many times we set in the global
for (var i = 0; i < HOW_FUSSY; i++) {
  fussBudget(theChildren);
}