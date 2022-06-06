import React from "react";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const URL = 'http://localhost:8080/productos'

const CreatePost = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate;

    const send = async(e) => {
        e.preventDefault();
        await axios.post(URL, {id,nombre})
        navigate('/')
    }
    
    return (
        <div>
            <h3>CreatePost</h3>
            <form onsubmit={send}>
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
                <button type="subtmi">Create</button>
            </form>
        </div>
    )
}

export default CreatePost