defmodule TransactWeb.GraphQL.TransactionQuery do
  use Absinthe.Schema.Notation
  alias Transact.Ledger

  object :transaction_queries do
    @desc "All the transactions in ascending order"
    field :transactions, list_of(:transaction) do
      resolve fn (_, _, _) ->
        {:ok, Ledger.list_transactions()}
      end
    end
  end
end
