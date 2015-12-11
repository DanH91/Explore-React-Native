import React from 'react-native';

var {
    Text,
    StyleSheet,
    TouchableHighlight
} = React;

export default React.createClass({
    render: function(){
	return (
		<TouchableHighlight
	    style={styles.button}
	    underlayColor={'gray'}
	    onPress={this.props.onPress}
		>
		<Text style={styles.buttonText}>{this.props.text}</Text>
		</TouchableHighlight>
	);
    }
});

var styles = StyleSheet.create({
    buttton: {
	justifyContent: 'center',
	alignItems: 'center',
	borderWidth: 1,
	borderRadius: 5,
	padding: 5,
	borderColor: 'black',
	marginTop: 10
    },
    buttonText: {
	flex: 1,
	alignSelf: 'center',
	fontSize: 20
    }
});
