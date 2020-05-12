$(document).ready(function() {
    $('#search-btn').on('click', function(e) {
        e.preventDefault()
        document.getElementById('search').submit()
    });
});

/*$(document).ready(function() {
    $('#add-to-cart').on('click', function(e) {
        // TODO: Add to cart function

        console.log('Product added to cart')
    });
});*/


$(document).ready(function() {
    $('#checkout').on('click', function(e) {
        // TODO: Function that translate cart into order-objects and adds it to the database
        console.log('Cart turned to order')
    });
});