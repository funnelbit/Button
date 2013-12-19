$(document).on('ready', function () {

    $('#url').val(location.href + '?frame');

    $('#button').on('mouseup', function () {

        var audio_uri = $($(this).find('audio')).attr('src');
        var audio = new Audio();
            audio.src = audio_uri;
            audio.play();

        var counter = $('#counter');

        $.ajax({
            type: "POST",
            url: "/",
            data: "",
            success: function(msg){
                //alert( "Data Saved: " + msg );
                counter.text(msg.count);
            }
        });

    });
});
