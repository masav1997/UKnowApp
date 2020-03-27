import React from 'react';
import { View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const { width } = Dimensions.get('window');

export default class SearchBlock extends React.Component {
	render() {
		const { percent, image, title } = this.props;

		const logoStyle = {
			top: 20,
			height: 18.76,
			width: 99,
			alignSelf: 'center',
		};
		return (
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: '#060A10',
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
				<View style={{ flex: 1, alignContent: 'flex-end' }}>
					<Image
						source={require('../assets/icons/filter.png')}
						style={{ width: 20, height: 20, bottom: 10, tintColor:'#898F97'}}
					/>
				</View>
			</View>
		);
	}
}
