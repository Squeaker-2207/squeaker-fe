import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation($username: String!, $isAdmin: Boolean!) {
    addUser(input: { params: { username: $username, isAdmin: $isAdmin } }) {
      user {
        id
        username
        isAdmin
      }
    }
  }
`
