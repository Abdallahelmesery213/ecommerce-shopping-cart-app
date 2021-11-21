import React from 'react'
import {FormatCurrency} from './FormatCurrency'
export default function Products(props) {
    const {products,handleAddToCard} = props;
    return (
        <div className="row">
            {products.map(product => (
                    <div className="col-md-4 mb-5 " key={product.id}>
                        <div className="text-center myProduct" >
                            <a href={`#${product.id}`}  >
                                <img src={`/products/${product.sku}_2.jpg` } alt={product.title} className="img-fluid" />
                                <p className="myTitle"> {product.title} </p>
                            </a>
                            <div>
                                <b className="d-block price">{FormatCurrency(product.price)}</b>
                                <button className="btn btn-danger" onClick={(e) => {handleAddToCard(e,product)}}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
                ) 
                
            }
                
        </div>
    )
}
