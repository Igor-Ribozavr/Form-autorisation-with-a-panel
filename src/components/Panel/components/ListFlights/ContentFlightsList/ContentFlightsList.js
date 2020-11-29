import React from 'react';
import './ContentFlightsList.css';
import arrow from './img/arrow.png';
import plane from './img/plane.png';
import Like from './Like/Like';

function ContentFlightsList(props) {
  return (
    <div className="container-flights-contents">
      <div className="logo-content">
        <div className="circle">
          <img className="icon-arrow" src={plane} alt="Icon" />
        </div>
      </div>
      <div className="date-city-content">
        <div className="city-content">
          <p className="city-title">
            Moscow (SVO) <img className="icon-arrow" src={arrow} alt="Icon" />{' '}
            New Yourk City (JFK)
          </p>
          <p className="date-title">28 june, 2020 - 14:50</p>
          <p className="company-title">Aeroflot</p>
        </div>
        <div className="like-content">
          <div className="like-container">
            <div className="test">
              <Like />
            </div>
          </div>
          <p className="prise-title">
            Prise:<span className="prise">23 924 ₽</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentFlightsList;
