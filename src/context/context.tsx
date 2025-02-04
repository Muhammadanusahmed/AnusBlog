import { client } from "@/sanity/lib/client"





export async function MainPicFunc(){
 
const Data = await client.fetch('*[_type == "homeMainPicture"][0]{"image_url": image.asset->url}')
  
  return Data
}

export  interface typing {
  title: string;
  description: string;
  image: string;
  _id: string;
}
export async function DataFunc(){

  interface DataType {
    _id: string;
    image: string;
    title: string;
    description: string;
    detail: string;
  }
  const Data: DataType[] = await client.fetch('*[_type == "explore"][] { _id , "image":image.asset->url , title , description , detail }');
  return Data
}