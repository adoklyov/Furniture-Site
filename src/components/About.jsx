import React from 'react';
import Aboutimage from '../images/AboutIMG.jpg';

const About = () => {
    return (
        //About Us Div
        <div className='w-full bg-white py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 border-dashed border-2 border-indigo-300 rounded-lg p-4' src={Aboutimage} alt='/' />
            <div className='flex flex-col justify-center'>
              <p className='text-gray-500 font-bold '>DATA ANALYTICS DASHBOARD</p>
              <h1 className='text-gray-700 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
              <p>We meticulously curate a diverse selection of high-quality pieces designed to seamlessly
               blend style with unparalleled comfort, ensuring that your home is not just furnished 
               but transformed into a haven of personal expression and relaxation. 
               With our dedication to exceptional craftsmanship, affordability, and a 
               commitment to customer satisfaction, your journey to elevating your living space begins here.
              </p>
            </div>
          </div>
        </div>
      );
    };

export default About;