import React, { useEffect, useState } from 'react'
import useRefresh from '../hooks/useRefresh';
import Axios from 'axios';


function User() {
    const [users, setUsers] = useState([]);
    const refresh = useRefresh();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;


        const getUsers = async () => {
            try {
                const response = await Axios.get('http://localhost:3001/profile', {
                    signal: signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });
                if(response.status === 200) {
                    setUsers(response.data);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
        return () => {
            controller.abort();
        }
    });

  return (
    <div className="UserComponent">
        <div className="UserComponent-in">
            <h1>User</h1>
                {users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.password}</p>
                    </div>
                ))}

            <button onClick={()=>refresh()} >Refresh</button>
        </div>
    </div>
  )
}

export default User