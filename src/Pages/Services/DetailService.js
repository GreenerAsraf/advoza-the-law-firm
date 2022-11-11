import React from 'react';
import { PhotoProvider,PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const DetailService = ({service}) => {
    const { _id, img, price, title } = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
                </PhotoProvider>
                </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Service Fee: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default DetailService;