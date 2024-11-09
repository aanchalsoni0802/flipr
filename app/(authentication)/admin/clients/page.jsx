"use client";
import React from 'react';
import { Client } from '@/components/clients/Clients'; // Assuming you have a Client component similar to Project
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadFile from '@/components/upload-file/page'; // Adjust path as necessary
import { AdminNav } from '../page';

export default function Clients() {
  const [clients, setClients] = React.useState([]);
  const [newClient, setNewClient] = React.useState({
    img: '',
    name: '',
    description: '',
    designation: ''
  });

  React.useEffect(() => {
    fetch("/api/clients") // Adjust API endpoint for clients
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUploadSuccess = (url) => {
    setNewClient((prev) => ({ ...prev, img: url })); // Set the uploaded image URL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the new client data to your API
    const res = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    });

    if (res.ok) {
      const data = await res.json();
      setClients((prev) => [...prev, data]); // Add the new client to the list
      setNewClient({ img: '', name: '', description: '', designation: '' }); // Reset form
    } else {
      console.error('Error adding client');
    }
  };

  return (
    <div className='pl-10 pr-10 flex-col justify-between items-center'>
      <AdminNav />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Client</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Client</DialogTitle>
            <DialogDescription>
              Add a new client to your list
            </DialogDescription>
          </DialogHeader>

          {/* Upload File Component */}
          <UploadFile onUploadSuccess={handleImageUploadSuccess} />

          {/* Client Details Form */}
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={newClient.description}
                onChange={handleInputChange}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="designation" className="text-right">
                Designation
              </Label>
              <Input
                id="designation"
                name="designation"
                value={newClient.designation}
                onChange={handleInputChange}
                required
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="bg-gray-100">
        <h1>Clients</h1>
        <p>Here is a list of all the clients</p>
        <div className='flex flex-wrap gap-8 justify-start'>
          {
            clients?.map((client, index) => (
              <Client 
                key={index} 
                img={client.img} 
                imgAlt={client.name} 
                name={client.name} 
                description={client.description} 
                designation={client.designation} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
