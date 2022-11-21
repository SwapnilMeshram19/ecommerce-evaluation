import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Home } from "./Home"
import {Private} from '../components/Private'

export const Pages =()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>

        </div>
    )
}