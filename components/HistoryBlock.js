import React from 'react';
import { View, Text, Image } from 'react-native';

export default class HistoryBlock extends React.Component {
	render() {
		const { name, sum } = this.props;
		const viewStyle = {
			flexDirection: 'row',
			marginBottom: 20,
		};
		const textDataStyle = {
			fontWeight: '700',
			fontSize: 13,
			lineHeight: 16,
			color: '#FFF',
			textAlign: 'left',
		};
		const textSumStyle = {
			fontSize: 13,
			fontWeight: '700',
			lineHeight: 16,
			color: '#A1D3A2',
			textAlign: 'center',
		};
		const textCashStyle = {
			fontSize: 13,
			fontWeight: '700',
			lineHeight: 16,
			color: '#FF3358',
			textAlign: 'left',
		};
		return (
			<View style={viewStyle}>
				<View style={{ flex: 1, height: 'auto' }}>
					<Text style={textDataStyle}>{name}</Text>
				</View>
				<View style={{ flex: 1, height: 'auto' }}>
					<Text style={textSumStyle}>{sum}</Text>
				</View>
				<View style={{ flex: 1, height: 'auto' }}>
					<Text style={textDataStyle}>Выигрыш:</Text>
					<Text style={textCashStyle}>1500 рублей</Text>
				</View>
			</View>
		);
	}
}
