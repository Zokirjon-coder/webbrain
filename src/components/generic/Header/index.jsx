import React from 'react';
import { BUTTON_OUTLINE, FLEX } from '../../styles/index';
import { HEADER } from './style';
import { dataMenu } from '../../../utils/dataMenu';
import {
    NavLink,
    useLocation,
    useNavigate,
} from 'react-router-dom'
import Toggle from './Toggle';

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return <HEADER>
        <FLEX justify='space-between' align='center'>
            <HEADER.LOGO onClick={()=>navigate('/asosiy')}>
                <span>web</span>brain
            </HEADER.LOGO>
            <HEADER.MENU>
                {
                    dataMenu.map(({pathname, id, hidden, title}) => !hidden && <NavLink  key={id} to={pathname} style={
                        ({isActive}) => {
                            return{
                                color: isActive ?'var(--blue)': 'var(--text-color)',
                                textDecoration: 'none',
                                fontFamily: 'var(--inter)',
                                // fontWeight: isActive ? 500 : 400,
                                whiteSpace: 'nowrap',
                            }
                        }
                    }>{title}</NavLink>)
                }
            </HEADER.MENU>
            <HEADER.LOGIN>
                <FLEX justify='flex-end' style={{gap: '20px'}}>
                    {
                        location.pathname==='/asosiy' ? <Toggle /> : null
                    }
                    <BUTTON_OUTLINE onClick={()=>navigate('/login')}>Login</BUTTON_OUTLINE>
                </FLEX>
            </HEADER.LOGIN>
        </FLEX>
    </HEADER >;
};

export default Header;
