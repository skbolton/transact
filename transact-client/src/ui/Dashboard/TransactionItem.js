import React from 'react'
import { Box, Icon, Tag, Level, LevelLeft, LevelRight, LevelItem } from 'bloomer'
import { format } from 'date-fns'

export default ({ amount, category, transactionDate }) => (
  <Box>
    <Level>
      <LevelLeft>
        <LevelItem>
          <div>
            <p className="has-text-weight-bold">
              ${amount} { !category ? <span className="has-text-danger is-size-7 is-uppercase"> - Needs category</span> : ''}
            </p>
            <p className="is-size-7">
              {format(transactionDate, 'M/D/YY')}
            </p>
          </div>
        </LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem>
           {
             !category
               ? <Tag><Icon className="eva eva-pricetags-outline"></Icon>Categorize</Tag>
               : <Tag isColor="link">{category.name}</Tag>
           }
        </LevelItem>
      </LevelRight>
    </Level>
  </Box>
)