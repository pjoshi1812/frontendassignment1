import React, { useState } from 'react'
import person from './assets/person.jpg'

import google from './assets/google.png'
import pinterest from './assets/pinterest.png'
import facebook from './assets/facebook.png'
import youtube from './assets/youtub.png'
import twitch from './assets/twitch.png'
import JoinUS from './JoinUS'
import Feature from './Feature'
import CustomerFeedback from './CustomerFeedback'
const Hero = () => {
    const[isOpen,setOpen] =useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const[email,setEmail] = useState("")
    const [showThankYou, setShowThankYou] = useState(false);
    const[submitFirstName,setSubmitName] = useState("")
    const[submitLastName,setSubmitLastName] = useState("")
    const[submitEmail,setSubmitEmail] = useState()
  


    const openForm=()=>{
        setOpen(true)
    }
    const closeForm=()=>{
        setOpen(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitName(firstName);
        setSubmitLastName(lastName);
        setSubmitEmail(email);
        setShowThankYou(true);    
        setOpen(false); 
        setFirstName('')
        setLastName('')
        setEmail('')

    };

  return (
    <div>
            <section>
                    <div className='text-center mx-70'>
                        <h1 className='text-4xl mx-30'>Simplify Your Life with Our Todo App</h1>
                        <p className='text-xl mt-2 mb-7 '>Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle</p>
                        <button  onClick={openForm}  className='text-lg px-6 py-1  bg-[#FF3E54] rounded-3xl text-white m-3'>Get Started</button>
                        <button className='text-lg  px-6 py-1  border border-[#FF3E54] rounded-3xl text-[#FF3E54]'>Learn More</button>
                    </div>
                    
                </section>
               
                <section>
                    <div className='flex flex-col md:flex-row  justify-between items-center '>
                        <div className='flex-1 w-3/5  bg-[#FF3E54] p-5 rounded-4xl'>
                            <h1 className='text-6xl text-gray-300'>Organize.</h1>
                            <h1 className='text-6xl text-gray-100'>Achieve.</h1>
                            <h1 className='text-6xl text-gray-100'>Relax.</h1>
                            <p className='text-xx mt-5 mr-24 text-gray-100'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
                            <button  className='text-lg  mt-14 border rounded-2xl px-6 pt-1 pb-2 bg-amber-50 text-gray-950'>Get Started Today</button>
                            <button className='text-lg ml-3 mt-14 px-6 pt-1 pb-2 border rounded-2xl text-gray-100 '>Discover Fetures</button>
                        </div>
                        <div className='flex-1 relative m-5 rounded-2xl flex items-center justify-center overflow-hidden p-5 w-1/5'>
                             <img src={person} alt="Task Tools" className="w-full h-full  " />
                            <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-6 left-6 text-white z-10">
                                <h2 className="text-3xl font-semibold">Your Tasks.</h2>
                                <h2 className="text-3xl font-semibold">Our Tools.</h2>
                            </div>
                            
                         </div>
                    </div>
                    <div className='justify-between items-center flex' >
                        <img src={google} className='w-25 p-3'alt="" />
                        <img src={pinterest} className='w-25 p-3' alt="" />
                        <img src={facebook}  className='w-25 p-3' alt="" />
                        <img src={youtube} className='w-25 p-3'alt="" />
                        <img src={twitch} className='w-25 p-3'alt="" />
        
                    </div>
                </section>
            {isOpen && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50'>
                    <div className='bg-white p-6 rounded-lg w-full max-w-md'>
                        <button className='float-right text-red-600' onClick={closeForm}>✖</button>
                        <h2 className='text-xl mb-4'>Get Started Today!</h2>
                        <p>Fill in your details and take control of your tasks.</p>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                        <input name="firstNAme" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="firstname" className='w-full p-2 border rounded' required />
                        <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="lastname" className='w-full p-2 border rounded' required />
                        <input name="email"  type='email'value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className='w-full p-2 border rounded' required />
                        <button type="submit" className='w-full bg-[#FF3E54] text-white p-2 rounded'>Submit</button>
                        </form>
                    </div>
                    </div>
                )}
            {showThankYou && (
                        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50'>
                            <div className='bg-white rounded-lg p-6 text-center shadow-lg w-80 border border-blue-300'>
                            <div className="text-4xl mb-2">❤️</div>
                            <h2 className='text-lg font-semibold mb-1'>Thank you for connecting with us</h2>
                            <p className='text-gray-600 mb-4'>Our team will be contacting you soon</p>
                            <button
                                className='bg-[#FF3E54] text-white px-6 py-2 rounded-full'
                                onClick={() => setShowThankYou(false)}
                            >
                                Done
                            </button>
                            </div>
                        </div>
                )}

       <Feature />

        {/* customer feedbacj */}
        <CustomerFeedback />

        {/* joinus  */}
      <JoinUS firstName={submitFirstName} lastName={submitLastName} email={submitEmail} />
    
    </div>
  )
}

export default Hero