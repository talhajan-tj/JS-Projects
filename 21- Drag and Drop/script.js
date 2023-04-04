const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
}
function dragEnd() {
  console.log("drag End");
}
function dragEnter() {
  console.log("drag Enter");
}
function dragLeave() {
  console.log("drag Leave");
}
function dragOver() {
  console.log("drag Over");
}
function dragDrop() {
  console.log("drag drop");
}
