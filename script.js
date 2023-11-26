"use strict";
const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");
const panelArr = Array.from(panels);
console.log(panelArr);

container.addEventListener("click", function (e) {
  const selected = e.target.closest(".panel");
  if (!selected) return;
  panelArr.forEach((panel) => {
    panel.classList.remove("active");
  });
  selected.classList.toggle("active");
});
