import { connect } from 'react-redux'
import LoginPanel from 'components/login-panel/login-panel.component'
import { getUser, resetUser } from 'redux/user/user.actions'
import { withRouter } from "react-router";

const mapStateToProps = state => ({
  user: state.UserReducer
})

const mapDispatchToProps = dispatch => (
  {
    getUser: (username) => dispatch(getUser(username)),
    resetUser: () => dispatch(resetUser()),
  }
)

export const LoginPanelContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPanel));