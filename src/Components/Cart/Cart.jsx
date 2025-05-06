import React from 'react'

// components import
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';

// react icon
import { VscChromeClose } from "react-icons/vsc";

function Cart() {

    const dispatch = useDispatch();

    const Remove_Cart = (id) => {
        console.log(id);
        dispatch(REMOVE_CART(id))
    }

    const CartlistItem = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);
    console.log(CartlistItem);

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    return (
        <>
            <section className=''>
                <div className='container mx-auto my-20 px-10 w-[100%] max-w-[50%] align-middle'>
                    <div className='py-4 px-6 flex justify-between items-center border-b'>
                        <h4 className='text-lg'>Your Cart</h4>
                        <a href="..." className='close'>
                            <VscChromeClose />
                        </a>
                    </div>
                    <div className=''>
                        {CartlistItem.map((item, ind) => {
                            let { id, img, brand, price } = item
                            const quantity = quantities[id] || 1;
                            const totalPrice = quantity * price
                            return (
                                <div key={ind} className=''>
                                    <div className='py-4 px-6'>
                                        <div className='flex py-3'>
                                            <img src={img} alt="" className='w-[60px] h-[72px]' />
                                            <div className='mx-4 block flex-1'>
                                                <h2 className='text-lg'>{brand}</h2>
                                                <h3 className='text-stone-600'>₹ {price}</h3>
                                                <div className='mt-5'>
                                                    <button onClick={() => Remove_Cart(id)} className='underline hover:no-underline text-stone-600'>Remove</button>
                                                </div>
                                            </div>
                                            <div>
                                                <input onChange={(event) => changeQuantity(event, id)}
                                                    type="number"
                                                    name='number'
                                                    min="1"
                                                    defaultValue={1}
                                                    className='mb-3 w-[70px] h-[38px] bg-stone-50 border border-stone-300' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-t px-4 py-3'>
                                        <div className='flex justify-between mb-4'>
                                            <h4>Subtotal</h4>
                                            <h4 className='font-medium'>${totalPrice.toFixed(2)}</h4>
                                        </div>
                                        <div className=''>
                                            <a href="..." className='bg-black text-white border border-black w-full block px-6 py-3 text-sm text-center transition-transform hover:bg-white hover:text-black '>Continue to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart