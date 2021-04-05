import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   
    const navStyle = {
        color : 'black'
    }
    return ( 

        <nav>
            <ul>
            <li><a>User</a>
            <ul>
                <Link style={navStyle} to='/SignUp'>
                <li><a>Sign Up</a></li>
                </Link>
               
                <Link style={navStyle} to='/Login'>
                <li><a>Login</a></li> 
                </Link> 
                </ul>
             </li>

             <li><a>Admin</a>
             <ul>
                <Link style={navStyle} to='/AdminHomePage'>
                <li><a>AdminHomePage</a></li>
                </Link>
                </ul>
                </li>
                
            </ul><br /><br /><br /><br /><br />
        </nav> 
    )
    
}

export default Nav
