console.log("bao");



function changeImage() {

  const image = document.getElementById('image');

  if (image) {

    const imageSources = [
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg',
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg'
    ];

  
    
    let currentImageIndex = parseInt(image.getAttribute('data-image-index')) || 0;

    currentImageIndex = (currentImageIndex === 0) ? 1 : 0;

    image.src = imageSources[currentImageIndex];


    image.setAttribute('data-image-index', currentImageIndex);
  } else {
    console.error("Image element with ID 'image' not found.");
  }
}


  setInterval(changeImage, 2000);



    



