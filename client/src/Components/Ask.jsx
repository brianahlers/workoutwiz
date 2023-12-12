import React from 'react';

const Ask = () => {


  return (
    <div className="Ask">
      <div className='container my-5'>
        <h1>Ask a certified personal trainer</h1>
        <br />
        <form action="https://formsubmit.co/Brian.ahlers@gmail.com" target='_blank' method='POST'>
          <div className="form-group">
            <div className="form-row">
              
              <input type="hidden" name='_next' value='http://localhost:3000/thankyou' />
              <div className="col">
                <input type="text" name='name' className="form-control" placeholder='Full Name' required />
              </div>
              <br />
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder='Email' required />
              </div>
              <br />
            </div>
            <div className="form-group">
              <textarea name="message" rows="10" className="form-control" placeholder='Ask Your Question' required></textarea>
            </div>
          </div>
         
          <button type='submit' className="btn btn-lg btn-dark btn-block m-2" >Ask Your Question</button>
        </form>

      </div>
    </div>
  );
};

export default Ask