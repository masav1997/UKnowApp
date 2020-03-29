import React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import NameBlock from '../components/NameBlock';

const { width } = Dimensions.get('window');

export default class AboutQuizBlock extends React.Component {
	render() {
    const { title, descr1, descr2, descr3, descr4, onPress } = this.props;

		const viewStyle = {
			backgroundColor: '#19232f',
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
		};

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

		const textStyle3 = {
			fontStyle: 'normal',
			fontSize: 13,
			lineHeight: 16,
			fontWeight: '700',
			color: '#FFF',
			textAlign: 'left',
		};

		const textStyle4 = {
			fontStyle: 'normal',
			fontSize: 20,
			fontWeight: 'bold',
			color: '#FFF',
			textAlign: 'left',
			marginBottom: 10
		};

		return (
			<TouchableOpacity style={viewStyle} onPress={onPress}>
				<NameBlock name="Imam Farrhouk" image={require('../assets/icons/avatar.png')} />
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, height: 'auto', marginTop: 15 }}>
						<Text style={textStyle4}>{title}</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, height: 'auto', marginBottom: 20 }}>
						<Text style={textStyle}>{descr1}</Text>
						<Text style={textStyle1}>{descr2}</Text>
					</View>
					<View style={{ flex: 1, height: 28 }}>
						<Text style={textStyle2}>{descr3}</Text>
						<Text style={textStyle3}>{descr4}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
