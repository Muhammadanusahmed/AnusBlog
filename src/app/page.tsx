import Image from "next/image";
import Link from "next/link";
import { MainPicFunc , DataFunc, typing } from "@/context/context"

import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  interface mainPictureType {
    image_url: string
  }
  const mainPicture:mainPictureType = await MainPicFunc();
  const highlightData = await DataFunc();

  // Slice first 3 items
  const highlights = highlightData.slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden py-3 px-[20px] sm:px-[60px] dark:text-white">
      {/* First Section - Hero */}
      <div className="sm:grid sm:grid-cols-12 items-center w-full h-screen">
        <div className="sm:col-start-1 items-center justify-center">
          <h1 className="text-2xl sm:text-3xl text-center md:text-4xl font-bold whitespace-nowrap">
            Explore the Beauty of
          </h1>
          <h1 className="text-2xl sm:text-3xl text-center md:text-4xl font-bold whitespace-nowrap">
            Pakistanis Hidden Gems
          </h1>
        </div>
        <div className="col-start-6 col-span-7 ">
          <div>
            <p className="text-lg text-center pb-3">
              Discover breathtaking landscapes and vibrant cultures across
              Pakistan. Your adventure awaits in the stunning valleys of Naran,
              Kagan, Hunza, and Skardu.
            </p>
          </div>
          <div className="flex gap-4 ">
            <Link
              href="/explore"
              className="whitespace-nowrap border-2 border-black bg-black px-2 text-white hover:text-slate-300 text-lg relative group py-2"
            >
              Explore
            </Link>
            <Link
              href="/"
              className="whitespace-nowrap border-2 border-black px-2 dark:text-white hover:text-slate-300 text-lg relative group py-2"
            >
            learn more
            </Link>
          </div>
        </div>

        <div className="col-span-full mt-5">
           <Image
            src={urlFor(mainPicture.image_url).url()}
            alt={"Hero"}
            width={800}
            height={600}
            className="w-full" />
          </div>
      </div>

      {/* Second Section - Highlights */}
      <div className="flex items-center flex-col justify-center w-full py-12">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h4 className="font-bold mb-4">Explore</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Plan Your Next Adventure with Ease
          </h2>
          <p className="max-w-2xl">
            Our blog by <i>Muhammad Anus Ahmed</i> is your go-to resource for 
            discovering the beauty of Pakistan. Dive into our curated destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {highlights.map((item:typing) => (
            <Link 
              href={`/explore/${item._id}`} 
              key={item._id} 
              className="group"
            >
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {item.image && (
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-4 text-center">
                  <h2 className="font-bold text-2xl mb-2">{item.title}</h2>
                  <h4 className="text-md italic text-gray-600">
                    {item.description}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}