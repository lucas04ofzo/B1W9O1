var vraag
var drink
var fris
var bier
var wijn
var stop
var fout
var aantalfris
var aantalbier
var aantalwijn
function drinken(){
	vraag=prompt('Welke bestelling wilt u toevoegen? Kies uit: fris, bier of wijn. Typ stop als u de rekening wilt.');
	drink=vraag.toLowerCase();
	if(drink=='fris'){
		fris=1
	}else if(drink=='bier'){
		bier=1
	}else if(drink=='wijn'){
		wijn=1
	}else if(drink=='stop'){
		alert('stop');
	}else{
		alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
	}
}
function bestellen(){
	if(fris=1){
		aantalfris=prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?');
	}alert('U heeft '+aantalfris+' fris besteld');
	if(bier=1){
		aantalbier=prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?');
	}alert('U heeft '+aantalbier+' bier besteld');
	if(wijn=1){
		aantalwijn=prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
	}alert('U heeft '+aantalwijn+' wijn besteld');
}
if(fout=1){
	drinken();
}
do{
	drinken();
}while(stop!='stop'){
	bestellen();
}