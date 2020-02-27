const btn = document.getElementById("btn");
const section = document.getElementById("section");

const sum = (a, b) => a + b;
console.log(sum(100, 2));

let counter = 0;
let p;

const increase = num => (counter = ++num);

function createP() {
  p = document.createElement("p");
  section.appendChild(p);
  p.innerHTML = counter;
}
createP();

function updateP() {
  p.innerHTML = counter;
}
btn.addEventListener("click", () => {
  section.classList.toggle("add-background");
  increase(counter);
  updateP();
});
