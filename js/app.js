//Problema: Las imagenes llevan a un punto muerto,  eso es mala UX
//Solucion: Crear una capa extra con imagenes de mayor tamano. Lightbox

//2. Agregar Overlay Lightbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 Un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);


//1. Usuario da clic en un link que rodea la imagen. Capturar el evento
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");

	//1.1. Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});


//1.2. Obtener el elemento alt para mostrar el texto.


//3. Cuando se da click al overlay
//3.1 Esconder el ovelay
$overlay.click(function(){
	$overlay.hide();
});