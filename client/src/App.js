import React from "react";
import { Switch, Route } from "react-router-dom";
import AdmissionForm from "./components/form/AdmissionForm";
import Home from "./components/home/Home";
import StudentResultBoard from "./components/result/StudentResultBoard";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/result" exact={true} component={StudentResultBoard} />
          <Route path="/admission" exact={true} component={AdmissionForm} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
