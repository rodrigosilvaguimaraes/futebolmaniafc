// JavaScript Document
jQuery(document).ready(function(){

cont=1;
var img = Array();
img[1] = "camisa_selecao/camisa_alemanha.jpg";
img[2] = "camisa_selecao/camisa_argentina.jpg";
img[3] = "camisa_selecao/camisa_chile.jpg";
img[4] = "camisa_selecao/camisa_colombia.jpg";
img[5] = "camisa_selecao/camisa_costaMarfin.jpg";
img[6] = "camisa_selecao/camisa_estados_unidos.jpg";
img[7] = "camisa_selecao/camisa_franca.jpg";
img[8] = "camisa_selecao/camisa_italia.jpg";
img[9] = "camisa_selecao/camisa_japao.jpg";
img[10] = "camisa_selecao/camisa_russia.jpg";
img[11] = "camisa_selecao/camisa_selecao_brasil.jpg";
img[12] = "camisa_selecao/camisa_selecao_holanda.jpg";
img[13] = "camisa_selecao/camisa_suisa.jpg";
img[14] = "camisa_selecao/camisa_uruguai.jpg";


var legenda = Array();
legenda[1] = "Camisa Alemanha";
legenda[2] = "Camisa Argentina";
legenda[3] = "Camisa Chile";
legenda[4] = "Camisa Colombia";
legenda[5] = "Camisa Costa de Margin";
legenda[6] = "Camisa Estados Unidos";
legenda[7] = "Camisa Franca";
legenda[8] = "Camisa Italia";
legenda[9] = "Camisa Japao";
legenda[10] = "Camisa Russia";
legenda[11] = "Camisa Brasil";
legenda[12] = "Camisa Holanda";
legenda[13] = "Camisa Suica";
legenda[14] = "Camisa Uruguai";


	jQuery("#dir").click(function(){
		if(cont==14) cont=1; else cont++;
		jQuery("#gdeSelecao").stop( true, true ).fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeSelecao").stop( true, true ).fadeIn();
	});
	
	jQuery("#esq").click(function(){
		if(cont==1) cont=14; else cont--;
		jQuery("#gdeSelecao").fadeOut().attr("src",img[cont]);
		jQuery("#legenda").html(legenda[cont]);
		jQuery("#gdeSelecao").fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	});
	
	
	
	
	
	
