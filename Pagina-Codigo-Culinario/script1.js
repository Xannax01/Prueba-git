document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        document.querySelectorAll(".recipe-card").forEach(receta =>{

            receta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?receta.classList.remove("filtro")
            :receta.classList.add("filtro")
        })

    }
   
})

function mostrarProcedimiento(procedimiento) {
    document.getElementById('contenidoProcedimiento').textContent = procedimiento;
    const modal = new bootstrap.Modal(document.getElementById('modalProcedimiento'));
    modal.show();
  }
  