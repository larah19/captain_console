$(document).ready(function() {
    $('#search-btn').on('click', function(e) {
        e.preventDefault()
        document.getElementById('search').submit()
    });
});

document.getElementById("name-az").onclick = function () {
    console.log("hello world");
    window.location = '/consoles/order_by/?order_by=name';
};

document.getElementById("price-asc").onclick = function () {
    window.location = '/consoles/order_by/?order_by=price_asc';
};

document.getElementById("price-desc").onclick = function () {
    window.location = '/consoles/order_by/?order_by=price_desc';
};

