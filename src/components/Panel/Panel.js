import React from 'react';
import DatePicker from './components/DatePicker/DatePicker';
import '../Panel/panel.css';
import image from './img/vector.png';
import SliderImages from './components/SliderImages/SliderImages';
import ListFlights from './components/ListFlights/ListFlights';
import { useSelector } from 'react-redux';

function Panel() {
  const data = useSelector((state) => state.panelReduser.count);

  return (
    <div className="page-second">
      <div className="main-window">
        <div className="header-title">
          <div className="destanation">
            <p className="title-destanation">
              <span className="span-flights">Вылеты</span>
              <img className="icon-destination" src={image} alt="Icon" />
              <span className="span-destanation">SVO - JFK</span>
            </p>
          </div>
          <DatePicker className="calendar" />
        </div>
        <SliderImages />
        <div className="selection">
          <p>
            Добавленно в Избранное:{' '}
            <span className="counter">{data.length}</span> рейсов
          </p>
        </div>
        <div className="list-flights">
          <ListFlights />
        </div>
      </div>
    </div>
  );
}

export default Panel;
