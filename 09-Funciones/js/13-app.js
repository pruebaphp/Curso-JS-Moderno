
const reproductor = {
    cancion:``,
    reproducir: id =>`Reproduciendo canción con el id... ${id}`,
    pausar: () => console.log(`Pausando...`),
    crearPlaylist: nombre=>`Creando la playlist de ${nombre}`,
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = `Enter Sandman`;
reproductor.obtenerCancion;
console.log(reproductor.reproducir(52));
