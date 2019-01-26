defmodule Transact.Ledger.Transaction do
  import Ecto.Changeset
  use Ecto.Schema
  alias Transact.Ledger.Category

  schema "transactions" do
    field :amount, :float
    belongs_to(:category, Category)

    timestamps(inserted_at: :transaction_date)
  end

  def creation_changeset(params \\ %{}) do
    %__MODULE__{}
    |> cast(params, [:amount, :category_id])
    # eventually check that float is correct
    |> validate_required([:amount])
  end

  def changeset(transaction, params \\ %{}) do
    transaction
    |> cast(params, [:amount])
    |> cast_assoc(:category, with: &Category.changeset/2)
  end
end
