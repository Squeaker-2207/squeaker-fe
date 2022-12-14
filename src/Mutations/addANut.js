import { gql } from "@apollo/client";

export const ADD_NUT = gql`
  mutation ($id: ID!, $nut: Boolean!) {
    updateSqueak(input: { id: $id, nut: $nut }) {
      squeak {
        content
        nuts
      }
    }
  }
`;
