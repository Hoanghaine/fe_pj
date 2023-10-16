console.log("app");

loadHTML("tab", "homeTab.html");
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
                    console.log('changetab')
                    if (filename !== 'cartTab.html' && filename !== 'billTab.html') {
                        console.log('active');
                        activeShowHideCartDropdown();
                    } else {
                        offShowHideCartDropdown();            
                    }
                    if (filename === 'homeTab.html') {   
                        console.log('hometab');
                        autoChangeImage();
                    }
                    if (filename === 'productTab.html') {    
                        sortProductByPrice();
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
//selected tab
const menuItems = document.querySelectorAll(".header__nav ul li a");

menuItems.forEach(menuItem => {
	menuItem.addEventListener("click", () => {
		menuItems.forEach(item => item.classList.remove("selected"));
		menuItem.classList.add("selected");
	});
});

window.addEventListener("scroll", () => {
	const moveToTop = document.querySelector(".btn-move-to-top");
	if (window.scrollY > window.innerHeight / 4) {
		moveToTop.style.display = "block";
		moveToTop.style.opacity = "1";
	} else {
		moveToTop.style.display = "none";
		moveToTop.style.opacity = "0";
	}
});

const moveToTop = document.querySelector(".btn-move-to-top");
moveToTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
