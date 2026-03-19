function vale() {
  let agree = prompt("Is that a yes or a no?😊");
  let h2 = document.querySelector("h2");

  if (agree === "yes" || agree === "Yes" || agree === "YES") {
    h2.innerHTML =
      "I am glad you said yes😍" +
      "<br/>" +
      "<div><a href=" +
      "https://www.youtube.com/watch?v=R4o12lehB84" +
      "target=" +
      "_blank" +
      ">" +
      "<span class=" +
      "link" +
      ">Play me" +
      "</span></a></div>";
  } else {
    if (agree === "no" || agree === "No" || agree === "NO") {
      alert("🙁😭😭");
    }
  }
}

let yesButton = document.querySelector("Button");
yesButton.addEventListener("click", vale);
