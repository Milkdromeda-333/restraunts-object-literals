const popeyes = {
  colors: ['orange', 'white'],
  food: 'chicken',
  myOrder: [
    'spicy chicken sandwhich with a side of fries and mashed potatoes with gravy',
    'shrimp tackle box with a side of fries and an 8 count of nuggets',
  ],
  slogan() {
    console.log('Love that chicken from Popeyes!');
  },
    describe () {
      console.log(`This restraunt's logo colors are ${this.colors.join(' and ')} and it serves ${this.food}.`);
    }
};

const pandaExpress = {
  colors: ["red", "white"],
  food: "asian cuisine",
  myOrder: "orange chicken bowl with white rice and a side of honey almond shrimp and a small side of cream cheese rangoons",
  slogan() {
    console.log('Think inside the box. Hot Chinese food. Enjoy.')
  }
}

console.log(`My favorite food from Popeyes is the ${popeyes.myOrder[1]}. Or, the ${popeyes.myOrder[0]}!`); // outputs "My favorite food from Popeyes is the shrimp tackle box with a side of fries and an 8 count of nuggets. Or, the spicy chicken sandwhich with a side of fries and mashed potatoes with gravy!"

popeyes.describe(); // outputs "This restraunt's logo colors are orange and white and it serves chicken."

pandaExpress.slogan(); // outputs "Think inside the box. Hot Chinese food. Enjoy."

pandaExpress.colors.push('black');
console.log(pandaExpress.colors[2]); // outputs "black"
