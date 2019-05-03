import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './Body';
import About from './About';
import Interests from './Interests';
import ContactInfo from './ContactInfo';
import Projects from './Projects';
import Comment from './Comment';



function App(){
  return (

    <div>
      <style jsx>{`

      `}</style>
      <div>
        <Switch>
          <Route exact path='/' component={Body}/>
          <Route path='/about' component={About}/>
          <Route path='/interests' component={Interests}/>
          <Route path='/contactinfo' component={ContactInfo}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/comment' component={Comment}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
