import { client } from "@/sanity/lib/client"





export async function MainPicFunc(){
 
const Data = await client.fetch('*[_type == "homeMainPicture"][0]{"image_url": image.asset->url}')
  
  return Data
}

export async function DataFunc(){
  const Data = await client.fetch('*[_type == "explore"][] { _id , "image":image.asset->url , title , description , detail }');
  return Data
}