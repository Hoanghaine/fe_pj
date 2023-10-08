function changeImage() {
    const image = document.getElementById('image');
    console.log(image);
    console.log("heh");
    const imageSources = [
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg', 'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg',
    ];
  
    let currentImageIndex = 0;
  
    function changeImage() {
      image.src = imageSources[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    }
  
    setInterval(changeImage, 2000);
}

export { changeImage };