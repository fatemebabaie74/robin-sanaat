"use client"

import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Spinner } from "@material-tailwind/react";



const SignUp = () => {
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [repassword , setRePassword] = useState("")
const [loading , setLOading] = useState(false)
const router = useRouter()
const signupHandler = async(e)=>{
  e.preventDefault();
  if(password !== repassword){
    toast.error("لطفا رمز عبور خود را درست وارد کنید");
  }
  setLOading(true)
    const res= await fetch("/api/auth/signup" , {
    method: "POST", 
    body: JSON.stringify({email , password}),
    headers: {"Content-type" : "application/json"}
  })
  const data = await res.json();
  setLOading(false)
 if(res.status === 201){
  router.push("/signin")
 }else{
  toast.error(data.error)
 }
}


  return (
    <Card color="transparent" shadow={false}>
    <Typography variant="h5" color="blue-gray">
      Sign Up
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
        <Typography variant="h6" color="blue-gray" className="-mb-3 mt-5">
          نکرار رمز عبور
        </Typography>
        <Input
          type="password"
          size="md"
          value={repassword}
          onChange={e=>setRePassword(e.target.value)}
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>

    
     {
      loading ?  <Spinner color='deep-orange' style={{margin: "auto"}}/> : 
      <Button className="mt-6 " type='submit' onClick={signupHandler} >
        ثبت نام
      </Button>
     } 
      <Typography color="gray" className="mt-4 text-center  font-normal">
        حساب کاربری دارید؟?{" "}
        <a href="#" className="font-medium text-gray-900 ">
         ورود
        </a>
      </Typography>
  <Toaster/>
    </form>

  </Card>
  )
}

export default SignUp


