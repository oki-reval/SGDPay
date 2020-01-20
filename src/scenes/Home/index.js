import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <Text>{props.user.name}</Text>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Home);