//1. Warmup
// 1.1
function showMessage(text) {
  console.log(`${text}`);
}
setTimeout(showMessage, 2500, "Called after 2.5 seconds");
// 1.2.
function notThisFunctionName(delay, stringToLog) {
  setTimeout(function () {
    console.log("This string logged after 5 seconds");
  }, 5000);
  setTimeout(function () {
    console.log("This string logged after 3 seconds");
  }, 3000);
}
notThisFunctionName(5, "This string logged after 5 seconds");
notThisFunctionName(3, "This string logged after 3 seconds");

// 1.3.

const result = document.querySelector("#Counter");
const CounterContainer4 = document.querySelector("#timeout");
const myTimeout = function () {
  setTimeout(function () {
    console.log("Called after 5 seconds");
  }, 5000);
};
CounterContainer4.addEventListener("click", myTimeout);

// 1.4.

const myFunction1 = function earthLogger() {
  console.log("Earth");
};

const myFunction2 = function saturnLogger() {
  console.log("Saturn");
};
function planetLogFunction(earthLogger) {
  earthLogger();
}
planetLogFunction(earthLogger);

// 1.5.

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
  if (navigator.geolocation.getCurrentPosition(success)) {
    const Counter1 = document.querySelector("#Counter1");
    const CounterContainer5 = document.querySelector("#timeout");
    const myTimeout1 = function () {
      setTimeout(function () {
        console.log("log out after 1 seconds");
      }, 1000);
    };
    CounterContainer5.addEventListener("click", myTimeout1);
  } else navigator.geolocation.getCurrentPosition(error);
  {
    status.textContent = "Unable to retrieve your location";
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

//2.Function as a variable
const fn1 = function () {
  console.log("function1");
};

const anotherFunction = function fn2() {
  console.log("function2");
};
const thirdFunction = function fn3() {
  console.log("function3");
};
const arr = [fn1, anotherFunction, thirdFunction];
arr.forEach(show);
function show(item) {
  console.log(item);
}
arr[0]();
const obj = {
  fn3: function () {
    console.log("function3");
  },
};
obj.fn3();
