const forumTypes = `
    type Tag {
        id: ID
        name: String
    }

    type Question {
        id: ID
        title: String
        content: String
        tag: Tag
        user: User
        answers: [Answer]
        votes: [Vote]
    }

    type Answer {
        id: ID
        questionId: ID
        content: String
        user: User
        votes: [Vote]
    }

    type Vote {
        id: ID
        title: String
        content: String
        tag: Tag
        user: User
    }
`

const forumQuery = `
    type Query {
        questions: [Question]
    }
`;

export const forumSchema = `
    ${forumTypes}
    ${forumQuery}
`