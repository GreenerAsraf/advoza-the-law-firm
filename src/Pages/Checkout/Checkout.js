import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Checkout = () => {

    const { _id,img, title, price,description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://assignment-eleven-server-six.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('advoza')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }
    useTitle('Checkout')
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h2 className='text-4xl'>Service Section</h2>
                    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="services" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <h4>Price:{price}</h4>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Get The Service</button>
    </div>
  </div>
</div>
                </div>
                <div >
                    <h2 className='text-4xl'>Review section</h2>
                    <div className="card w-full text-primary bg-slate-200 shadow-xl image-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body text-black ">
          <h2 className="card-title text-6xl font-bold text-orange text-center">Post Your Review</h2>
          <p className='text-center text-orange '>Your review is the most important to accelerate our service with effective way</p>
          <input type="text" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs text-black" />
          <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs text-black" />
          <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs text-black" />
          <textarea className="textarea text-black h-full" placeholder="Type your message"></textarea>
          <div className="card-actions ">
          <button className="btn btn-primary">Post Review</button>
         
          </div>
        </div>
      </div>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl"> order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;