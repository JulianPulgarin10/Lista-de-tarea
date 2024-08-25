document.getElementById('entrada-tarea').addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarTarea();
    }
});

function agregarTarea() {
    const entradaTarea = document.getElementById('entrada-tarea');
    const textoTarea = entradaTarea.value.trim();

    if (textoTarea === '') {
        alert('Por favor, ingresa una tarea a realizar.');
        return;
    }

    const listaTareas = document.querySelector('ul');

    const li = document.createElement('li');

    const chequeo = document.createElement('i');
    chequeo.className = 'chequeo fas fa-check-circle'; // Usa el ícono de chequeo de Font Awesome
    chequeo.onclick = () => {
        chequeo.classList.toggle('completado');
        li.classList.toggle('completada');

        if (chequeo.classList.contains('completado')) {
            alert('¡Tarea completada! Muy bien.');
            setTimeout(() => {
                listaTareas.removeChild(li);
            }, 1500); // Espera 1 segundo antes de eliminar
        }
    };

    const texto = document.createElement('span');
    texto.textContent = textoTarea;

    const botonBorrar = document.createElement('button');
    botonBorrar.className = 'boton-borrar';
    botonBorrar.innerHTML = '<i class="fas fa-trash"></i>'; // Usa el ícono de papelera de Font Awesome
    botonBorrar.onclick = () => listaTareas.removeChild(li);

    li.appendChild(chequeo);
    li.appendChild(texto);
    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);
    entradaTarea.value = '';
}
