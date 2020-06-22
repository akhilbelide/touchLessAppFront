import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import Categories from './components/Categories'
import Items from './components/Items';

import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';


class App extends Component {
  state={
    categories:[],
    cart:[],
    data:[]
  }
 
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">          
             {/* <Categories categories={this.state.categories}/>  */}
             <Switch>
             <Route exact path='/cart' component={Cart}/>

             <Route exact path='/' component={Categories}/>
             <Route exact path='/:id' component={Items}/>
             </Switch>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
