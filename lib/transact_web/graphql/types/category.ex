defmodule TransactWeb.GraphQL.CategoryType do
  use Absinthe.Schema.Notation

  @desc "A category that a transaction can be tagged with"
  object :category do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :inserted_at, non_null(:naive_datetime)
  end
end
