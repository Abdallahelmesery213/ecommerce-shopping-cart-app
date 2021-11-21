import React from 'react'

export default function Basket(props) {
    const {cartItems,handleRemoveCart} = props;
    return (
        <div className="alert alert-info myBasket">
            {cartItems.length === 0 ? "Basket is empty" : 
            <div>You have {cartItems.length} products</div>
            }
            {
                cartItems.length > 0 && 
                <div>
                    <ul>
                        {cartItems.map( item => 
                            <li key={item.id} className="row"> 
                                <b className=" col-md-10">{item.title}</b>
                                <button className="btn btn-danger btn-sm col-md-2" onClick={(e)=> handleRemoveCart(e,item)}>X</button>
                            </li>
                        )}
                    </ul>

                </div>
            }
           
        </div>
    )
}
