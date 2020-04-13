import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/API'
import '../styles/App.css';

function App() {
  const [users, setUsers] = useState('')

  useEffect(() => {
    setUsers(getUsers().then(users => {
      users.results.map((user, id) => {
        console.log(user.name.first);
        return { ...user, id }
      })

    }
    ))
  }, []);

  return (
    <div className="container">
      <div>
        <div className="filter">Location</div>
        <div className="filter">Company</div>
      </div>
      <div className="persons">Personas<p></p></div>
    </div>
  );
}




export default App;
