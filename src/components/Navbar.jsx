import { NavLink } from "react-router-dom"

export const Navbar =()=>{
    return (<div>

        <div style={{backgroundColor:"black"}}>
            <NavLink to='/'>
                <div>Home</div>
            </NavLink>

        </div>

    </div>)
}