import { gql, useQuery } from "@apollo/client";

const GET_SQUEAKS = gql`
  query AllSqueaks {
    allSqueaks {
      userID
      squeakID
      nuts
      content
      reported
      approved
    }
  }
`;

export const GetSqueaks = (userID) => {
  const { error, data, loading } = useQuery(GET_SQUEAKS);

  return {
    error,
    data,
    loading,
  };
};
