import { gql, useQuery } from "@apollo/client";

// fetch user
const GET_USER = gql`
  query FetchUser($id: String!) {
    fetchUser(id: $id) {
      id
      username
      isAdmin
    }
  }
`;

export const GetUser = (id) => {
  const { data, error, loading, refetch } = useQuery(GET_USER, {
    variables: {
      id,
    },
  });

  return {
    data: data?.fetchUser,
    error,
    loading,
    refetch,
  };
};
