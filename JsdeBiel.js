function bestellingAantal(bestellingSoort){
	var aantal=prompt('Hoeveel '+bestellingSoort+' wilt u toevoegen aan uw bestelling?');
	alert(bestellingSoort);
}
var bestelling=prompt('Welke bestelling wilt u toevoegen? Kies uit: fris, bier of wijn. Typ stop als u de rekening wilt.');
if(bestelling=='fris'){
	bestellingAantal('fris');
}else if(bestelling=='bier'){
	bestellingAantal('bier');
}else if(bestelling=='wijn'){
	bestellingAantal('wijn');
}