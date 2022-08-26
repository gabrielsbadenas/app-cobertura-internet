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
                    primer: '',
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
            list: [],
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
        let alist = this.state.list
        alist.push(this.state.user)
        this.setState({ list: alist })
        console.log(this.state.list)
        //console.log(this.state.user, users)
    }
    handleNombre(e) {
        console.log(e.target.value, this.state.user.nombres.primer)
        this.setState({ user: { nombres: { primer: e.target.value } } })
    }
    handleApellido(e) {
        this.setState({
            user: {
                nombres: {
                    ultimo: e.target.value
                }
            }
        })
    }
    handleDocumentType(e) {
        this.setState({ user: { documento: { tipo: e.target.value } } })
    }
    handleDocumentNumber(e) {
        this.setState({ user: { documento: { numero: e.target.value } } })
    }

    handleAdressProvince(e) {
        this.setState({ user: { domicilio: { provincia: e.target.value } } })
    }
    handleAdressStreet(e) {
        this.setState({ user: { domicilio: { calle: e.target.value } } })
    }
    handleAdressNumber(e) {
        this.setState({ user: { domicilio: { numero: e.target.value } } })
    }
    handleAdressPuerta(e) {
        this.setState({ user: { domicilio: { puerta: e.target.value } } })
    }
    handleAdressCity(e) {
        this.setState({ user: { domicilio: { localidad: e.target.value } } })
    }
    handleAdressPostCode(e) {
        this.setState({ user: { domicilio: { codigopostal: e.target.value } } })
    }

    handleSubdomain(e) {
        this.setState({ user: { email: { sub: e.target.value } } })
    }
    handleDomain(e) {
        this.setState({ user: { email: { domain: e.target.value } } })
    }


    handlePhoneCountryName(e) {
        this.setState({ user: { phone: { country: { name: e.target.value } } } })
    }
    handlePhoneCountryCode(e) {
        this.setState({ user: { phone: { country: { code: e.target.value } } } })
    }
    handlePhoneAreaNumber(e) {
        this.setState({ user: { phone: { area: { number: e.target.value } } } })
    }
    handlePhoneNumber(e) {
        this.setState({ user: { phone: { number: e.target.value } } })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="nombre"
                    onChange={this.handleNombre.bind(this)}
                    value={this.state.user.nombres.primer}></input>
                <input type="text" placeholder="apellido"
                    onChange={this.handleApellido.bind(this)}
                    value={this.state.user.nombres.ultimo}
                ></input>

                <input type="text" placeholder="tipo de documento"
                    onChange={this.handleDocumentType.bind(this)}
                    value={this.state.user.documento.tipo}
                ></input>
                <input type="text" placeholder="numero de documento"
                    onChange={this.handleDocumentNumber.bind(this)}
                    value={this.state.user.documento.numero}
                ></input>

                <input type="text" placeholder="subdominio de email"
                    onChange={this.handleSubdomain.bind(this)}
                    value={this.state.user.email.sub}
                ></input>
                <input type="text" placeholder="dominio de email"
                    onChange={this.handleDomain.bind(this)}
                    value={this.state.user.email.domain}
                ></input>

                <input type="text" placeholder="codigo de pais (ej:+54)"
                    onChange={this.handlePhoneCountryCode.bind(this)}
                    value={this.state.user.phone.country.code}
                ></input>
                <input type="text" placeholder="codigo de area (ej:11)"
                ></input>
                <input type="text" placeholder="numero de telefono"
                ></input>

                <input type="text" placeholder="provincia"
                ></input>
                <input type="text" placeholder="localidad"
                ></input>
                <input type="text" placeholder="codigo postal"
                ></input>
                <input type="text" placeholder="calle"
                ></input>
                <input type="text" placeholder="numero de calle"
                ></input>
                <input type="text" placeholder="departamento"
                ></input>

                <button placeholder='guardar' value={this.state.user} onClick={this.handleSave.bind(this)}></button>
                <input type="submit" value="submit" onChange={this.handleSubmit.bind(this)}></input>
            </div>
        )
    }
}