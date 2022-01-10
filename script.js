function Changebground() {
    var bg = document.getElementById('bground');
    bg.classList.toggle('xmas');
}

window.onload = function() {
    LoadFirst();
    LoadSecond();
    LoadThird();
    LoadFourth();
    LoadFifth();
}
function LoadFirst() {
    let id = null;
    const first_bar_progress = document.querySelector('.first-progress');
    let pos = 0;
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 532) {
            clearInterval(id);
        } else {
            pos+=4;
            first_bar_progress.style.width = pos + "px";
        }
    } 
}
function LoadSecond() {
    let id = null;
    const second_bar_progress = document.querySelector('.second-progress');
    let pos = 0;
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 332) {
            clearInterval(id);
        } else {
            pos+=4;
            second_bar_progress.style.width = pos + "px";
        }
    } 
}

function LoadThird() {
    let id = null;
    const third_bar_progress = document.querySelector('.third-progress');
    let pos = 0;
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 432) {
            clearInterval(id);
        } else {
            pos+=4;
            third_bar_progress.style.width = pos + "px";
        }
    }
}

function LoadFourth() {
    let id = null;
    const fourth_bar_progress = document.querySelector('.fourth-progress');
    let pos = 0;
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 232) {
            clearInterval(id);
        } else {
            pos+=4;
            fourth_bar_progress.style.width = pos + "px";
        }
    }
}
function LoadFifth() {
    let id = null;
    const fifth_bar_progress = document.querySelector('.fifth-progress');
    let pos = 0;
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 1920) {
            clearInterval(id);
        } else {
            pos+=4;
            fifth_bar_progress.style.width = pos + "px";
        }
    }
}
