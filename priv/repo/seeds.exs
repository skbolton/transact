alias Transact.Ledger.{Category, Transaction}
alias Transact.Repo

Repo.insert!(%Category{name: "Marketing"})
Repo.insert!(%Category{name: "Sales"})

Repo.insert!(%Transaction{amount: 50.75, category_id: 1})
Repo.insert!(%Transaction{amount: 10.15, category_id: 2})
