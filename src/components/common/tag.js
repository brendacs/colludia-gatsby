// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './tag.scss'

const Tag = ({ name, color }) => {
  return (
    <p class={`tag ${color}`}>
      {name}
    </p>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

Tag.defaultProps = {
  name: '',
  color: ''
}

export default Tag
