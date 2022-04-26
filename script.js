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
const openEx6 = () => {
    let description = document.getElementById("ex6");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC6");
    description1.style.border = "solid";
}
const openEx21 = () => {
    let description = document.getElementById("ex21");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC21");
    description1.style.border = "solid";
}
const openEx22 = () => {
    let description = document.getElementById("ex22");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC22");
    description1.style.border = "solid";
}
const openEx24 = () => {
    let description = document.getElementById("ex24");
    description.style.display = "flex";
    description.style.borderTop = "solid";
    let description1 = document.getElementById("exC24");
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
    let timer = document.getElementById("timerID");
    timer.style.display = "flex";
};
const example5 = () => {
    let tests = document.getElementById("testsID");
    tests.style.display = "flex";
};

let timeAll = document.getElementById("timeAll");
let timePass = document.getElementById("timePass");
let pause = true;
let pauseTime;
let allSeconds;
let secondsPass;
let minutesPass;
let hourPass;
const timerLogic = () => {
    allSeconds--;
    secondsPass++;
    let seconds = allSeconds % 60;
    let minutes = allSeconds / 60 % 60;
    let hour = allSeconds / 60 / 60 % 60;

    timeAll.innerHTML = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    if (allSeconds <= 0) {
        stopTimer();
        pause = true;
        alert("Время закончилось");
    }
    if (!pause) {
        if (secondsPass == 60) {
            minutesPass++;
            secondsPass = 0;
        }
        if (minutesPass == 60) {
            hourPass++;
            minutesPass = 0;
        }
    }
    timePass.innerHTML = hourPass + ":" + minutesPass + ":" + secondsPass;
};
const setTimer = () => {
    allSeconds = parseInt(prompt("Введите количество секунд: "), 10);
    if (isNaN(allSeconds) || allSeconds <= 0) {
        alert("Некорректные данные");
    }
    let seconds = allSeconds % 60;
    let minutes = allSeconds / 60 % 60;
    let hour = allSeconds / 60 / 60 % 60;
    timeAll.innerHTML = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    secondsPass = 0;
    minutesPass = 0;
    hourPass = 0;
}
const startTimer = () => {
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
const example6 = () => {
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

const example21 = () => {
    let mas = [];
    let maxString = "";
    for (let i = 0; i < 3; i++) {
        mas.push(prompt("Введите строку " + (i + 1)));
    }
    for (let i = 0; i < mas.length; i++) {
        if (mas[i].length > maxString.length) {
            maxString = mas[i]
        }
    }
    alert("Самая длинная строка: " + maxString);
};
const example22 = () => {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ""
    let newChar = ""
    let str = prompt("Введите строку")

    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    alert("Самый частый символ: " + maxChar)
    newChar = prompt("Введите новый символ")
    alert(str.replaceAll(maxChar, newChar))
};
const example24 = () => {
    let fStr = prompt("Введите первое слово").toLowerCase().split("").sort().join("")
    let sStr = prompt("Введите второе слово").toLowerCase().split("").sort().join("")
    alert(fStr === sStr)
};
