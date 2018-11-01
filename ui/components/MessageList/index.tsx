import * as React from 'react';
import { getMessages } from './utils';

class MessageList extends React.Component {

    componentDidMount = () => {
        getMessages();
    }
    
    render() {
      return (
        <div>
          Device Messages
        </div>
      )
    }
}


export default MessageList;