let galleryImages = [];
    let currentIndex = 0;

    function openGallery(images) {
        galleryImages = images;
        currentIndex = 0;
        document.getElementById("galleryImage").src = galleryImages[currentIndex];
        document.getElementById("popupGallery").style.display = "flex";
    }

    function closeGallery() {
        document.getElementById("popupGallery").style.display = "none";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        document.getElementById("galleryImage").src = galleryImages[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        document.getElementById("galleryImage").src = galleryImages[currentIndex];
    }

    // Click di luar gambar untuk close
    document.getElementById("popupGallery").addEventListener("click", function (e) {
        if (e.target === this) closeGallery();
    });

    document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeGallery();
    }

});