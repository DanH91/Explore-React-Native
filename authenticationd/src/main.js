import React from 'react-native';
import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Tweets from './components/tweets/tweets';
var {
    StyleSheet,
    Navigator
} = React;

var ROUTES = {
    signin: Signin,
    signup: Signup,
    tweets: Tweets
};

export default React.createClass({
    componentWillMount: function(){
	Parse.initialize("yours", "yours");
    },
    renderScene: function(route, navigator){
	var Component = ROUTES[route.name];
	return <Component route={route} navigator={navigator}/>;
    },
    render: function(){
	return (
		<Navigator
	    style={styles.container}
	    initialRoute={{name: 'signin'}}
	    renderScene={this.renderScene}
	    configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
		/>
	);
    }
});


var styles = StyleSheet.create({
    container:{
	flex: 1
    }
});
