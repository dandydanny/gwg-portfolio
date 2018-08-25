// Toggle nav links visiblity after clicking on hamburger
$( "#hamburger" ).click(function() {
    console.log("clicked");
    $(".link").toggleClass("show");
});

// Hide nav links after clicking on them
$( ".link" ).click(function() {
    console.log("clicked");
    $(".link").removeClass("show");
});

// Pause other players when playing current audio
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);