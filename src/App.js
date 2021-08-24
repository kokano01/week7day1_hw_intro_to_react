import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './views/About';
import Home from './views/Home';
import News from './views/News';
import Students from './views/Students';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shoha Tsuchida",
      company: "Coding Summit"
    }
  }


  render() {
    return (  //can only return 1 parent.
      <div>
          <Nav />
          <h1>Hello world</h1>
          <h3>The User is {this.state.name}</h3>


          <Switch>
            <Route exact path='/' render={() => <Home/> }/>
            <Route exact path='/about' render={() => <About my_company = {this.state.company}/>}/>
            <Route exact path='/news' render={() => <News/>}/>
            <Route exact path='/students' render={() => <Students/> }/>
          </Switch>


      </div>
      
    )
  }
}
