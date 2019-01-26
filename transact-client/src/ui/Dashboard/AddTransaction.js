import React from "react"
import { Mutation } from "react-apollo"
import { Title, Field, Label, Control, Input, Button } from "bloomer"
import CategoryList from "./CategoryList"
import Transaction from "@engine/transaction"

class AddTransaction extends React.Component {
  state = {
    selectedCategory: null,
    amount: 0,
    canSubmit: false
  }

  selectCategory = catId =>
    this.setState({
      selectedCategory: catId,
      canSubmit: !!this.state.amount
    })

  handleAmountChange = event =>
    this.setState({
      amount: event.target.value,
      canSubmit: !!this.state.selectedCategory
    })

  cancel = () => this.props.history.push("/")

  render() {
    const { canSubmit, amount, selectedCategory } = this.state
    return (
      <Mutation
        mutation={Transaction.mutations.addTransaction}
        update={(cache, { data: { addTransaction } }) => {
          const { transactions } = cache.readQuery({
            query: Transaction.queries.transactions
          })
          const newTransactions = [...transactions, addTransaction]
          cache.writeQuery({
            query: Transaction.queries.transactions,
            data: { transactions: newTransactions }
          })
        }}
      >
        {addTransaction => (
          <div className="side-drawer">
            <Title>New Transaction</Title>
            <form
              onSubmit={e => {
                e.preventDefault()
                addTransaction({
                  variables: {
                    amount: parseFloat(amount),
                    categoryId: selectedCategory
                  }
                })
                this.props.history.push("/")
              }}
            >
              <Field>
                <Label>Amount</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.handleAmountChange}
                  />
                </Control>
              </Field>
              <CategoryList
                selectedCategory={selectedCategory}
                onCategorySelect={this.selectCategory}
              />
              <Field isGrouped>
                <Control>
                  <Button
                    disabled={!canSubmit}
                    type="submit"
                    isColor={canSubmit ? "primary" : ""}
                  >
                    Add
                  </Button>
                </Control>
                <Control>
                  <Button onClick={this.cancel} isColor="text">
                    Cancel
                  </Button>
                </Control>
              </Field>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default AddTransaction
