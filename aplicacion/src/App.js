import logo from "./logo.svg";
import "./App.css";
import User from "./models/User";
let index = 0;
//import Usuario from './models/SeparationBar'
function Usuario(props) {
  // constructor(){}
  return <p>------------------------------{props.i}</p>;
}
//import Ubicacion from './models/Location'
function Ubicacion() {
  const geolocation = navigator.geolocation;
  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
  let posicion = {};
  const getPosition = (position) => {
    posicion = position; //console.log(position)
  };
  console.log(posicion.GeolocationPosition);

  geolocation.getCurrentPosition(getPosition);
  console.log(
    navigator.geolocation.getCurrentPosition((position) =>
      console.log(position.coords.latitude, position.coords.longitude)
    )
  );

  //tiene que retornar la ubicacion en lugar de hacer console.log
}
const ubicacion = Ubicacion();
//import UserInput from './models/UserInput'
function UserInput(props) {
  return (
    <div>
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
    </div>
  );
}
//<input type="button">guardar user</input>
//import UserView from './models/UserView'
function UserView(props) {
  let user = { user: User.users[props.index] }; // new User()
  return (
    <div className="App">
      <p font="black">nombre: {user.user.nombres.primer}</p>
      <p font="black">apellido: {user.user.nombres.ultimo}</p>
      <p font="black">tipo de documento: {user.user.documento.tipo}</p>
      <p font="black">numero de documento: {user.user.documento.numero}</p>
      <p font="black">
        email:{" "}
        {user.user.email.sub + user.user.email.at + user.user.email.domain}
      </p>
      <p font="black">
        telefono:{" "}
        {"" +
          user.user.phone.country.code +
          user.user.phone.area.number +
          user.user.phone.number}
      </p>
      <p>
        domicilio:
        {user.user.domicilio.provincia}+{user.user.domicilio.localidad}+
        {user.user.domicilio.codigopostal}+{user.user.domicilio.calle}+
        {user.user.domicilio.numero}+{user.user.domicilio.puerta}
        <p font="black">coordenadas: 0, 0</p>
        #todo agregar campo de coordenadas al user
      </p>
    </div>
  );
}
function App() {
  console.log(User.users);
  //to do: sacar uno de los user (cambiar user.user por user solo)/
  return (
    <div className="App">
      <UserInput></UserInput>
      <UserView index="0"></UserView>
      <Usuario i="0"></Usuario>
      <UserView index="1"></UserView>
    </div>
  );
}

export default App;
//TODO HACER QUE EL NUMERO DE TELEFONO SEA UN INT SIN CODIGO DE PAIS NI NADA
