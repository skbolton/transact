defmodule TransactWeb.GraphQL.CategoryMutation do
  use Absinthe.Schema.Notation
  alias Transact.Ledger

  object :category_mutations do
    @desc "Adds a category"
    field :add_category, type: :category do
      arg(:name, non_null(:string))

      resolve(fn _, args, _ -> Ledger.add_category(args) end)
    end
  end
end
