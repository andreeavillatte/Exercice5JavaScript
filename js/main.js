function multiplication(){
    // Récuperation des variables
var firstNumber=document.getElementById('firstNumber').value;
var secondNumber=document.getElementById('secondNumber').value;
// avec la fonction MathTrunc j'ai tronqué seulement le premier nombre
var firstNumber=Math.trunc(firstNumber);
// j'ai multiplié le premier nombre tronqué avec le deuxième nombre que je n'ai pas touché
multiplication = firstNumber * secondNumber;
// je mets la condition de faire le calcul seulement si la saisie était faite corecte: si une valeure était introduites et si elle est un chiffre
if (!firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Hey!!!!');
}else{
    alert('1er nombre : ' + firstNumber + '\n2ème nombre : ' + secondNumber + '\nMultiplication : ' + multiplication);
}
}


