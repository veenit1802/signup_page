import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"



ReactDOM.render(
  <>
  <div className="maindiv">
  <form>
    
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