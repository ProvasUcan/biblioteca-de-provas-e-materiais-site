import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <div className="header">
      <h1 className="header-title">Bibliotecas de Provas <span className="span-text-title">UCAN</span></h1>

      <Link to="/contribute" className="contribute-link">Contribua</Link>
    </div>
   );
}
 
export default NavBar;