import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/API'
import '../styles/App.css';
import List from './List';
import CheckBox from './CheckBox';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data =>
      // console.log(data)
      setUsers(data.results)
    )
  }, []);

  return (
    <div className="container">
      <div>
        <div className="filter">Género
        <CheckBox genderData={users}></CheckBox>
        </div>

        <div className="filter">Ciudad</div>
      </div>

      <div className="persons">Resultados
        <List list={users}></List>
      </div>
    </div>
  );
}

export default App;
