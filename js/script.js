console.log("hello world!");
$( "#hamburger" ).click(function() {
    console.log("clicked");
    $(".link").toggleClass("show");
});