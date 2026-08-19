import "../Navbar.css"
import {Link} from 'react-router-dom'
import Logo from '../assets/png-transparent-marvel-avengers-academy-youtube-avengers-mansion-marvel-comics-youtube-marvel-avengers-assemble-comics-avengers-thumbnail-removebg-preview.png'

function navbar() {

    return (
        <>
            <div className="contenedor">

                <div>
                    <img src={Logo} alt="" />
                </div>

                <div className="links">
                <Link to="/" className="link">Inicio</Link>
                <Link to="administracion" className="link">Administracion</Link>
                </div>
            </div>
        </>
    )
}

export default navbar