// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "camisa_argentina.jpg";
img[2] = "camisa_boca_junior.jpg";
img[3] = "camisa_zenit.jpg";
img[4] = "camisa_costaMarfin.jpg";
img[5] = "camisa_selecao_holanda.jpg";
img[6] = "camisa_selecao_brasil.jpg";
img[7] = "camisa_borusia_dortimund.jpg";
img[8] = "imagem_time_brasil/camisa_atletico_minerio.jpg";
img[9] = "imagem_time_brasil/camisa_corinthinas.jpg";
img[10] = "camisa_manchesterUnited.jpg";


var legenda = Array();
legenda[1] = "Camisa Argentina";
legenda[2] = "Camisa Boca Junior";
legenda[3] = "Camisa Zenit 2014";
legenda[4] = "Camisa Costa do Marfin";
legenda[5] = "Camisa Holanda";
legenda[6] = "Camisa Brasil";
legenda[7] = "Camisa Borusia Dortimund";
legenda[8] = "Camisa Atletico Mineiro";
legenda[9] = "Camisa Corinthians";
legenda[10] = "Camisa Manchester";


	jQuery("#dir").click(function(){
		
		if(cont==10) cont=1; else cont++;
		jQuery("#gde").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gde").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=10; else cont--;
		jQuery("#gde").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gde").stop( true, true ).fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
