import Image from 'next/image'
import faFlag from "@/assets/images/fa.png"
import React from 'react'
import usFlag from "@/assets/images/us.png"
import Link from 'next/link'
const ChangeLanguage = () => {
  return (
    <>
    <div>
      <Link href={"/english"}><Image src={usFlag} alt='English' width={20} height={20}/></Link>
      
      
    </div>
    <div>
      <Link href={"/farsi"}> <Image  src={faFlag} alt='Farsi' width={20} height={20}/></Link>
    <span>فارسی</span>
    </div>
    </>
  )
}

export default ChangeLanguage;
