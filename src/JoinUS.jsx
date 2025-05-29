import React from 'react';
import joinus from './assets/joinus.png';

const JoinUS = ({ firstName,lastName,email}) => {
  return (
    <div>
      <section>
        <div className='flex flex-row relative m-5'>
          <div className='flex-1'>
            <img src={joinus} alt="" />
          </div>
          <div className='flex-1'>
            <div className='text-3xl mt-20 text-left'>
              <p>Start Organizing Your Life Today</p>
            </div>
            <p>Join us now and transform your productivity with our intuitive to-do list platform!</p>
            <button className='px-6 py-1 m-3 text-lg border bg-[#FF3E54] text-white'>Sign Up</button>
            <button className='px-6 py-1 text-lg border border-[#FF3E54] text-[#FF3E54]'>Learn more</button>
          </div>
        </div>
      </section>

      <section className='mt-10'>
        {(firstName || lastName || email) && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2">Your Submission</h4>
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border">First Name</th>
                      <th className="p-2 border">Last Name</th>
                      <th className="p-2 border">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">{firstName || '-'}</td>
                      <td className="p-2 border">{lastName || '-'}</td>
                      <td className="p-2 border">{email || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
      </section>
    </div>
  );
};

export default JoinUS;
