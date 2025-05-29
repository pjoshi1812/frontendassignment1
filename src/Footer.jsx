import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <div>

    <footer className="bg-white border-t mt-10 px-6 md:px-16 py-10 text-sm text-gray-600">
      <div className="flex flex-col md:flex-row justify-between gap-10">
       
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <div className=" bg-gray-200 rounded shadow flex items-center justify-center">
              <span className="text-lg font-bold text-[#FF3E54]"><img src={logo} alt="" /></span>
            </div>
           
          </div>
          <p className="mb-3">Subscribe to our newsletter for the latest features and updates delivered to you.</p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email here"
              className="border px-3 py-2 rounded w-full max-w-xs text-sm focus:outline-none"
            />
            <button className="bg-[#FF3E54] text-white px-4 py-2 rounded">Join</button>
          </form>
          <p className="mt-2 text-xs">By subscribing, you consent to our <span className="underline">Privacy Policy</span> and agree to receive updates.</p>
        </div>

       
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Useful Links</h4>
            <ul className="space-y-1">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Connect With Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaFacebookF className="text-[#FF3E54] " /> Facebook</li>
              <li className="flex items-center gap-2"><FaInstagram className="text-[#FF3E54]" /> Instagram</li>
              <li className="flex items-center gap-2"><FaXTwitter className="text-[#FF3E54]" /> X</li>
              <li className="flex items-center gap-2"><FaLinkedinIn className="text-[#FF3E54]" /> LinkedIn</li>
              <li className="flex items-center gap-2"><FaYoutube className="text-[#FF3E54]" /> YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

     
      <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-2">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Settings</a>
        </div>
      </div>
    </footer>
    
    </div>
  )
}

export default Footer