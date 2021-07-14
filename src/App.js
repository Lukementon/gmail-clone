import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./components/email";
import Header from "./components/header";
import Mail from "./components/mail";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app_body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route>
              <EmailList path="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
