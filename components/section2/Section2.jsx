// // import Image from &aposnext/image&apos
// // import React from &aposreact&apos
// // import "./About.css"
// // import { Span } from &aposnext/dist/trace&apos
// // export default function About() {
// //   return (
// //     <div className=" flex flex-row w-[100%] min-h-0 h-[auto]  border-black">
// //         <div className=" w-300 h-300 ">

import Image from "next/image";

           
// //             <Image  src={"/assets/images/logo.svg"} width={300} height={300} alt=&apos&apos></Image>
// //             <h1 className="font-bold">Not Your Average Realtor</h1>
// //             <p>Buying or selling a home is more than a transaction; it&aposs a life-changing experience. 
// //               As &aposNot Your Average Realtor,&apos I go beyond the basics to deliver tailored, data-driven insights,
// //                innovative marketing, and an unwavering commitment to your goals. My focus isn’t just 
// //               on closing deals but on creating an experience that’s as seamless and 
// //               rewarding as possible
// //             </p>
// //         </div>
// //         <div>


// //             <h1 className="font-bold">Not Your Average Realtor</h1>
// //             <p>Buying or selling a home is more than a transaction; it&aposs a life-changing experience. 
// //               As &aposNot Your Average Realtor,&apos I go beyond the basics to deliver tailored, data-driven insights,
// //                innovative marketing, and an unwavering commitment to your goals. My focus isn’t just 
// //               on closing deals but on creating an experience that’s as seamless and 
// //               rewarding as possible
// //             </p>
// //         </div>

      
// //     </div>
// //   )
// // }

// import Image from &aposnext/image&apos;

// export default function About() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mt-20">Not Your Average Realtor</h1>
//       <div className="flex justify-center items-center mt-20">
//         <div className="grid grid-cols-3 gap-8">
//           <div className="bg-blue-500 p-10 rounded-lg">
//             <Image src="/Group 1000001645.svg.svg" alt="Image 1" width={300} height={200} />
//             <h2 className="text-white text-xl font-bold mt-4">Potential RO</h2>
//           </div>
//           <div className="bg-green-500 p-10 rounded-lg">
//             <Image src="/image2.svg" alt="Image 2" width={300} height={200} />
//             <h2 className="text-white text-xl font-bold mt-4">Design</h2>
//           </div>
//           <div className="bg-yellow-500 p-10 rounded-lg">
//             <Image src="/image3.svg" alt="Image 3" width={300} height={200} />
//             <h2 className="text-white text-xl font-bold mt-4">Marketing</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Section2() {
    return (
      <div id="services" className="t w-full t flex items-center justify-center relative z-10" style={{ height: "100vh" }}>
        <Image
            className=" absolute left-5 top-[-50]"
            src="/assets/images/about/Ellipse 22.svg"
            width={150} 
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute left-5 top-[-50]"
            src="/assets/images/about/Group 1.svg"
            width={150} 
            height={150}
            alt="Subtract"
          ></Image>
        <div className="t w-1/2 flex flex-col items-center justify-center relative">
          <h1 className="text-4xl p-2 ml-5 t text-blue-600 font-bold">
            Not Your Average Realtor
          </h1>
          <p className="text-left py-2 t w-full ml-10 lg:w-1/2 lg:mr-5 lg:ml-0 text-gray-700">
            Buying or selling a home is more than a transaction; it&aposs a life-changing experience. 
            As &aposNot Your Average Realtor,&apos I go beyond the basics to deliver tailored, data-driven insights,
            innovative marketing, and an unwavering commitment to your goals. My focus isn&apost just 
            on closing deals but on creating an experience that&aposs as seamless and 
            rewarding as possible
          </p>
          
        </div>
        
        <div className="grid grid-cols-2 t w-1/2 place-items-center relative ">
        <Image
            className=" absolute left-5 top-[0]"
            src="/assets/images/about/Ellipse 10.svg"
            width={150} 
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute left-0 right-3 top-[0]"
            src="/assets/images/about/Ellipse 10.svg"
            width={75} 
            height={75}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute left-0 right-5 top-[0] rotate-180 z-0"
            src="/assets/images/about/Ellipse 7-1.svg"
            width={400} 
            height={400}
            alt="Subtract"
          ></Image>
          <Image src="/assets/images/about/Ellipse 11.svg" alt="" width={288} height={288} />
          <div>
            <Image src="/assets/images/about/Ellipse 12.svg" width={288} height={288} alt="" />
            <Image src="/assets/images/about/Ellipse 13.svg" width={288} height={288} alt="" />
          </div>
        </div>
      </div>
    );
  }
  