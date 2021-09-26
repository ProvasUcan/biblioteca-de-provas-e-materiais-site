import NavBar from "./navbar/NavBar";
import SearchContainer from "./search/SearchContainer";
import AssigmentContainer from "./assigments/AssigmentContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="main-app-container">
        <NavBar></NavBar>

        <SearchContainer></SearchContainer>

        <AssigmentContainer></AssigmentContainer>
      </div>
    </Router>

  );
}

export default App;