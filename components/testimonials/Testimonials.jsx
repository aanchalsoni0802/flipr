import React from 'react'
import testimonials from "./Testimonials.json"
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Testimonials() {
  return (
    <div className="p-10 flex flex-col items-center">
        <h1 className="p-10 flex flex-col items-center text-3xl font-bold text-blue-500">Happy Clients</h1>
        <div className="flex flex-wrap gap-8 justify-evenly ">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={testimonial.name || index}  // Use a unique key for each testimonial (like name or index)
              image={testimonial.image} 
              review={testimonial.review} 
              name={testimonial.name} 
              title={testimonial.title}
            />
          ))}
        </div>
    </div>
  )
}

export function Testimonial({ image, review, name, title }) {
    return (
        <div className="rounded-md flex flex-col items-start w-[18vw] gap-3 bg-white drop-shadow-xl items-center pb-6">
          <Image src={image} width={50} height={50} alt={"review"} className="rounded-full w-10vw object-cover overflow-hidden"></Image>
          <div className="flex flex-col justify-start gap-2 p-3 ">
            <span className="review ">{review}</span>
            <h4 className="name font-bold text-blue-500 ">{name}</h4>
            <span className="title text-sm ">{title}</span>
          </div>
        </div>
    )
}
