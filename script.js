const getValueInput = () =>{
    let prix = document.getElementById("prix").value; 
    let pourcentage = document.getElementById("pourcentage").value;
    let calcul = (prix * (100 - pourcentage))/100
    document.getElementById("resultat").innerHTML = "Prix soldé : " + calcul + " €"; 
    let reduction = prix - calcul
    reduction = reduction.toFixed(2)
    document.getElementById("reduction").innerHTML = "Soit " + reduction + " € de réduction"; 
  }