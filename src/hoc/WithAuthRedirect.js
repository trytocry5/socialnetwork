import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/Login"} />  
            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    
    return ConnectedRedirectComponent;
}