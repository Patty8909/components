import React from 'react'
import PropTypes from 'prop-types'

const ProductRow = ({product}) => {
    const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>
    return (
      <tr className="tr-product">
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
      );  
}

ProductRow.propTypes = {
    product: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default ProductRow