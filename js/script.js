import * as UI from './UI.js';
import API from './API.js';

UI.formulario.addEventListener("submit", iniciarBusqueda);

function iniciarBusqueda(e){
	e.preventDefault();

	const artista = document.querySelector("#artista").value;
	const cancion = document.querySelector("#cancion").value;

	if(cancion === "" || artista === ""){
		UI.divMensaje.innerText = "* Debes llenar ambos campos.";
		UI.divMensaje.classList.add("alert", "alert-danger");

		setTimeout(() => {
		UI.divMensaje.classList.remove("alert", "alert-danger");
		UI.divMensaje.innerText = "";
	}, 2000)
	}

	const busqueda = new API(artista, cancion);
	busqueda.consultarAPI();
}
