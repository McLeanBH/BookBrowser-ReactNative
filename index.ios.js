'use strict';

var React = require('react-native'); 
var {
  AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} = React;

var BookBrowser = React.createClass({
  render: function() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Math.random() > 0.5 ? '#F85931' : '#4CD964',
      }}>
        <Text style={styles.headline}>
          BookBrowser
        </Text>
        <Text style={styles.label}>
          Find books containing:
        </Text>
        <TextInput 
        placeholder="Search!"
        returnKeyType="search"
        enablesReturnKeyAutomatically={true}
        onEndEditing={ event => console.log(event.nativeEvent.text)}
        style={styles.textInput}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F85931',
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 28,
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFF',
    marginBottom: 8,
  },
  textInput: {
    borderColor: '#8e8e93',
    backgroundColor: '#fff',
    height: 40,
    borderWidth: 0.5,
    marginLeft: 60,
    marginRight: 60,
    padding: 8,
  }
});

AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
