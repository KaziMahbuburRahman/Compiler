import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover contact-container bg-black bg-blend-darken">
        <div className="bg-img-overlay pt-12 pb-20">
          <div className="text-center text-white py-12 space-y-2 ">
            <h2 className='text-3xl lg:text-4xl font-bold font-mono '>Contact Our Team</h2>
            <h3 className=''>Have any questions ? <br className='lg:hidden' />
              We love to hear from you .</h3>
          </div>
          <div className="flex flex-col justify-center  lg:flex-row container mx-auto px-8 gap-6">
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form className="lg:w-1/2 space-y-2 p-5 bg-base-100 rounded-lg">
              <div className='flex flex-col space-y-1 '>
                <input
                  type="text"
                  placeholder='Enter your name'
                  className='border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'

                />
                <p className='text-[13px] text-red-500 pl-3'></p>
              </div>
              <div className='flex flex-col space-y-1 '>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'

                />
                <p className='text-[13px] text-red-500 pl-3'></p>
              </div>

              <div className='flex flex-col space-y-1 '>
                <input
                  type="text"
                  placeholder='Enter your Subject'
                  className='border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300'

                />
                <p className='text-[13px] text-red-500 pl-3'></p>
              </div>

              <div className='flex flex-col space-y-1 pb-3'>
                <textarea
                  type="text"
                  rows={4}
                  placeholder='Write your message'
                  className='text-black border rounded-lg py-1 text-xl pl-3 hover:border-primary duration-300'

                />
                <p className='text-[13px] text-red-500 pl-3'></p>
              </div>

              <div className="pb-5 lg:pb-0 text-center lg:text-start">
                <button className='px-5 py-3  border bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-lg w-full text-white'>
                  Submit Now
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact