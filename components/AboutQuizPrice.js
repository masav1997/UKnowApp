import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity  } from 'react-native';
const { width } = Dimensions.get('window');

export default class AboutQuizPrice extends React.Component {
	render() {
		const { onPress } = this.props;
		return (
			<TouchableOpacity
				style={{
					backgroundColor: '#19232f',
					height: 'auto',
					width: width - 30,
					borderBottomLeftRadius: 16,
					borderTopRightRadius: 16,
					borderTopLeftRadius: 16,
					marginBottom: 15,
					marginRight: 10,
					marginLeft: 15,
					paddingLeft: 15,
					paddingRight: 15,
				}}
				onPress={onPress}
			>
				<View style={{ flexDirection: 'row', marginTop: 15 }}>
					<View style={{ flex: 1, height: 28 }}>
						<Image
							source={require('../assets/icons/price.png')}
							style={{ width: 20, height: 20, alignSelf: 'center', top: 3 }}
						/>
					</View>
					<View style={{ flex: 9, height: 28 }}>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 23,
								lineHeight: 28,
								fontWeight: 'bold',
								color: '#FF3358',
								textAlign: 'left',
							}}
						>
							250 руб.
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, height: 'auto', marginTop: 5 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: '#FFFFFF',
								textAlign: 'left',
								marginBottom: 10,
							}}
						>
							Викторина на знание истории отечетсвенного автопрома
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, height: 'auto', marginBottom: 20 }}>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 13,
								lineHeight: 16,
								fontWeight: '500',
								color: '#898F97',
								textAlign: 'left',
							}}
						>
							Призовой фонд:
						</Text>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 13,
								lineHeight: 16,
								fontWeight: '700',
								color: '#FEAC5E',
								textAlign: 'left',
							}}
						>
							25 000 руб
						</Text>
					</View>
					<View style={{ flex: 1, height: 28 }}>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 13,
								lineHeight: 16,
								fontWeight: '500',
								color: '#898F97',
								textAlign: 'left',
							}}
						>
							Участников:
						</Text>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 13,
								lineHeight: 16,
								fontWeight: '700',
								color: '#FFF',
								textAlign: 'left',
							}}
						>
							200 из 250
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
