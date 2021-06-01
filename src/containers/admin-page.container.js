import { connect } from 'react-redux'
import AdminPage from 'components/admin-page/admin-page.component'
import { getUser, resetUser } from 'redux/user/user.actions'
import { getProducts } from 'redux/products/products.actions'
import { withRouter } from "react-router";


const mapStateToProps = state => ({
  user: state.UserReducer,
  product: state.ProductsReducer,
})

const mapDispatchToProps = dispatch => (
  {
    getUser: (username) => dispatch(getUser(username)),
    resetUser: () => dispatch(resetUser()),
    getProducts: () => dispatch(getProducts()),
  }
)

export const AdminPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));