import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import classes from './Categories.css'

import Lottie from 'react-lottie';
import * as animationData from '../animations/loadingburger.json'
import {hosturl} from '../config.js'

class Categories extends Component{
    state={
        categories:[],
        cart:[],
        data:[]
    }
    componentDidMount(){
        fetch(hosturl+'/categories/all/')
        .then(response=>{
          return response.json()
        })
        .then(json=>{
          this.setState({categories:json.categories})
        })
        .catch(err =>{
          console.log(err)
        })
    }

    callHandler=(index)=>{
        if(window.location.pathname==='/admin'){
            this.props.history.push('/admin/'+(index+1))
        }
        else{
        this.props.history.push('/'+(index+1))
        }
    }

    cartCaller=()=>{
        this.props.history.push('/cart')
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        if(this.state.categories.length===0){
            return(
                <div style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Lottie options={defaultOptions}
                height={200}
                width={200}/>
                </div>
            )
        }
        return(
            <div>
            <header className={classes.Header}>
                <h1>Categories</h1>
            </header>
            <div className={classes.Categories}>
                {
                    this.state.categories.map((i,index) => {
                    return (
                        <div 
                            className={classes.Cats} 
                            key={index} 
                            onClick={()=>this.callHandler(index)}>

                                {i}

                        </div>
                    )
                    })
                }
            </div>
            
            <div className={classes.Cart} onClick={()=>this.cartCaller()}>
                CART
            </div>

            </div>

        )
        
    }
            
}

export default withRouter(Categories)
