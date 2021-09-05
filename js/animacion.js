$(document).ready(function () {
  //Confetti
  let confetti = new Confetti("boton");
  confetti.setCount(150);
  confetti.setSize(3);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(true);
  //Audio
  function playAudio() {
    let cancion = $("#cancion");
    cancion.trigger("play");
  }

  //Animacion del boton:
  $("#boton").click(function () {
    playAudio();
    $("#boton").addClass("animate__bounceIn");
    setTimeout(function () {
      $("#boton").removeClass("animate__bounceIn");
    }, 1000);
  });
  //Toasts
  let boton = $("#boton");
  let toast1 = $("#toast1");
  if (boton) {
    $("#boton").click(function () {
      //Toast1
      var toast = new bootstrap.Toast(toast1);
      toast.show();
      //Toast2
      setTimeout(function () {
        var toast2 = $("#toast2");
        var toast = new bootstrap.Toast(toast2);
        toast.show();
      }, 6000);
      //Toast3
      setTimeout(function () {
        var toast3 = $("#toast3");
        var toast = new bootstrap.Toast(toast3);
        toast.show();
      }, 16000);
      //Toast4
      setTimeout(function () {
        var toast4 = $("#toast4");
        var toast = new bootstrap.Toast(toast4);
        toast.show();
      }, 29000);
      //Toast5
      setTimeout(function () {
        var toast5 = $("#toast5");
        var toast = new bootstrap.Toast(toast5);
        toast.show();
      }, 40000);
      //Toast6
      setTimeout(function () {
        var toast6 = $("#toast6");
        var toast = new bootstrap.Toast(toast6);
        toast.show();
      }, 51000);
      //Toast7
      setTimeout(function () {
        var toast7 = $("#toast7");
        var toast = new bootstrap.Toast(toast7);
        toast.show();
      }, 62000);
      //Toast8
      setTimeout(function () {
        var toast8 = $("#toast8");
        var toast = new bootstrap.Toast(toast8);
        toast.show();
      }, 74000);
      //Toast9
      setTimeout(function () {
        var toast9 = $("#toast9");
        var toast = new bootstrap.Toast(toast9);
        toast.show();
      }, 84000);
      //Toast10
      setTimeout(function () {
        var toast10 = $("#toast10");
        var toast = new bootstrap.Toast(toast10);
        toast.show();
      }, 97000);
      //Toast11
      setTimeout(function () {
        var toast11 = $("#toast11");
        var toast = new bootstrap.Toast(toast11);
        toast.show();
      }, 109000);
      //Toast12
      setTimeout(function () {
        var toast12 = $("#toast12");
        var toast = new bootstrap.Toast(toast12);
        toast.show();
      }, 120000);
      //Toast13
      setTimeout(function () {
        var toast13 = $("#toast13");
        var toast = new bootstrap.Toast(toast13);
        toast.show();
      }, 131000);
      //Toast14
      setTimeout(function () {
        var toast14 = $("#toast14");
        var toast = new bootstrap.Toast(toast14);
        toast.show();
      }, 142000);
      //Toast15
      setTimeout(function () {
        var toast15 = $("#toast15");
        var toast = new bootstrap.Toast(toast15);
        toast.show();
      }, 154000);
      //Toast16
      setTimeout(function () {
        var toast16 = $("#toast16");
        var toast = new bootstrap.Toast(toast16);
        toast.show();
      }, 165000);
      //Toast17
      setTimeout(function () {
        var toast17 = $("#toast17");
        var toast = new bootstrap.Toast(toast17);
        toast.show();
      }, 176000);
      //Toast18
      setTimeout(function () {
        var toast18 = $("#toast18");
        var toast = new bootstrap.Toast(toast18);
        toast.show();
      }, 187000);
      //Toast19
      setTimeout(function () {
        var toast19 = $("#toast19");
        var toast = new bootstrap.Toast(toast19);
        toast.show();
      }, 200000);
      //Carga confetti.html
      setTimeout(function () {
        window.open("../confetti.html");
      }, 207000);
    });
  }
});
