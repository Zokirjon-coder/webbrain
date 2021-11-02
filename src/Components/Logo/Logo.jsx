import React, { Component } from 'react';
import { logo } from '../style/styled';
import { dataSidebar } from '../data/dataSidebar'

export default class Logo extends Component {
    render() {
        return (
            <logo>
                <img src={dataSidebar.logoImg} width='100' height='100' alt="" />
            </logo>
        )
    }
}
