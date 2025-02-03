import { defineField, defineType } from "sanity";

export const comment = defineType({
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
        defineField({
            name: "comment",
            title: "Comment",
            type: "string",
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        })
    ],
});