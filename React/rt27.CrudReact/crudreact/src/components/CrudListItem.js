import React, { Component } from 'react'
class CrudListItem extends React.Component {
    state = {
        isEditMode: false
    }
    constructor(props) {
        super(props)
        //this bind
        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doDel = this.doDel.bind(this);
        this.doEdit = this.doEdit.bind(this);
        this.doSave = this.doSave.bind(this);

        // ref 생성
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    doUp(e) {
        const id = this.props.man.id;
        this.props.doUp(id) // CurdApp.doUp() 호출
    }
    doDown(e) {
        const id = this.props.man.id;
        this.props.doDown(id) // CurdApp.doDown() 호출
    }
    doDel(e) {
        const id = this.props.man.id;
        this.props.doDel(id) // CurdApp.doDel() 호출
    }
    doEdit(e) {
        this.setState((prevState, prop) => {
            return {
                isEditMode: !prevState.isEditMode
            }
        });
    }
    doSave(e) {
        //isEditMode 바꾸기 
        this.setState((prevState, prop) => {
            return {
                isEditMode: !prevState.isEditMode
            }
        });

        // 수정값 CrudApp 로 보내기
        const id = this.props.man.id;
        const name = this.refUserName.current.value;
        const power = Number(this.refUserPower.current.value);

        const newMan = {
            id: id,
            name: name,
            power: power,
        }

        this.props.doEdit(newMan); // CrudApp.doEdit() 호출 
    }
    render() {
        console.log(this.props.man, this.props.index);

        const { id, name, power } = this.props.man;

        const formView = (
            <tr className="" key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )
        const formEdit = (
            <tr className="" key={id}>
                <td>{id}</td>
                <td>
                    <input
                        type="text"
                        name="name"
                        ref={this.refUserName}
                        defaultValue={name}
                    />
                </td>
                <td>
                    {power}
                    <input
                        type="text"
                        name="power"
                        ref={this.refUserPower}
                        defaultValue={power}
                    />
                </td>
                <td>
                    <button>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        )

        if (this.state.isEditMode) {
            return formEdit
        }
        else {
            return formView
        }
    }
}


export default class CrudList