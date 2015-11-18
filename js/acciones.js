// JavaScript Document
function consulta()
{
	datos="";
	$.ajax({type:"POST",
	url: "192.168.1.30/procesar.php",
	data: datos
	}).done(function(mensaje){ //esperar a que de una respuesta
	alert(mensaje); //manda el mensaje del resultado de "datos"
	});
	
}

$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
	consulta();
	});
}); 
});