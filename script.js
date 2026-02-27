let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " ditambahkan ke keranjang!");
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    if(countElement){
        countElement.innerText = cart.length;
    }
}

updateCartCount();
