import React, { useState } from 'react';
import './App.css';

const maxTypes = 3;
let typesSelected = 0;

function App() {
  const [form, setForm] =
    useState({
      name: '',
      description: '',
      language: '',
      file: ''
    });
  const fileInput = React.createRef();
  console.log(fileInput);


  function handleChange(ev) {
    if (ev.target.type === 'checkbox') {
      manageCheckbox(ev);
    } else {
      saveForm(ev);
    }
  }

  function manageCheckbox(ev) {
    if (ev.target.checked) {
      if (typesSelected < maxTypes) {
        typesSelected++;
      } else {
        ev.target.checked = false;
      }
    } else {
      typesSelected--;
    }
  }

  function saveForm(ev) {
    //Object assign hace una copia de un objeto, en este caso hacew una copia de form.
    let formCopy = Object.assign({}, form);
    formCopy[ev.target.name] = ev.target.value;
    setForm(formCopy);
  }
  console.log(form.file);
  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Nombre
    <input type="text" name="name" />
        </label>
        <label>
          Descripción
          <textarea name="description" />
        </label>
        <label> Idioma
          <select name="language">
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
            <option value="portuguese">Portugués</option>
          </select>
        </label>

        <input defaultChecked type="radio" id="all" name="public" value="todos los publicos" />
        <label htmlFor="all">Todos los publicos</label>

        <input type="radio" id="7" name="public" value="7" />
        <label htmlFor="7">7</label>

        <input type="radio" id="12" name="public" value="12" />
        <label htmlFor="12">12</label>

        <input type="radio" id="16" name="public" value="16" />
        <label htmlFor="16">16</label>

        <input type="radio" id="18" name="public" value="18" />
        <label htmlFor="18">7</label>



        <input type="checkbox" value="comedy" />
        <label htmlFor="comedia">comedia</label>

        <input type="checkbox" value="drama" />
        <label htmlFor="drama">drama</label>

        <input type="checkbox" value="fantasía" />
        <label htmlFor="fantasía">fantasía</label>

        <input type="checkbox" value="acción" />
        <label htmlFor="acción">acción</label>

        <input type="checkbox" value="familia" />
        <label htmlFor="familia">familia</label>

        <input type="checkbox" value="terror" />
        <label htmlFor="terror">terror</label>

        <label>
          Carátula
          <input name="file" type="file" ref={fileInput}
          />
        </label>

      </form>
      <section>
        <h1>
          Film Card
        </h1>
        <h2>
          {form.name}
        </h2>
        <p>
          {form.description}
        </p>
        <p>
          {form.language}
        </p>
        <img scr={form.file}></img>

      </section>
    </div>
  );
}

export default App;
