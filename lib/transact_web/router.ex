defmodule TransactWeb.Router do
  use TransactWeb, :router

  forward "/graph", Absinthe.Plug,
    schema: TransactWeb.GraphQL.Schema,
    json_codec: Jason

  forward "/graphiql", Absinthe.Plug.GraphiQL,
    schema: TransactWeb.GraphQL.Schema,
    json_codec: Jason,
    interface: :simple
end
