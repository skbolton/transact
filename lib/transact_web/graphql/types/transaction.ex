defmodule TransactWeb.GraphQL.TransactionType do
  use Absinthe.Schema.Notation

  @desc "A transaction"
  object :transaction do
    field :id, non_null(:id)
    field :amount, non_null(:float)
    field :transaction_date, non_null(:naive_datetime)
    field :updated_at, non_null(:naive_datetime)
    field :category, :category
  end
end
