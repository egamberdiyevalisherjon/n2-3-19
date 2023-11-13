let items = ["🍇", "🍌", "🍏", "🍐", "🍓"];

let playBtn = document.querySelector(".play-btn");
let screenItems = document.querySelectorAll(".item");
let total = document.querySelector(".balance > .amount");

let usedItems = [];
function randomize() {
  usedItems = [];
  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * items.length);
    screenItems[i].innerHTML = items[r];
    usedItems.push(items[r]);
  }
}

randomize();
playBtn.addEventListener("click", () => {
  total.innerHTML = +total.innerHTML - 10;
  randomize();
  setTimeout(randomize, 200);
  setTimeout(randomize, 400);
  setTimeout(randomize, 600);
  setTimeout(randomize, 800);
  setTimeout(randomize, 1000);
  setTimeout(randomize, 1200);
  setTimeout(randomize, 1400);
  setTimeout(randomize, 1600);
  setTimeout(randomize, 2000);

  setTimeout(() => {
    let yutuq = 0;
    if (usedItems[0] === usedItems[1])
      if (usedItems[1] === usedItems[2]) yutuq = 15;
      else yutuq = 5;
    else if (usedItems[1] === usedItems[2]) yutuq = 5;
    else yutuq = 0;

    total.innerHTML = +total.innerHTML + yutuq;
    alert("Siz $" + yutuq + " yutib oldingiz.");
  }, 2200);
});
