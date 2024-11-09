import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero h-[60vh] pl-[10vw] pr-[10vw] flex items-center'>
        <div className='w-[100%] flex items-center justify-between'>
            <span className='text-[3rem] text-white font-bold'>Consultaion,Design,<br/>& Marketing</span>
            <Form />
        </div>
    </div>
  )
}

function Form() {
    return (
        <div className='w-[30vw] h-[30vw] bg-cyan-50 flex flex-col items-center  opacity-80 justify-evenly rounded-xl'>
            <span className="text-black font-bold text-xl">
                Get a Free<br/>Consultation
            </span>
            <Input placeholder={"Name"} type={"text"} className="w-[25vw] border-black"></Input>
            <Input placeholder={"Enter email address"} type={"email"}className="w-[25vw] border-black"></Input>
            <Input placeholder={"Mobile Number"} type={"number"}className="w-[25vw] border-black"></Input>
            <Input placeholder={"City"} type={"text"}className="w-[25vw] border-black"></Input>
            <Button className="font-bold text-opacity-100 bg-black ">GET A QUICK QUOTE</Button>
        </div>
    )
}
