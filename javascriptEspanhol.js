// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "imagem_time_espanhol/atletico_madrid.jpg";
img[2] = "imagem_time_espanhol/barcelona.jpg";
img[3] = "imagem_time_espanhol/camisa_espanhol.jpg";
img[4] = "imagem_time_espanhol/camiseta_malaga.jpg";
img[5] = "imagem_time_espanhol/la_coruna.jpg";
img[6] = "imagem_time_espanhol/raio_valecano.jpg";
img[7] = "imagem_time_espanhol	/real_madrid.jpg";




var legenda = Array();
legenda[1] = "Camisa Atletico de Madrid";
legenda[2] = "Camisa Barcelona";
legenda[3] = "Camisa Espanhol";
legenda[4] = "Camisa Malaga";
legenda[5] = "Camisa La coruna";
legenda[6] = "Camisa Raio Valecano";
legenda[7] = "Camisa Real Madrid";



	jQuery("#dir").click(function(){
		if(cont==7) cont=1; else cont++;
		jQuery("#gdeEspanhol").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeEspanhol").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=7; else cont--;
		jQuery("#gdeEspanhol").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeEspanhol").stop( true, true ).fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
