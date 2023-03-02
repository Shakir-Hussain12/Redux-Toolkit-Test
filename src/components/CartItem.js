import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { decrease, increase, remove } from '../Features/cart/cartSlice';

const CartItem = ({id, img, title, price, amount}) => { 
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn'
                onClick={() => dispatch(remove(id))}
                >Remove</button>
            </div>
            <div>
                <button className='amount-btn'
                onClick={() => dispatch(increase(id))}
                >
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn'
                onClick={()=> amount > 1 ? dispatch(decrease(id)) : dispatch(remove(id))}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem;