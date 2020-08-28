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
function distance  (lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

class App extends Component {
  state={
    categories:[],
    cart:[],
    data:[]
  }



  async componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(function(position) {

      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      let d = distance(17.4399,78.4983,17.3141,78.5613)
      console.log(d)
    });
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
