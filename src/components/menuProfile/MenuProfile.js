import React from 'react'
import { connect } from 'react-redux';
import { getSessionUser, resetSession } from '../../store/session/actions';

function MenuProfile(props) {
    const { user, resetSessionAction } = props;
    const logout = () => {
        resetSessionAction();
    }

    return (
        <div>
            <div className='header__profile'>
                <div>Hello, <span className='header__profile__name'>{user.username}</span></div>
                <button onClick={logout} className='header__profile__logout' to="logout">Logout</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: getSessionUser(state)
})

const mapDispatchToProps = (dispatch) => ({
    resetSessionAction: () => dispatch(resetSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProfile)
