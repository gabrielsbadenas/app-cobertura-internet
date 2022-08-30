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
    handle1(){}
    handle2(){}
    handle3(){}
    handle4(){}
    handle5(){}
    handle6(){}
    handle7(){}

    handle8(){}
    handle9(){}
    handle10(){}
    handle11(){}
    handle12(){}
    handle13(){}
    handle14(){}

    handle15(){}

    render() {
        console.log('userform12', this.state)
        return (
            <p>hola{ }mundo</p>
        )
    }
}
export default UserForm