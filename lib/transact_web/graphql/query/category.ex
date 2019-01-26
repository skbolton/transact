defmodule TransactWeb.GraphQL.CategoryQuery do
  use Absinthe.Schema.Notation
  alias Transact.Ledger

  object :category_queries do

    @desc "All of the categories"
    field :categories, list_of(:category) do
      resolve fn(_, _, _) ->
        {:ok, Ledger.list_categories()}
      end
    end
  end
end
