import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Courses from "./snippets/Courses";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Courses" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
