import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { options, onPress } = this.props;
		const { value } = this.state;

		return (
			<View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									style={styles.circle}
									onPress={() => {
										this.setState({
											value: item.key,
										});
									}}
									onPressIn={onPress}
								>
									{value === item.key && <View style={styles.checkedCircle} />}
								</TouchableOpacity>
							</View>
							<View style={{ flex: 7 }}>
								<Text style={{ fontSize: 16, color: '#fff' }}>{item.text}</Text>
							</View>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},

	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#FF3358',
		alignItems: 'center',
		justifyContent: 'center',
	},

	checkedCircle: {
		width: 8,
		height: 8,
		borderRadius: 7,
		backgroundColor: '#FF3358',
	},
});
