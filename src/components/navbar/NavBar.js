import { Link, Route, Switch } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="header">
      <h1 className="header-title">Bibliotecas de Provas <span className="span-text-title">UCAN</span></h1>

      <Switch>
        <Route exact path="/biblioteca-de-provas-e-materiais-site">
          <Link to="/biblioteca-de-provas-e-materiais-site/contribute" className="contribute-link">Contribua</Link>
        </Route>
        <Route exact path="/biblioteca-de-provas-e-materiais-site/contribute">
          <Link to="/biblioteca-de-provas-e-materiais-site" className="contribute-link">Voltar</Link>
        </Route>
      </Switch>

    </div>
  );
}

export default NavBar;