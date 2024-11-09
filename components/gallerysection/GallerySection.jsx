import Image from "next/image";

export default function GallerySection() {
  return (
    <div className="t w-full flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-3 t" style={{ height: "70vh" }}>
        <div className="t flex items-start justify-end p-5">
          <Image
            className="t w-36 lg:w-60 lg:-translate-x-6"
            src="/assets/images/gallerysection/pexels-brett-sayles-2881232.svg"
            alt="Gallery Image 1"
            width={240} // Adjust width as needed
            height={320} // Adjust height as needed
          />
        </div>
        <div className="translate-y-20">
          <Image
            className="w-96"
            src="/assets/images/gallerysection/pexels-andres-ayrton-6578391.svg"
            alt="Gallery Image 2"
            width={384} // Adjust width as needed
            height={512} // Adjust height as needed
          />
        </div>
        <div className="flex lg:items-end translate-x-10">
          <Image
            className="w-36 lg:w-60"
            src="/assets/images/gallerysection/pexels-fauxels-3182834.svg"
            alt="Gallery Image 3"
            width={240} // Adjust width as needed
            height={320} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
}


