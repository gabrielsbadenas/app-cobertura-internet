import logo from './logo.svg';
import './App.css';
import User from './models/User'
let index=0
function Usuario(){
 // constructor(){}
    return (<p>hola mundo</p>)
}
function UserView(){
  let user ={user:User.users[index]}// new User()
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
  console.log(User.users)
  //to do: sacar uno de los user (cambiar user.user por user solo)/
  return (  
    <div className="App">
    <UserView></UserView>
    <Usuario></Usuario>
    </div>

  );
}

export default App;
//TODO HACER QUE EL NUMERO DE TELEFONO SEA UN INT SIN CODIGO DE PAIS NI NADA