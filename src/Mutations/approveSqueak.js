import { gql } from "@apollo/client";

export const APPROVE_SQUEAK = gql`
mutation approveSqueak ($id: ID!, $approved: Boolean!) {
    updateSqueak(input: {id: $id, approved: $approved }) {
      squeak {
        id
        content
        approved
        reports
      }
    }
   }
`;