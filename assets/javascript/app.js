function selfDestruct() {
    $('.dead-left-eye').css("display", "block");
    $('.dead-left-eye-two').css("display", "block");
    $('.dead-right-eye').css("display", "block");
    $('.dead-right-eye-two').css("display", "block");
    $('.alive-left-eye').css("display", "none");
    $('.alive-right-eye').css("display", "none");
}

function alive() {
    $('.dead-left-eye').css("display", "none");
    $('.dead-left-eye-two').css("display", "none");
    $('.dead-right-eye').css("display", "none");
    $('.dead-right-eye-two').css("display", "none");
    $('.alive-left-eye').css("display", "block");
    $('.alive-right-eye').css("display", "block");
}
