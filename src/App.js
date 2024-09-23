import logo from "./logo.svg";
import "./App.css";
import Menubar from "./components/header/Menubar";
import Bodysec from "./components/body/Bodysec";
import Footer from "./components/footer/Footer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            
            <Route path="/"><Menubar /> <Bodysec /></Route>

            {/* <Route path="/bussiness"><Menubar /><Bodysec category='bussiness'/></Route>
            <Route path="/entertainment"><Menubar /><Bodysec category='entertainment'/></Route>
            <Route path="/general"><Menubar /><Bodysec category='general'/></Route>
            <Route path="/health"><Menubar /><Bodysec category='health'/></Route>
            <Route path="/sports"><Menubar /><Bodysec category='sports'/></Route>
            <Route path="/technology"><Menubar /><Bodysec category='technology'/></Route> */}
          </Switch>

        <Footer />
          
        </div>
      </Router>
    </>
  );
}

export default App;
