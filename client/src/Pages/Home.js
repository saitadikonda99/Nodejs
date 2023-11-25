import React from 'react'
import axios from 'axios'

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
            if (response.status === 200) {
                window.location.href = '/login';
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="HomeComponent">
        <div className="HomeComponent-in">
            <h1>Home Page</h1>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    </div>
  )
}

export default Home