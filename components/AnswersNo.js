import React from 'react';
import { View, Text, Image } from 'react-native';

export default class AnswersBlock1 extends React.Component {
	render() {
		const { id, question, uAnswer, answer } = this.props;
		const viewStyle = {
			flexDirection: 'row',
		};
		const textNumberStyle = {
			fontWeight: 'bold',
			fontSize: 20,
			color: '#898F97',
			textAlign: 'left',
			top: 12,
		};
		const textStyle = {
			fontWeight: '500',
			lineHeight: 16,
			fontSize: 11,
			color: '#898F97',
			textAlign: 'left',
		};
		const textBoldStyle = {
			fontWeight: 'bold',
			lineHeight: 16,
			fontSize: 13,
			color: '#898F97',
			textAlign: 'left',
		};
		const textGreenStyle = {
			fontWeight: 'bold',
			lineHeight: 16,
			fontSize: 13,
			color: '#A1D3A2',
			textAlign: 'left',
		};
		const imageStyle = {
			width: 15,
			height: 15,
			alignSelf: 'flex-start',
			top: 10,
		};
		const textQuestionStyle = {
			fontSize: 13,
			lineHeight: 16,
			marginTop: 8,
			fontWeight: '700',
			color: '#FFF',
			textAlign: 'left',
		};
		return (
			<View>
				<View style={viewStyle}>
					<View style={{ flex: 0.8 }}>
						<Text style={textNumberStyle}>{id}</Text>
					</View>
					<View style={{ flex: 8 }}>
						<Text style={textQuestionStyle}>{question}</Text>
					</View>
				</View>
				<View style={viewStyle}>
					<View style={{ flex: 0.8 }}>
						<Image source={require('../assets/icons/no.png')} style={imageStyle}></Image>
					</View>
					<View style={{ flex: 8 }}>
						<Text style={textStyle}>Ваш ответ:</Text>
						<Text style={textBoldStyle}>{uAnswer}</Text>
					</View>
				</View>
				<View style={viewStyle}>
					<View style={{ flex: 0.8 }} />
					<View style={{ flex: 8 }}>
						<Text style={textStyle}>Правильный ответ:</Text>
						<Text style={textGreenStyle}>{answer}</Text>
					</View>
				</View>
			</View>
		);
	}
}
