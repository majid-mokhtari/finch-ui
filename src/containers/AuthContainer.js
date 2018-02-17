import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {View} from 'react-native';
import Welcome from './../components/Welcome';

class AuthContainer extends Component {
    render(){
        console.log(this.props)
        return (
            <View style={{flex: 1}}>
                <Welcome {...this.props} />
            </View>
        )
    }
}

const mapStateToProps = ({ userReducer }) => {
    return {
        userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)