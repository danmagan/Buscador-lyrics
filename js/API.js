import * as UI from './UI.js';

class API{
	constructor(artista, cancion){
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI(){
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

		fetch(url)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				if(resultado.lyrics){
					const {lyrics} = resultado;
					UI.divResultado.textContent = `${lyrics}`;
					UI.tituloResultado.innerHTML = `Letra de <span class="cap">${this.cancion}</span> de <span class="cap">${this.artista}</span>`
				}
				else{
					UI.divMensaje.innerText = "No hay resultados.";
					UI.divMensaje.classList.add("alert", "alert-danger");

					setTimeout(()=>{
						UI.divMensaje.innerText = "";
						UI.divMensaje.classList.remove("alert", "alert-danger");
					},2000)
				}
			})
	}
}

export default API;