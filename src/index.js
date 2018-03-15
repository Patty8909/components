import React from 'react'
import { render } from 'react-dom'

const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
];

const App = () => (
  <div className="App">
    <SearchBar />
    <ProductTable products={products} />
  </div>
)

const SearchBar = () => {
    return (
        <form className = "form">
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      ); 
}

const ProductCategoryRow = ({category}) => {
    return (
      <tr className="tr-category">
        <th colSpan="2">{category}</th>
      </tr>
      );
}

const ProductRow = ({product}) => {
    const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>
    return (
      <tr className="tr-product">
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
      );  
}

const ProductTable = ({products}) => {
    const rows = [];
    let lastCategory = null;
    //Creando la categoria 
    products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table className = "table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

render(
    <App/>
    , document.getElementById('root'));
