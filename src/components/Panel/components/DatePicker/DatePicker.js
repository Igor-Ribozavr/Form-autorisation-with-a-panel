import 'date-fns';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import image from './img/icon.png';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

function DatePickers() {
  const [startDate, setStartDate] = useState(new Date());
  const [onenIcon, setOpen] = useState(false);

  return (
    <>
      <div className="container-picker">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="custom-border"
            openCalindare
            locale="ru"
            dateFormat="dd MMMM yyyy"
            open={onenIcon}
          />
        </div>
        <div className="icon-container">
          <img
            onClick={() => {
              setOpen(!onenIcon);
            }}
            className="icon-picker"
            src={image}
            alt="Icon"
          />
        </div>
      </div>
    
    </>
  );
}
export default DatePickers;
