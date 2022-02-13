var check = document.querySelector("#check");
var reset = document.querySelector("#reset");
var display = document.querySelector("#display");
var counter = document.querySelector("#counter");
var count = 0;

var randomNumber = Math.floor(Math.random() * 100 + 1);

check.addEventListener("click", finding);
document.querySelector("#try").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    finding();
  }
});

function finding() {
  var userNumber = document.querySelector("#try").value;
  if (userNumber <= 100 && userNumber >= 1) {
    if (userNumber > randomNumber) {
      display.innerHTML = "Down!";
      console.log("this");
    } else if (userNumber < randomNumber) {
      display.innerHTML = "Up!";
      console.log("that");
    } else {
      display.innerHTML = "<span style='color : red'>정답입니다!</span>"
    }
    count++;
    counter.innerHTML = "시도 횟수 : " + count + "회";

  } else {
    alert("1~100까지의 수를 입력해주세요.");
  }
}