import { NavLink } from "react-router-dom"

export const Navbar =()=>{
    return (<div>

        <div style={{backgroundColor:"black", width:"100%", fontSize:"20px", fontWeight:"700",display:"flex", justifyContent:"end"}}>
            <NavLink to='/'>
         <div style={{padding:"15px 10px"}}>
            Home
         </div>
         </NavLink>

         <NavLink to='/login'>
         <div style={{padding:"15px 10px"}}>
            Login
         </div>
         </NavLink>
        </div>

    </div>)
}