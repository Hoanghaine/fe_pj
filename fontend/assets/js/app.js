
console.log("app");
loadHTML('tab','homeTab.html')
function loadHTML(id, filename) {
    let xhttp;
    let element = document.getElementById(id);
    let file = filename;
    if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    element.innerHTML = this.responseText;
                    if (filename === 'homeTab.html') {    
                        autoChangeImage();
                    }
                    if (filename === 'productTab.html') {    
                        sortProductByPrice();
                    }
                    if (filename === 'tipTab.html') {    
                        changeImageProduct();
                    }

                }
                if (this.status == 400) {
                    element.innerHTML = "<h1>Page not found.</h1>";
                }
            }
            }
            xhttp.open("GET", `tabs/${file}`, true);
            xhttp.send();
            return;
    }
}


// ========================================================bao==============================



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








  



