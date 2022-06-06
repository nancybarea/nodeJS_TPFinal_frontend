import axios from 'axios';
import {useEffect, useState} from 'react'
import {Link } from "react-router-dom";
//import {BsPlusCircle} from 'react-icons/bs'
//import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const URI = 'http://localhost:8080/productos'

const ShowPost = () => {
    const [posts, setPosts] = useState([]);
    console.log("entro a showpost")
    console.log(posts)

    useEffect(()=>{
        getPosts()
    }, []);
    
    const getPosts = async () => {
        const respuesta = await axios.get(URI)
        setPosts(respuesta.data)
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPosts()
    }

    return (
        <div>
            <h3>Listado de Productos</h3>
            <Link to='/create'>Crear Nuevo Producto</Link>
            <table>
                <thead>
                    <tr>
                        <td>Codigo</td>
                        <td>Nombre</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    posts.map((blog)=>(
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.nombre}</td>
                            <td>
                                <Link to={`/edit/${blog.id}`}>Editar</Link>
                                <button onClick={()=>deleteBlog(blog.id)}>borrar</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowPost