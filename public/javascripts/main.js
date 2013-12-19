$(document).on('ready', function () {

    $('#button').on('mouseup', function () {

        var audio_uri = $($(this).find('audio')).attr('src');
        var audio = new Audio();
            audio.src = audio_uri;
            audio.play();

        var counter = $('#counter');
        var count = counter.text();
        count++;

        counter.text(count);
    });
});
