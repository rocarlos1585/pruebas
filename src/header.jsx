import logo from './logo.svg';
import './App.css';
import logoHeader from './recursos/vinos-america-logo-01.svg'
//import Menu from './menu'

function Header() {
  return (
    <div className="headerContainer">
        <img src={logoHeader}/>
    </div>
  );
}

export default Header;