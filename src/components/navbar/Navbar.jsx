import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
            
            <div className="logoContainer">
               <img src="https://res.cloudinary.com/dwbhahrsr/image/upload/v1683236180/logo_orquesta_de_salsa_retro_amarillo_y_negro_1_qjpwuz.png" alt="" className="logo" />
                </div>
                
               <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
               </div>
            </div>
        </div>
    )
}

export default Navbar