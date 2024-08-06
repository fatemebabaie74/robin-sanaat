"use client"


import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import signIn from "next-auth/react"
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [loading , setLOading] = useState(false)

const router = useRouter()
  const signinHandler = async(e)=>{
    e.preventDefault();
    setLOading(true);
    const res = await signIn("credentials" , {email , password })
    setLOading(false);
    if(res.error ){
      toast.error(res.error)
    }else{
      router.push("/")
    }
  }
  return (

<>
<Card color="transparent" shadow={false}>
    <Typography variant="h5" color="blue-gray">
      فرم ورود
    </Typography>
    {/* <Typography color="gray" className="mt-1 font-normal">
      Nice to meet you! Enter your details to register.
    </Typography> */}
    <form className="mt-8 mb-2 w-40  sm:w-50">
      <div className="mb-1 flex flex-col  max-w-screen-sm ">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          ایمیل
        </Typography>
        <Input
          size="md"
          placeholder="نام کاربری"
          value={email}
          onChange={e=> setEmail(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-8 "
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          رمز عبور
        </Typography>
        <Input
          size="md"
          value={password}
          onChange={e=> setPassword(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
     
      </div>

    
     {
      loading ?  <Spinner color='deep-orange' style={{margin: "auto"}}/> : 
      <Button className="mt-6 " type='submit' onClick={signinHandler} >
         ورود
      </Button>
     } 
      <Typography color="gray" className="mt-4 text-center  font-normal">
        حساب کاربری ندارید؟دارید؟?{" "}
        <a href="#" className="font-medium text-gray-900 ">
         ثبت نام
        </a>
      </Typography>
  <Toaster/>
    </form>

  </Card>
   </>
  )
}

export default SignInPage
