import { gql } from "@apollo/client";

export const DELETE_SQUEAK = gql`
  mutation DeleteSqueak($id: ID!) {
    deleteSqueak(input: {id: $id }) {
        squeak {
          id
          content
        }
      }
  }
`;