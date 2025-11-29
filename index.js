const coreImages = [
    "images/core/3 (2).jpg",
    "images/core/3.jpg",
    "images/core/4 (2).jpg",
    "images/core/4.jpg",
    "images/core/5 (2).jpg",
    "images/core/5.jpg",
    "images/core/6 (2).jpg",
    "images/core/6.jpg",
    "images/core/7.jpg",
    "images/core/8 (2).jpg",
    "images/core/8.jpg",
    "images/core/9 (2).jpg",
    "images/core/9.jpg",
];

const staffImages = [
    "images/staff/3.jpg",
    "images/staff/4 (2).jpg",
    "images/staff/4.jpg",
    "images/staff/5 (2).jpg",
    "images/staff/5.jpg",
    "images/staff/6 (2).jpg",
    "images/staff/6.jpg",
    "images/staff/7 (2).jpg",
    "images/staff/7.jpg",
    "images/staff/8.jpg",
    "images/staff/9 (2).jpg",
    "images/staff/9.jpg",
];

let coreIndex = 0;
let staffIndex = 0;

function nextSlide(type) {
    let img = document.getElementById(type + "Slide");
    let anim = img.parentElement;

    let list = type === "core" ? coreImages : staffImages;
    let index = type === "core" ? coreIndex : staffIndex;

    anim.style.transform = "translateX(-20%)";

    setTimeout(() => {
        index = (index + 1) % list.length;

        img.src = list[index];

        anim.style.transition = "none";
        anim.style.transform = "translateX(20%)";

        setTimeout(() => {
            anim.style.transition = "transform 0.4s ease";
            anim.style.transform = "translateX(0)";
        }, 10);

        if (type === "core") coreIndex = index;
        else staffIndex = index;
    }, 400);
}

function prevSlide(type) {
    let img = document.getElementById(type + "Slide");
    let anim = img.parentElement;

    let list = type === "core" ? coreImages : staffImages;
    let index = type === "core" ? coreIndex : staffIndex;

    anim.style.transform = "translateX(20%)";

    setTimeout(() => {
        index = (index - 1 + list.length) % list.length;

        img.src = list[index];

        anim.style.transition = "none";
        anim.style.transform = "translateX(-20%)";

        setTimeout(() => {
            anim.style.transition = "transform 0.4s ease";
            anim.style.transform = "translateX(0)";
        }, 10);

        if (type === "core") coreIndex = index;
        else staffIndex = index;
    }, 400);
}
