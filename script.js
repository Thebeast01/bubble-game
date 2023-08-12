'use strict';
var timer = 60;
var score = 0;
var newHit;
function getNewHit() {
  newHit = Math.floor(Math.random() * 20);
  document.querySelector('#hit').textContent = newHit;
}
function makeBubble() {
  var clutter = '';

  for (var i = 1; i <= 196; i++) {
    var random = Math.floor(Math.random() * 50);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector('.bubble-box').innerHTML = clutter;
}
function timeLimit() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#timer').textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        '.bubble-box'
      ).innerHTML = `<h1>Game Over </h1> <h3> `;
    }
  }, 1000);
}
function increaseScore() {
  score += 10;
  document.querySelector('#score').textContent = score;
}
document
  .querySelector('.bubble-box')
  .addEventListener('click', function (dets) {
    var hitValue = Number(dets.target.innerHTML);
    if (hitValue == newHit) {
      increaseScore();
      makeBubble();
      getNewHit();
    } else {
    }
  });
timeLimit();
makeBubble();
getNewHit();
