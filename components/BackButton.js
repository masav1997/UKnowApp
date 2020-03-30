import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class BackButton extends React.Component {
	render() {
		const { onPress } = this.props;
		const logoStyle = {
			top: 22,
			height: 25,
			width: 26,
		};
		return <TouchableOpacity onPress={onPress}><Image source={require('../assets/icons/back.png')} style={logoStyle} /></TouchableOpacity>;
	}
}
