import React from "react"
import { Mutation } from "react-apollo"
import { Title, Field, Label, Control, Input, Button } from "bloomer"
import Category from "@engine/category"

class AddCategory extends React.Component {
  state = { newCategoryName: "" }

  handleNameChange = e => this.setState({ newCategoryName: e.target.value })
  cancel = () => this.props.history.push("/")

  render() {
    const { newCategoryName } = this.state
    return (
      <Mutation
        mutation={Category.mutations.addCategory}
        update={(cache, { data: addCategory }) => {
          const { categories } = cache.readQuery({
            query: Category.queries.categories
          })

          const newCategories = categories
            ? [...categories, addCategory]
            : [addCategory]
          cache.writeQuery({
            query: Category.queries.categories,
            data: { categories: newCategories }
          })
        }}
      >
        {addCategory => (
          <div className="side-drawer">
            <Title>New Category</Title>
            <form
              onSubmit={e => {
                e.preventDefault()
                addCategory({
                  variables: {
                    name: newCategoryName
                  }
                })
                this.props.history.push("/")
              }}
            >
              <Field>
                <Label>New Category Name</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="name"
                    value={newCategoryName}
                    onChange={this.handleNameChange}
                  />
                </Control>
              </Field>
              <Field isGrouped>
                <Control>
                  <Button
                    disabled={!newCategoryName}
                    type="submit"
                    isColor={newCategoryName ? "primary" : ""}
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

export default AddCategory
