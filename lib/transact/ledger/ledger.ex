defmodule Transact.Ledger do
  import Ecto.Query
  alias Transact.Repo
  alias Transact.Ledger.{Category, Transaction}

  def list_transactions do
    from(Transaction, order_by: [asc: :transaction_date])
    |> preload(:category)
    |> Repo.all()
  end

  def add_transaction(transaction_params) do
    {:ok, transaction} =
      Transaction.creation_changeset(transaction_params)
      |> Repo.insert()

    {:ok, Repo.preload(transaction, [:category])}
  end

  def update_transaction(transaction_id, updates) do
    %Transaction{} = transaction = Repo.get(Transaction, transaction_id)

    Transaction.changeset(transaction, updates)
    |> Repo.update()
  end

  def list_categories do
    Repo.all(Category)
  end

  def add_category(category_params) do
    %Category{}
    |> Category.changeset(category_params)
    |> Repo.insert()
  end
end
