import React from "react"
import PropTypes from "prop-types"
import "./dropdown.scss"

const Dropdown = ({ options, onSelect }) => (
  <select
    className="dropdown"
    defaultValue=""
    onChange={e => onSelect(e.target.value)}
  >
    {options.map((option, idx) => (
      <option value={option.value} disabled={option.disabled} key={idx}>
        {option.label}
      </option>
    ))}
  </select>
)

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onSelect: PropTypes.func,
}

Dropdown.defaultProps = {
  options: [{ value: "", label: "" }],
  onSelect: () => {},
}

export default Dropdown
