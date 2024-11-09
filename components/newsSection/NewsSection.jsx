"use client";
import { useState } from "react";


export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleNewsLetterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/create/newsletter", { email });
      console.log(response.data);
      alert(response.data);
      setEmail("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-blue-600 t w-full flex items-center justify-center flex-col lg:flex-row">
      <ul className="flex justify-center w-full lg:w-1/2 t lg:px-10 items-center text-white mx-auto">
        <li className="p-4">Home</li>
        <li className="p-4">Services</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Testimonials</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="w-full p-5 lg:w-1/2 flex text-white items-center justify-center">
        <h3 className="mx-5">Subscribe Us</h3>
        <form onSubmit={handleNewsLetterSubmit}>
          <input
            type="email"
            name="newsletter-email"
            id="newsletter-email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none px-10 py-2 rounded-l-xl bg-transparent border-2 border-r-0 border-white"
          />
          <button
            type="submit"
            className="font-bold px-10 py-2 rounded-r-xl text-blue-600 bg-white border-2 border-l-0 border-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
