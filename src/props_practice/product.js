import React from 'react';
import styling from './product.module.css'
class Product extends React.Component{
    render(){
        return (
            <div className={styling.card}>
                <div className={styling.productd}> <h1 className="productheading">product : {this.props.element.name}</h1></div>
        <h3>price : {this.props.element.price}  <span style={{float:"right"}}>department :  {this.props.element.dept}</span></h3>
    
            </div>
        );
    }
   
}

export default Product;