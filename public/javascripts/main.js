$(document).on('ready', function () {
    $('#button').on('click', function () {
        var audio_uri = $($(this).find('audio')).attr('src');
        var audio = new Audio();
            audio.src = audio_uri;
            audio.play();

        //$('#button-counter');
    });
});
