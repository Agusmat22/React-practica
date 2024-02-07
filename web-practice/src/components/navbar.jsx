import { Link } from "react-router-dom"

export const Navbar = ()=>{

    return(

        <nav>
            <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/tecnologias"} >Tecnologias</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
    )

}