import "../administracion.css"
import { useState, useEffect } from "react"
import axios from 'axios'
import formAdministracion from "../components/formAdministracion"

const API_URI = "https://retoolapi.dev/U5EBDb/Estudiantes"

function administracion () {

    const [estudiates, setEstudiantes] = useState()
    const [filtered, setFiltered] = useState()
    const [search, setSearch] = useState()
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editEstudiante, setEditEstudiante] = useState(null) 

    const fetchEstudiantes = async () => {
        try {
            const res = await axios.get(`${API_URI}/U5EBDb/Estudiantes`)
            setEstudiantes(res.data)
            setFiltered(res.data)
        
        } catch (err) {   
            console.error('error fetching Estudiantes: ', err)
        } finally{
            setLoading(false)
        }
    }

    useEffect => {
        if(search.trim() === ''){
            setFiltered(estudiates)
        } else{
            const term = search.toLoweCase()
            setFiltered(estudiates.filter(p =>
                p.carnet?. toLoweCase().includes(term)|| 
                p.nombre?. toLoweCase().includes(term)|| 
                p.apellido?. toLoweCase().includes(term)|| 
                p.grado?. toLoweCase().includes(term)|| 
                p.estado?. toLoweCase().includes(term)
                ))
        }
    }; [search, estudiates]

    const handleSave = async (data) => {
        try {
            if(editEstudiante){
                await axios.put(`${API_URI}/U5EBDb/Estudiantes/${editEstudiante._id}, data`)
            }else{
                await axios.post(`${API_URI}/U5EBDb/Estudiantes`, data)
                setShowForm(false)
                setEditEstudiante(null)
                fetchEstudiantes()
            }
        } catch (err) {
            console.log("error saving Estudiante: ", err)
            alert('error al guardar el estudiante')
        }
    }

    const handleDelete = async (id) =>{
        if(!confirm('¿Estas seguro de eliminar este producto?')) return

    try {
        await axios.delete(`${API_URI}/U5EBDb/Estudiantes`, err)
        alert('Error al eliminar el producto')
    } catch{

    }

const handleOpenForm = () => {
    setEditEstudiante(null)
    setShowForm(true)
}

}
}
export default administracion