function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var colorContainer = document.querySelector(".container");
  colorContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  console.log(red);
  console.log(green);
  console.log(blue);
}
var btn = document.getElementById("change-color-button");
btn.addEventListener("click", () => {
  getRandomColor();
});

// setInterval(() => {
//   var red = Math.floor(Math.random() * 256);
//   var green = Math.floor(Math.random() * 256);
//   var blue = Math.floor(Math.random() * 256);
//   // var bgColor = ;
//   // var colorContainer = "rgb(" + red + "," + green + "," + blue + ")";
//   var colorContainer = document.querySelector(".container");
//   colorContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }, 500);
