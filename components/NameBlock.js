import React from 'react';
import { View, Text, Image } from 'react-native';

export default class NameBlock extends React.Component {
	render() {
		const { name, image } = this.props;
		const textTitleStyle = {
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: 32,
			lineHeight: 39,
			color: '#FFFFFF',
			marginBottom: 0,
		};
		const descriptionStyle = {
			marginRight: 15,
			marginBottom: 30,
		};
		const descriptionTextStyle = {
			fontStyle: 'normal',
			fontSize: 16,
			lineHeight: 20,
			marginTop: 5,
			fontWeight: '500',
			color: '#898F97',
		};
		const descriptionTextLinkStyle = {
			fontStyle: 'normal',
			fontSize: 16,
			lineHeight: 20,
			textAlign: 'center',
			fontWeight: '500',
			color: '#FF3358',
			marginTop: 5,
		};
		const descriptionTextBoldStyle = {
			fontStyle: 'normal',
			fontSize: 18,
			lineHeight: 20,
			textAlign: 'center',
			fontWeight: '500',
			color: '#FFF',
			marginTop: 5,
		};
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
