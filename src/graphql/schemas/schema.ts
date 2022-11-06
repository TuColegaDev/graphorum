import { forumSchema } from "./forum.js";
import { userSchema } from "./users.js";

export const typeDefs = `#graphql
    ${forumSchema} 
    ${userSchema}
`