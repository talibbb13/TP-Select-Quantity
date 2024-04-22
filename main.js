var et = document.querySelector("#et");

document.addEventListener("DOMContentLoaded", function () {
    var box = document.querySelectorAll(".box")
    setTimeout(() => {
        var wraper = document.querySelector("#wraper")
        wraper.style.transform = `scale(1)`
        wraper.style.opacity = 1
    }, 200);

    setTimeout(() => {
        box[0].style.transform = `scale(1)`
        box[0].style.opacity = 1
    }, 300);

    setTimeout(() => {
        box[1].style.transform = `scale(1)`
        box[1].style.opacity = 1
    }, 400);

    setTimeout(() => {
        box[2].style.transform = `scale(1)`
        box[2].style.opacity = 1
    }, 500);

    setTimeout(() => {
        box[3].style.transform = `scale(1)`
        box[3].style.opacity = 1
    }, 600);
})

document.querySelectorAll(".box").forEach(function (val) {
    val.childNodes[3].addEventListener("click", function () {
        if (val.childNodes[5].value < 1) {
            et.style.transform = `translateX(0)`;
            et.style.opacity = 1;

            setTimeout(function () {
                et.style.transform = `translateX(150%)`;
                et.style.opacity = 0;
            }, 3000)
        }
        else {
            val.childNodes[5].value--;
        };
    });

    val.childNodes[7].addEventListener("click", function () {
        val.childNodes[5].value++
    })
})
