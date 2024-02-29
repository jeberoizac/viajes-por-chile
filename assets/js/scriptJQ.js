//click para enviar correo
$(document).ready(function(){
  $("#enviar").click(function(){
      alert("El correo fue enviado correctamente...")
  });
  
});
$(document).ready(function(){
  $("a").on('click', function(event) {
  if (this.hash !== "") {
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
  scrollTop: $(hash).offset().top
  }, 2000, function(){
  window.location.hash = hash;
  });
  }
  });
  });