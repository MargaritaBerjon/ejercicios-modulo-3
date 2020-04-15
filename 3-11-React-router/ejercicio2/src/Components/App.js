import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/API'
import '../styles/App.css';
import List from './List';
import CheckBox from './CheckBox';
import { Route, Switch } from 'react-router-dom';
import PersonDetail from './PersonDetail';
import NotFound from './NotFound';

const filters = { genders: [], cities: [] };
let users = [];


function App() {
  const [genders, setGenders] = useState([])
  const [cities, setCities] = useState([])
  const [usersToShow, setUsersToShow] = useState([])


  useEffect(() => {
    getUsers().then(data => {
      users = data.results;
      setUsersToShow(data.results);
      setGenders(getGenders(data.results));
      setCities(getCities(data.results));
    })
  }, []);

  function filterModifyed(elem) {
    //Modify Filters
    const type = elem.name;
    if (elem.checked) {
      filters[type].push(elem.value);
    } else {
      filters[type].splice(filters[type].indexOf(elem.value), 1);
    }

    //Modify results
    const newUsers = [...users].filter(elem =>
      (filters.genders.length === 0 || filters.genders.includes(elem.gender))
      &&
      (filters.cities.length === 0 || filters.cities.includes(elem.location.city))
    );
    setUsersToShow(newUsers);
  }

  return (
    <div className="container">
      <Switch>
        <Route exact path='/' render={() =>
          <>
            <div>
              <div className="filter">
                <b>Género</b>
                <CheckBox filterModifyed={filterModifyed} name="genders" list={genders}></CheckBox>
              </div>

              <div className="filter">
                <b>Ciudad</b>
                <CheckBox filterModifyed={filterModifyed} name="cities" list={cities}></CheckBox>
              </div>
            </div>
            <div className="persons">
              <b>Resultados</b>
              <List list={usersToShow} />
            </div>
          </>
        }></Route>
        <Route
          path="/PersonDetail/:id"
          render={routerProps => {
            if (searchUserById(routerProps.match.params.id)) {
              return <PersonDetail match={routerProps.match} elem={searchUserById(routerProps.match.params.id)}></PersonDetail>
            } else {
              return <NotFound returnRoute='/'></NotFound>
            }
          }
          }
        />
      </Switch>


    </div >
  );

  function getGenders(list) {
    const genders = new Set([]);
    list.map(elem =>
      genders.add(elem.gender)
    );
    return Array.from(genders);
  }

  function getCities(list) {
    const cities = new Set([]);
    list.map(elem =>
      cities.add(elem.location.city)
    );
    return Array.from(cities);
  }

  function searchUserById(id) {
    return users.find(elem => elem.id.value === id);
  }
}

export default App;
