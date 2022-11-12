function listen() {
  let inputArea = document.getElementById("input-area");
  let outputArea = document.getElementById("output-area");

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.start();
  recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript;
    inputArea.innerHTML = event.results[0][0].transcript;
  };
}
recognition.onresult = function (event) {
  let transcript = event.results[0][0].transcript;
  if (transcript.includes("Hello my name is Benjamin")) {
    outputArea.innerHTML = "Nice to meet you Benjamin!";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("What is my name")) {
    outputArea.innerHTML = "Your name is Benjamin";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("Add fishing to my todo")) {
    outputArea.innerHTML = "Fishing added to the todo list!";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("Add singing in the shower to my todo")) {
    outputArea.innerHTML = "Singing added to todo list";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("Remove fishing from my todo")) {
    outputArea.innerHTML = "Fishing has been removed from your todo list";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("What day is it today?")) {
    outputArea.innerHTML = "November 12, 2022";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("What is on my todo?")) {
    outputArea.innerHTML =
      "you have 2 things to do - fishing and singing in the shower";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else if (transcript.includes("What is 3*3")) {
    outputArea.innerHTML = "9";
    inputArea.innerHTML = event.results[0][0].transcript;
  } else transcript.includes("Set a timer for 4 minutes");
  {
    function myFunction() {
      alert("Timer is ready");
    }
    <button onclick="setTimeout(myFunction, 240000)">Click Me</button>;
    inputArea.innerHTML = event.results[0][0].transcript;
  }
};
