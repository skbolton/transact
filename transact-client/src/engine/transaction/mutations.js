import gql from 'graphql-tag'

export const addTransaction = gql`
  mutation addTransaction($amount: Float!, $categoryId: ID!) {
    addTransaction(amount: $amount, categoryId: $categoryId) {
      id
      amount
      transactionDate
      category {
        id
        name
      }
    }
  }
`
