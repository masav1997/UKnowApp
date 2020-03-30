import React from 'react';
import { Image } from 'react-native';

export default class FindIcon extends React.Component {
	render() {
		const logoStyle = {
			top: 17,
			height: 23,
			width: 23,
		};
		return <Image source={require('../assets/icons/find.png')} style={logoStyle} />;
	}
}
