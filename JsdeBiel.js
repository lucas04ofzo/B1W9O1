var vraag
var drink
var aantal
var stop
function drinken(){
	vraag=prompt('Welke bestelling wilt u toevoegen? Kies uit: fris, bier of wijn. Typ stop als u de rekening wilt.');
	drink=vraag.toLowerCase();
	if(drink=='fris'){
		alert('fris');
	}else if(drink=='bier'){
		alert('bier');
	}else if(drink=='wijn'){
		alert('wijn');
	}else if(drink=='stop'){
		alert('stop');
		stop++
	}else{
		alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
	}
}function bestellen(){
	aantal=prompt('Hoeveel '+drink+' wilt u toevoegen aan uw bestelling?');
	alert('U heeft '+aantal+' '+drink+' besteld');
}do{
	drinken();
}while(stop!='stop'){
	bestellen();
}