import React, { useContext } from 'react';
import { COMMENTTGL } from './style'
import { CommentApi } from '../../../../context/CommentContext';


const Toggle = () => {
    const [state, dispatch] = useContext(CommentApi);
    return (
        <COMMENTTGL  position={state.darkMode}>
            <input onChange={() => dispatch({type: 'theem'})} type="checkbox" id='theem' />
            <label htmlFor='theem'>Tungi rejim</label>
        </COMMENTTGL>
    );
};

export default Toggle;
