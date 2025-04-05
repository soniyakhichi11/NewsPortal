import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

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
                 

                 <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="worldnews">World News</SelectItem>
          <SelectItem value="sportsnews">Sports News</SelectItem>
          <SelectItem value="localnews">Local News</SelectItem>
          <SelectItem value="technicalnews">Technical News</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
            </div>

            <div className='flex gap-4 items-center justify-between border-4 
            border-slate-600 border-dotted p-3 '>
                <Input type="file" accept ="image/*"/>
                <Button className="bg-slate-700">Upload Image</Button>
            </div>
            <ReactQuill theme="snow" 
            theme="snow"
            />
            <Button type = "submit" className="h-12 bg-green-600
            font-semibold max-sm:mt-5 text-md">
                Publish Your Article
            </Button>
        </form>
    </div>
  )
}

export default CreatePost
