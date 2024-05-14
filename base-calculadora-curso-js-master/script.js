function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular() {
   const valorPantalla = document.getElementById('pantalla').value
   const resultado = eval(valorPantalla)
   document.getElementById('pantalla').value = resultado 
}

function deshacer() {
    const valorPantalla = document.getElementById('pantalla').value
    document.getElementById('pantalla').value = valorPantalla.slice(0,-1)
}