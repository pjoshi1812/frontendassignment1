import React from 'react'
import feature1 from './assets/feature1.png'
import feature2 from './assets/feature2.png'
import feature3 from './assets/feature3.png'
import feature4 from './assets/feature4.png'
const Feature = () => {
  return (
    <div>
        <section> 
                     <div className='text-center m-20 '>
                        <h1 className='text-4xl mx-50 m-10'>Transform Your Productivity with Our Innovative To-Do List Features</h1>
                        <div className='grid grid-cols-4 gap-3'>
                            <div className='border bg-gray-300'>
                                <h1 className='text-4xl text-gray-400 mr-5 text-right'>01</h1>
                                <img src={feature1} className='m-5' alt="" />
                                <h1 className='text-2xl  text-indigo-800 '>User-Friendly Interface</h1>
                                <p className='pb-10'>Our platform offers seamless task management to boost your efficiency</p>
                            </div>
                            <div className='border bg-gray-300'>
                                <h1 className='text-4xl text-gray-400 mr-5 text-right'>02</h1>
                                <img src={feature2} className='m-5' alt="" />
                                <h1 className='text-2xl  text-indigo-800'>Collaborate & Share Effortlessly</h1>
                                <p>Invite team members to work together and achieve your goals faster.</p>
                            </div>
                            <div className='border bg-gray-300'>
                                <h1 className='text-4xl text-gray-400 mr-5 text-right'>03</h1>
                                <img src={feature3} className='m-5' alt="" />
                                <h1 className='text-2xl  text-indigo-800'> Effortless Collaboration</h1>
                                <p>Invite team members to work together and achieve your goals faster.</p>
                            </div>
                            <div className='border bg-gray-300'>
                                <h1 className='text-4xl text-gray-400 mr-5 text-right'>04</h1>
                                <img src={feature4} className='m-5' alt="" />
                                <h1 className='text-2xl  text-indigo-800'>Seamless Access</h1>
                                <p>Stay connected and manage your tasks on the go with ease.</p>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Feature