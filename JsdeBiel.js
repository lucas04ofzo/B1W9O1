var aantalFris=0
var aantalBier=0
var aantalWijn=0
var aantalSnack=0
var stop
var priceFris=0
var priceBier=0
var priceWijn=0
var priceSnack8=0
var priceSnack16=0
var bitterbalschalen8=0
var bitterbalschalen16=0
function bestellingToevoegen(){ //door deze functie kan de klant z'n bestelling uitkiezen
	var vraag=prompt('Welke bestelling wilt u toevoegen? Kies uit: fris, bier, wijn of snack. Typ stop als u de rekening wilt.');
	var bestelling=vraag.toLowerCase();
	if(bestelling=='fris'){
		aantalFris=prompt('Hoeveel fris wilt u toevoegen aan uw bestelling? $1,49 per stuk.');
	}else if(bestelling=='bier'){
		aantalBier=prompt('Hoeveel bier wilt u toevoegen aan uw bestelling? $1,99 per stuk.');
	}else if(bestelling=='wijn'){
		aantalWijn=prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling? $2,99 per stuk.');
	}else if(bestelling=='snack'){
		aantalSnack=prompt('Hoeveel bitterballen wilt u toevoegen (8 of 16)?');
	}else if(bestelling=='stop'){
		stop=1
	}else{
		alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
	}
}
function price(){ //deze functie rekent de kostten uit die de klant moet betalen
	priceFris=aantalFris*1.49
	priceBier=aantalBier*1.99
	priceWijn=aantalWijn*2.99
	priceSnack8=bitterbalschalen8*5.49
	priceSnack16=bitterbalschalen16*9.99
}
function rekening(){ //deze functie zet de rekening op het scherm
	if(aantalSnack=='8'){
		bitterbalschalen8=prompt('Hoeveel bitterbalschalen van 8 wilt u bestellen?');
	}if(aantalSnack=='16'){
		bitterbalschalen16=prompt('Hoeveel bitterbalschalen van 16 wilt u bestellen?');
	}else if(aantalSnack=0){
		alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
		bestellingToevoegen();
	}if(aantalFris!=0){
		document.write('U heeft '+aantalFris+' fris besteld voor $'+priceFris+' ($1,49 per stuk).<br>');
	}if(aantalBier!=0){
		document.write('U heeft '+aantalBier+' bier besteld voor $'+priceBier+' ($1,99 per stuk).<br>');
	}if(aantalWijn!=0){
		document.write('U heeft '+aantalWijn+' wijn besteld voor $'+priceWijn+' ($2,99 per stuk).<br>');
	}if(bitterbalschalen8!=0){
		document.write('U heeft '+bitterbalschalen8+' bitterbalschalen van 8 bitterballen besteld voor $'+priceSnack8+' ($5,49 per 8 stuks).<br>');
	}if(bitterbalschalen16!=0){
		document.write('U heeft '+bitterbalschalen16+' bitterbalschalen van 16 bitterballen besteld voor $'+priceSnack16+' ($9,99 per 16 stuks).');
	}
}
bestellingToevoegen();
while(stop!=1){
	bestellingToevoegen();
}
price();
rekening();