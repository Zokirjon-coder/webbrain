import React, { Component } from 'react'

export default class Food extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="foodBox">
                <div className="foodContainer">
                    <div className="row">
                        <div className="imgBox">
                            <div className="foodImg">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
