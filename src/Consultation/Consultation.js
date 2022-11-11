import React from 'react';

const Consultation = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-6xl font-bold text-orange text-center">Schedule a Free Consultation</h2>
          <p className='text-center text-orange '>Please type in your contact information and will contact you within 1-2 business days to discuss your case</p>
          <input type="text" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs" />
          <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs" />
          <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs" />
          <textarea className="textarea" placeholder="Type your message"></textarea>
          <div className="card-actions ">
          <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    );
};

export default Consultation;