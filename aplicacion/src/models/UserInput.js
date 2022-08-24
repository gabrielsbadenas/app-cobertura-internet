import react from 'react'
export default class UserInputClass extends react.Component{
    constructor(props){
        super(props)
        this.state = {user:{props}}
        this.handleSubmit = function(){

        }
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="nombre"></input>
                <input type="text" placeholder="apellido"></input>
                <input type="text" placeholder="tipo de documento"></input>
                <input type="text" placeholder="numero de documento"></input>
                <input type="text" placeholder="subdominio de email"></input>
                <input type="text" placeholder="dominio de email"></input>
                <input type="text" placeholder="codigo de pais (ej:+54)"></input>
                <input type="text" placeholder="codigo de area (ej:11)"></input>
                <input type="text" placeholder="numero de telefono"></input>
                <input type="text" placeholder="provincia"></input>
                <input type="text" placeholder="localidad"></input>
                <input type="text" placeholder="codigo postal"></input>
                <input type="text" placeholder="calle"></input>
                <input type="text" placeholder="numero de calle"></input>
                <input type="text" placeholder="departamento"></input>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}