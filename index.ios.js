'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
} = React;

var BookBrowser = React.createClass({
  render: function() {
    return (
      <View>
      </View>
    );
  }
});

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
