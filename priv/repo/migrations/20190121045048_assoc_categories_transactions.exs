defmodule Transact.Repo.Migrations.AssocCategoriesTransactions do
  use Ecto.Migration

  def change do
    alter table(:transactions) do
      add :category_id, references(:categories, on_delete: :nilify_all)
    end
  end
end
