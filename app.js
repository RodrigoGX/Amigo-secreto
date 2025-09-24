
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    let amigo = inputAmigo.value.trim();

    if (amigo === "") {
        alert("Nombre inválido, por favor ingrese un nombre");
        return;
    }

    amigos.push(amigo);
    console.log(amigos);
    listaAmigos();
    limpiarCaja();
}

function listaAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigoHTM = document.createElement("li");
        amigoHTM.textContent = amigos[i]; 
        lista.appendChild(amigoHTM);
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No se encuentra ningun nombre ingreasdo, porfavor ingrese un nombre");
        return;
    }

    let amigoSeleccionado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoSeleccionado];

    asignarTextoElemento("#resultado", `🎉 Tu amigo secreto es: ${amigoSorteado}`);
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    asignarTextoElemento("#resultado", "");
    limpiarCaja();
}
