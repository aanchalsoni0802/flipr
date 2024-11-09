"use client";
import React from 'react';
import { Project } from '@/components/projects/Projects';
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

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [newProject, setNewProject] = React.useState({
    img: '',
    title: '',
    description: ''
  });

  React.useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUploadSuccess = (url) => {
    setNewProject((prev) => ({ ...prev, img: url })); // Set the uploaded image URL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the new project data to your API
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      const data = await res.json();
      setProjects((prev) => [...prev, data]); // Add the new project to the list
      setNewProject({ img: '', title: '', description: '' }); // Reset form
    } else {
      console.error('Error adding project');
    }
  };

  return (
    <div className='pl-10 pr-10 flex-col justify-between items-center'>
      <AdminNav />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-black text-bold">Add Projects</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>
              Add a new project to your list
            </DialogDescription>
          </DialogHeader>

          {/* Upload File Component */}
          <UploadFile onUploadSuccess={handleImageUploadSuccess} />

          {/* Project Details Form */}
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={newProject.title}
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
                value={newProject.description}
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

      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold text-center p-3 text-blue-600">Projects</h1>
        <p className="w-3/4 lg:w-1/2 p-4 my-4 text-xl text-gray-600 text-center">Here is a list of all the projects</p>
        <div className='flex flex-wrap gap-8 justify-evenly'>
          {
            projects.map((project, index) => (
              <Project 
                key={index} 
                img={project.img} 
                imgAlt={project.title} 
                title={project.title} 
                description={project.description} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
