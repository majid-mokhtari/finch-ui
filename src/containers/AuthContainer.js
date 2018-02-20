import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {View, StyleSheet} from 'react-native';
import Welcome from './../components/Welcome';
import * as types from '../constants';
import { Actions } from 'react-native-router-flux';
import { Spinner } from 'native-base';

class AuthContainer extends Component {

    componentWillReceiveProps(nextProps){
        const { userReducer } = nextProps;
        switch(userReducer.viewState){
            case types.LOGIN_USER_SUCCESS:
                Actions.home()
                break;
            case types.LOGIN_USER_ERROR:
                Actions.login(nextProps)
                break;
        }
    }

    render(){
        const { userReducer } = this.props;
        const { isFetching } = userReducer;
        if(isFetching){
            return (
                <Spinner 
                    style={styles.spinner} 
                    color="red" 
                />
            )
        }
        return (
            <View style={styles.authView}>
                <Welcome {...this.props} />
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
        backgroundColor: '#fff'
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