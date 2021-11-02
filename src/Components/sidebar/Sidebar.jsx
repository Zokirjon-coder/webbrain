import React, { Component } from 'react';
import { SidebarContainer } from '../style/styled';
import Logo from '../Logo/Logo';

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <SidebarContainer>
                    <Logo />
                </SidebarContainer>
            </>
        )
    }
}
