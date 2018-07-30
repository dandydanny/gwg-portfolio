// Toggle nav links visiblity after clicking on hamburger
$( "#hamburger" ).click(function() {
    console.log("clicked");
    $(".link").toggleClass("show");
});

// Hide nav links after clicking on them
$( ".link" ).click(function() {
    console.log("clicked");
    $(".link").toggleClass("show");
});