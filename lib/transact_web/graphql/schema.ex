defmodule TransactWeb.GraphQL.Schema do
  use Absinthe.Schema

  # Types
  import_types(Absinthe.Type.Custom)
  import_types(TransactWeb.GraphQL.{CategoryType, TransactionType})
  # Root Query Types
  import_types(TransactWeb.GraphQL.{TransactionQuery, CategoryQuery})
  # Root Mutation Types
  import_types(TransactWeb.GraphQL.{TransactionMutation, CategoryMutation})

  @desc "The entry point fields that are queryable"
  query do
    import_fields(:category_queries)
    import_fields(:transaction_queries)
  end

  mutation do
    import_fields(:transaction_mutations)
    import_fields(:category_mutations)
  end
end
