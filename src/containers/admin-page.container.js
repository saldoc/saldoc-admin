
import { connect } from 'react-redux'
import { AdminPage } from 'components/admin-page/admin-page.component'
import { getUser, resetUser } from 'redux/user/user.actions'
import { withRouter } from "react-router";


const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => (
  {
    getUser: (username) => dispatch(getUser(username)),
    resetUser: () => dispatch(resetUser()),
  }
)

export const AdminPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));