$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
           // Mostrar el mensaje dentro de la carta
           $("#message").text("¡Ti amooo♥️! Eres mi osito hemocho").removeClass("hidden");
    }

    function close() {
        envelope.addClass("close")
           .removeClass("open");
           // Ocultar el mensaje al cerrar la carta
           $("#message").addClass("hidden").text("");
    }
    
});