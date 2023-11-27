import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {

    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3001/logout', { 
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials : 'include',
                // withCredentials: true, // <=========== Add this line
                withCredentials: true, // <=========== Add this line
             })

                console.log(response.status);
                window.location.href = '/login';
        } catch (error) {
            console.log(error);
            window.location.href = '/login';
        }
    };

  return (
    <div className="HomeComponent">
        <div className="HomeComponent-in">
            <h1>Home Page</h1>
            <button onClick={handleLogout}>LogOut</button>
            <Link to='/user'>user</Link>
            <Link to='/profile'>profile</Link>
        </div>
    </div>
  )
}

export default Home