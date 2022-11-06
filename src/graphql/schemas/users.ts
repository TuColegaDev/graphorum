const userTypes = `
  type User {
    id: ID
    username: String
    name: String
    surname: String
    email: String
    password: String
    linkedin: String
    github: String
    twitter: String
  }

  type Rank {
    id: ID
    userId: ID
    points: Int
  }
`;

const userQuery = `
    type Query {
        users: [User]
    }
`;

export const userSchema = `
    ${userTypes}
    ${userQuery}
`;