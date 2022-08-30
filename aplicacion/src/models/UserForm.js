import React from "react";
import UserTable from "./UserTable";

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            table: new UserTable(
                '', '', '', '', '',
                '', '', '', '', '',
                '', '', '', '', '')
        }
    }
    render() {
        console.log('userform12', this.state)
        return (
            <p>hola{ }mundo</p>
        )
    }
}
export default UserForm