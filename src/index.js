import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root'
import CommentContext from './context/CommentContext'

ReactDOM.render(
  <React.StrictMode>
    <CommentContext>
      <Root />
    </CommentContext>
  </React.StrictMode>,
  document.getElementById('root')
);
