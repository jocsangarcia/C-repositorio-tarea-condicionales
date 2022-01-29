
 let numero1 = parseFloat(prompt("ingresa tu primera nota,recuerda que la calificacion es del 1 al 10"));
 let numero2 = parseFloat(prompt ("ingresa tu segunda nota,recuerda que la calificacion es del 1 al 10") )
 
 let total = numero1 + numero2 ;
  if ( total <= 20) {
      
      
} if ( total <= 6 ) {

    alert(  total + " tu promedio es bajo ");

    
}else if ( total > 6 && total <= 13.9 ) {

    alert( total + "  tu promedio es basico")
    
} else if (total >= 14 && total <= 17.9 ) {

    alert ( total + " tu promedio es alto" )
    
}else if (total >= 18 && total  <= 20 ) {

    alert ( total + " tu nivel es exelente")
    
}

else {
      alert ( total + " tu resultado es una calificacion mas alta de lo permitido")
      
}


