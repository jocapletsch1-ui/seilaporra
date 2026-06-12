function mostrar(){
    var numero1 = parseFloat(document.getElementById('n1').value)
    var numero2 = parseFloat(document.getElementById('n2').value)
    soma(numero1, numero2)
}

function soma(a, b){
    document.getElementById("res").textContent = a + b
}