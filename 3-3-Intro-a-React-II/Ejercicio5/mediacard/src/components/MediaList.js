import React from 'react';
import PaintCard from 'PaintCard';

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <h1>Tarjetas</h1>
        <ul>
          <li>
            <PaintCard name='Margarita Berjón' date='Sábado 28 de marzo de 2020'
              content='containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
          <li>
            <PaintCard name='Margarita Berjón' date='Sábado 28 de marzo de 2020'
              content='containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
          <li>
            <PaintCard name='Margarita Berjón' date='Sábado 28 de marzo de 2020'
              content='containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />
          </li>
        </ul>
      </section>

    );
  }
}
export default MediaList;