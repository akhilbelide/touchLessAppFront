import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import Categories from './components/Categories'
import Items from './components/Items';
import Order from './components/Order';
import { Provider } from 'react-redux';
import store from './redux/store';

import Cart from './components/Cart';
// import { messaging } from "./firebase";

class App extends Component {
  state={
    categories:[],
    cart:[],
    data:[]
  }
  async componentDidMount() {
    // messaging.requestPermission()
    //   .then(async function() {
    //     const token = await messaging.getToken();
    //     console.log(token)
    //   })
    //   .catch(function(err) {
    //     console.log("Unable to get permission to notify.", err);
    //   });
    // navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  }
 
  render() {
    return (
      <Provider store={store}>
        
      <BrowserRouter>
        <div className="App">          
             {/* <Categories categories={this.state.categories}/>  */}
             <Switch>
             <Route exact path='/cart' component={Cart}/>
             <Route exact path='/order' component={ Order}/>
             <Route exact path='/' component={Categories}/>
             <Route exact path='/admin' component={Categories}/>
             <Route exact path='/:id' component={Items}/>
             <Route exact path='/admin/:id' component={Items}/>
             </Switch>
        </div>
      </BrowserRouter>
     
      </Provider>
    );
  }
}

export default App;
