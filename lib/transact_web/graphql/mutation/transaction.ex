defmodule TransactWeb.GraphQL.TransactionMutation do
  use Absinthe.Schema.Notation
  alias Transact.Ledger

  object :transaction_mutations do

    @desc "Adds a transaction"
    field :add_transaction, type: :transaction do
      arg :amount, non_null(:float)
      arg :category_id, :id

      resolve fn(_, args, _) -> Ledger.add_transaction(args) end
    end
  end
end
