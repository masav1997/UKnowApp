import React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import NameBlock from '../components/NameBlock';
import { AppConsumer } from '../AppContextProvider';

const { width } = Dimensions.get('window');

export default class AboutQuizBlock extends React.Component {
	render() {
		const { title, descr1, descr2, descr3, descr4, onPress } = this.props;

		const textStyle = {
			fontStyle: 'normal',
			fontSize: 13,
			lineHeight: 16,
			fontWeight: '500',
			color: '#898F97',
			textAlign: 'left',
		};

		const textStyle1 = {
			fontStyle: 'normal',
			fontSize: 13,
			lineHeight: 16,
			fontWeight: '700',
			color: '#FEAC5E',
			textAlign: 'left',
		};

		const textStyle2 = {
			fontStyle: 'normal',
			fontSize: 13,
			lineHeight: 16,
			fontWeight: '500',
			color: '#898F97',
			textAlign: 'left',
		};

		return (
			<AppConsumer>
				{appConsumer1 => (
					<TouchableOpacity
						style={{
							backgroundColor: appConsumer1.theme.colors.card,
							height: 'auto',
							width: width - 30,
							borderBottomLeftRadius: 16,
							borderTopRightRadius: 16,
							borderTopLeftRadius: 16,
							marginTop: 15,
							marginRight: 10,
							marginLeft: 15,
							paddingLeft: 15,
							paddingRight: 15,
						}}
						onPress={onPress}
					>
						<NameBlock name="Imam Farrhouk" image={require('../assets/icons/avatar.png')} />
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, height: 'auto', marginTop: 15 }}>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 20,
										fontWeight: 'bold',
										color: appConsumer1.theme.colors.text,
										textAlign: 'left',
										marginBottom: 10,
									}}
								>
									{title}
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, height: 'auto', marginBottom: 20 }}>
								<Text style={textStyle}>{descr1}</Text>
								<Text style={textStyle1}>{descr2}</Text>
							</View>
							<View style={{ flex: 1, height: 28 }}>
								<Text style={textStyle2}>{descr3}</Text>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 16,
										fontWeight: '700',
										color: appConsumer1.theme.colors.text,
										textAlign: 'left',
									}}
								>
									{descr4}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			</AppConsumer>
		);
	}
}
