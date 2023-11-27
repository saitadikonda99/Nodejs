import React, { useEffect, useState } from 'react';
import axiosPrivate from '../hooks/useAxiosPrivate';
import { Link } from 'react-router-dom';

function Profile() {
  const [data, setData] = useState({});
  const axios = axiosPrivate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', {  
          withCredentials: true,
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="ProfileComponent">
      <div className="ProfileComponent-in">
        <h1>Profile Page</h1>
        <p>{data.name}</p>
        <p>{data.age}</p>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Profile;
