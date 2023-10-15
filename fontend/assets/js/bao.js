console.log('bao')

function changeImage() {
  
  const image = document.getElementById('image');
  console.log(image)
  if (image) {

    const imageSources = [
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/banner-naciva-270622.jpg',
      'http://daugoidau.themevivu.site/wp-content/uploads/2022/06/SLIDER1.jpg'
    ];
    let currentImageIndex = parseInt(image.getAttribute('data-image-index')) || 0;

    currentImageIndex = (currentImageIndex === 0) ? 1 : 0;

    image.src = imageSources[currentImageIndex];

    image.setAttribute('data-image-index', currentImageIndex);
    console.log('changed image')
  }
}

function autoChangeImage(){
  setInterval(changeImage, 2500);
}

function checkInuput() {
  const input = document.getElementById('input');
  const truee = document.getElementById('true');
  const falsee = document.getElementById('false');
  if (input) {
    const inputValue = input.value;
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(inputValue)) {
      console.log("Số điện thoại hợp lệ:", inputValue);
      truee.style.opacity = '1';
      falsee.style.opacity = '0';
    } else {
      console.error("Số điện thoại không hợp lệ:", inputValue);
      falsee.style.opacity = '1';
      truee.style.opacity = '0';
    }


  } else {
    console.error("Input element with ID 'input' not found.");
  }


  function resetInput() {
    const truee = document.getElementById('true');
    const falsee = document.getElementById('false');
    falsee.style.opacity = '0';
    truee.style.opacity = '0';
  }

  setInterval(resetInput, 4000)
}

function hidenode() {
  const node = document.getElementById("node");
  const additionalHTML = `
  <ul>
  <li><a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat1.jpg" alt="">
              <div class="image-overlay"></div>

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Sữa rửa mặt Thảo Mộc </p>
          </div>
          <div class="section_Hotproducts_content-price">
              <p>300.000</p>
          </div>



      </a></li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat2.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Sữa rửa mặt Thảo Mộc </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>150.000-300.000</p>
          </div>



      </a>
  </li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat3.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Sữa rửa mặt Thảo Mộc </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>300.000</p>
          </div>



      </a>
  </li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat4.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Dầu gội phủ bạc thiên nhiên </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>165.000</p>
          </div>



      </a>
  </li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat5.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Combo dầu gội phủ bạc </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>230.000</p>
          </div>



      </a>
  </li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat6.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Combo dầu gọi thảo dược</p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>320.000</p>
          </div>



      </a>
  </li>
  <li>
      <a href="#" onclick="loadHTML('tab','tipTab.html')">

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat7.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Combo dầu gọi Naciva 2 </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>256.000</p>
          </div>



      </a>
  </li>
  <li>

      <a href="#" onclick="loadHTML('tab','tipTab.html')"" >

          <div class="section_Hotproducts_content-img">
              <img src="../fonts/img/sanphamnoibat8.jpg" alt="">

          </div>
          <div class="section_Hotproducts_content-title">
              <p>Combo dầu gọi Naciva 1 </p>
          </div>
          <div class="section_Hotproducts_content-price">

              <p>325.000</p>
          </div>



      </a>

  </li>
</ul>
`;
  node.innerHTML += additionalHTML;


}



function checkInuput() {
  const input = document.getElementById('input');
  const truee = document.getElementById('true');
  const falsee = document.getElementById('false');
  if (input) {
    const inputValue = input.value;
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(inputValue)) {
      console.log("Số điện thoại hợp lệ:", inputValue);
      truee.style.opacity = '1';
      falsee.style.opacity = '0';
    } else {
      console.error("Số điện thoại không hợp lệ:", inputValue);
      falsee.style.opacity = '1';
      truee.style.opacity = '0';
    }


  } else {
    console.error("Input element with ID 'input' not found.");
  }

  function resetInput() {
    const truee = document.getElementById('true');
    const falsee = document.getElementById('false');
    falsee.style.opacity = '0';
    truee.style.opacity = '0';
  }
  setInterval(resetInput, 4000)
}

function sortProductByPrice() {
  const selectBox = document.getElementById("hienthi");
  const products = document.querySelectorAll(".section_Hotproducts_content ul li");


  console.log(selectBox, products);

  selectBox.addEventListener("change", function () {
    const selectedValue = selectBox.value;

    if (selectedValue === "thapcao") {
      products.forEach((product, index) => {
        const price = parseFloat(product.querySelector(".section_Hotproducts_content-price p").textContent);
        product.style.order = price;
      });
    } else if (selectedValue === "caothap") {
      products.forEach((product, index) => {
        const price = parseFloat(product.querySelector(".section_Hotproducts_content-price p").textContent);
        product.style.order = -price;
      });
    } else if (selectedValue === "macdinh") {
      products.forEach((product, index) => {

        product.style.order = index;
      });
    }
  });

}

var currentImageIndex = 1;


function changeImage(direction) {

  const img1chail = document.getElementsByClassName(`chaild_img-1`)[0];
  const img2chail = document.getElementsByClassName(`chaild_img-2`)[0];
  const img3chail = document.getElementsByClassName(`chaild_img-3`)[0];
  const img4chail = document.getElementsByClassName(`chaild_img-4`)[0];
  
  const chail = [img1chail, img2chail, img3chail, img4chail];

  if (direction === 'left' && currentImageIndex === 1) {


    currentImageIndex = 4
    
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img1.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'none'

    img4.style.display = 'block'
    img4.style.animation = ' slideRight 0.5s ease'
    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }




  } else if (direction === 'left' && currentImageIndex === 4) {
    currentImageIndex = 3
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img4.style.display = 'none'
    img2.style.display = 'none'
    img1.style.display = 'none'


    img3.style.display = 'block'
    img3.style.animation = ' slideRight 0.5s ease'

    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  } else if (direction === 'left' && currentImageIndex === 3) {
    currentImageIndex = 2
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img3.style.display = 'none'
    img1.style.display = 'none'
    img4.style.display = 'none'


    img2.style.display = 'block'
    img2.style.animation = ' slideRight 0.5s ease'

    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }
  else if (direction === 'left' && currentImageIndex === 2) {
    currentImageIndex = 1
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img3.style.display = 'none'
    img4.style.display = 'none'
    img2.style.display = 'none'

    img1.style.display = 'block'
    img1.style.animation = ' slideRight 0.5s ease'


    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }
  else if (direction === 'right' && currentImageIndex === 2) {
    currentImageIndex = 3
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img2.style.display = 'none'
    img4.style.display = 'none'
    img1.style.display = 'none'

    img3.style.display = 'block'
    img3.style.animation = ' slideLeft 0.5s ease'


    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }
  else if (direction === 'right' && currentImageIndex === 3) {
    currentImageIndex = 4
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img3.style.display = 'none'
    img1.style.display = 'none'
    img2.style.display = 'none'

    img4.style.display = 'block'
    img4.style.animation = ' slideLeft 0.5s ease'


    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }
  else if (direction === 'right' && currentImageIndex === 4) {
    currentImageIndex = 1
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img4.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'none'

    img1.style.display = 'block'
    img1.style.animation = ' slideLeft 0.5s ease'


    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }
  else if (direction === 'right' && currentImageIndex === 1) {
    currentImageIndex = 2
    const img1 = document.getElementById('mainImg1');
    const img4 = document.getElementById('mainImg4');
    const img3 = document.getElementById('mainImg3');
    const img2 = document.getElementById('mainImg2');

    img1.style.display = 'none'
    img3.style.display = 'none'
    img4.style.display = 'none'

    img2.style.display = 'block'
    img2.style.animation = ' slideLeft 0.5s ease'


    const chaild = document.getElementsByClassName(`chaild_img-${currentImageIndex}`)[0];
    for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
     }

  }

 

}

function changeMainImage(imageName) {
  const img1 = document.getElementById(`mainImg1`); 
  const img2 = document.getElementById(`mainImg2`);
  const img3 = document.getElementById(`mainImg3`);
  const img4 = document.getElementById(`mainImg4`);

  const img1chail = document.getElementsByClassName(`chaild_img-1`)[0];
  const img2chail = document.getElementsByClassName(`chaild_img-2`)[0];
  const img3chail = document.getElementsByClassName(`chaild_img-3`)[0];
  const img4chail = document.getElementsByClassName(`chaild_img-4`)[0];

  const img = document.getElementById(`mainImg${imageName}`);
  const chaild = document.getElementsByClassName(`chaild_img-${imageName}`)[0];

  const images = [img1, img2, img3, img4];
  const chail = [img1chail, img2chail, img3chail, img4chail];

  for (let i = 0; i < images.length; i++) {
      if (images[i] === img) {
          images[i].style.display = 'block';
          images[i].style.animation = 'slideLeft 0.5s ease';
      } else {
          images[i].style.display = 'none';
          images[i].style.animation = 'none';
      }
  }

  for (let i = 0; i < chail.length; i++) {
      if (chail[i] === chaild) {
          chail[i].classList.add('boder');
      } else {
          chail[i].style.display = 'block'; 
          chail[i].classList.remove('boder');
      }
  }



  console.log(chail);
}


