$(document).ready(function() {
    $('#add-to-cart').on('click', function(e) {
        addToCartClicked()
        console.log('Item added to cart!')
        document.getElementById("cart-count").innerText =  localStorage.getItem('cart_quantity')
        });
    });


function addToCartClicked() {
    var id = window.location.pathname.split('/').pop();
    var title = document.getElementById("console_name").innerText;
    var price = document.getElementById('console-price').innerText;
    var imageSrc = document.getElementsByClassName('details-img')[0].src;
    addItemToCart(id, title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(id,title, price, imageSrc) {
    if(localStorage.getItem('cart_items') === null || localStorage.getItem('cart_items') === ""){
        localStorage.setItem('cart_items',JSON.stringify([]))
        var today = new Date();
        localStorage.setItem('cart_date', today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
        }
    var cartStorage = JSON.parse(localStorage.getItem('cart_items'));
    for (var i = 0; i < cartStorage.length; i++) {
        for ( var d =0; d< cartStorage[i].length; d++){
            if (cartStorage[i][d] === id) {
                alert('This item is already added to the cart')
                return
            }
        }
    };
    var quantity = 1
    var attributes = [title, price, imageSrc, quantity]
    var cart_item = [id, attributes]
    var cart_items = JSON.parse(localStorage.getItem('cart_items'))
    cart_items.push(cart_item)
    localStorage.setItem('cart_items', JSON.stringify(cart_items));
    var cart_quantity = parseFloat(localStorage.getItem('cart_quantity'))
    cart_quantity += 1
    localStorage.setItem('cart_quantity', JSON.stringify(cart_quantity))
    alert('Item added to cart!')
};

function updateCartTotal() {
    console.log('update activated')
    if (localStorage.getItem("cart_total") === null){
        var total = '0'
            localStorage.setItem("cart_total", total)
    }
    if (localStorage.getItem('cart_items') === "") {
        localStorage.setItem("cart_total", JSON.stringify(0))
    }else{
        var current_items = JSON.parse(localStorage.getItem('cart_items'))
        var prices = []
            for (var i = 0; i < current_items.length; i++){
                console.log(current_items[i][1][1])
                prices.push(parseFloat(current_items[i][1][1].replace('$', ''))* parseFloat(current_items[i][1][3]))
            }
        var sum = 0
            for (var i = 0; i < prices.length; i++){
                console.log(prices[i])
                sum += prices[i]
                console.log(sum)
            }
        sum = Math.round(sum * 100) / 100
        localStorage.setItem("cart_total", JSON.stringify(sum))
    }
    location.reload()
}

