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

/***********Menu Para Moviles***************/
//Problema: El menu no funciona tan bien para moviles.
//Solucion: Cambiar por una navegacion lateral mas util

//Creemos el menu lateral y aguemoslo al menu (nav)
var $select = $("<select></select>");
$("#menu").append($select);

//Recorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
	//Crear una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");
	//Optener cada valor de la opcion del attributo href
	$option.val($anchor.attr("href"));
	//Obtener el text de cada opcion
	$option.text($anchor.text());
	//Agregar la opcion al select	
	$select.append($option);

	//Agregar la clase selected a cada opcion que indique la pagina actual
	//Obtener si el link es la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected", true);
	}
});

//Queremos que se cambie la pagina al cambiar el elemento seleccionado
//Necesitamos usar el evento change
$select.change(function(){
	window.location = $select.val(); //Toma el valor de la opcion seleccionada
});


//Modificar CSS para esconder los links en resoluciones pequenas (width). Mostrar el Select y los botones.
//CSS debe esconder el select en resoluciones pequenas (width)
