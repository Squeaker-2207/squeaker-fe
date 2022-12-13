import { gql } from "@apollo/client";

export const ADD_REPORT = gql`
  mutation AddReport($id: ID!, $report: Boolean!) {
    updateSqueak(input: { id: $id, report: $report}) {
      squeak {
        content
        reports
      }
    }
  }
`;
