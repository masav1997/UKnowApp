import React from 'react';
import { Image } from 'react-native';

export default class BackButton extends React.Component {
	render() {
		const { onPress } = this.props;
		const logoStyle = {
			top: 22,
			height: 25,
			width: 26,
		};
		return <Image source={require('../assets/icons/back.png')} style={logoStyle} />;
	}
}
