import gql from 'graphql-tag'

export const addCategory = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      id
      name
    }
  }
`
