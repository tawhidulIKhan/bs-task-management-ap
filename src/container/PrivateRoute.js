import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import endpoints from '../config/endpoints';
import { isAuthenticated } from '../store/session/actions'

function PrivateRoute({children, isAuthenticated}) {
  if(!isAuthenticated){
    return <Navigate to={endpoints.LOGIN} replace />;
  }
  return children;
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(PrivateRoute);
