"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from "sonner"
import "./Hero.css"
import { useState } from 'react';

export default function Hero() {
  return (
    <div id="home" className='hero h-[60vh] pl-[10vw] pr-[10vw] flex items-center'>
        <div className='w-[100%] flex items-center justify-between'>
            <span className='text-[3rem] text-white font-bold'>Consultaion,Design<br/>& Marketing</span>
            <Form />
        </div>
    </div>
  )
}



function Form() {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');

    // Handle form submission
    const handleSubmit = async () => {
        try {
            // Define the data payload
            const data = { name, email, mobile, city };

            // Send a POST request to the API endpoint
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Handle response
            if (response.ok) {
                console.log('Form submitted successfully');
                alert("Form submitted successfully, thanks for joining")
                setCity("");
                setName("");
                setEmail("");
                setMobile("");
            } else {
                console.error('Form submission failed');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    };

    return (
        <div className='w-[30vw] h-[30vw] bg-[#515F8C] flex flex-col items-center text-white justify-evenly rounded-xl'>
            <span className=" font-bold text-xl">
                Get a Free<br/>Consultation
            </span>
            <input
                placeholder="Name"
                type="text"
                className="w-[25vw] border-black rounded-xl pl-4 pr-4 pt-2 pb-2 text-black"
                
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Enter email address"
                type="email"
                className="w-[25vw] border-black rounded-xl pl-4 pr-4 pt-2 pb-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Mobile Number"
                type="number"
                className="w-[25vw] border-black rounded-xl pl-4 pr-4 pt-2 pb-2 text-black"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <input
                placeholder="City"
                type="text"
                className="w-[25vw] border-black rounded-xl pl-4 pr-4 pt-2 pb-2 text-black"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="font-bold text-opacity-100 bg-[#F46D22] text-white px-4 py-1 rounded"
                onClick={handleSubmit}
            >
                GET A QUICK QUOTE
            </button>
        </div>
    );
}



