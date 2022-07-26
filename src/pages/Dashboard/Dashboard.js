import React, {useState, useEffect} from 'react';
import API from '../../components/utils/API';
import './Dashboard.css'
import { Link } from 'react-router-dom';

function Dashboard({token, isLoggedIn}) {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    API.getOneUser(token)
    .then((userData) => {
      console.log(userData)
      setUser(userData)
      setName(userData.username)
    })
    .catch((error) => console.log(error))
  }, [token])

  return (
    <div className='dashboardContainer'>
        <h1>{name}'s Dashboard</h1>
        <Link to='/settings/' className='pageLink'>
          <h2>Update my settings</h2>
        </Link>
    </div>
  );
}

export default Dashboard;