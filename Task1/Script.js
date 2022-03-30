const openEx0 = () => {
    let description = document.getElementById("ex0");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC0");
    description1.style.border = "solid";
}
const openEx1 = () => {
    let description = document.getElementById("ex1");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC1");
    description1.style.border = "solid";
}
const openEx2 = () => {
    let description = document.getElementById("ex2");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC2");
    description1.style.border = "solid";
}
const openEx3 = () => {
    let description = document.getElementById("ex3");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC3");
    description1.style.border = "solid";
}
const openEx4 = () => {
    let description = document.getElementById("ex4");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC4");
    description1.style.border = "solid";
}
const openEx5 = () => {
    let description = document.getElementById("ex5");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC5");
    description1.style.border = "solid";
}

const example0 = () => {
    let name = prompt("Введите ваше имя:");
    while (!name.trim()) {
        alert("Некорректные данные");
        name = prompt("Введите ваше имя:");
    }
    sessionStorage.setItem("name", name);
    alert("Здравствуйте, " + sessionStorage.getItem("name") + "!");
};

const example1 = () => {
    let base = parseInt(prompt("Введите длину основания треугольника: "), 10);
    while (isNaN(base) || base <= 0) {
        alert("Некорректные данные");
        base = parseInt(prompt("Введите длину основания треугольника: "), 10);
    }
    let height = parseInt(prompt("Введите высоту треугольника: "), 10);
    while (isNaN(height) || height <= 0) {
        alert("Некорректные данные");
        height = parseInt(prompt("Введите высоту треугольника: "), 10);
    }
    let res = (base * height) / 2;
    alert("Площадь треугольника: " + res);
};

const example2 = () => {
    let str1 = prompt("Введите первую строку");
    let str2 = prompt("Введите вторую строку");
    if (str1.length == str2.length) {
        alert("Строки одинаковой длины");
    } else alert("Строки разной длины");
};

const example3 = () => {
    let mas = [];
    for (let i = 0; i < 5; i++) {
        mas.push(parseInt(prompt("Введите число №" + (i + 1)), 10));
        while (isNaN(mas[i])) {
            mas.pop();
            alert("Введите число!");
            mas.push(parseInt(prompt("Введите число №" + (i + 1)), 10));
        }
    }
    alert("Максимальное число: " + Math.max(...mas) + ", Минимальное число: " + Math.min(...mas));
};

const example4 = () => {
    let timer = document.getElementById("timer");
    timer.style.display = "flex";
};


// let time = document.getElementById("time");
// let pause = false;
// let sec = 0;
// let min = 0;
// let pauseTime;
//
// const timerLogic = () => {
//     let seconds = parseInt(prompt("Введите количество секунд: "), 10);
//     let minutes = 0;
//     while (isNaN(seconds) || seconds <= 0) {
//         alert("Некорректные данные");
//         seconds = parseInt(prompt("Введите количество секунд: "), 10);
//     }
//     if(seconds >= 60*60) {
//         minutes = 60*60/seconds;
//     }
//     if (!pause) {
//         sec--;
//         if (sec < 10) sec = "0" + sec;
//         if (sec == 60) {
//             min++;
//             sec = 0;
//         }
//         time.innerHTML = min + ":" + sec;
//     } else {
//         return;
//     }
// };
// const startTimer = () => {
//     sec = 0;
//     min = 0;
//     pause = false;
//     clearInterval(pauseTime);
//     pauseTime = setInterval(timerLogic, 1000);
// };
// const stopTimer = () => {
//     pause = true;
//     clearInterval(pauseTime);
// };
let count4 = 0;
const timer = () => {
    if(count4==0){

        document.getElementById("text").style.display = "inline";
        document.getElementById("b7").style.display = "inline";
        document.getElementById("b8").style.display = "inline";
        document.getElementById("time").style.display = "block";
        document.getElementById("timer").style.display = "block";
        let buttonRun = document.getElementById("b7")
        let buttonStop = document.getElementById("b8")
        let timerShow = document.getElementById("time");

        function Timer(){
            var timerInput = document.getElementById("text");
            timerInput.value = parseInt(timerInput.value)-1;
            var seconds = timerInput.value%60;
            var minutes = timerInput.value/60%60;
            var hour = timerInput.value/60/60%60;
            if (timerInput.value <= 0) {
                window.clearInterval(window.TimerId);
                alert("Время закончилось");
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timerShow.innerHTML = strTimer;
            }

        }

        buttonRun.onclick =  function() {
            window.TimerId = window.setInterval(Timer, 1000);
        }

        buttonStop.onclick =  function() {
            window.clearInterval(window.TimerId);
        }

        count4 = 1;

    }

    else{

        document.getElementById("text").style.display = "none";
        document.getElementById("b7").style.display = "none";
        document.getElementById("b8").style.display = "none";
        document.getElementById("time").style.display = "none";
        document.getElementById("timer").style.display = "none";
        count4 = 0;

    }

};

let opac = 0;
k = 100;
const example5 = () => {
    let img = document.getElementById("screensaver");
    img.style.display = "block";
    let placeName = document.getElementById("userName");
    let placeDate = document.getElementById("currentDate");
    let name = sessionStorage.getItem("name");
    placeDate.innerText =
        new Date().getDate() +
        "." +
        (new Date().getMonth() + 1) +
        "." +
        new Date().getFullYear();
    placeName.innerText = name;
    img.addEventListener("click", (event) => {
        const timerI = setInterval(() => {
            opac = 80;
            k++;
            opac = 100 - k;
            img.style.opacity = opac / 100;
            if (opac <= 0 || k >= 100) clearInterval(timerI);
            if (k === 100) img.style.display = "none";
        }, 20);
    });
    const timerI = setInterval(() => {
        k--;
        opac = 100 - k;
        img.style.opacity = opac / 100;
        if (k <= 0 || opac >= 100) clearInterval(timerI);
    }, 20);
    k = 100;
    ii = 0;
};
let countQuestion = 10;
const checkTest = () => {
    let scorePlace = document.getElementById("scoreTest");
    let score = 0;
    for (let i = 1; i < countQuestion + 1; i++) {
        let ans = document.getElementsByName("q" + i);
        let el = document.getElementById("corrAns" + i);

        if (ans[0].checked && ans[0].value == 1) {
            score++;
            el.parentNode.style.backgroundColor = "green";
        } else if (ans[0].checked) el.parentNode.style.backgroundColor = "red";
        if (ans[1].checked && ans[1].value == 1) {
            score++;
            el.parentNode.style.backgroundColor = "green";
        } else if (ans[1].checked) el.parentNode.style.backgroundColor = "red";
        if (ans[2].checked && ans[2].value == 1) {
            score++;
            el.parentNode.style.backgroundColor = "green";
        } else if (ans[2].checked) el.parentNode.style.backgroundColor = "red";
    }

    scorePlace.innerText = "Результат: " + score + "/10";
};