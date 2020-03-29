import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

export default class WinBlock extends React.Component {
	render() {
		const { name, image, data, onPress } = this.props;
		return (
			<AppConsumer>
				{appConsumer1 => (
					<TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
						<View
							style={{
								backgroundColor: appConsumer1.theme.colors.card,
								height: 100,
								width: 155,
								borderBottomLeftRadius: 16,
								borderTopRightRadius: 16,
								borderTopLeftRadius: 16,
								marginBottom: 35,
								marginLeft: 15,
								paddingLeft: 15,
								paddingRight: 15,
							}}
						>
							<Image source={image} style={{ width: 30, height: 30, top: 10, marginRight: 10, tintColor:appConsumer1.theme.colors.text,}} />
							<Text
								style={{
									fontWeight: '600',
									fontSize: 16,
									color: appConsumer1.theme.colors.text,
									fontWeight: '500',
									textAlign: 'left',
									top: 15,
								}}
							>
								{name}
							</Text>
							<Text
								style={{
									fontWeight: '500',
									fontSize: 13,
									color: '#898F97',
									fontWeight: '500',
									textAlign: 'left',
									top: 15,
								}}
							>
								{data}
							</Text>
						</View>
					</TouchableOpacity>
				)}
			</AppConsumer>
		);
	}
}
