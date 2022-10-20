//Age-ify
const yearOfBirth = 1980;
const yearFuture = 2027;
let age = yearFuture - yearOfBirth;
age = 47;
console.log(`You will be ${age} years old ${yearFuture}`);

//A dog age calculator
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
dogYear = 10;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears == true) {
  dogYear = dogYear * 7;
}
console.log(dogYear);
console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);

//Housey pricey.
const heightPeter = 10;
const depthPeter = 10;
const widthPeter = 10;
const gardenSizeInM2Peter = 100;
const realyCostPricePeterH = 2500000;
let volumeInMetersPeterH = heightPeter * depthPeter * widthPeter;
console.log(volumeInMetersPeterH);
let calculationPricePeterH =
  volumeInMetersPeterH * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(calculationPricePeterH);
let goodPricePeterH = calculationPricePeterH > realyCostPricePeterH;
console.log(goodPricePeterH);
const heightJulia = 8;
const depthJulia = 11;
const widthJulia = 5;
const gardenSizeInM2Julia = 70;
const realyCostPriceJuliaH = 100000;
let volumeInMetersJuliaH = heightJulia * depthJulia * widthJulia;
console.log(volumeInMetersJuliaH);
let calculationPriceJuliaH =
  volumeInMetersJuliaH * 2.5 * 1000 + gardenSizeInM2Julia * 300;
console.log(calculationPriceJuliaH);
let goodPriceJuliaH = calculationPriceJuliaH > realyCostPriceJuliaH;
console.log(goodPriceJuliaH);

// Ez Namey.
const firstWords = [
  "easy",
  "amazing",
  "corporate",
  "cool",
  "creative",
  "inspiring",
  "great",
  "interesting",
  "nostalgic",
  "laconic",
];
const secondWords = [
  "logical",
  "specific",
  "capacious",
  "dynamic",
  "simple",
  "necessary",
  "far - sighted",
  "excellent",
  "wonderful",
  "dynamic",
];
const startupName = secondWords["logical"] + firstWords["great"];
console.log("Startupname is: logical great");
