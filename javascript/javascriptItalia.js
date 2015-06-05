// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "imagem_time_italiano/camisa_juventus.jpg";
img[2] = "imagem_time_italiano/camisa_lazio.jpg";
img[3] = "imagem_time_italiano/camisa_napoli.jpg";
img[4] = "imagem_time_italiano/camisa_inter_milao.jpg";
img[5] = "imagem_time_italiano/camisa_milan.jpg";
img[6] = "imagem_time_italiano/camisa_roma.jpg";





var legenda = Array();
legenda[1] = "Camisa Juvestus  ";
legenda[2] = "Camisa Lazio   ";
legenda[3] = "Camisa Napoli   ";
legenda[4] = "Camisa Inter de Milão   ";
legenda[5] = "Camisa Milan   ";
legenda[6] = "Camisa Roma   ";




	jQuery("#dir").click(function(){
		if(cont==6) cont=1; else cont++;
		jQuery("#gdeItaliano").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeItaliano").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=6; else cont--;
		jQuery("#gdeItaliano").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeItaliano").stop( true, true ).fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
