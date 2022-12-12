import { gql, useQuery } from "@apollo/client";

const GET_SQUEAKS = gql`
  query AllSqueaks {
    allSqueaks {
      id
      nuts
      content
      reports
      approved
      user {
        id
        username
      }
    }
  }
`;

export const GetSqueaks = (userID) => {
  const { error, data, loading, refetch } = useQuery(GET_SQUEAKS);

  return {
    error,
    data,
    loading,
    refetch
  };
};