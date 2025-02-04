import { DataFunc , typing } from "@/context/context"
import Image from "next/image";
import Link from "next/link"

export default async function Page() {

 
  
  
  const Data:typing[] = await DataFunc()
    return (
        <div className="flex items-center flex-col px-[20px] sm:px-[60px] justify-center w-full">
        <div className="flex flex-col items-center justify-center py-6">
          <h4 className="font-bold pb-4">Explore</h4>
          <h2 className="text-2xl sm:text-3xl inline-block text-center w-full md:text-4xl pb-4 font-bold">
            Explore the beauty of Pakistan
          </h2>
          <h4>blog by <i>Muhammad Anus Ahmed</i>is your go-to resource for discovering the beauty of Pakistan. Dive into our short</h4>
        </div>   
          
        
        
        <div className="sm:grid sm:grid-cols-3 py-3 gap-4">
    {Data.map((d:typing) => (
      <Link href={`/product/${d._id}`} key={d._id}>
      <div  >
        {d.image &&
         <Image 
         src={d?.image}
         alt="highlight"
         width={500}
         height={500}/>}
       </div>
       <div className="flex flex-col justify-center items-center">
         <h2 className="font-bold pt-2 py-2 text-2xl justify-center">{d.title}</h2>
         <h4 className="text-md text-center italic px-1">{d.description}</h4>
       </div>
       </Link>
     ))
   }</div>
       
      </div>
    )
}