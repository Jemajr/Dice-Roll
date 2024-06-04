var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var leftImgStr = "./images/dice" + randomNumber1 + ".png";
var rightImgStr = "./images/dice" + randomNumber2 + ".png";
var leftIMG = document
  .querySelector("img.img1")
  .setAttribute("src", leftImgStr);
var rightIMG = document
  .querySelector("img.img2")
  .setAttribute("src", rightImgStr);

if (randomNumber1 > randomNumber2) {
  var winMessage = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  winMessage = "Player 2 wins!🚩";
} else {
  winMessage = "Draw";
}

document.querySelector("h1").textContent = winMessage;
