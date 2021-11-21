import React,{Component} from 'react';
import './App.css';
import Products from './components/products/Products';
import axios from 'axios'
import Filter from './components/Filter';
import Basket from './components/Basket';

class App extends Component  {
    state={
        products:[],
        filterProducts:[],
        cartItems:[]
    }
    componentDidMount() {
        axios.get("http://localhost:8000/products/")
        .then(res => this.setState({products:res.data, filterProducts:res.data}))
        .catch(err => console.log(err))
        if(localStorage.getItem("cartItems")){
            this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))})
        }
    }
    handleAddToCard =(e , product)=>{
        this.setState(
            state => {
                const cartItems = state.cartItems;
                let productAlreadyInCart = false;
                cartItems.forEach(item => {
                    if(item.id === product.id){
                        productAlreadyInCart = true;
                    }
                });
                if (!productAlreadyInCart){
                    cartItems.push({...product});
                }
                localStorage.setItem("cartItems",JSON.stringify(cartItems));
                return cartItems;
            }
        )
        console.log("addedd")
    }
    handleRemoveCart = (e, item) => {
        let cartItems = this.state.cartItems;
        cartItems.splice(item , 1)
        this.setState({cartItems})
    }
    handleChangeSort = (e) =>{
        this.setState({sort: e.target.value});
        this.listProducts();
    }
    handleChangeSize = (e) =>{
        this.setState({size: e.target.value});
        this.listProducts();
    }
    listProducts = () =>{
        this.setState(
            state =>{
                if (state.sort !== ' '){
                    this.state.products.sort( (a,b) => (state.sort==='lowest') ? (a.price > b.price ? 1:-1) :  (a.price < b.price ? 1:-1) )
                } else {
                    this.state.products.sort( (a,b) => (a.id < b.id ? 1: -1));
                }
                if (state.size !== ''){
                    return {
                        filterProducts: state.products.filter( (a) => a.availableSizes.indexOf(state.size >=0))
                    }
                }
                return {
                    filterProducts: state.products
                }
            }
        )
    }
   render(){
       console.log(this.state.cartItems)
    return (
        <div className="myApp">
            <div className="container">
                <h1>Ecommerce Shopping Cart applicaion</h1>
                <div className="row">
                    <div className="col-md-8">
                        <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filterProducts.length} />
                        <hr />
                        <Products products={this.state.products} handleAddToCard={this.handleAddToCard}/>
                    </div>
                    <div className="col-md-4">
                        <Basket cartItems={this.state.cartItems} handleRemoveCart={this.handleRemoveCart} />
                    </div>
                </div>
            </div>
        </div>
      );
   } 
  
}

export default App;

// json-server --watch db.json --port 8000
