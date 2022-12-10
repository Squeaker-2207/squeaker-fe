import { useQuery, gql } from "@apollo/client";

const GET_REPORTED = gql`
  query getReported {
    reportedSqueaks {
      id
      content
      reports
      nuts
      approved
      score{
        metric
        probability
      }
      user {
        id
        username
      }
      createdAt
    }
  }
`;

export const GetReported = () => {
  const { data, error, loading } = useQuery(GET_REPORTED);

  return {
    data,
    error,
    loading,
  };
};
