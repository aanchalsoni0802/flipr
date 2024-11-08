import React from 'react'
import "./nav.css"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Nav() {
  return (
    <div className='flex justify-between pt-5 pb-5 pl-16 pr-16 w-[100%] items-center'>
        <div className="">
            <Image className='logo' src={"/assets/images/logo.svg"} width={200} height={200} alt=''></Image>
        </div>
        <div className="flex items-center gap-10">
            <Link href={"#"}>HOME</Link>
            <Link href={"#"}>SERVICES</Link>
            <Link href={"#"}>ABOUT PROJECTS</Link>
            <Link href={"#"}>TESTIMONIALS</Link>
            <Link href={"#"}><Button>CONTACT US</Button></Link>
        </div>
    
    </div>
  )
}
