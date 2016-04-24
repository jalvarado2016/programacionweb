//2.agregar overlay lightbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//agregar el overlay al body

$("body").append($overlay);

//1. usuario da click en el link que rodela la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//1.1 mostrar el light box con la imagen que se dio click
$image.attr("src",href);

//1.2 obtener el elemento alt para mostrar el texto
var texto = $(this).children("img").attr("alt");
$caption-text(texto);

$overlay.show();
console.log(href);

});