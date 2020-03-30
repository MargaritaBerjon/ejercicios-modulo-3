import React from 'react';
import foto from '../images/icono-margui.jpeg';
class PaintCard extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          <header className="App-header">
            <img src={foto} className="App-logo" alt="logo" />
            <section >
              <h1 className="App-name">Margarita Berjón</h1>
              <small>Sábado 28 de marzo de 2020</small>
            </section>
          </header>
          <p className="App-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...
        </p>
          <div className="App-footer">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más..
        </a>
            <i className="fas fa-heart"></i>
          </div>
        </main>
      </div>


    );
  }
}
export default PaintCard;

