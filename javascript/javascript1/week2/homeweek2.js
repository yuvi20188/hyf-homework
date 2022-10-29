//Flight booking fullname function.

function getFullname(name1, name2, useFormalName) {
  let fullname = name1 + " " + name2;
  if (useFormalName == true) {
    return "LORD" + " " + fullname;
  } else if (useFormalName == false) {
    return fullname;
  }
}
console.log(getFullname("Benjamin", "Hughes", false));
console.log(getFullname("Benjamin", "Hughes", true));

//Weather wear.

function weather(_WinterTemperature); {
  const _WinterTemperature = "-25";
  const veryWarmClothes = "pullover, jacket, hat";
  const veryEasyClothes = "(T - shirt), shorts";
  if (_WinterTemperature == true) {
    return veryWarmClothes;
  } else if (_WinterTemperature == false) {
    return veryEasyClothes;
  }
}
console.log(weather(_WinterTemperature));

//Student manager.

const class07Students = ["studentname", 2, 3, 4, 5, 6];
function addStudentToClass(studentName) {
  class07Students.push("King of Denmart Margrete");
  if ("King of Denmart Margrete" == true) {
    return "King of Denmart Margrete"; 
   } 
}
console.log([1, 2, 3, 4, 5, 6, "King of Denmart Margrete"]);
function getNumberOfStudents() {
  let studentseven = "King of Denmart Margrete";
  if (studentseven == true) {
    return studentseven;
  } else if (studentseven == false) {
    return "Cannot add more students to class 07";
  }  
}
console.log(getNumberOfStudents);

//Event application.

const getEventWeekday = new Date('October 30, 2022 18:47:30');
const day5 = getEventWeekday.getDay();
console.log(day5);


