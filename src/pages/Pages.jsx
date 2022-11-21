import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import {Private} from '../components/Private'
import { Login } from "../components/Login"

export const Pages =()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>

        </div>
    )
}