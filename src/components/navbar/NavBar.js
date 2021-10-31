import { Link, Route, Switch } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">
          Bibliotecas de Provas <span className="span-text-title">UCAN</span>
        </h1>
        <span className="header-motivation-text">
          Nos ajude a ajudar!
        </span>
      </div>


      <Switch>
        <Route exact path="/biblioteca-de-provas-e-materiais-site">
          <div className="menu-container">
            <Link to="/biblioteca-de-provas-e-materiais-site/login" className="menu-link">sobre</Link>
            <Link to="/biblioteca-de-provas-e-materiais-site/login" className="menu-link">login</Link>
            <Link to="/biblioteca-de-provas-e-materiais-site/login" className="menu-link">cadastro</Link>
            <Link to="/biblioteca-de-provas-e-materiais-site/contribute" className="menu-link contribute-link">Contribua</Link>
          </div>
        </Route>
        <Route exact path="/biblioteca-de-provas-e-materiais-site/contribute">
          <Link to="/biblioteca-de-provas-e-materiais-site" className="contribute-link">Voltar</Link>
        </Route>
      </Switch>

    </div>
  );
}

export default NavBar;