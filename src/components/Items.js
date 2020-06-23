import React,{Component} from 'react'
import { connect } from 'react-redux';
import { cart } from '../redux/actions';
import {withRouter} from 'react-router-dom'

import classes from './Items.css'
class Items extends Component{
    state={
        // cart:[],
        data:[],
        cat_id:0
    }

    componentDidMount(){
        const id=this.props.match.params.id
        // this.setState({cart:this.props.cart})
        this.getItems(id)
    }
    getItems=(index)=>{
        fetch('https://touch-less-order.herokuapp.com/categories/all/'+ index)
        .then(response =>{
            return response.json()
        })
        .then(json => {
            let allItems=json.items
            allItems.forEach((i,ind) =>{
                let f=0;
               
                this.props.cart.forEach(ip =>{
                    if(ip.name===i.name){
                        f=1;
                        i.cart_q=ip.quantity
                    }
                })
                if(f===0){
                    i.cart_q=0
                }
            })
            console.log(allItems)
            this.setState({data:allItems , cat_id:index})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    addtoCart=(item,price,index)=>{
        let i=-1

        for(let k=0;k<this.props.cart.length;k++){
            if(this.props.cart[k].name===item){
                i=k
                break
            }
        }

        let newdata=[...this.state.data]
        newdata[index].cart_q+=1
        this.setState({data:newdata})

        let newglobalcart = [...this.props.cart]
        if(i===-1){
            const data={
                cat_id:this.state.cat_id,
                name:item,
                price:price,
                quantity:1
            }
            newglobalcart.push(data)
        }
        else{
            newglobalcart[i].quantity += 1
        }
        
        this.props.to_cart(newglobalcart)
    }

    removefromCart=(item,price,index)=>{
        let i=-1

        for(let k=0;k<this.props.cart.length;k++){
            if(this.props.cart[k].name===item){
                i=k
                break
            }
        }

        let newdata=[...this.state.data]
        newdata[index].cart_q-=1
        this.setState({data:newdata})

        let newglobalcart = [...this.props.cart]
        
        newglobalcart[i].quantity -= 1
        if(newglobalcart[i].quantity===0)
            newglobalcart.splice(i,1)
        
        this.props.to_cart(newglobalcart)
    }


    gotoCartHandler=()=>{
        this.props.history.push('/cart')
    }
    gotoCatHandler=()=>{
        this.props.history.push('/')
    }
    render(){
        console.log(this.props.cart)
        return(
            <div>
            <div className={classes.Parent}>
                {
                    this.state.data.map((i,index) => {
                        if(i.quantity!==0){
                            return(
                            
                            <div key={index} className={classes.Child}>
                                
                                <div className={classes.Subchild}>
                                <p style={{'fontWeight':'bold'}}>{i.name}</p>
                                <p>&#8377;{i.price}</p>
                                </div>

                                {i.cart_q===0 && (
                                    <div className={classes.AddtoCart} onClick={()=>this.addtoCart(i.name,i.price,index)}>
                                        Add to cart
                                    </div>
                                )}

                                {i.cart_q!==0 && (
                                    <div className={classes.Box}>
                                        <div className={classes.Boxchild} onClick={()=>this.removefromCart(i.name,i.price,index)}>
                                            -
                                        </div>
                                        <div className={classes.Boxchild}>
                                            {i.cart_q}
                                        </div>
                                        <div className={classes.Boxchild} onClick={()=>this.addtoCart(i.name,i.price,index)}>
                                            +
                                        </div>
                                        
                                    </div>
                                )}
                                
                            </div>
                          
                        )
                        }
                    })
                }
            </div>
            <div className={classes.FParent}>
                <div onClick={()=>this.gotoCatHandler()}  className={classes.GotoCart}>
                    
                    Categories
    
                </div>
                <div onClick={()=>this.gotoCartHandler()}  className={classes.GotoCart}>
                    
                    CART
    
                </div>
                

            </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
  });
  
  
  const mapDispatchToProps = dispatch => ({
    to_cart:(payload) => dispatch(cart(payload))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));