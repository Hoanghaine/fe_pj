
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
function checkInuput(){
  const input = document.getElementById('input');
  const truee = document.getElementById('true');
  const falsee = document.getElementById('false');
  if (input) {
    const inputValue = input.value;
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(inputValue)) {
      console.log("Số điện thoại hợp lệ:", inputValue);
      truee.style.opacity= '1';
      falsee.style.opacity= '0';
    } else {
      console.error("Số điện thoại không hợp lệ:", inputValue);
      falsee.style.opacity= '1';
      truee.style.opacity= '0';
    }
  

  } else {
    console.error("Input element with ID 'input' not found.");
  }


  function resetInput(){
    const truee = document.getElementById('true');
    const falsee = document.getElementById('false');
    falsee.style.opacity= '0';
    truee.style.opacity= '0';
  }
  
  setInterval(resetInput,4000)
}

  setInterval(changeImage, 2000);



    



