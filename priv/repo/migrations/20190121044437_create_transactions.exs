defmodule Transact.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :amount, :float, null: false

      timestamps(inserted_at: :transaction_date)
    end
  end
end
