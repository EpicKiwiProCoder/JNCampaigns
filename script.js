const cartItems = [];
const cartItemsList = document.getElementById('cart-items');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const home = document.getElementById('home');
const aboutUs = document.getElementById('about-us');

const cartButton = document.getElementById('cart-button');
const homeButton = document.getElementById('home-nav');
const aboutUsButton = document.getElementById('about-us-button');
const cartCount = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        cartItems.push({ name, price });
        updateCart();

        alert(`${name} toegevoegd aan uw winkelmand`);
    });
});

cartButton.addEventListener('click', () => {
    home.style.display = 'none';
    aboutUs.style.display = 'none';
    cart.style.display = 'block';
    updateCart();
});

homeButton.addEventListener('click', () => {
    cart.style.display = 'none';
    aboutUs.style.display = 'none';
    home.style.display = 'block';
});

aboutUsButton.addEventListener('click', () => {
    cart.style.display = 'none';
    home.style.display = 'none';
    aboutUs.style.display = 'block';
});

function updateCart() {
    cartCount.textContent = cartItems.length;
    cartItemsList.innerHTML = '';
    let totalPrice = 0;

    if (cartItems.length == 0) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = 'Uw winkelmand is leeg';
        cartItemsList.appendChild(listItem);
    }

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${item.name} - €${item.price}`;

        totalPrice += item.price;

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm';
        removeButton.textContent = 'Verwijderen';
        removeButton.addEventListener('click', () => {
            cartItems.splice(index, 1);
            updateCart();
        });

        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}