
    const image = document.getElementById('image');
    console.log(image)
   

    const imageSources = [
        'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg',
        'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg',
    ];

    let currentImageIndex = 0;

    

    function changeImage() {

        currentImageIndex == 0 ? currentImageIndex = 1 : currentImageIndex=0
        image.src = imageSources[currentImageIndex];
    }
    setInterval(changeImage, 4000);
   



    



