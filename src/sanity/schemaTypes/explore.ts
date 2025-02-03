import { defineType , defineField } from "sanity"

export const explore = defineType({
    name: 'explore',
    type: 'document',
    title: 'Explore',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'detail',
            type: 'text',
            title: 'Detail Description',
        })
    ],
})

export default explore