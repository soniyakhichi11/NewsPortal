import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/components/ui/select'

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
                 className="w-full sm:w-3/4 h-12 border-slate-400
                 focus-visible:ring-0 focus-visible:ring-offset-0"
                 required
                 id = "title"/>

                 <Select>
                 <SelectTrigger className="w-full sm:w-1/4 h-12 border-slate-400
                 focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
                 </Select>

                 <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="worldnews">World News</SelectItem>
          <SelectItem value="sportsnews">Sports News</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
            </div>
        </form>
    </div>
  )
}

export default CreatePost
