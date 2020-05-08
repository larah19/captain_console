$(document).ready(function() {
    $('#search-btn').on('click', function(e) {
        e.preventDefault()
        document.getElementById('search').submit()
    });
});

$(document).ready(function() {
    $('#add-to-cart').on('click', function(e) {
        // TODO: Add to cart function
        console.log('Product added to cart')
    });
});