import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from "./pages/CharacterDetail";
import LandPage from "./pages/LandPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/characterdetail/:name" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
