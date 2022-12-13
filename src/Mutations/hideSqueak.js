import { gql } from "@apollo/client";

export const HIDE_SQUEAK = gql`
mutation hideSqueak ($id: ID!, $approved: Boolean!){
    updateSqueak(input: { id: $id, approved: $approved }) {
      squeak {
        id
        content
        approved
        reports
      }
    }
  }
  `