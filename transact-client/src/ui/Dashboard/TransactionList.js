import React from "react"
import { compose } from "recompose"
import { graphql } from "react-apollo"
import { whileLoading } from "@core/whileLoading"
import TransactionItem from "./TransactionItem"
import Transaction from "@engine/transaction"

const TransactionList = ({ data }) => {
  return (
    <div>
      {data.transactions.map(trans => (
        <TransactionItem key={trans.id} {...trans} />
      ))}
    </div>
  )
}

export default compose(
  graphql(Transaction.queries.transactions),
  whileLoading()
)(TransactionList)
