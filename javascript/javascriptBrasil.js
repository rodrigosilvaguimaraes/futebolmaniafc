// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "imagem_time_brasil/camisa_atletico_minerio.jpg";
img[2] = "imagem_time_brasil/camisa_bahia.jpg";
img[3] = "imagem_time_brasil/camisa_corinthinas.jpg";
img[4] = "imagem_time_brasil/camisa_coritiba.jpg";
img[5] = "imagem_time_brasil/camisa_cruzeiro.jpg";
img[6] = "imagem_time_brasil/camisa_flamengo.jpg";
img[7] = "imagem_time_brasil/camisa_fluminense.jpg";
img[8] = "imagem_time_brasil/camisa_gremio.jpg";
img[9] = "imagem_time_brasil/camisa_inter.jpg";
img[10] = "imagem_time_brasil/camisa_ponte_preta.jpg";
img[11] = "imagem_time_brasil/camisa_santos.jpg";
img[12] = "imagem_time_brasil/camisa_sao_paulo.jpg";



var legenda = Array();
legenda[1] = "Camisa Atletico Mineiro";
legenda[2] = "Camisa Bahia";
legenda[3] = "Camisa Corinthians";
legenda[4] = "Camisa Coritiba";
legenda[5] = "Camisa Cruzeiro";
legenda[6] = "Camisa Flamengo";
legenda[7] = "Camisa Fluminense";
legenda[8] = "Camisa Gremio";
legenda[9] = "Camisa Inter";
legenda[10] = "Camisa Ponte";
legenda[11] = "Camisa Santos";
legenda[12] = "Camisa São Paulo";


	jQuery("#dir").click(function(){
		if(cont==12) cont=1; else cont++;
		jQuery("#gdeBrasil").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeBrasil").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=12; else cont--;
		jQuery("#gdeBrasil").fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeBrasil").fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
