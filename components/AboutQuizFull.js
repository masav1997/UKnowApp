import React from 'react';
import { View, Dimensions, ScrollView, Image, Text } from 'react-native';
import NameBlock from './NameBlock';

const { width } = Dimensions.get('window');

export default class AboutQuizFull extends React.Component {
	render() {
		const logoStyle = {
			top: 20,
			height: 18.76,
			width: 99,
			alignSelf: 'center',
		};
		return (
			<View
				style={{
					backgroundColor: '#19232f',
					height: 'auto',
					width: width - 30,
					borderBottomLeftRadius: 16,
					borderTopRightRadius: 16,
					borderTopLeftRadius: 16,
					marginRight: 10,
					marginLeft: 15,
					paddingLeft: 15,
					paddingRight: 15,
				}}
			>
				<NameBlock name="Imam Farrhouk" image={require('../assets/icons/avatar.png')} />
				<View style={{ flexDirection: 'row', marginTop: 20 }}>
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
					<View style={{ flex: 1, height: 'auto', marginTop: 10 }}>
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
							25 000 руб + подарки
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
							Начнется через:
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
							15 ч 15 мин
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
