import React, { useContext } from 'react';
import { HEADER } from '../style'
import { CommentApi } from '../../../../context/CommentContext'

const Toggle = () => {
    const [showCommet, setShowComment] = useContext(CommentApi);
    return (
        <HEADER.COMMENT  position={showCommet}>
            <input onChange={() => setShowComment(!showCommet)} type="checkbox" id='comment' />
            <label htmlFor='comment'>Qiziqarli sayohat</label>
        </HEADER.COMMENT>
    );
};

export default Toggle;
