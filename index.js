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


function updateSlide(type) {
    if (type === "core") {
        document.getElementById("coreSlide").src = coreImages[coreIndex];
    } else {
        document.getElementById("staffSlide").src = staffImages[staffIndex];
    }
}

function nextSlide(type) {
    if (type === "core") {
        coreIndex = (coreIndex + 1) % coreImages.length;
        updateSlide("core");
    } else {
        staffIndex = (staffIndex + 1) % staffImages.length;
        updateSlide("staff");
    }
}

function prevSlide(type) {
    if (type === "core") {
        coreIndex = (coreIndex - 1 + coreImages.length) % coreImages.length;
        updateSlide("core");
    } else {
        staffIndex = (staffIndex - 1 + staffImages.length) % staffImages.length;
        updateSlide("staff");
    }
}

// ===========================
// AUTO SLIDE (10 DETIK)
// ===========================
setInterval(() => {
    nextSlide("core");
    nextSlide("staff");
}, 10000);
