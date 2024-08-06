"use client"


import React from 'react';  
import { Button } from '@material-tailwind/react';  
// import { Button } from "path/to/the/new/file";

export default function Home() {  
  return (  
    <div className="flex items-center justify-center h-screen ">  
      <Button className='font-custom'>click me</Button> 
      <h2 className='font-custom'>سلام</h2> 
    </div>  
  );  
}