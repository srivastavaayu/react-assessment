import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Courses from "./snippets/Courses";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Courses}>
          <Redirect to="/Courses" />
        </Route>
        <Route path="/Courses" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
