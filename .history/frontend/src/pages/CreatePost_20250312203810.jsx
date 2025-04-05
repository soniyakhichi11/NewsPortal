import React from 'react'

const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold text-slate-700'>
                    create a post
        </h1>
        <form className='flex flex-col gap-4'>
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <Input 
                type="text" 
                placeholder="Title"
                 className="w-full sm:w-3/4 h-12 border-slate"
                 required
                 id = "title"/>
            </div>
        </form>
    </div>
  )
}

export default CreatePost
