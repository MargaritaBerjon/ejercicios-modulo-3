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
              <h1 className="App-name">{this.props.name}</h1>
              <small> {this.props.date}</small>
            </section>
          </header>
          <p className="App-content"> {this.props.content}
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

