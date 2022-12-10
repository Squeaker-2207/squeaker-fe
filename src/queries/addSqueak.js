import { gql } from "@apollo/client";

export const POST_SQUEAK = gql`
  mutation AddSqueak($content: String!, $userId: String!) {
    addSqueak(input: { params: { content: $content, userId: $userId } }) {
      squeak {
        content
        user {
          id
          username
          isAdmin
        }
      }
    }
  }
`;
