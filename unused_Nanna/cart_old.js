/*if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
     var addToCartButton = document.getElementById('add-to-cart')
     addToCartButton.addEventListener('click', addToCartClicked)
 }*/
$(document).ready(function() {
    $('#cart').on('click', function(e) {

    });
});

$(document).ready(function() {
    $('#add-to-cart').on('click', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/cart',
            type: 'GET',
            success: function (response) {
                var cartItems = document.getElementsByClassName('cart-items');
                console.log(cartItems)
                var cartRow = document.createElement('div');
                cartRow.classList.add('cart-row');
                console.log(cartRow);
                addToCartClicked(cartItems, cartRow)
                /*var newHtml = response.html.map( function(cartItems){
                       return addToCartClicked(cartItems, cartRow)
                   })*/
            }
        },)
        console.log('Item added to cart!')
    });
});

function addToCartClicked(cartItems, cartRow) {
    button = document.getElementById("add-to-cart");
    var id = window.location.pathname.split('/').pop();
    console.log(id)
    var title = document.getElementById("console_name").innerText;
    console.log(title)
    var price = document.getElementById('console-price').innerText;
    console.log(price)
    var imageSrc = document.getElementsByClassName('details-img')[0].src;
    console.log(imageSrc)
    addItemToCart(id, title, price, imageSrc, cartItems, cartRow);
    /*updateCartTotal();*/
}

function addItemToCart(id,title, price, imageSrc, cartItems, cartRow) {
    var cartStorage = window.localStorage;
    if (cartStorage.getItem(JSON.stringify(id)) === null) {
        var quantity = 1
        var attributes = [title, price, imageSrc, quantity]
        cartStorage.setItem(JSON.stringify(id), JSON.stringify(attributes));
        cartRow.innerHTML  = `<div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`;
        cartItems = cartRow;
        return cartItems
        /*cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);*/
    }else{
        alert('ATTENTION! This item is already added to the cart!');
    };
};


 /*var button = document.getElementById("add-to-cart");
        var shopItem = button.parentElement.parentElement;
        var id = window.location.pathname;
        var title = shopItem.getElementsByClassName('console-name')[0].innerText;
        var price = shopItem.getElementsByClassName('console-price')[0].innerText;
        var imageSrc = shopItem.getElementsByClassName('console-img')[0].src;*/


/*document.getElementById('add-to-cart').onclick = function () {
    var id = window.location.pathname[-1]
    console.log('Product added to cart')
    alert('Item added to cart!')
    window.location.reload();
};*/



/*;*/



document.getElementById("checkout").onclick = function(){
    console.log('Cart turned to order')
};

/*$(document).ready(function() {
    $('#checkout').on('click', function(e) {
        // TODO: Function that translate cart into order-objects and adds it to the database
        console.log('Cart turned to order')
    });
});*/