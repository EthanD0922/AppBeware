
// Import React 
// =========================================================
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 


// Import Components
// =========================================================
  import Form from "./components/Form";
  import Homepage from "./pages/Homepage"
  import Nav from "./components/Nav"
  import Wrapper from "./components/Wrapper";

// Import CSS
// =========================================================
import "./App.css"

// App
// =========================================================
function App() {
  return (
    <Router>
       <Nav /> 
          <Switch>
              <Route exact path="/" component={Form} />
              <Route exact path="/homepage" component={Homepage} />
          </Switch>
    </Router>
  )
}

export default App;
