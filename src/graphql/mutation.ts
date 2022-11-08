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
  mutation steTime($timeName: String!, $timeDuration: Float!, $timeDate: Date) {
    createTime(data: { timeName: $timeName, timeDuration: $timeDuration, timeDate: $timeDate }) {
      timeDuration
      timeName
      timeDate
    }
  }
`;

export { SEND_TIME, SEND_T };
