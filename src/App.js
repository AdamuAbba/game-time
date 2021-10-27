import WelcomeScreen from "../src/screens/WelcomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ColorsScreen from "../src/screens/ColorsScreen.js";
import ShapesScreen from "../src/screens/ShapesScreen";
import NavBar from "../src/components/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={WelcomeScreen} path="/" exact />
          <Route component={ColorsScreen} path="/colors" exact />
          <Route component={ShapesScreen} path="/shapes" exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
