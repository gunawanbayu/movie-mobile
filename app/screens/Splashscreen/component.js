import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Image, Text } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('MyTabs');
    }, 3000);
  };


  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <Text style={styles.logoStyle}>Movie Room</Text>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object
};

Component.defaultProps = {
  navigation: {}
};
