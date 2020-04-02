import React from 'react';

const list = {
  Boston: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg',
  Praga: 'https://cdn.civitatis.com/republica-checa/praga/guia/praga.jpg',
  Tokyo: 'https://www.japonalternativo.com/wp-content/uploads/2018/10/barrio-de-akihabara-en-tokio.jpg',
  Sydney: 'https://growproexperience.com/wp-content/uploads/2018/05/Que%CC%81-ver-en-Sydney-1280x640.jpg',
  BuenosAires: 'https://conocedores.com/wp-content/uploads/2019/09/10-museos-gratis-buenos-aires-26092019.jpg'
}

function CityImage(props) {
  return (
    <div>
      <img className="destination-image" src={list[props.city]} alt={props.city} />
    </div>
  );


}

export default CityImage;
