import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>ProductList</h2>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    )
  }
}
