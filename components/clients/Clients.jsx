// src/components/clients/Client.js

import Image from 'next/image'; // Ensure you import Image from next/image
import { Button } from "@/components/ui/button"; // Adjust this import based on your UI library

export function Client({ img, imgAlt, name, description, designation }) {
    return (
        <div className="rounded-md flex flex-col items-start w-[15vw] gap-3 bg-white shadow-md">
            <Image 
                src={img} 
                width={250} 
                height={250} 
                alt={imgAlt} 
                className="rounded-md w-full h-auto object-cover overflow-hidden"
            />
            <div className="flex flex-col justify-start gap-2 p-3">
                <h4 className="font-bold text-blue-500">{name}</h4>
                <span className="text-gray-700">{description}</span>
                <p className="text-sm italic text-gray-500">{designation}</p>
                <Button className="w-[70%]">Read More</Button>
            </div>
        </div>
    );
}
