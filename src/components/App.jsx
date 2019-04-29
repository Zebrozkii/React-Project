import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './Body';
import About from './About';
import Interests from './Interests';



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
    </Switch>
    </div>
    </div>
  );
}

export default App;
