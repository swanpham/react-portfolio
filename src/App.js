import Header from "./component/Header";
import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Resume from "./component/Resume";

function App() {
const [allLink] = useState (['About','Work', 'Contact','Resume']);
const [currentLink, setCurrentLink] = useState (allLink[0]);


  return (
    <div className="App">
      <Header currentLink = {currentLink} allLink = {allLink} setCurrentLink = {setCurrentLink}/>
      <Switch>
        <Route exact path = '/'>
          <About/>
        </Route>
        <Route  path = '/About'>
          <About/>
        </Route>
        <Route  path = '/Portfolio'>
          <Work/>
        </Route>
        <Route  path = '/Contact'>
          <Contact/>
        </Route>
        <Route  path = '/Resume'>
          <Resume/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
