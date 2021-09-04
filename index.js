const table = document.getElementById("table");

let status = 0;

let initValue = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
let ticktac = [...initValue];
let clickcount = 0;

const reset = () => {
  location.reload();
};

const checkIfWon = () => {
  if (
    ticktac[0][0] === ticktac[0][1] &&
    ticktac[0][1] === ticktac[0][2] &&
    (ticktac[0][0] !== -1 || ticktac[0][1] !== -1)
  ) {
    if (ticktac[0][0] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) {
      alert("player 0 won !!");
    }
    reset();
  } else if (
    ticktac[1][0] === ticktac[1][1] &&
    ticktac[1][1] === ticktac[1][2] &&
    (ticktac[1][0] !== -1 || ticktac[1][1] !== -1)
  ) {
    if (ticktac[1][0] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (
    ticktac[2][0] === ticktac[2][1] &&
    ticktac[2][1] === ticktac[2][2] &&
    (ticktac[2][0] !== -1 || ticktac[2][1] !== -1)
  ) {
    if (ticktac[2][0] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (
    ticktac[0][0] === ticktac[1][1] &&
    ticktac[1][1] === ticktac[2][2] &&
    (ticktac[0][0] !== -1 || ticktac[1][1] !== -1)
  ) {
    if (ticktac[0][0] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) {
      alert("player 0 won !!");
    }
    reset();
  } else if (
    ticktac[0][2] === ticktac[1][1] &&
    ticktac[1][1] === ticktac[2][0] &&
    (ticktac[0][2] !== -1 || ticktac[1][1] !== -1)
  ) {
    if (ticktac[0][2] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (
    ticktac[0][0] === ticktac[1][0] &&
    ticktac[1][0] === ticktac[2][0] &&
    (ticktac[0][0] !== -1 || ticktac[1][0] !== -1)
  ) {
    if (ticktac[1][0] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (
    ticktac[0][1] === ticktac[1][1] &&
    ticktac[1][1] === ticktac[2][1] &&
    (ticktac[0][1] !== -1 || ticktac[1][1] !== -1)
  ) {
    if (ticktac[0][1] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (
    ticktac[0][2] === ticktac[1][2] &&
    ticktac[1][2] === ticktac[2][2] &&
    (ticktac[0][2] !== -1 || ticktac[1][2] !== -1)
  ) {
    if (ticktac[0][2] === 1) {
      alert("player x won!!");
    } else if (ticktac[2][0] === 0) alert("player 0 won !!");
    reset();
  } else if (clickcount === 9) {
    alert("Neither player won!!");
    reset();
  }
};
let timerId;
table.addEventListener("click", (event) => {
  if (
    ticktac[event.target.closest("tr").rowIndex][event.target.cellIndex] !== -1
  )
    return;
  clickcount += 1;
  if (status === 0) event.target.innerHTML = "<img src='zero.png'></img>";
  else event.target.innerHTML = "<img src='cross.png'></img>";
  ticktac[event.target.parentNode.rowIndex][event.target.cellIndex] = status;

  status = status ? 0 : 1;
  clearTimeout(timerId);
  setTimeout(checkIfWon, 50);
});
