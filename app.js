let boton = document.querySelector('.boton');
let container = document.querySelector('.container-first');
let searchContainer = document.querySelector('.search-container-first');
let barraBusqueda = document.querySelector('.barra-busqueda-first');
let lupaIcon = document.querySelector('.lupa-icon-first');
let listado = document.querySelector('.listado');

//document.onload = listado.remove();

barraBusqueda.addEventListener('focusin', () => {

  console.log('Focus IN');

  agregarListado();

  lupaIcon.remove();

  container.classList.remove('container-first');
  container.classList.add('container-final');


  //container.classList.remove('container');
  //container.classList.add('container-final');
  searchContainer.classList.remove('search-container-first');
  searchContainer.classList.add('search-container-final');

  barraBusqueda.style.width = '500px';
  barraBusqueda.style.height = '80px';


});

function agregarListado() {

    let listado = document.createElement('div');

    listado.classList.add('listado');

    listado.innerHTML = 
    `
        <h2>Recent Searches:</h2>
        <ul>
            <li>Search item 1</li>
            <li>Search item 2</li>
            <li>Search item 3</li>
        </ul>   
    `;

    container.appendChild(listado);
}


barraBusqueda.addEventListener('focusout', () =>{
    console.log('Focus Out');

    let listado = document.querySelector('.listado');

    listado.remove();

    container.classList.add('container-final');
    container.classList.remove('container-first');

    container.classList.remove('container-final');
    container.classList.add('container');
    searchContainer.classList.remove('search-container-final');
    searchContainer.classList.add('search-container-first');

    searchContainer.appendChild(lupaIcon);





})



