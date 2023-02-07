const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollDiceBtn = document.getElementById("roll-dice");

rollDiceBtn.addEventListener("click", function () {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = dice1Value;
  dice2.textContent = dice2Value;
});
