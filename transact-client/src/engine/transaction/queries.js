import gql from 'graphql-tag'

export const transactions = gql`
  query transactions {
    transactions {
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
