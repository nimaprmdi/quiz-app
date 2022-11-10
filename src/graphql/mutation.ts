import { gql } from "@apollo/client";

const SEND_TIME = gql`
  mutation sendTime($timeName: String!, $timeDuration: String!, $categorySlug: String!) {
    createTime(
      data: {
        timeName: $timeName
        timeDuration: $timeDuration
        category: { connect: { Category: { categorySlug: $categorySlug } } }
      }
    ) {
      timeDate
      timeDuration
      timeName
    }
  }
`;

const SEND_T = gql`
  mutation setTime(
    $timeName: String!
    $timeDuration: Float!
    $timeDate: Date
    $timeTotalQuestions: Float!
    $timeCorrectAnswers: Float!
    $categorySlug: String
  ) {
    createTime(
      data: {
        timeName: $timeName
        timeDuration: $timeDuration
        timeDate: $timeDate
        timeTotalQuestions: $timeTotalQuestions
        timeCorrectAnswers: $timeCorrectAnswers
        category: { connect: { Category: { categorySlug: $categorySlug } } }
      }
    ) {
      timeDuration
      timeName
      timeDate
      timeTotalQuestions
      timeCorrectAnswers
    }
  }
`;

export { SEND_TIME, SEND_T };
