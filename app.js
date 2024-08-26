inicio();
function btnEncriptar() {
    let texto = document.getElementById("inputTexto").value;
    let regex = /^[a-z\s]+$/;
    // Verifica si el texto cumple con la expresión regular
    if (!regex.test(texto)) {
        alert("Solo se permiten letras minúsculas sin tildes");
        return; // Detiene la ejecución si el texto no es válido
    }
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    //document.getElementById("reiniciar").setAttribute('disabled','true');
    document.getElementById("resultado").value = textoEncriptado;
    ocultarBloque1();
    mostrarBloque2();
}
function btnDesencriptar() {
    let texto = document.getElementById("inputTexto").value;
    let regex = /^[a-z\s]+$/;
    // Verifica si el texto cumple con la expresión regular
    if (!regex.test(texto)) {
        alert("Solo se permiten letras minúsculas sin tildes");
        return; // Detiene la ejecución si el texto no es válido
    }
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultado").value = textoDesencriptado;
}
function btnCopiar(){
    let textocp = document.getElementById("resultado");
    navigator.clipboard.writeText(textocp.value)
    .then(() => {
        // Opción para mostrar una alerta o mensaje al usuario (opcional)
        alert("Texto copiado al portapapeles: " + textocp.value);
    })
    .catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
function btnLimpiar(){
    document.getElementById("inputTexto").value='';
}

/*function asignarTxtElement(elemento,texto){
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
}*/
function ocultarBloque1() {
    let bloque = document.getElementById("bloque1");
    bloque.style.display = "none"; // Oculta el bloque
}
function ocultarBloque2() {
    let bloque = document.getElementById("bloque2");
    bloque.style.display = "none"; // Oculta el bloque
}

function mostrarBloque1() {
    let bloque = document.getElementById("bloque1");
    bloque.style.display = "block"; // Muestra el bloque
}
function mostrarBloque2() {
    let bloque = document.getElementById("bloque2");
    bloque.style.display = "block"; // Muestra el bloque
}
function inicio(){
    ocultarBloque2();
    mostrarBloque1();
}
