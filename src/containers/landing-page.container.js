import { connect } from 'react-redux'
import { LandingPage } from 'components/landing-page/landing-page.component'
import { withRouter } from "react-router";


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export const LandingPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));