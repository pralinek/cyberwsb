import React from 'react'
import Logo from "./logo1.png"
import "./Header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        
        <header>
        <div>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/download">Download</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
        </header>
    
    );
  }

  export default Header;
  
  
