//Item array removal.
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const indexToRemove = names.indexOf(nameToRemove);
console.log(nameToRemove, "found at index =", indexToRemove);
names.splice(indexToRemove, 1);

//When will we be there?
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function returnTime(data) {
  const time = data.destinationDistance / data.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = returnTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//Series duration of my life.
const seriesDurations = [
  {
    title: "Matchmakers",
    days: 0,
    hours: 7,
    minutes: 0,
  },
];
function logOutSeriesText() {
  let allLifeHour = 365 * 24 * 80;
  console.log(allLifeHour);
  const hours = 7;
  let qualityLife = (hours * 100) / allLifeHour;
  return qualityLife;
  console.log(qualityLife);
}
const qualityLife = logOutSeriesText(seriesDurations);
console.log(`Matchmakers took ${qualityLife} of my life`);

//Save a note.
const notes = [];
function saveNote(content, id) {
  const content = obj;
  const id = obj1;
  const obj = {
    content: "Pick up groceries",
    id: 1,
  };
  const obj1 = {
    content: "Do laundry",
    id: 2,
  };
  
  notes.push(obj);
  notes.push(obj1);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//Get a note

