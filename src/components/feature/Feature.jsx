import React from 'react'

const Feature = ({title, description, image, video, id}) => {
  return (
    <div className={`max-w-screen-lg relative mx-auto flex flex-col 
    items-center justify-center 
    ${id % 2 !== 0 ? "sm:flex-row" : "sm:flex-row-reverse"} space-y-4`}>
        <div className='mt-12 flex-1 space-y-4 tracking-wider'>
            <h1 className='max-w-lg text-center text-4xl font-bold sm:text-5xl'>{title}</h1>
            <h1 className='text-center text-2xl tracking-normal'>{description}</h1>
        </div>
        <div className='relative flex-1'>
            <img className='z-10' src={`./images/${image}`}/>
            <video className='absolute top-1 -z-10 sm:top-20 sm:left-16 sm:w-96' 
            loop muted autoplay="autoplay" src={`./images/${video}`}/>
        </div>
    </div>
  );
};

export default Feature