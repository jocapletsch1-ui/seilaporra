function mostrar(){
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var ano = parseFloat(document.getElementById('ano').value)

    document.getElementById("res1").textContent = cidade
    document.getElementById("res2").textContent = estado
    document.getElementById("res3").textContent = ano


}