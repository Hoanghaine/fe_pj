console.log("hai");

let activeShowHideCartDropdown = () => {
    const sort_infor_cart = document.getElementById('sort-infor-cart');
    sort_infor_cart.onmouseover = showCartDropdown;
    sort_infor_cart.onmouseout = hideCartDropdown;

}

let offShowHideCartDropdown = () =>{
    hideCartDropdown();
    const sort_infor_cart = document.getElementById('sort-infor-cart');
    sort_infor_cart.onmouseover = '';
    sort_infor_cart.onmouseout = '';
};

let showCartDropdown = () => {
	const cartDropdown = document.getElementById("cart-dropdown");
	cartDropdown.style.display = "block";
};
let hideCartDropdown = () => {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = "none";
}



let showMenuBarInTablet = () => {
    const nav = document.getElementById('header_nav');

    const computedDisplay = window.getComputedStyle(nav).getPropertyValue('display');
    const div = document.getElementById('tab');
    if (computedDisplay === 'none') {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        div.classList.add('blur');
        disableScroll();
    } else {
        nav.style.display = "none";
        div.classList.remove('blur');
        enableScroll();

    }
}

// Function to disable scrolling
function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Set the body to fixed position and remember the current scroll position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}

// Function to enable scrolling
function enableScroll() {
    // Retrieve the remembered scroll position and reset the body to its default state
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
