import { gql, useQuery } from "@apollo/client";

// fetch users
const GET_USER = gql`
  query Users($username: String!) {
    users(username: $username) {
      username
      id
      is_admin
    }
  }
`;



export const GetUser = (username) => {
  const { error, data, loading } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  return {
    data,
    error,
    loading,
  };
};

// const GET_CHARACTER = gql`
//   query GetCharacter($id: ID!) {
//     character(id: $id) {
//         name
//         id
//         image
//         episode {
//           name
//           episode
//       }
//     }
//   }
// `;

// export const useCharacter = (id) => {
//   const { error, data, loading } = useQuery(GET_CHARACTER, {
//     variables: {
//       id
//     },
//   });

//   return {
//     data,
//     error,
//     loading,
//   };
// };

// fetch squeaks

// fetch BadWords API
