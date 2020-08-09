import React, { Component } from 'react'
class CrudInput extends React.Component {
    state = {
        name: "",
        power: 0,
    }
    constructor(props) {
        super(props)

        // this bind
        this.insert = this.insert.bind(this);

        // ref 생성
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    insert(event) {
        // 이벤트 핸들러 this bind

        // 유효성 검사: 생략

        // 부모(CrudApp)에게 값을 넘긴다.
        const user = {
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value),
        }
        this.props.insert(user);
    }
    render() {
        const { name, power } = this.state;
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div>
                    <label htmlFor="">Name : </label>
                    <input
                        type="text"
                        name="name"
                        ref={this.refUserName}
                        defaultValue={name}
                    />
                </div>
                <div>
                    <label htmlFor="">Power : </label>
                    <input
                        type="text"
                        name="power"
                        ref={this.refUserPower}
                        defaultValue={power}
                    />
                </div>
                <button onClick={this.insert}>Add</button>
            </div>
        );
    }
}


export default class CrudList