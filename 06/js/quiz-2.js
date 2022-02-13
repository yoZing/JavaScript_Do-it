var r = prompt("원의 반지름은? (cm)");

var circle1 = new Circle(r);
document.write("반지름의 길이가 " + r + "인 원의 둘레는 " + circle1.getPerimeter() + "이고, 넓이는 " + circle1.getArea() + "입니다.");

function Circle(radius) {
  this.radius = radius,
  this.getArea = function() {
    return Math.floor(Math.pow(this.radius, 2) * Math.PI);
  }
  this.getPerimeter = function() {
    return Math.floor(2 * Math.PI * radius);
  }
}