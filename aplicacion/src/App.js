import logo from './logo.svg';
import './App.css';
import User from './models/User'
function UserView(){
  let user ={user:User.users[1]}// new User()
  console.log(User.users)
  //to do: sacar uno de los user (cambiar user.user por user solo)/
  return (  
    <div className="App">
      <p font="black">nombre: {user.user.nombres.primer}</p>
      <p font="black">apellido: {user.user.nombres.ultimo}</p>
      <p font="black">tipo de documento: {user.user.documento.tipo}</p>
      <p font="black">numero de documento: {user.user.documento.numero}</p>
      <p font="black">email: {user.user.email.sub+user.user.email.at+user.user.email.domain}</p>
      <p font="black">telefono: {''+user.user.phone.country.code+user.user.phone.area.number+user.user.phone.number}</p>
      <p>domicilio:
{user.user.domicilio.provincia}+{user.user.domicilio.localidad}+{user.user.domicilio.codigopostal}+{user.user.domicilio.calle}+{user.user.domicilio.numero}+{user.user.domicilio.puerta}

      </p>
    </div>
  )
}
function App() {
  let user ={user:User.users[0]}// new User()
  console.log(User.users)
  //to do: sacar uno de los user (cambiar user.user por user solo)/
  return (  
    <div className="App">
    <UserView></UserView>
    <br></br>
      <p font="black">nombre: {user.user.nombres.primer}</p>
      <p font="black">apellido: {user.user.nombres.ultimo}</p>
      <p font="black">tipo de documento: {user.user.documento.tipo}</p>
      <p font="black">numero de documento: {user.user.documento.numero}</p>
      <p font="black">email: {user.user.email.sub+user.user.email.at+user.user.email.domain}</p>
      <p font="black">telefono: {user.user.phone.country.code+user.user.phone.area.number+user.user.phone.number}</p>
      <p>domicilio:
{user.user.domicilio.provincia}+{user.user.domicilio.localidad}+{user.user.domicilio.codigopostal}+{user.user.domicilio.calle}+{user.user.domicilio.numero}+{user.user.domicilio.puerta}

      </p>
    </div>
  );
}

export default App;
