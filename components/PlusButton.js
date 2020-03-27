import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

export default class PlusButton extends React.Component {
	render() {
		const logoStyle = {
			top: 20,
			height: 18.76,
			width: 99,
			alignSelf: 'center',
		};
		return (
			<TouchableOpacity
				style={{
					backgroundColor: '#FF3358',
					height: 40,
					width: 40,
					borderRadius: 16,
					marginBottom: 15,
					marginRight: 10,
					marginLeft: 15,
					paddingLeft: 15,
					paddingRight: 15,
					paddingTop: 15,
					alignItems: 'center',
				}}
			>
				<Image source={require('../assets/icons/plus.png')} style={{ width: 16, height: 16, bottom: 3 }} />
			</TouchableOpacity>
		);
	}
}
