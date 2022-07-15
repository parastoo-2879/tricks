// function
function _rotate1() {
  // let x = document.querySelectorAll(".buttons>span");
  // console.log(x);
  // x[0].;
  document.getElementsByClassName("box1")[0].style.transform = "rotateX(90deg)";
  document.getElementsByClassName("box2")[0].style.transform =
    "rotateX(-90deg)";
}
function _rotate2() {
  document.getElementsByClassName("box1")[0].style.transform =
    "rotateX(180deg)";
  document.getElementsByClassName("box2")[0].style.transform =
    "rotateX(-180deg)";
}
function _rotate3() {
  document.getElementsByClassName("box1")[0].style.transform =
    "rotateX(270deg)";
  document.getElementsByClassName("box2")[0].style.transform =
    "rotateX(-270deg)";
}
function _rotate4() {
  document.getElementsByClassName("box1")[0].style.transform =
    "rotateX(360deg)";
  document.getElementsByClassName("box2")[0].style.transform =
    "rotate(-360deg)";
}
