import React, { Component } from 'react'
import { people } from '../data/people';

export default class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people,
            searchParametr: 'name',
            styleName: {
                fontSize: '18px',
                color: 'grey',
                minWidth: '150px',
                textAlign: 'left'
            },
            edit: {
                id: null,
                name: 'name',
                surname: 'surname',
                age: 0,
                status: 'status',
            }
        };
    }
    render() {
        let clicked = (id) => {
            this.setState({ people: this.state.people.filter(value => value.id !== id) })
        }

        let onSearch = (e) => {
            let text = e.target.value;
            let newData;
            text === '' ? newData = people : isNaN(text) ? newData = people.filter(value => value[this.state.searchParametr].toUpperCase().includes(text.toUpperCase())) : newData = people.filter(value => String(value[this.state.searchParametr]).includes(String(text)))
             this.setState({ people:  newData})
        }

        let selected = (value) => {
            this.setState({ searchParametr: value });
        }

        let edit = (id) => {
            this.state.people.forEach(value => {
                if(value.id === id){
                    this.setState({edit: value});
                }
            })
        }

        let update = () => {
            let newDate = this.state.people;
            newDate.forEach(value => {
                if(value.id === this.state.edit.id){
                    value = this.state.edit;
                }
            });
            this.setState({people: newDate});
        }

        let editState = (e) => {
            let newEdit = this.state.edit;
            for(let key in newEdit){
                if(key === e.target.name){
                    if(e.target.value) newEdit[key] = e.target.value;
                }
            }
            
        }

        return (
            <div>
                <input type="text" onChange={onSearch} placeholder={"search " + this.state.searchParametr} />
                <select onChange={({ target }) => selected(target.value)}>
                    <option value="name">name</option>
                    <option value="surname">surname</option>
                    <option value="status">status</option>
                    <option value="age">age</option>
                </select>
                <br />
                <input name={'name'} placeholder={this.state.edit.name} onChange={editState} type="text" />
                <input name={'surname'} placeholder={this.state.edit.surname} onChange={editState} type="text" />
                <input name={'status'} placeholder={this.state.edit.status} onChange={editState} type="text" />
                <button onClick = {update}>update</button>
                {this.state.people.map(({ id, name, surname, age, status }) => {
                    return (
                    <div key={id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 100px'
                    }}>
                        <h1 style={this.state.styleName} className="name">{name}</h1>
                        <h1 style={this.state.styleName} className="name">{surname}</h1>
                        <h1 style={this.state.styleName} className="name">{age}</h1>
                        <h1 style={this.state.styleName} className="name">{status}</h1>
                        <button onClick={() => clicked(id)}>delete</button>
                        <button onClick={() => edit(id)}>edit</button>
                    </div>
                    );
                })}
            </div>
        )
    }
}
