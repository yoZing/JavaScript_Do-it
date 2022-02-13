var motivation = [];

motivation[0] = "신이 우리에게 주신 선물";
motivation[1] = "웃음은 건강";
motivation[2] = "행복은 건강의 시초";

  var rnd = Math.floor(Math.random() * motivation.length);
  document.write("<p>&quot;" + motivation[rnd] + "&quot;</p>");