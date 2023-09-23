import React from 'react'

const Footer = () => {
    return (
        <div className='mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500 bg-white'>
          <div>
            <h1 className='w-full text-3xl font-bold text-indigo-600'>Main Office - Sofia, Bulgaria</h1>
            <p className='py-4'>Explore endless possibilities in furnishing your dream space with our exquisite collection.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
            </div>
          </div>
          <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-600'>Copyright@FurniCation</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-600'>Support</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-600'>Instagram</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-600'>LinkedIn</h6>
        </div>
          </div>
        </div>
      );
    };

export default Footer;