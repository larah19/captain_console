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

// $(document).ready(function() {
//     $('#name-az').on('click', function(e) {
//         $.ajax({
//             url: '/consoles?order_by=' + 'name',
//             type: 'GET',
//             success: function(resp) {
//                 var newHtml = resp.data.map(d => {
//                     return `<div class=well console>
//                                 <a href="/consoles/${d.id}">
//                                     <img class="console-img" src="${d.firstImage}"/>
//                                     <h4>${d.name}</h4>
//                                     <p>${d.price}</p>
//                                 </a>
//                             </div>`
//                 });
//                 $('.consoles').html(newHtml.join(''));
//             },
//             error: function(xhr, status, error) {
//                 console.error(error)
//             }
//         })
//     });
// });

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

$(document).ready(function() {
    $('#checkout').on('click', function(e) {
        // TODO: Function that translate cart into order-objects and adds it to the database
        console.log('Cart turned to order')
    });
});
