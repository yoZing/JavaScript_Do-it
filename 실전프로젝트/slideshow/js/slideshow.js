// 이미지 태그들을 선택하기 위해 변수에 할당
let slides = document.querySelectorAll("#container img");

// 버튼 태그를 선택하기 위해 변수에 할당
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// 화면에 띄울 사진의 index를 control하는 카운트 변수 선언
let count = 0;

showSlide(count);

function showSlide(index) {
  for (let i  = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

// 버튼에 이벤트를 추가
prev.addEventListener("click", prevSlide);

function prevSlide() {
  if (count == 0) {
    count = slides.length - 1;
  } else {
    count--;
  }
  showSlide(count);
}

next.addEventListener("click", nextSlide);
function nextSlide() {
  if (count == slides.length - 1) {
    count = 0;
  } else {
    count++;
  }
  showSlide(count);
}

// 일정한 시간이 지나면 자동으로 슬라이드가 넘어가는 메서드
setInterval(nextSlide, 5000);

