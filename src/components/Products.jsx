import './Products.css'
import { AddToCartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
    const { addToCart,removeFromCart, cart } = useCart()

    const checkProductInCart = producto => {
        return cart.some(item => item.id === producto.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} 
                            alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button 
                                    style={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                                    onClick={() => 
                                    isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {
                                        isProductInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}