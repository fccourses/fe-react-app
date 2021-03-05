import React, { useEffect, useReducer } from 'react';
import reducer from './reducer';

const Chat = props => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });

  useEffect(() => {
    fetch('/chat.json')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'DATA_RESPONSE_SUCCESS',
          data,
        })
      );
  }, []);

  return (
    <div>
      {state.messages.map(m => (
        <li key={m.id}>{JSON.stringify(m)}</li>
      ))}
    </div>
  );
};

export default Chat;
