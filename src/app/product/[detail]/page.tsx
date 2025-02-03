// [detail]/page.tsx
import { DataFunc } from "@/context/context"
import Image from "next/image";

export default async function DetailPage({ params }: { params: { detail: string } }) {
  // Fetch all data
  const allData = await DataFunc();
  
  // Find the specific item that matches the ID from the URL
  const selectedItem = allData.find((item: any) => item._id === params.detail);

  // If no item is found, you can return a not found page
  if (!selectedItem) {
    return <div>Item not found</div>
  }

  return (
    <div className="flex flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        {/* Image */}
        {selectedItem.image && (
          <div className="w-full mb-6">
            <Image 
              src={selectedItem.image}
              alt={selectedItem.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {selectedItem.title}
        </h1>

        {/* Description */}
        <div className="mb-6 text-center italic text-xl">
          {selectedItem.description}
        </div>

        {/* Details */}
        <div className="prose max-w-none">
          {selectedItem.detail}
        </div>
      </div>
    </div>
  )
}

// Generate static params for improved performance and SEO
export async function generateStaticParams() {
  const Data = await DataFunc();
  return Data.map((item: any) => ({
    detail: item._id
  }))
}