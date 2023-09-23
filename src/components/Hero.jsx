import React from 'react'

const Hero = () => {
  return (
    //Welcome Div
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold text-5xl p-2'>FurniCation
        </p>
        <h1 className=' font-bold md:text-7xl sm:text-6xl md:py-6'>Style perfected.
        </h1>
        <div className='flex justify-center items-center'>
          <p className=' font-bold p-2 md:text-5xl sm:text-4xl py-3'>Where style meets comfort.
          </p>
      </div>
      <h2 className='text-red md:text-3xl sm:text-2xl font-bold md:pl-4 pl-2'>Welcome to FurniCation, 
          where the perfect blend of style and comfort awaits you, 
          ensuring that your home reflects your unique personality 
          and offers an unparalleled level of relaxation and aesthetic appeal.
          </h2>
          <button className='bg-slate-200 w-[200px] rounded-md font-medium my-6 mx-auto py-2'>Learn More!</button>
      </div>
    </div>
  )
}

export default Hero