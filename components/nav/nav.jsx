import React from 'react'
import "./nav.css"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Nav() {
  return (
    <div className='flex justify-between pt-8 pb-8 pl-16 pr-16 w-[100%] items-center'>
        <div className="">
            <Image className='logo' src={"/assets/images/logo.svg"} width={200} height={200} alt=''></Image>
        </div>
        <div className="flex items-center gap-10">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>About Projects</Link>
            <Link href={"#"}>Testimonials</Link>
            <Link href={"#"}><Button>Contact Us</Button></Link>
        </div>
    
    </div>
  )
}
