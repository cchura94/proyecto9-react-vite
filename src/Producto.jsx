import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Producto() {

    const [productos, cargarProductos] = useState([]);
    const [nombre, setnombre] = useState("");

    useEffect(() => {
        getProductos()
    }, [])

    async function getProductos() {
        const { data } = await axios.get("http://127.0.0.1:3000/producto")
        cargarProductos(data)
    }


    return (
        <>
            <h1>Gestión Productos</h1>
            <p>Ejemplo de componente de React</p>
            <hr />
            <h1>{ nombre }</h1>
            <label htmlFor="">Ingrese Nombre</label>
            <input type="text" onChange={(e) => setnombre(e.target.value)} />

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>IMAGEN</th>
                        <th>DESC</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    { productos && productos.map(prod => {
                        return <tr key={prod._id}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.Imagen}</td>
                            <td>{prod.descripcion}</td>
                            <td>
                                <button className='btn btn-warning'>editar</button>
                                <button className='btn btn-danger'>eliminar</button>

                            </td>
                        </tr>
                    }
                    )}
                </tbody>

            </table>

        </>
    )
}





export function Imagenes() {
    return (
        <h4>Mis Imagenes</h4>
    )
}

export function Datos() {
    return (
        <h4>Mis Datos</h4>
    )
}