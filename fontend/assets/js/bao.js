
function changeImage() {

  const image = document.getElementById('image');

  if (image) {

    const imageSources = [
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg',
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg'
    ];

    // tao index ban dau data-image-index neu chua co thi = 0
    let currentImageIndex = parseInt(image.getAttribute('data-image-index')) || 0;

    currentImageIndex = (currentImageIndex === 0) ? 1 : 0;

    image.src = imageSources[currentImageIndex];

    // gan index hien tai vao bien data-image-index
    image.setAttribute('data-image-index', currentImageIndex);
  } else {
    console.error("Image element with ID 'image' not found.");
  }
}

function autoChangeImage() {
  setInterval(changeImage, 2000);

}


    



