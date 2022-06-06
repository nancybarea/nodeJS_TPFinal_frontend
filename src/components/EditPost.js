import {useEffect, useState} from 'react'
import {useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const URI = 'http://localhost:8080/productos'

const EditPost = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate;
    const {idEdit} = useParams()

    const update = async(e) => {
        e.preventDefault();
        await axios.put(URL + idEdit, {id,nombre})
        navigate('/')
    }

    useEffect(()=>{
        getBlogById()
    }, []);
    
    const getBlogById = async () => {
        const respuesta = await axios.get(URI + id)
        setId(respuesta.data.id)
        setNombre(respuesta.data.nombre)
    }

    return (
        <div>
            <h3>EditPost</h3>
            <form onsubmit={update}>
                <div>
                    <label>Código del Producto</label>
                    <input
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        type='text'
                    />
                    <label>Nombre del Producto</label>
                    <input
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        type='text'
                    />
                </div>
                <button type="subtmi">Modify</button>
            </form>
        </div>
    )
}

export default EditPost