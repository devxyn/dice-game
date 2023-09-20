const diceRoll = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;

  const dice2 = Math.floor(Math.random() * 6) + 1;

  const winner = document.querySelector("h1");

  document.getElementById("img1").src = `images/dice${dice1}.png`;

  document.getElementById("img2").src = `images/dice${dice2}.png`;

  if (dice1 > dice2) {
    winner.innerHTML = "Player 1 Wins";
  } else if (dice1 < dice2) {
    winner.innerHTML = "Player 2 Wins";
  } else {
    winner.innerHTML = "Draw!";
  }
};
