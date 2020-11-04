const status = document.getElementById("status");
const task = document.getElementById("task");
const taskStatus = document.getElementById("taskStatus");
const btn1 = document.getElementById("btn1");
btn1.addEventListener('click', perform1);
const btn2 = document.getElementById("btn2");
btn2.addEventListener('click', perform2);
const btn3 = document.getElementById("btn3");
btn3.addEventListener('click', perform3);
const btn4 = document.getElementById("btn4");
btn4.addEventListener('click', perform4);

let i;
let start;

function perform1(e) {

    i = 0;
    start = Date.now();
    status.innerHTML = "Processing...";
    complexTask_st();
}

function perform2(e) {

    i = 0;
    start = Date.now();
    status.innerHTML = "Processing...";
    complexTask_pr();
}

function perform3(e) {

    i = 0;
    start = Date.now();
    status.innerHTML = "Processing...";
    complexTask_raf();
}

function perform4(e) {

    i = 0;
    start = Date.now();
    status.innerHTML = "Processing...";
    complexTask_qmt();
}

function changeStatus(s) {

    if (s === 1) {
        status.innerHTML = "Completed !  ";
    } else {
        status.innerHTML == "Processing...";
        }
}

function complexTask_st() {
    do {
        i++;
    } while (i % 1e6 != 0)

    if (i === 1e9) {
        changeStatus(1);
        taskStatus.innerHTML = `completed in ${(Date.now() - start) / 1000} seconds`;
    } else {
        changeStatus(0);
        taskStatus.innerHTML = `currently at ${i}`;
        setTimeout(complexTask_st);
    }
}

function complexTask_pr() {
    do {
        i++;
    } while (i % 1e6 != 0)

    if (i === 1e9) {
        changeStatus(1);
        taskStatus.innerHTML = `completed in ${(Date.now() - start) / 1000} seconds`;
    } else {
        changeStatus(0);
        taskStatus.innerHTML = `currently at ${i}`;
        Promise.resolve().then(complexTask_pr);
    }
}

function complexTask_raf() {
    do {
        i++;
    } while (i % 1e6 != 0)

    if (i === 1e9) {
        changeStatus(1);
        taskStatus.innerHTML = `completed in ${(Date.now() - start) / 1000} seconds`;
    } else {
        changeStatus(0);
        taskStatus.innerHTML = `currently at ${i}`;
        requestAnimationFrame(complexTask_raf);
    }
}

function complexTask_qmt() {
    do {
        i++;
    } while (i % 1e6 != 0)

    if (i === 1e9) {
        changeStatus(1);
        taskStatus.innerHTML = `completed in ${(Date.now() - start) / 1000} seconds`;
    } else {
        changeStatus(0);
        taskStatus.innerHTML = `currently at ${i}`;
        queueMicrotask(complexTask_qmt);
    }
}