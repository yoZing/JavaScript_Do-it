var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

// 엔터키 이벤트 등록
var pressEnter = document.querySelector("#item");
pressEnter.addEventListener("keypress", function(e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    addList();
  }
});

function addList() {
  var item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector('#item').value = "";
    document.querySelector('#item').focus();
  }
  showList();
}

function showList() {
  var list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id =" + i + "'>X</span>" + "</li>";
  }
  list += "</ul>";

  document.querySelector('#itemList').innerHTML = list;

  var remove = document.querySelectorAll('.close');

  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  // console.log(this);
  var id = this.getAttribute("id");
  itemList.splice(id, 1);

  showList();
}