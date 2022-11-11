import React from 'react';

const Consultation = () => {
    return (
        <div className="card w-full text-primary bg-slate-200 shadow-xl image-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body text-black ">
          <h2 className="card-title text-6xl font-bold text-orange text-center">Schedule a Free Consultation</h2>
          <p className='text-center text-orange '>Please type in your contact information and will contact you within 1-2 business days to discuss your case</p>
          <input type="text" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs text-black" />
          <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs text-black" />
          <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs text-black" />
          <textarea className="textarea text-black h-full" placeholder="Type your message"></textarea>
          <div className="card-actions ">
          <button className="btn btn-primary">Send</button>
         
          </div>
        </div>
      </div>
    );
};

export default Consultation;