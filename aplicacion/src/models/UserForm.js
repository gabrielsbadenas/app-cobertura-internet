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
    handle1() { }
    handle2() { }
    handle3() { }
    handle4() { }
    handle5() { }
    handle6() { }
    handle7() { }

    handle8() { }
    handle9() { }
    handle10() { }
    handle11() { }
    handle12() { }
    handle13() { }
    handle14() { }

    handle15() { }

    render() {
        console.log('userform12', this.state)
        return (
            <div>
                <h1>
                coordenadas actuales
                </h1>
                <p>
                    hola {'x:' + Math.sqrt(160 * 144)}
                    {' y:' + Math.sqrt(180)} mundo
                    x: {'-34.6227364'}
                    y: {-58.1882655}
                </p>
            </div>
        )
    }
}
class InputUser extends React{
    constructor(props){
        super(props)
    }
    listOfInputs(){
        const list = [
            "nombre",
            "apellido",
            "tipo de documento",
            "numero de documento",
            "subdominio de email",
            "dominio de email",
            "codigo de pais (ej:+54)",
            "codigo de area (ej:11)",
            "numero de telefono",
            "provincia",
            "localidad",
            "codigo postal",
            "calle",
            "numero de calle",
            "departamento"
        ]
        return list
    }
    render(){
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
                    onChange={this.handlePhoneAreaNumber.bind(this)}
                    value={this.state.user.area.number}
                ></input>
                <input type="text" placeholder="numero de telefono"
                    onChange={this.handlePhoneNumber.bind(this)}
                    value={this.state.user.phone.number}
                ></input>

                <input type="text" placeholder="provincia"
                    onChange={this.handleAdressProvince.bind(this)}
                    value={this.state.user.domicilio.provincia}
                ></input>
                <input type="text" placeholder="localidad"
                    onChange={this.handleAdressCity.bind(this)}
                    value={this.state.user.domicilio.localidad}
                ></input>
                <input type="text" placeholder="codigo postal"
                    onChange={this.handleAdressPostCode.bind(this)}
                    value={this.state.user.domicilio.codigopostal}
                ></input>
                <input type="text" placeholder="calle"
                    onChange={this.handleAdressStreet.bind(this)}
                    value={this.state.user.domicilio.calle}
                ></input>
                <input type="text" placeholder="numero de calle"
                    onChange={this.handleAdressNumber.bind(this)}
                    value={this.state.user.domicilio.numero}
                ></input>
                <input type="text" placeholder="departamento"
                    onChange={this.handleAdressPuerta.bind(this)}
                    value={this.state.user.domicilio.puerta}
                ></input>

                <button placeholder='guardar' value={this.state.user}
                    onClick={this.handleSave.bind(this)}></button>
                <input type="submit" value="submit"
                    onChange={this.handleSubmit.bind(this)}></input>
        </div>
    }
}
export default UserForm