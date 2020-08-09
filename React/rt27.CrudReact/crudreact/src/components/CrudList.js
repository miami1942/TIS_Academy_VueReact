import React, { Component } from 'react'
class CrudList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const rows = this.props.list;
        /*  { items.map( function(value,key){ return ( <li key={key}> {value} </li> ) } ) }  */
        const trs = rows.map((man, index) => {
            /* man = {id: 1, name:"슈퍼맨", power: 100 }, */
            return (
                <CrudListItem
                    key={man.id}
                    man={man}
                    {...this.props}
                />
            )
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }
}

export default class CrudList;
