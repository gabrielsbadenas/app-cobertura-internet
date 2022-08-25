import react from 'react'
import User from './User'
const userState = {
    nombres: {
        primer: 'g',
        ultimo: ''
    },
    documento: {
        tipo: '',
        numero: ''
    },
    domicilio: {
        provincia: '',
        calle: '',
        numero: 1,
        puerta: '',
        localidad: '',
        codigopostal: ''
    },
    email: {
        sub: '',
        at: '@',
        domain: ''
    },
    phone: {
        country: {
            name: '',
            code: ''
        },
        area: {
            number: 1
        },
        number: 12345678
    }
}
const users = []
export default class UserInputClass extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                nombres: {
                    primer: 'g',
                    ultimo: ''
                },
                documento: {
                    tipo: '',
                    numero: ''
                },
                domicilio: {
                    provincia: '',
                    calle: '',
                    numero: 1,
                    puerta: '',
                    localidad: '',
                    codigopostal: ''
                },
                email: {
                    sub: '',
                    at: '@',
                    domain: ''
                },
                phone: {
                    country: {
                        name: '',
                        code: ''
                    },
                    area: {
                        number: 1
                    },
                    number: 12345678
                }
            },
            props: { props }
        }
        // this.handleSubmit = function () {

        //}
    }
    handleSubmit(e) {
        //console.log(e)
        users.push(this.state.user)
        console.log(users)
        //this.setState({e})
    }
    handleSave(e) {
        console.log(this.state.user,users)
    }
    handleNombre(e) {
        console.log(e.target.value, this.state.user.nombres.primer)
        this.setState({ user: { nombres: { primer: e.target.value } } })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="nombre"
                    onChange={this.handleNombre.bind(this)}
                    value={this.state.user.nombres.primer}></input>
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
                <button placeholder='guardar' value={this.state.user} onClick={this.handleSave.bind(this)}></button>
                <input type="submit" value="submit" onChange={this.handleSubmit.bind(this)}></input>
            </div>
        )
    }
}