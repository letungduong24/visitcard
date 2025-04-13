import React from 'react'

const About = () => {
  return (
    <div  
        className='bg-black py-10 text-gray-300 px-3'>
        <div className="w-full flex justify-center">
            <div className="w-full md:w-3/4 xl:w-1/2 text-center mb-5">
                <h1 className='text-5xl font-bold'>about us</h1>
                <h5 className=''>We help you create and share your own digital visit card — fast, simple, and stylish. No design skills needed!</h5>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full md:w-3/4 xl:w-1/2 gap-3">
                <div className="border-2 relative border-gray-300 rounded-3xl p-5 w-full flex flex-col z-10">
                    <p className='flex-1 font-bold text-lg'>Easy Card Builder</p>
                    <div className="">
                        <p>Create your digital visit card with our intuitive, user-friendly editor.</p>
                    </div>
                </div>
                <div className="border-2 relative border-gray-300 shadow-lg rounded-3xl p-5 w-full flex flex-col z-10">
                    <p className='flex-1 font-bold text-lg'>Responsive Design</p>
                    <div className="">
                        <p>Your card looks great on all devices — from phones to desktops.</p>
                    </div>
                </div>
                <div className="border-2 relative border-gray-300 shadow-lg rounded-3xl p-5 w-full flex flex-col z-10">
                    <p className='flex-1 font-bold text-lg'>Share your card</p>
                    <div className="">
                        <p>Get a personalized URL for your card, making it easy to share anywhere.</p>
                    </div>
                </div>
                <div className="border-2 relative border-gray-300 shadow-lg rounded-3xl p-5 w-full  flex flex-col z-10">
                    <p className='flex-1 font-bold text-lg'>Link & Contact Integration</p>
                    <div className="">
                        <p>Add links to your social profiles, portfolio, email, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About