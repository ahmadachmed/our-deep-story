import React from 'react'

function Book() {
  return (
    <div>
        <div className="bg-[url('images/book.jpeg')] grayscale-[80%] md:h-[600px] h-[400px] object-contain flex justify-center items-center">
            <div className='text-stone-50 md:text-4xl text-2xl font-serif leading-relaxed max-w-4xl text-center p-5'>
                <p>After the first meeting you will receive as a gift an estimate for your celebration from our studio </p>
                <button className='btn btn-outline text-stone-50 border-stone-50 font-sans mt-5'>Book a meeting</button>
            </div>
        </div>
        <div className='flex justify-center items-center py-20 px-5'>
            <div className='max-w-4xl text-center space-y-5'>
                <p><span className='font-bold'>Our Deep Story</span> is tact and respect for the couple and each guests, openers, trust and profesionalism. We dearly love what we do and do it with taste.</p>
                <p>Best of all. our projects and wedding stories of our clients will tell you about us.</p>
   
            </div>
        </div>
    </div>
  )
}

export default Book