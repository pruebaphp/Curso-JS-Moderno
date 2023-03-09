const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async (cliente) => {
    try {
        //creando un nuevo registro de un cliente nuevo
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            }
        });



        window.location.href = 'index.html';



    } catch (error) {
        console.log(error);
    }
}


export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })


    } catch (error) {
        console.log(error);
    }
}


//obtener un cliente por id

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`,{
            method: 'GET',
        })

        const cliente = await resultado.json();

        return cliente;

    } catch (error) {
        console.log(error)
    }

}

export const editarCliente = async cliente=>{
    try {
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}