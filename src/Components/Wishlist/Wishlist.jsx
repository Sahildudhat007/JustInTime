import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_WISHLIST } from '../../Redux/Actions/Action';

function Wishlist() {

    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.cartreducer.wishlists);

    const removeFromWishlist = (id) => {
        dispatch(REMOVE_WISHLIST(id));
    };

    return (
        <>
            <section>
                <div className='my-[5vw] mx-[10vw] flex items-center justify-between'>
                    <div>
                        <p className='text-2xl font-serif opacity-70'>My Shortlist</p>
                        <p className='opacity-70'>Select at least 2 items to compare</p>
                    </div>
                    <button className='flex items-center justify-center rounded-lg space-x-5 border border-[#98352D] w-[169px] h-[45px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[14.5px]' width="20.257" height="22.396" viewBox="0 0 20.257 22.396">
                            <g id="Icon_feather-share-2" data-name="Icon feather-share-2" transform="translate(0.5 0.5)">
                                <path id="Path_5715" data-name="Path 5715" d="M28.919,6.209A3.209,3.209,0,1,1,25.709,3a3.209,3.209,0,0,1,3.209,3.209Z" transform="translate(-9.662 -3)" fill="none" stroke="#98352d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                <path id="Path_5716" data-name="Path 5716" d="M10.919,16.709A3.209,3.209,0,1,1,7.709,13.5,3.209,3.209,0,0,1,10.919,16.709Z" transform="translate(-4.5 -6.011)" fill="none" stroke="#98352d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                <path id="Path_5717" data-name="Path 5717" d="M28.919,27.209A3.209,3.209,0,1,1,25.709,24,3.209,3.209,0,0,1,28.919,27.209Z" transform="translate(-9.662 -9.023)" fill="none" stroke="#98352d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                <path id="Path_5718" data-name="Path 5718" d="M12.885,20.265l7.307,4.258" transform="translate(-6.905 -7.951)" fill="none" stroke="#98352d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                <path id="Path_5719" data-name="Path 5719" d="M20.181,9.765l-7.3,4.258" transform="translate(-6.905 -4.94)" fill="none" stroke="#98352d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                            </g>
                        </svg>
                        <p className='font-serif text-[#98352D]'>SHARE LIST</p>
                    </button>
                </div>
                <div className='mx-[10vw] mt-4 mb-[7vw]'>
                    {wishlistItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your wishlist is empty.</p>
                    ) : (
                        <ul className='grid grid-cols-3 gap-2.5'>
                            {wishlistItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.img} alt="" className='rounded-lg' />
                                    </div>
                                    <div className='p-2.5'>
                                        <p className='font-serif font-semibold text-[1.318vw] uppercase'>{item.brand}</p>
                                        <p className='mt-[11px] text-[#070101]'>{item.text}</p>
                                        <p className='mt-3 font-serif font-semibold text-[1.318vw]'>₹ {item.price}</p>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="mt-3 text-sm text-stone-600 underline cursor-pointer hover:no-underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    )
}

export default Wishlist