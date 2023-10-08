function loadHTML(id, filename) {
  // console.log(`div id: ${id}, filename: ${filename}`);
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
            changeImage();
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



loadHTML("tab", "homeTab.html");

  let currentImageIndex = 0;

  function changeImage() {
    image.src = imageSources[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  }




