import React from 'react'

function ServiceDescription() {
  return (
    <div>
        <div className='flex flex-col md:flex-row bg-stone-300 items-center md:justify-between'>
            <img src='images/hero3.jpeg' className='md:max-w-sm object-cover grayscale-[50%] aspect-auto'/>
            <div className='md:absolute md:left-60 md:my-20 md:space-y-10 static p-5'>
                <h1 className='md:text-5xl text-2xl font-bold font-serif mb-10 text-center'>Description Of Services</h1>
                <ul className=' md:ml-40 max-w-lg space-y-5 mb-5'>
                    <li>Planning & sticking a budget by keeping an estimate that is available to you</li>
                    <li>Planning & sticking a budget by keeping an estimate that is available to you</li>
                    <li>Planning & sticking a budget by keeping an estimate that is available to you</li>
                    <li>Planning & sticking a budget by keeping an estimate that is available to you</li>
                    <li>Planning & sticking a budget by keeping an estimate that is available to you</li>
                </ul>
            </div>
            <div className='max-w-[200px] bg-slate-400 p-5 border border-black hidden md:block'>
                <img src='images/about1.jpeg'/>
            </div>
        </div>

    </div>
  )
}

export default ServiceDescription