function Book(title, author, volume, price) {
    this.title = title; // 책의 제목
    this.author = author; // 책의 저자
    this.volume = volume; // 책의 분량
    this.price = price; // 책의 가격
}

var html = new Book("웹 표준의 정석", "Ko", "608", "28,000");
var youtube = new Book('유튜브 영상 만들기', 'Kim', '368', '16,000');
var python = new Book('점프 투 파이썬', 'Park', '352', '18,800');

var bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>");

for(var i=0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].author + "</p>");
}

document.write("<h1>책 가격으로 살펴보기</h1>");

for (var i = 0; i < bookList.length; i++) {
    document.write("<p>" + bookList[i].price + "</p>");
}