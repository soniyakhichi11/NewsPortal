import React from 'react'

const Advertise = () => {
  return (
    <div className='flex flex-col md:flex-row p-3 border border-teal-600
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
     <div className='flex-1 justify-center flex flex-col p-3 w-full'>
        <h2 className='text-2xl font-semibold text-wrap'>
          Want to know more about today's{" "} <span className='text-red-600'>Top 10
            </span>news?</h2>
             <p className='text-gray-500 my-2'>checkout these top news articles</p>
             <Button className='bg-blue-500 text-md mt-2 h-min'>
                <Link to={"htt"}></Link>
             </Button>
        </div>
    </div>
  )
}

export default Advertise