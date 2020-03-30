import React from 'react';
import { View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

const { width } = Dimensions.get('window');

export default class SearchBlock extends React.Component {
	render() {
		const { onPress } = this.props;
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: appConsumer1.theme.colors.card,
							height: 50,
							width: width - 30,
							borderRadius: 15,
							marginBottom: 15,
							marginRight: 10,
							marginLeft: 15,
							paddingLeft: 15,
							paddingRight: 15,
							paddingTop: 15,
							alignItems: 'center',
						}}
					>
						<View style={{ flex: 1 }}>
							<Image
								source={require('../assets/icons/search.png')}
								style={{ width: 20, height: 20, bottom: 10 }}
							/>
						</View>
						<View style={{ flex: 10 }}>
							<TextInput style={{ bottom: 10, marginLeft: 10, marginRight: 10, color: '#FFF' }} />
						</View>
						<TouchableOpacity style={{ flex: 1, alignContent: 'flex-end' }} onPress={onPress}>
							<Image
								source={require('../assets/icons/filter.png')}
								style={{ width: 20, height: 20, bottom: 10, tintColor: '#898F97' }}
							/>
						</TouchableOpacity>
					</View>
				)}
			</AppConsumer>
		);
	}
}
