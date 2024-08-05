/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var suits = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  generateCard();

  var newCard = document.getElementById("newCard");
  newCard.addEventListener("click", generateCard);

  setInterval(generateCard, 10000);

  document.querySelectorAll(".config").forEach(function(x) {
    x.addEventListener("change", function(e) {
      changeWidthHeight();
    });
  });
};

function generateCard() {
  let randSuit = Math.floor(Math.random() * 4);
  let randNumber = Math.floor(Math.random() * 13) + 1;

  let colorSuit = randSuit > 1 ? "black" : "red";
  randNumber =
    randNumber == 11
      ? "J"
      : randNumber == 12
      ? "Q"
      : randNumber == 13
      ? "K"
      : randNumber == 1
      ? "A"
      : randNumber;

  var divCard = document.getElementById("cardPlay");
  divCard.innerHTML = `
          <div id="suitTopLeft" style="color:${colorSuit}">${suits[randSuit]}</div>
          <div id="number">${randNumber}</div>
          <div id="suitBottomRight" style="color:${colorSuit}">${suits[randSuit]}</div>
    `;
}

function changeWidthHeight() {
  var cardPlay = document.getElementById("cardPlay");

  var cardWidth = document.getElementById("cardWidth").value;
  var cardHeight = document.getElementById("cardHeight").value;

  cardPlay.style.width = cardWidth == "" ? "400px" : cardWidth + "px";
  cardPlay.style.height = cardHeight == "" ? "600px" : cardHeight + "px";
}
