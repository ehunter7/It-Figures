import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Activities from "./Pages/Activities";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/activities"} component={Activities} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
