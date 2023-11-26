document.getElementById('formulario').addEventListener('submit'), (Event) =>{
    Event.preventDefault()
} 

let entradaNombre = document.getElementById ('name')
let errorNombre = document.getElementById('nameError')

if (entradaNombre.value.trim() === '') {
    errorNombre.textContent =  'Por favor! agrega tu Nombre'
    errorNombre.classList.add('errorNombre')
}else{
    errorNombre.textContent =  ''
    errorNombre.classList.remove('errorNombre')
}

' '
