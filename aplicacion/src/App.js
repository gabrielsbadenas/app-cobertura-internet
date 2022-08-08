import logo from './logo.svg';
import './App.css';
import User from './models/User'
function App() {
  let user =User// new User()
  console.log(user.user)
  return (
    <div className="App">
      <p font="black">nombre: {user.user.nombres.primer}</p>
      <p font="black">apellido: {user.user.nombres.ultimo}</p>
      <p font="black">tipo de documento: {user.user.documento.tipo}</p>
      <p font="black">numero de documento: {user.user.documento.numero}</p>
      <p font="black">email: {user.user.email.sub+user.user.email.at+user.user.email.domain}</p>
      <p font="black">telefono: {user.user.phone.country.code+user.user.phone.area.number+user.user.phone.number}</p>
    </div>
  );
}

export default App;
