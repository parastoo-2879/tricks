let _inputfield = document.getElementsByClassName("inputfield")[0];
let _itemscontain = document.getElementsByClassName("itemscontain")[0];

function add() {
  let _p = document.createElement("p");
  _p.innerHTML = "+" + "  " + _inputfield.value;
  _p.classList.add("paraghraph");
  _itemscontain.appendChild(_p);

  _inputfield.value = " ";
  _p.addEventListener("click", function () {
    _p.style.textDecoration = "3px red line-through";
  });
  _p.addEventListener("dblclick", function () {
    _itemscontain.removeChild(_p);
  });
}
