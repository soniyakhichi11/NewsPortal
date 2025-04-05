import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
    <div className='flex flex-col md:flex-row p-3 border border-teal-600
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
     <div className='flex-1 justify-center flex flex-col p-3 w-full'>
        <h2 className='text-2xl font-semibold text-wrap'>
          Want to know more about today's{" "} <span className='text-red-600'>Top 10
            </span> news?</h2>
             <p className='text-gray-500 my-2'>checkout these top news articles</p>
             <Button className='bg-blue-500 text-md mt-2 h-min'>
                <Link to={"https://google.com"} target="_blank" rel="noopener norefferer"
                className='text-wrap'>
                    Stay Updated with Daily News: Your Go-To Resources
                </Link>
             </Button>
        </div>

        <div className='p-7'>
            <img 
            src="https://images.pexels.com/photos/158651/news-newsletter-newspaper-
            information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className='w-80 '
            />
        </div>
    </div>
  )
}

export default Advertise