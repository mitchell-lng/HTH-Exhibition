function createPage() {
    $.getJSON( "exhibitions.json").done(function( data ) {
        $.each( data.items, function( i, item ) {
            document.getElementById("listview").innerHTML+= '<div></div>';
        });
    });
}

function close() {
    $('.popup').click(function () {
        $(this).css('display', 'none')
    });
}

function open() {
    $('.open-box').click(function () {
        $(this).next().css('display', 'block')
    });
}