import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
    const [error, setError] = useState(null);
    
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3001/api/login',
              JSON.stringify(formData),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              }
            );

            if (response.status === 200) {
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    

  return (
     <div className="LoginComponent">
        <div className="LoginComponent-in">
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                />
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <button>Submit</button>
            </form>
        </div>
        {error && (
            <div style={{ color: 'red' }}>
                Error: {error}
            </div>
        )}
     </div>
  )}
export default LoginPage