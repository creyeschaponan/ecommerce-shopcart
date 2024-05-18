import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem({thumbnail,title,price,quantity, addToCart}){
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small onClick={addToCart}>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartCheckboxID = useId()
    const {cart,clearCart,addToCart} = useCart()
    return(
        <>
           <label className='cart-button' htmlFor={cartCheckboxID}>
            <CartIcon />
            </label> 
            <input id={cartCheckboxID} type="checkbox" hidden  />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            {...product}
                            addToCart={() => addToCart(product)}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}