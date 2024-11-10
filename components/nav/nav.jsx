// import React from 'react'
// import "./nav.css"
// import Image from 'next/image'
// import Link from 'next/link'

// import { Button } from '../ui/button'

// export default function Nav() {
//   return (
//     <div className='flex justify-between pt-5 pb-5 pl-16 pr-16 w-[100%] items-center'>
//         <div className="">
//           <Link href={"/home"}><Image className='logo' src={"/assets/images/logo.svg"} width={200} height={200} alt=''></Image></Link>
            
//         </div>
//         <div className="flex items-center gap-10">
//             <Link href={"#"}>HOME</Link>
//             <Link to="testimonials" smooth={true} duration={500}>SERVICES</Link>
//             <Link href={"#"}>ABOUT PROJECTS</Link>
//             <Link href={"#"}>TESTIMONIALS</Link>
//             <Link href={"#"}><Button>CONTACT US</Button></Link>
//         </div>
    
//     </div>
//   )
// }


"use client"; // Add this at the very top

import React from 'react';
import "./nav.css";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Nav() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex justify-between pt-5 pb-5 pl-16 pr-16 w-[100%] items-center'>
      <div className="">
        <Link href="/home">
          <Image className='logo' src="/assets/images/logo.svg" width={200} height={200} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={() => handleScroll('home')}><Link href="/home">HOME</Link></button>
        <button onClick={() => handleScroll('services')}><Link href="/home#services">SERVICES</Link></button>
        <button onClick={() => handleScroll('projects')}><Link href="/home#projects">ABOUT PROJECTS</Link></button>
        <button onClick={() => handleScroll('testimonials')}><Link href="/home#testimonials">TESTIMONIALS</Link></button>
        <Link href="#contact">
          <Button>CONTACT US</Button>
        </Link>
        <Link href="/admin/projects">
          <Button>ADMIN PANNEL</Button>
        </Link>
      </div>
    </div>
  );
}
