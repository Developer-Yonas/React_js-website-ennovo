import React, { useEffect, useState } from 'react';
import For from './formB/For';
import './formB/form.css';

const FormComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);





  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const desiredLength = 1000; // Define the desired scroll length

      if (scrollPosition >= desiredLength && firstLoad) {
        // Execute your desired function here
        console.log('Scroll length reached!');
        setShowForm(true);
        setFirstLoad(false);
      } 
    };

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [firstLoad]);

  const handleDismissForm = () => { 
    setShowForm(false); 
  }; 
 
  
  
  return (
    <div>
      <div className={`backdrop ${showForm ? 'show-form' : ''}`}>
      {showForm && ( 
        <div className='form-container'>
          
          <div className="butt">
      {showForm && ( 
        <button onClick={handleDismissForm} disabled={firstLoad}> 
        ✖
        </button> 
      )}
          </div>

          

          
          <form>
          <For/>
          </form>
          
        </div>
           )} 
       
      </div>
          
    </div>
  );
};

export default FormComponent;
