import React from 'react'
import projectsData from "./Projects.json"
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Projects() {
  return (
    <div className="pl-10 pr-10 bg-cyan-50">
        <h1>Our Projects</h1>
        <span>lorem ipsum</span>
        <div className="flex flex-wrap gap-8 justify-evenly ">
          {projectsData.map((project) => (
            <Project img={project.img} imgAlt={project.imgAlt} title={project.title} description={project.description}/>
          ))}
        </div>
    </div>
  )
}

export function Project({img, imgAlt, title, description }) {
    return (
        <div className="rounded-md  flex flex-col items-start w-[15vw] gap-3 bg-white">
          <Image src={img} width={250} height={250} alt={imgAlt} className="rounded-md w-10vw object-cover overflow-hidden"></Image>
          <div className="flex flex-col justify-start gap-2 p-3">
            <h4 className="font-bold">{title}</h4>
            <span>{description}</span>
            <Button className="w-[70%]">Read More</Button>
          </div>
        </div>
    )
}
