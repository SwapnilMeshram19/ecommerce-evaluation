import React from 'react'
import { useSelector } from 'react-redux'
export const Private=()=>{
    const token = useSelector(state=>state.token)
    console.log(token)
    return (
        <div>

        </div>
    )
}