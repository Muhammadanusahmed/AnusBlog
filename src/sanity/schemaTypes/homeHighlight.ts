import { defineType , defineField } from "sanity";


export const homeMainPicture = defineType({
    name: "homeMainPicture",
    title: "home Main Picture",
    type: "document",
    fields: [
     
        defineField({
            name: "image",
            title: "Image",
            type: "image"
        })
    ]
  })




