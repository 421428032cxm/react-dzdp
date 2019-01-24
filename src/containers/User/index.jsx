import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class User extends Component {
    render() {
        return (
            <div>
                User
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin() {
            dispatch(actionCreators.update())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);