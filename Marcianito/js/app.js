function salida() {
	var sal = document.getElementById('entrada');
	 var aleatorio = Math.round(Math.random()*2);
	alert(sal.value)
	if(aleatorio==0)
		alert("Si")
	else if(aleatorio==1)
		alert("No")
	else
		alert("Talvez")


}