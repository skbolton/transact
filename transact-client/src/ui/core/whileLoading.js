import React from 'react'
import { branch, renderComponent } from 'recompose'
import { BeatLoader } from 'react-spinners'

const style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const Loading = () => (
  <div style={style}>
    <BeatLoader color="#6C54B8"/>
  </div>
)

export const whileLoading = (propName = 'data') =>
  branch(
    props => props[propName] && props[propName].loading,
    renderComponent(Loading)
  )