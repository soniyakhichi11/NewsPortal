import React ,{useState}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Toaster, toast } from "sonner";
import { useDispatch } from 'react-redux'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useDispatch } from 'react-redux'
const formSchema = z.object({
 
  email: z.string().min({message:"Invalid email address"}),
  password: z .string().min(8,{message:"Password must be atleast 8 characters"}),
})


const SignUpForm= () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const[loading,setLoading]=useState(false);
  const[errorMessage,setErrorMessage] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
     
      email:"",
      password:""
    },
  })

 async function onSubmit(values) {
    try{
        dispatch(signInStart())
      const res= await fetch("/api/auth/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values),
      })
      const data= await res.json()
      if(data.success===false){
        
        toast.error("Sign-in failed! Please try again"); 
       dispatch(signInFailure)
      }
      
      if(res.ok){
        dispatch(signInSucess)
        toast.success("Sign-in Successfull")
          navigate("/")
      }
    }
    catch(error){
      setErrorMessage(error.message)
      setLoading(false)
      toast.error("Something went wrong")
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl sm:max-w-5xl
      mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link
          to={"/"}
          className="font-bold text-2xl sm:text-4xl flex flex-wrap"
          >
              <span className='text-slate-500'>Morning</span>
              <span className='text-slate-900'>Dispatch</span>
          </Link>
          <h2 className='text-[24px] md:text-[30px] font-bold leading-[140%] 
          tracking-tighter pt-5 sm:pt-12'>
            Sign in to your account</h2>

          <p className='text-slate-500 text-[14px] font-medium leading-[140%] md:text-
          [16px] md:font-normal mt-2'
          >Welcome back, Please provide your details</p>

        </div>
        {/* right */}
        <div className='flex-1'>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        

     <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="xyz@email.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

     <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-blue-500 w-full" disables={loading}>
          {loading ?(<span className='animate-pulse'>Loading...</span>):(<span>Sign Up</span>)}
        </Button>
      </form>
    </Form>
    <div className='flex gap-2 text-sm mt-5'>
      <span>Don't have an account?</span>
      <Link to={"/sign-up"} className='text-blue-500'>Sign-up</Link>
    </div>
    {errorMessage && <p className="mt-5 text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default SignUpForm