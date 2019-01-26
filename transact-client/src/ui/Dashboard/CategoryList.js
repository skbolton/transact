import React from 'react'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { whileLoading } from '../core/whileLoading'
import Category from '@engine/category'
import { Field, Control, Label, Tag } from 'bloomer'

const CategoryList = ({ data, selectedCategory, onCategorySelect }) => (
  <Field>
    <Label>Category</Label>
    <Control isExpanded>
      <div className='tags'>
        {data.categories.map(category => (
          <Tag
            onClick={onCategorySelect.bind(null, category.id)}
            key={category.id}
            isColor={selectedCategory === category.id ? 'link' : ''}
          >
            {category.name}
          </Tag>
        ))}
      </div>
    </Control>
  </Field>
)

export default compose(
  graphql(Category.queries.categories),
  whileLoading()
)(CategoryList)
