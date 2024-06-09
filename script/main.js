// Une fonction de validation de formulaire
let nombre = 0;
let fact = 1;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nombre = Number.parseInt(document.getElementById("nbr").value);

    for(let i=1; i<= nombre; i++){
        fact = fact * i;
    }
    
    respons.textContent = nombre+'!'+' = '+fact;

    return false;
} 



