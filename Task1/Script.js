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

let time = document.getElementById("time");
let pause = false;
let sec = 0;
let min = 0;
let pauseTime;

const timerLogic = () => {
    if (!pause) {
        sec++;
        if (sec < 10) sec = "0" + sec;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        time.innerHTML = min + ":" + sec;
    } else {
        return;
    }
};
const startTimer = () => {
    sec = 0;
    min = 0;
    pause = false;
    clearInterval(pauseTime);
    pauseTime = setInterval(timerLogic, 1000);
};
const stopTimer = () => {
    pause = true;
    clearInterval(pauseTime);
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