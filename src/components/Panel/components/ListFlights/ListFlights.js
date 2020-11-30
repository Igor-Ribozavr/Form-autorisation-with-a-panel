import React, { useState, useEffect } from 'react';
import ContentFlightsList from './ContentFlightsList/ContentFlightsList'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useDispatch, useSelector } from 'react-redux';
// import { startFetchReceiveData } from '../../../../redux/action';
import './listFlights.css';


const style = {
  height: 101,
  width: '580px',
  borderStyle: 'solid',
  borderWidth: '1px 0px 1px 0px',
  borderColor: 'rgba(135, 135, 135, 0.2) ',
};


function ListFligths() {
  const [items, setItems] = useState([]);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(startFetchReceiveData());
//   }, [dispatch]);

  // const data = useSelector((state) => state.panelReduser.data);
  




  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('https://swapi.dev/api/starships/');
    const result = await response.json();
    setItems(result.results);
  };

  return (
    <div style={{ width: '598px', }}>
      <InfiniteScroll
        height={515}
        dataLength={items.length}
        next={fetchImages}
        hasMore={true}
        
      >
        {items.map((item, index) => (
          <div style={style} key={index}><ContentFlightsList/></div>
        ))}
      </InfiniteScroll>
    </div>
  );
}


export default ListFligths;
