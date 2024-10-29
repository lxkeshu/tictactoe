let reset = document.querySelector("#reset");
let container = document.querySelector("#container");
const boxes = [];
for (let i = 0; i < 9; i++) {
  const button = document.createElement("button");
  boxes.className = "box";
  boxes.push(button);
  container.appendChild(button);
}
let turn0 = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let h1 = document.createElement("h1");

const displayWinner = (val) => {
  container.innerHTML = "";
  h1.style.color = "#fff";
  h1.style.fontSize = "3rem";
  h1.innerText = `Winner is ${val}`;
  container.append(h1);
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    h1.remove();
    container.append(box);
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBtns = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val && pos1val == pos2val && pos1val == pos3val) {
      disableBtns();
      displayWinner(pos1val);
    }
  }
};