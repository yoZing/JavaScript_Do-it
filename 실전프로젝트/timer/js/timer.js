let min, sec;
let timer;



function startTimer() {
    min = document.getElementById('startMin').value;
    sec = document.getElementById('startSec').value;

    if (min == "") min = 0;

    if (sec < 0) sec = 0;

    timer = setInterval(countTimer, 1000);
}

function resetTimer() {
    document.getElementById('startMin').value = "";
    document.getElementById('startSec').value = "";
    document.getElementById('display').innerText = "";
}

function countTimer() {
    if (sec != 0) {
        sec--;
        document.getElementById('display').innerText = min + "분" + sec + "초 남았습니다.";
    } else {
        if (min != 0) {
            min--;
            sec = 59;
        } else {
            clearInterval(timer);
            document.getElementById('display').innerText = "타이머 종료";
        }
    }
}