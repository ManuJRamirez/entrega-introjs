const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
    id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

const desarrolladoresJavascript = (arrayDeDatos) => {
    listaDesarrolladoresJS = [];
    for (let index = 0; index < arrayDeDatos.length; index++){
        if (arrayDeDatos[index].habilidades.includes('JavaScript')){
            listaDesarrolladoresJS.push(arrayDeDatos[index]);
        }
    }
    return listaDesarrolladoresJS;
}

const nombresProyectos = (arrayDeDatos) => {
    listadoProyectos = [];

    for (let index = 0; index < arrayDeDatos.length; index++){
        for (let indexProyectos = 0; indexProyectos < arrayDeDatos[index].proyectos.length; indexProyectos++){

            listadoProyectos.push(arrayDeDatos[index].proyectos[indexProyectos].nombre);
        }
    }
    return listadoProyectos;
}

console.log(desarrolladoresJavascript(datos));
console.log(nombresProyectos(datos));
