import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

export default class FondsBlock extends React.Component {
	render() {
		const { name, image, data, onPress } = this.props;

		return (
			<AppConsumer>
				{appConsumer1 => (
					<TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
						<View
							style={{
								borderColor: appConsumer1.theme.colors.border,
								borderWidth: 5,
								height: 'auto',
								width: 'auto',
								borderBottomLeftRadius: 16,
								borderTopRightRadius: 16,
								borderTopLeftRadius: 16,
								marginBottom: 35,
								marginLeft: 15,
								paddingLeft: 15,
								paddingRight: 15,
								paddingBottom: 25,
							}}
						>
							<Image source={image} style={{ width: 30, height: 30, top: 10, marginRight: 10 }} />
							<Text
								style={{
									fontWeight: '600',
									fontSize: 16,
									color: '#FFF',
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
