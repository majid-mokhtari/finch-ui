import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {View, StyleSheet} from 'react-native';
import Welcome from './../components/Welcome';

class WelcomeContainer extends Component {

    render(){
        return (
            <View style={styles.authView}>
                <Welcome {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeContainer)