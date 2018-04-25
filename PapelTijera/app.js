function jugar(){
        var n=document.getElementById("num1");
        var aleatorio = Math.round(Math.random()*2);
        var cpu ="";
  if(aleatorio==0)
    cpu="piedra";
  else if(aleatorio==1)
    cpu="papel";
    else
     cpu="tijeras";
  
 if(n.value=="tijeras" || n.value=="piedra"||n.value=="papel"){
  alert("Su entrada fue : "+n.value);
  alert("CPU dice: "+cpu);
  if (n.value == "tijeras" && cpu=="piedra")
    alert("CPU gana")
  else if (n.value == "piedra" && cpu=="papel")
    alert("CPU gana") 
  else if (n.value == "piedra" && cpu=="papel")
    alert("CPU gana")
  
  else
    alert("Usted gana")

}
  
  else{
    alert("entrada invalida");}
  
      }