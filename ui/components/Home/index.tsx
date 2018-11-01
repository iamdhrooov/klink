import * as React from 'react';
import MessageList from '../MessageList';

class Home extends React.Component {


    render() {
      return (
        <div>
          Home
          <MessageList />
        </div>
      )
    }
}

export default Home;