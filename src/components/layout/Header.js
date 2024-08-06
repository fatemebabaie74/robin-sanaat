"use client"


import React from 'react';  
import styles from "@/components/Header.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ChangeLanguage from '../ChangeLanguage';





const Header = () => {  



  return (  
 <>
 
 <div className={styles.container}>
  <div className={styles.img}>
    <Link href={"/"}>  <Image src="/images/رابین صنعت دایان نهایی_LOGO.png" width={100} height={100}/></Link>
  
  </div>
  <div className={styles.maincontainer}>
    <ul>
      <Link href={"/signin"}><li>ورود</li></Link>
    </ul>
    <ul>
      <Link href={"/signup"}><li>ثبت نام</li></Link>
    </ul>
    <ul>
    <Link href={"/about-us"}>     
     <li>درباره ی ما</li>
    </Link>  
  </ul>
    <ul>
      <Link href={"/contact-us"}><li>تماس با ما</li></Link>
    </ul>
  </div>
  <div className={styles.leftcotainer}>
    <div>
    {/* <Link href={"/farsi"}>
    <img src='https://nigc.ir/wp-content/uploads/2024/05/Flag_of_Iran.svg_.png' width={40} height={30}/>
    </Link> */}
   <ChangeLanguage/>
    </div>
  </div>
  <div></div>
 </div>
 </> 


 
  );  
};  

export default Header;