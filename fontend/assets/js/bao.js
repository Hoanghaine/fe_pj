const images = ['http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg', 'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg', ]; 

let currentImageIndex = 0;
const imageContainer = document.querySelector('.home_title');
const imageElement = imageContainer.querySelector('img');
console.log("bao")
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextImageSrc = images[currentImageIndex];
    imageElement.style.opacity = 0; // Ẩn ảnh hiện tại
    console.log("bao")
    setTimeout(() => {
        imageElement.src = nextImageSrc; // Đổi ảnh mới
        imageElement.style.opacity = 1; // Hiển thị ảnh mới
    }, 500); // Thời gian chờ trước khi thay đổi ảnh (0.5 giây)
}

setInterval(changeImage, 2000);