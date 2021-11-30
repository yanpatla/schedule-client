import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/authState";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
