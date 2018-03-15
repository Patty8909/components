import React from 'react'
import PropTypes from 'prop-types'

const ProductCategoryRow = ({category}) => {
    return (
      <tr className="tr-category">
        <th colSpan="2">{category}</th>
      </tr>
      );
}

ProductCategoryRow.propTypes = {
    category: PropTypes.string.isRequired
}

export default ProductCategoryRow