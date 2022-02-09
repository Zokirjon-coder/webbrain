import React, { useContext } from 'react';
import { COMMENTTGL } from './style'
import { CommentApi } from '../../../../context/CommentContext';

const darkTheme = {
    '--text-color': 'white',
    '--bgColor': '#333'
}

const changeTheme = (mode) =>{
    const style = document.documentElement.style;
    if (mode) {
        style.setProperty('--bgColor', '#333');
        style.setProperty('--text-color', 'white')
    }
    else {
        style.setProperty('--bgColor', '#F5FAFF');
        style.setProperty('--text-color', '#1B1A18')
    }
}

const Toggle = () => {
    const [state, dispatch] = useContext(CommentApi);
    changeTheme(state.darkMode)
    return (
        <COMMENTTGL  position={state.darkMode}>
            <input onChange={() => dispatch({type: 'theem'})} type="checkbox" id='theem' />
            <label htmlFor='theem'>Tungi rejim</label>
        </COMMENTTGL>
    );
};

export default Toggle;
