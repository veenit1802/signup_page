import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import "./index.css"



ReactDOM.render(
  <>
  <div className="maindiv">
  <form onSubmit={onSubmit}>
    
  <input id="fname" type="text" required/>
    <label  htmlFor="fname" >First Name:</label>
    
    
    <input id="uname" type="text" required/>
    <label  htmlFor="uname" > Username:</label>
    
    
    <input id="email" type="email" />
    <label htmlFor="email">Email:</label>
    
    
    <input id="passw" type="password" required/>
    <label htmlFor="passw" >Password:
    </label>
   
    
    <input className="btn" type="submit" value="submit" />
  </form>
  </div>
  </>
  ,document.getElementById('root')
);


function onSubmit(e) {
  e.preventDefault();
  const data={
    firstname:document.getElementById("fname").value,
    username:document.getElementById("uname").value,
    email:document.getElementById("email").value,
    password:document.getElementById("passw").value
  };

  console.log(data.firstname)

  axios.post("http://localhost:5000/users/add",data);
}