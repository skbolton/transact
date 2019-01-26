defmodule Transact.Repo do
  use Ecto.Repo,
    otp_app: :transact,
    adapter: Ecto.Adapters.Postgres
end
