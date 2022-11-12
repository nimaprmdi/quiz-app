import { gql } from "@apollo/client";

const GET_GLOBAL_BY_CAT = gql`
  query getGlobalCat($slug: String!) {
    category(where: { categorySlug: $slug }) {
      global {
        ... on Global {
          id
          globalDescription
          globalIconText
          globalTitle
        }
      }
      categorySlug
    }
  }
`;

const GET_CATEGORY = gql`
  query {
    categories {
      id
      title
      categorySlug
      categoryIcon {
        url
      }
    }
  }
`;

const GET_QUESTIONS = gql`
  query getQuestion($slug: String!) {
    questions(where: { category: { categorySlug: $slug } }) {
      questionSlug
      questionTitle
      id
      answers {
        answerDescription
        answerIsTrue
        answerTitle
        id
      }
    }
  }
`;

const GET_CATEGORY_TEXT_ICON = gql`
  query getCategoryIconText($categorySlug: String) {
    globals(where: { category: { categorySlug: $categorySlug } }) {
      globalIconText
    }
  }
`;

const GET_TIMES_STATS = gql`
  query getTimes($categorySlug: String, $timeName: String) {
    categories(where: { categorySlug: $categorySlug }) {
      times(where: { timeName: $timeName }) {
        timeName
        timeDate
        timeDuration
        timeCorrectAnswers
      }
    }
  }
`;

export { GET_CATEGORY, GET_GLOBAL_BY_CAT, GET_QUESTIONS, GET_CATEGORY_TEXT_ICON, GET_TIMES_STATS };
