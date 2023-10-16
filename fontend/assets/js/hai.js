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


