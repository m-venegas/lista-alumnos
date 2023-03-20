let alumnos = [
    "Masiel Venegas",
    "Ena Peniche",
    "Isabella Lizarazo",
    "Vanesa Barrios",
    "Angela Gonzalez",
    "Pedro Mendoza",
    "Sofia Ramos",
];

let tarjeta = document.querySelector(".card-body");
//aqui voy a cargar mi lista de alumnos

let tarjetaOrdena = document.getElementById("card-ordenar")

function listarAlumnos (array, contenedor){
    array.forEach(function (alumno){
        let parrafo = document.createElement ("p")
        parrafo.innerText=alumno
        return contenedor.appendChild(parrafo)
        
    });
}


//Obtener nombre y apellido. Listar con el apellido y nombre
function intercalarNombre(lista){
    let newList = lista.map(function(item){
        let espacio = item.indexOf(" ");
        let nombre = item.slice(0, espacio);
        let apellido = item.slice(espacio + 1, item.lenght);

        return `${apellido} ${nombre}`;
    })
    
    return newList;
}


/*
function ordenarAlumnos(){
    limpiarLista();
    let alumnosOrdenados = intercalarNombre(alumnos).sort();
    listarAlumnos (alumnosOrdenados, tarjetaOrdena);
}

function ordenarAlumnosZ(){
    limpiarLista();
    let alumnosOrdenados = intercalarNombre(alumnos).sort().reverse();
    listarAlumnos (alumnosOrdenados, tarjetaOrdena);
}
*/

function ordenarLista(orden){
    limpiarLista();
    let alumnosOrdenados = []

    if (orden==='az'){
       alumnosOrdenados = intercalarNombre(alumnos).sort();  
    }
    if (orden==='za'){
       alumnosOrdenados = intercalarNombre(alumnos).sort().reverse();
    }
    listarAlumnos (alumnosOrdenados, tarjetaOrdena);
}


//creamos una funcion que limpie todo antes de cargar la lista
function limpiarLista(){
    tarjetaOrdena.innerHTML=""
}

listarAlumnos(alumnos,tarjeta);

