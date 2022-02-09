import React, { useContext } from 'react';
import { CommentApi } from '../../../context/CommentContext';
import { COMMENT } from './style';

const Comment = (props) => {
  const [showComment] = useContext(CommentApi);
  const comment = props.text;
  return <COMMENT show={showComment}>
    <svg width="137" height="200" viewBox="0 0 137 200" fill="none">
      <path d="M68.5 1C68.5 1 106.041 147.177 73.5 140C55.972 136.134 46.599 124.554 41 107.5C29.8185 73.4432 117.391 86.7669 132 119.5C144.686 147.924 125.916 175.259 100 192.5C67.3928 214.192 1 176.5 1 176.5" stroke="#514D48" />
    </svg>
    <COMMENT.BODY show={showComment}>
      {comment}
    </COMMENT.BODY>
  </COMMENT>;
};

export default Comment;
