import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query AllUsers {
    fetchUsers {
      id
      username
      isAdmin
      createdAt
      updatedAt
    }
  }
`;

export const GetUsers = () => {
  const { data, error, loading, refetch } = useQuery(GET_USERS);

  return { data: data?.fetchUsers, error, loading, refetch };
};
