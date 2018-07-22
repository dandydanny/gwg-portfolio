console.log("hello world!");
$( "#hamburger" ).click(function() {
    console.log("clicked");
    $("#links").toggleClass("hidden");
});