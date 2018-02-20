import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { View, StyleSheet, Text } from 'react-native';
import Login from './../components/Login';
import Signup from './../components/Signup';
import * as types from '../constants';
import { Actions } from 'react-native-router-flux';
import { Spinner } from 'native-base';

class AuthContainer extends Component {

    componentWillReceiveProps(nextProps){
        const { viewState } = nextProps.userReducer;
        switch(viewState){
            case types.LOGIN_USER_SUCCESS:
                Actions.home()
                break;
        }
    }
    render(){
        const { data, userReducer } = this.props;
        const { isFetching, error_message } = userReducer;
        if(isFetching){
            return (
                <Spinner 
                    style={styles.spinner} 
                    color="red" 
                />
            )
        }
        const content = data === "login" ? (
            <Login {...this.props} />
        ) : (
            <Signup {...this.props} />
        )
        return (
            <View style={styles.authView}>
                <View style={styles.errView}>
                    <Text style={styles.errText}>{error_message}</Text>
                </View>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinner: {
      justifyContent: 'center',
      flex: 1
    },
    authView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    errView: {
        alignItems: "center",
        marginTop: 20
    },
    errText: {
        color: "#FF7575"
    }
  });

  
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