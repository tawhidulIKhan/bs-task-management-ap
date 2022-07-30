import React from 'react';
import { connect } from 'react-redux';
import { getSessionUser, resetSession } from '../../store/session/actions';
import './MenuProfile.scss';

function MenuProfile(props) {
  const { user, resetSessionAction } = props;
  const logout = () => {
    resetSessionAction();
  };

  return (
    <div className="profile">
      <div>
        Hello, <span className="profile__name">{user.username}</span>
      </div>
      <button onClick={logout} className="profile__logout" to="logout">
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: getSessionUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetSessionAction: () => dispatch(resetSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProfile);
