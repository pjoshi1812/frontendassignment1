import React from 'react'
import person1 from './assets/person1.jpg'

const CustomerFeedback = () => {
  return (
    <div>        
        <section>
            <h1 className='text-4xl text-indigo-900 mt-5 mb-5'>Customer Testimonials</h1>
            <p className='mb-5'>This tool has transformed my productivity and organization!</p>
            <div className='flex flex-col md:flex-row  justify-between items-center '>
            
                <div className='flex-1 border-8 border-b-[#FF3E54] border-l-[#FF3E54] border-t-[#FF3E54] border-r-white p-5 '>
                    <p className=' pt-28 pb-28 ml-30 mr-30 text-2xl text-indigo-950  '>"Using this website has made my tasks so much easier! I can't imagine my day without it."
                        <div className='w-5 h-5 bg-[#FF3E54]'> 
                        </div>
                        <p className='text-xl text-right'>Sherri Cronin</p>
                        <p className='text-xl text-right'>Project Manager, TechCorp</p>
                    </p>
                </div>
                <div className='flex-1 relative m-5 rounded-2xl flex items-center justify-center overflow-hidden p-5 w-1/5 '>
                    <img src={person1} alt="Task Tools" className="w-full h-full border-8 border-b-[#FF3E54] border-r-[#FF3E54] border-t-[#FF3E54] border-l-white " />
                 </div>
            </div>
        </section>
    </div>
  )
}

export default CustomerFeedback