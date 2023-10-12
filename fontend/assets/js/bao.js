
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



const selectBox = document.getElementById("hienthi");
const products = document.querySelectorAll(".section_Hotproducts_content ul li");


selectBox.addEventListener("change", function() {
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
    }else if (selectedValue === "macdinh") {
      products.forEach((product, index) => {
          
          product.style.order = index;
      });
  }
});


function hidenode(){
  const node = document.getElementById("node");
  const additionalHTML = `
  <ul>
  <li><a href="">

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
      <a href="">

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
      <a href="">

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
      <a href="">

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
      <a href="">

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
      <a href="">

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
      <a href="">

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

      <a href="#" >

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
node.innerHTML+= additionalHTML;


}




// JavaScript
// JavaScript
const childImages = document.querySelectorAll('.hover_img img');
const buttons = document.querySelectorAll('.btn_left, .btn_right');

// Xác định ảnh đang hiển thị
console.log(childImages)
console.log('bao')
let currentImage = 0;




