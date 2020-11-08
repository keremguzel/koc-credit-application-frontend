import './App.css';
import ApplicationPage from "./pages/ApplicationPage"
import ResultPage from "./pages/ResultPage"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ApplicationPage}/>
          <Route path="/result/:id" component={ResultPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
