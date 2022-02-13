var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].onclick = showBig;
}

function showBig() {
  var newPic = this.src;
  bigPic.setAttribute("src", newPic);
}

// 무명함수로 바로 처리할 수도 있다.
// for (let i = 0; i < smallPics.length; i++) {
//   smallPics[i].onclick = function () {
//     bigPic.src = this.src;
//   }
// }