const proyectosContainer = document.getElementById("tarjetasContainer")

const getTecnologias =(tecnologias)=>{
    let res ="";
    tecnologias.forEach(tecnologia=>{
        res+=`<span class="tecnologia">${tecnologia}</span>`
    })
}

proyectos.forEach(proyecto =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta"
    nuevoProyecto.textContent = proyecto.titulo;
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
    <img src="${proyecto.imagen}">
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p>Tecnologias: ${getTecnologias(proyecto.tecnologias)}</p>
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
})