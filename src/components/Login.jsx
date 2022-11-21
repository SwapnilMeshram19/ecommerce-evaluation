import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginError, loginSuccess } from "../store/auth/action";
export const Login = () => {
  const { token} = useSelector((state) =>state);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin=()=>{
    console.log(data)
    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:data
    })
    .then((res)=>{
        dispatch(loginSuccess(res.data.token));
        
    })
    .catch((error)=>{
        dispatch(loginError());
    })



  }
  return (
    <div>
      <div
        style={{
          width: "30%",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "50px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input type="text" name="email" style={{ fontSize: "20px" }} value={data.email} onChange={handleChange}/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input type="password" name="password" style={{ fontSize: "20px" }} value={data.password} onChange={handleChange}/>
        </div>

        <button style={{ fontSize: "20px", marginTop: "30px" }} onClick={()=>handleLogin()}>Login</button>
      </div>
    </div>
  );
};
