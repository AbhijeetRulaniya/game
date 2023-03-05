"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 30;
document.querySelector(".highscore").textContent = 30;

document.querySelector(".guess").value = 23;

console.log(document.querySelector(".guess").value);

*/
let score = 20;
let number = Number(Math.trunc(Math.random() * 20) + 1);
let highscore = 0;
// document.querySelector(".number").textContent = number;

// Check DOM
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".tap").style.display = "inline-block";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  if (guess > number) {
    document.querySelector(".message").textContent = "📈 Too High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < number) {
    document.querySelector(".message").textContent = "📉 Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  }

  if (!guess || guess === 0) {
    console.log(
      (document.querySelector(".message").textContent = "⛔ No Number")
    );
  }
});
// Again DOM
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".tap").style.display = "none";
});
