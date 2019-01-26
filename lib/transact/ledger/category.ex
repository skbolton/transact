defmodule Transact.Ledger.Category do
  import Ecto.Changeset
  use Ecto.Schema

  schema "categories" do
    field :name, :string

    timestamps()
  end

  def changeset(category, params \\ %{}) do
    category
    |> cast(params, [:name])
    |> validate_required([:name])
    |> validate_length(:name, min: 3, max: 20)
  end
end
