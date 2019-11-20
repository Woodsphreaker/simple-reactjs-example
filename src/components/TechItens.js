import React from 'react'
import PropTypes from 'prop-types'

const TechItens = ({tech, onDelete}) => {  
  return (
    <li>
      <span>{tech}</span>
      <button onClick={onDelete}> X </button>
    </li> 
  )
}

TechItens.defaultProps = {
  tech: 'Oculto',
  onDelete: ''
}

TechItens.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}


export default TechItens