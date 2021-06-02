
import { connect } from 'react-redux'
import ProductTable from 'components/product-table/product-table.component'
import { getProducts, dispatchDeleteProduct } from 'redux/products/products.actions'
import { withRouter } from "react-router";


const mapStateToProps = state => ({
  product: state.ProductsReducer,
})

const mapDispatchToProps = dispatch => (
  {
    getProducts: () => dispatch(getProducts()),
    deleteProduct: (id) => dispatchDeleteProduct(dispatch, id),
  }
)

export const ProductTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductTable));