// splash
$(document).ready(function() {
    setTimeout(function() {
        $('#bk-splash').fadeOut();
        $("#main-index").show();
    }, 5000);
});

//src=https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
// random numbers

function genNmber() {
    var newNumber = "";
    // function getRandomArbitrary(min, max) {
    //   return Math.random() * (max - min) + min;
    // }
    for (var i = 0; i < 3; i++) {
        var codeAscii = Math.floor(Math.random() * (57 - 48) + 48);
        var stringCodeAscii = String.fromCharCode(codeAscii);
        newNumber+=stringCodeAscii;
    }

    alert(newNumber);
}

$(document).ready(function() {
    $("#btn-next-asknumber").click(genNmber);
});
