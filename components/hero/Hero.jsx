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
        <div className='w-[25vw] bg-blue-300 flex flex-col items-center  opacity-95'>
            <span>
                Get a Free<br/>Consultaion
            </span>
            <Input placeholder={"Name"} type={"text"}></Input>
            <Input placeholder={"Enter email address"} type={"email"}></Input>
            <Input placeholder={"Mobile Number"} type={"number"}></Input>
            <Input placeholder={"City"} type={"text"}></Input>
            <Button>Submit</Button>
        </div>
    )
}
