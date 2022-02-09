import React, { useContext } from 'react';
import { COMMENTTGL } from './style'
import { CommentApi } from '../../../../context/CommentContext'

const Toggle = () => {
    const [state, dispatch] = useContext(CommentApi);
    return (
        <COMMENTTGL  position={state.showComment}>
            <input onChange={() => dispatch({type: 'comment'})} type="checkbox" id='comment' />
            <label htmlFor='comment'>Qiziqarli sayohat</label>
        </COMMENTTGL>
    );
};

export default Toggle;
