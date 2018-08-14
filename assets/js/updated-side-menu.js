$(document).ready(function(){
  $(".navigation").navigation({
      type: "overlay",
      gravity: "right",
      maxWidth: "1366px",
      labels: {
          closed: "<img src='/img/bars.svg'>",
          open: "<img src='/img/bars.svg'>"
      }
    });    
    var swiper = new Swiper('.swiper-container', {
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
})
$(".form-group").on('keyup', function() {
  if($(this).parent().find(".form-control").val().length == 0) {
      $(this).parent().find("label").removeClass('active');
  }else{
      $(this).parent().find("label").addClass('active');
   }
});