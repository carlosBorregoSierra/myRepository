const proyectosContainer = document.getElementById("tarjetasContainer")
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias =(tecnologias)=>{
    let res ="";
    tecnologias.forEach(tecnologia=>{
        res+=`<span class="tecnologia">${tecnologia}</span>`
    })
    return res;
}

//Creacion proyectos
proyectos.forEach(proyecto =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto"
    nuevoProyecto.textContent = proyecto.titulo;
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
    <img src="img/proyectos/${proyecto.imagen}">
    <div>
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p>Tecnologias: ${getTecnologias(proyecto.tecnologias)}</p>
    </div>
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
})

//Creacion  info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="${informacionPersonal.imagen}">
`;
informacionPersonal.otros.forEach(dato =>{
    nuevaPresentacion.innerHTML +=`
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `
})
aside.appendChild(nuevaPresentacion);

//Creacion idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList =  "idioma";
informacionPersonal.idiomas.forEach(dato =>{
    nuevoIdiomas.innerHTML +=`
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `;
})
aside.appendChild(nuevoIdiomas);

//Creacion Lenguajes de programacion
const nuevoLenguaje = document.createElement("div");
nuevoLenguaje.classList = "lenguaje";
informacionPersonal.tecnologias.forEach(dato =>{
    nuevoLenguaje.innerHTML += `
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[0]}:</span>
        </div>
    `
})
aside.appendChild(nuevoLenguaje);

//Links