//----variables modal---
const modal= document.getElementById("modal");
const modalvideo= document.getElementById("modal-video");
const play=document.getElementById("btn-play");
const cerrar= document.getElementById("btncerrar");
 //--variables contador reversa--
let h=11;
let min=59;
let seg=59;
//--variable para efecto smothy
const subir = $("#inicio");
//--nav menu--
$("#cont-menu").click(function () {
    $("#iconom").toggleClass("rotacion");
$("#menu").slideToggle();
});

//--slide--
$(function () {
    $("#slider4").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
    });
  });

//tabs
$("#btn1").addClass("activo");
$("#cont-tabs article").hide();
$("#m1").show();

$(".link").click(function () {
  $(".link").removeClass("activo");
  $(this).addClass("activo");
  $("#cont-tabs article").hide();

  var activar_tab = $(this).attr("href");
  $(activar_tab).show();
});

// ---modal---
play.onclick = function(){
modalvideo.style.display = "block";
}
cerrar.onclick = function(){
modal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalvideo) {
 modalvideo.style.display = "none";
}
if (event.target == modal) {
  modal.style.display = "none";
}
};

$(".llamar-modal").click(function(){
    modal.style.display = "flex";
})

//contador reversa
window.onload= hora;
function hora()
{
    
    if(seg==0)
        {
            min--;
            seg=59;
            document.getElementById("min").innerHTML=min;
        }
    else
    {
        document.getElementById("min").innerHTML=min;
    }
    
    document.getElementById("hr").innerHTML=h;
    
    if(seg<10)
        {
            document.getElementById("seg").innerHTML="0"+seg;
        }
    else
        {
            document.getElementById("seg").innerHTML=seg;
        }
    seg--;
    
}
var repet = setInterval(hora,1000);

//-- efecto smothy--


subir.click(function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: 0
    }, 500)
});