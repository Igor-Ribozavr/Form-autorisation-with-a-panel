import React from 'react';
import './listFlights.css';
import ContentFlightsList from './ContentFlightsList/ContentFlightsList'
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  height: 101,
  borderStyle: 'solid',
  borderWidth: '1px 0px 1px 0px',
  borderColor: 'rgba(135, 135, 135, 0.2) ',
};

class ListFligths extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true,
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 500);
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={515}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((data, index) => (
            <div style={style} key={index}>
              <ContentFlightsList data={data}/>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ListFligths;
