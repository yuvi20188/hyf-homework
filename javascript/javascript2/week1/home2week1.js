// 1.1. Find the shortest word.
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const minLength = Math.min.apply(
  Math,
  danishWords.map(function (item) {
    return item.length;
  })
);
const minWords = danishWords.filter(function (item) {
  if (item.length === minLength) return item;
});
console.log(minWords.join(" "));

// 1.2. Find and count the Danish letters.
const danishString2 = "Blå grød med røde bær".match(/[åØÆÅøæ]/g).length;
console.log(danishString2);

// 3. Generator.
// create field for input.
const animalNames = [
  "a crying butterfly",
  "a happy raccoon",
  "a beautiful deer",
  "a slender doe",
  "a cunning serpent",
  "a brave lion",
  "an evil echidna",
  "a cowardly hare",
  "a fast horse",
  "a sleeping sloth",
];

// get random aninal name from array.
function randomAnimal() {
  return animalNames[Math.floor(Math.random() * animalNames.length)];
}
const myForm = document.querySelector("#mySpiritAnimalForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userName = document.querySelector("#mySpiritAnimalInput").value;
  const resultSpan = document.querySelector("#mySpiritAnimalResult");
  if (!userName) resultSpan.innerHTML = "Error, there is no name!!!";
  else {
    resultSpan.innerHTML = `${userName} - ${randomAnimal()}`;
  }
});
