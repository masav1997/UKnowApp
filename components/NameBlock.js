import React from 'react';
import { View, Text, Image } from 'react-native';

export default class NameBlock extends React.Component {
	render() {
		const { name, image } = this.props;
		return (
			<View
				style={{
          flexDirection: 'row',
          marginRight:15
				}}
			>
				<Image
					source={image}
					style={{ width: 30, height: 30, top: 10, marginRight: 10 }}
				/>
				<Text
					style={{
						fontWeight: '600',
						fontSize: 13,
						color: '#FFF',
						fontWeight: '800',
						textAlign: 'left',
						top: 16,
					}}
				>
					{name}
				</Text>
			</View>
		);
	}
}
