import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {

  constructor(props) {
    super(props);
    this.myDestination = '...';
    this.onChangeListener = this.onChangeListener.bind(this);
  };

  onChangeListener(event) {
    this.myDestination = event.target.value;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <select onChange={this.onChangeListener}>
          <option value="BuenosAires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <CityImage
          city={this.myDestination}
        />
      </div>
    );
  }
};

export default Destiny;
