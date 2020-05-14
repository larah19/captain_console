$(document).ready(function() {
    $('#cart').on('click', function(e) {
        console.log("You clicked cart!")
        //Todo: fix updateCartHtml
        // make it so that when you load cart window the data from local storage is added
       /* updateCartHtml()*/
        $.ajax({
            url: "{% url 'cart-index' %}",
            type: 'POST',
            success: function(response){
                response.innerHTML = updateCartHtml()
            }
            });
       });
    })

$(document).ready(function() {
    $('#add-to-cart').on('click', function(e) {
        addToCartClicked()
        console.log('Item added to cart!')
        });
    });

function updateCartHtml(){
        var cart_items =  JSON.parse(localStorage.getItem('cart_items'))
        console.log(cart_items)
        console.log(window.location.pathname)
        var cartIndex = document.getElementById('cart-items') // TODO: KLIKKAR HER NAER EKKI I HTML OBJECT VERDUR ALLTAF NULL
        console.log(cartIndex)
        for (var i = 0; i < cart_items.length; i++){
            var imageSrc = cart_items[i][1][2]
            console.log(imageSrc)
            var title=cart_items[i][1][0]
            console.log(title)
            var price = cart_items[i][1][1]
            console.log(price)
            var quantity = cart_items[i][1][3]
            console.log(quantity)
            var cartRow = document.createElement('div')
            cartRow.classList.add('cart-row')
            var cartRowContents = `<div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="${quantity}">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>`
            cartRow.innerHTML = cartRowContents
            cartIndex.append(cartRow)
            console.log(cartIndex)
            }
        console.log(cartIndex)
         document.getElementsByClassName('btn-danger').addEventListener('click', removeCartItem);
          document.getElementsByClassName('cart-quantity-input').addEventListener('change', quantityChanged);
      document.getElementsByClassName('cart-total-price')[0].innerText = '$' + localStorage.getItem('cart_total')
    document.getElementById("cart-count").innerText =  localStorage.getItem('cart_quantity')
    return cartIndex

}


function addToCartClicked() {
    var id = window.location.pathname.split('/').pop();
    console.log(id)
    var title = document.getElementById("console_name").innerText;
    console.log(title)
    var price = document.getElementById('console-price').innerText;
    console.log(price)
    var imageSrc = document.getElementsByClassName('details-img')[0].src;
    console.log(imageSrc)
    addItemToCart(id, title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(id,title, price, imageSrc) {
    if(localStorage.getItem('cart_items') === null){
        localStorage.setItem('cart_items',JSON.stringify([]))
        localStorage.setItem('cart_quantity', JSON.stringify(0))
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
    console.log(cart_item)
    var cart_items = JSON.parse(localStorage.getItem('cart_items'))
    console.log(cart_items)
    cart_items.push(cart_item)
    console.log(cart_items)
    localStorage.setItem('cart_items', JSON.stringify(cart_items));
    var cart_quantity = parseFloat(localStorage.getItem('cart_quantity'))
    cart_quantity += 1
    localStorage.setItem('cart_quantity', JSON.stringify(cart_quantity))
    alert('Item added to cart!')
};

function updateCartTotal() {
    if (localStorage.getItem("cart_total") === null){
        var total = '0'
            localStorage.setItem("cart_total", total)
    }
    var current_items =  JSON.parse(localStorage.getItem('cart_items'))
    console.log(current_items)
    var prices = []
        for (var i = 0; i < current_items.length; i++){
            console.log(current_items[i][1][1])
            prices.push(current_items[i][1][1])
        }
        console.log(prices)
    var sum = 0
    console.log(sum)
        for (var i = 0; i < prices.length; i++){
            console.log(prices[i])
            sum += parseFloat(prices[i].replace('$', ''))
            console.log(sum)
        }
    sum = Math.round(sum * 100) / 100
    console.log(sum)
    localStorage.setItem("cart_total", JSON.stringify(sum))
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    var cart_quantity = parseFloat(localStorage.getItem('cart_quantity'))
    cart_quantity -= 1
    localStorage.setItem('cart_quantity', JSON.stringify(cart_quantity))
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


/*Gamalt til að breyta Html fyrir total price:
/*var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }*/