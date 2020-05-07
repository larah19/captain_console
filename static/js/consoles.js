$(document).ready(function() {
    $('#search-btn').on('click', function(e) {
        e.preventDefault()
        document.getElementById('search').submit()
    });
});