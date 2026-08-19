import { useState, useEffect, use } from "react";

function formAdministracion ({estudiante, onSave, onClose}){
    const [formData, setFormData] = useState({
        carnet: "",
        nombre: "",
        apellido: "",
        grado: "",
        estado: ""
    })

    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        if (estudiante){
            setFormData({
                carnet: estudiante.carnet ||"",
                nombre: estudiante.nombre ||"",
                apellido: estudiante.apellido ||"",
                grado: estudiante.grado ||"",
                estado: estudiante.estado ||"",
            })
        }
    }, [estudiante])

    const handleChange = (p) =>{
        setFormData({...formData, [e.target.carnet]:p.target.value})
    }

    return(
        <div onClick={onClose}>
            <div onClick={(p) => e.stopPropagaty()}>
                <h2>{estudiante ? 'Editar' : Agregar}</h2>
                {errorMsg && <div>{errorMsg}</div> }
                <form>
                    <div>
                        <label htmlFor="carnet">Carnet</label>
                        <input 
                        id="carnet"
                        type="text"
                        name="carnet"
                        value={formData.carnet}
                        onChange={handleChange}
                        placeholder="20240228"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Maria"
                        required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                        id="apellido"
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Torres"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="grado">Grado</label>
                        <input 
                        id="grado"
                        type="text"
                        name="grado"
                        value={formData.grado}
                        onChange={handleChange}
                        placeholder="1° Año"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="estado">Estado</label>
                        <input 
                        id="estado"
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        placeholder="Activo"
                        required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default formAdministracion