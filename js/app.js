// splash
$(document).ready(function() {
    setTimeout(function() {
        $('#bk-splash').fadeOut();
        $("#main-index").show();
    }, 5000);
});


// desacivar boton
$('#phone-number').keyup(function(){
 var phone = $(this).val();
 if (phone.length == 10) {
   $('#btn-next-asknumber').removeClass("disabled");
 } else {
   $('#btn-next-asknumber').addClass("disabled");
 }
});

//src=https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
// random numbers
// generador
function genNmber() {
    var newNumber = [];
    for (var i = 0; i < 3; i++) {
        var codeAscii = Math.floor(Math.random() * (57 - 48) + 48);
        var stringCodeAscii = String.fromCharCode(codeAscii);
        newNumber += stringCodeAscii;
    }
return newNumber;
}

function msgNumber (){
var newNumberRandom = genNmber();
swal("Tu codigo de validación es" + newNumberRandom).then(function(){
    window.location = "validnumber.html"; //?code = newNumberRandom
});

}

$(document).ready(function() {
    $("#btn-next-asknumber").click(msgNumber);
    $("#btn-next-valid").click(compGenNumber);

});

// comprobacion
function compGenNumber(newNumber) {
    var firstNumber = 0;
    var secondNumber = 0;
    var thirdNumber = 0;

    console.log(firstNumber);



    // for (var i = 0; i < newNumber.length; i++) {
    //     firstNumber = newNumber
    // }
}
