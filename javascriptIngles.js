// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "imagem_time_ingles/totterham.jpg";
img[2] = "imagem_time_ingles/aston_villa.jpg";
img[3] = "imagem_time_ingles/camisa_manchesterUnited.jpg";
img[4] = "imagem_time_ingles/arsenal.jpg";
img[5] = "imagem_time_ingles/cristal_palace.jpg";
img[6] = "imagem_time_ingles/machester_city.jpg";
img[7] = "imagem_time_ingles/camisa_chelsea.jpg";
img[8] = "imagem_time_ingles/camisa_everton.jpg";



var legenda = Array();
legenda[1] = "Camisa Totterham";
legenda[2] = "Camisa Aston Villa";
legenda[3] = "Camisa Manchester Unided";
legenda[4] = "Camisa Arsenal";
legenda[5] = "Camisa Cristal Palace";
legenda[6] = "Camisa Machester City";
legenda[7] = "Camisa Chelsea";
legenda[8] = "Camisa Eventon";


	jQuery("#dir").click(function(){
		if(cont==8) cont=1; else cont++;
		jQuery("#gdeIngles").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeIngles").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=8; else cont--;
		jQuery("#gdeIngles").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeIngles").stop( true, true ).fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
